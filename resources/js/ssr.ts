import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createSSRApp, DefineComponent, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createI18n } from 'vue-i18n';

// Import i18n messages
import messages from './i18n/messages';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        title: (title) => `${title} - ${appName}`,
        resolve: (name) =>
            resolvePageComponent(
                `./Pages/${name}.vue`,
                import.meta.glob<DefineComponent>('./Pages/**/*.vue'),
            ),
        setup({ App, props, plugin }) {
            // Create i18n instance with initial configuration
            const i18n = createI18n({
                legacy: false, // Use Composition API
                locale: page.props.locale || 'en', // Use locale from page props or default to 'en'
                fallbackLocale: 'en', // Set fallback locale
                messages
            });

            const app = createSSRApp({ render: () => h(App, props) });

            // Use plugins
            app.use(plugin);
            app.use(ZiggyVue, {
                ...page.props.ziggy,
                location: new URL(page.props.ziggy.location),
            });
            app.use(i18n);

            // Set i18n locale from page props if available
            if (page.props.locale) {
                i18n.global.locale.value = page.props.locale;
            }

            return app;
        },
    }),
);
