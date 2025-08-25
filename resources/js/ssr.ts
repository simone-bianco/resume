import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createSSRApp, DefineComponent, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import { createI18n } from 'vue-i18n';

// Import i18n messages
import messages from './i18n/messages';

const appName = import.meta.env.VITE_APP_NAME || 'Simone Bianco CV';

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
                locale: ((page.props as any)?.locale as string) || 'en', // Use locale from page props or default to 'en'
                fallbackLocale: 'en', // Set fallback locale
                messages
            });

            const app = createSSRApp({ render: () => h(App, props) });

            // Use plugins
            app.use(plugin);
            const ziggyProps = ((page.props as any)?.ziggy ?? {}) as Record<string, any>;
            const ziggyLocation = typeof ziggyProps.location === 'string' && ziggyProps.location.length > 0
                ? ziggyProps.location
                : 'http://localhost';
            app.use(ZiggyVue as any, {
                ...ziggyProps,
                location: new URL(ziggyLocation),
            } as any);
            app.use(i18n);

            // Set i18n locale from page props if available
            const ssrLocale = ((page.props as any)?.locale as string) || '';
            if (ssrLocale) {
                (i18n.global.locale as any).value = ssrLocale;
            }

            return app;
        },
    }),
);
