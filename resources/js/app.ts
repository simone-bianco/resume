import '../css/app.css';
import './bootstrap.ts';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, DefineComponent, h } from 'vue';
import { ZiggyVue } from 'ziggy-js';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { createI18n } from 'vue-i18n';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import StyleClass from 'primevue/styleclass';
import Tooltip from 'primevue/tooltip';
import messages from './i18n/messages';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import preset from '@/theme/preset';

import 'primeicons/primeicons.css';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
import AnimateOnScroll from 'primevue/animateonscroll';
import { definePreset } from '@primeuix/themes';

const i18n = createI18n({
    legacy: false, // Use Composition API
    locale: document.documentElement.lang || 'en', // Use HTML lang attribute or default to 'en'
    fallbackLocale: 'en', // Set fallback locale
    messages
});

const SBPreset = definePreset(Aura, preset);


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });

        // Use plugins
        app.use(plugin);
        app.use(ZiggyVue);
        app.use(PrimeVue, {
            theme: {
                preset: SBPreset,
                ripple: false,
                options: {
                    darkModeSelector: '.dark'
                }
            }
        });
        app.use(ToastService);
        app.use(i18n);
        app.directive('animateonscroll', AnimateOnScroll);
        app.use(autoAnimatePlugin);

        // Set i18n locale from Inertia props if available
        if (props.initialPage.props.locale) {
            i18n.global.locale.value = props.initialPage.props.locale;
        }

        // Register components
        app.component('Toast', Toast);

        // Register directives
        app.directive('styleclass', StyleClass);
        app.directive('tooltip', Tooltip);

        app.mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
