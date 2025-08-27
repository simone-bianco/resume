<script setup lang="ts">
import { computed, ref } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';
import LanguageSwitcher from '@/components/custom/inputs/Switchers/LanguageSwitcher.vue';
import Menubar from 'primevue/menubar';
import Drawer from 'primevue/drawer';
import Chat from '@/components/custom/chat/Chat.vue';
import SiteFooter from '@/components/custom/common/SiteFooter.vue';
import { ChatMessage } from '@/types/dto';
import { useHead } from '@unhead/vue';

const page = usePage();

const siteName = (import.meta as any).env?.VITE_APP_NAME || 'Simone Bianco | Backend Software Engineer | Resume';
const scripts: any[] = [];
const analyticsSrc = (import.meta as any).env?.VITE_ANALYTICS_SRC;
const chatSrc = (import.meta as any).env?.VITE_CHAT_WIDGET_SRC;
if (analyticsSrc) {
    scripts.push({ src: analyticsSrc, async: true, tagPosition: 'bodyClose' } as any);
}
if (chatSrc) {
    scripts.push({ src: chatSrc, defer: true, tagPosition: 'bodyClose' } as any);
}


useHead({
    // Global title template as a function to avoid literal placeholders
    titleTemplate: (chunk?: string) => (chunk && String(chunk).trim().length ? `${chunk} · ${siteName}` : siteName),
    // Global assets and meta
    link: [
        { rel: 'manifest', href: '/manifest.json' },
    ],
    meta: [
        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#222222', media: '(prefers-color-scheme: dark)' },
    ],
    // Non-critical scripts loaded at the end of body when configured
    script: scripts,
    // Dynamic classes on <html>
    htmlAttrs: {
        class: {
            dark: true,
        }
    }
});

const { t } = useI18n();

const currentRouteName = computed(() => (page.props as any)?.currentRoute);

const menuKey = computed(() => (page as any).url);

const menuItems = computed(() => [
    {
        key: 'home',
        routeName: 'home',
        label: t('menu.home'),
        command: () => router.get(route('home')),
    },
    {
        key: 'projects',
        routeName: 'projects',
        label: t('menu.projects'),
        command: () => router.get(route('projects')),
    },
    {
        key: 'resume',
        routeName: 'resume',
        label: t('menu.resume'),
        command: () => window.open(route('resume'), '_blank'),
    },
    {
        key: 'thesis',
        routeName: 'thesis',
        label: t('menu.thesis'),
        command: () => window.open(route('thesis'), '_blank'),
    },
    {
        key: 'contact',
        routeName: 'contact',
        label: t('menu.contact'),
        command: () => router.get(route('contact')),
    },
]);

// Drawer visibility
const drawerVisible = ref(false);

// Helper to check active route (reused in Drawer items)
const isRouteActive = (itemRoute?: string) => {
    if (!itemRoute) return false;
    return currentRouteName.value ? currentRouteName.value === itemRoute : route().current(itemRoute);
};

const pt = {
    root: { class: 'dark:bg-transparent dark:border-none p-0' },
    menu: { class: 'flex gap-2' },
    itemContent: { class: 'py-2' },
    action: (options: any) => {
        const itemRoute = options?.item?.routeName;
        const isActive = itemRoute
            ? (currentRouteName.value ? currentRouteName.value === itemRoute : route().current(itemRoute))
            : false;
        const base = 'transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium';
        const state = isActive ? 'text-surface-0 bg-surface-800' : 'text-surface-400 hover:text-surface-100';
        return {
            class: `${base} ${state}`,
            'aria-current': isActive ? 'page' : undefined
        };
    },
    submenuIcon: { class: 'hidden' },
};
</script>

<template>
    <div class="relative flex min-h-screen flex-col bg-surface-950">
        <div class="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-1 sm:px-6 bg-surface-950/80 backdrop-blur-sm border-surface-800">
            <div class="flex items-center">
                <!-- Drawer toggle button (visible on <= 510px) -->
                <button
                    type="button"
                    class="menu-toggle inline-flex items-center justify-center rounded-full p-2 text-surface-200 hover:bg-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    aria-label="Open menu"
                    @click="drawerVisible = true"
                >
                    <span class="pi pi-bars text-lg"></span>
                </button>
            </div>

            <div class="flex menubar">
                <Menubar :key="menuKey" :model="menuItems" :pt="pt" :breakpoint="'275px'" />
            </div>

            <div class="flex items-center w-20 justify-end">
                <LanguageSwitcher />
            </div>
        </div>

        <!-- Drawer for small screens -->
        <Drawer v-model:visible="drawerVisible" position="left" :dismissable="true" :showCloseIcon="true" :blockScroll="true" header="Menu">
            <nav class="mt-2">
                <ul class="flex flex-col gap-2">
                    <li v-for="item in menuItems" :key="item.key">
                        <button
                            type="button"
                            @click="item.command(); drawerVisible = false"
                            :aria-current="isRouteActive(item.routeName) ? 'page' : undefined"
                            :class="[
                                'w-full text-left transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium',
                                isRouteActive(item.routeName) ? 'text-surface-0 bg-surface-800' : 'text-surface-400 hover:text-surface-100'
                            ]"
                        >
                            {{ item.label }}
                        </button>
                    </li>
                </ul>
            </nav>
        </Drawer>

        <div class="relative z-10 w-full flex-grow px-4 pt-16 pb-8 sm:px-6">
            <slot />
        </div>

        <Chat :chatHistory="page.props.chatHistory as ChatMessage[]" class="mb-10" />

        <SiteFooter />
    </div>
</template>

<style>
.menu-toggle { display: none; }

@media (max-width: 510px) {
    .menubar { display: none; }
    .menu-toggle { display: inline-flex; }
}

@media (max-width: 380px) {
    .menubar {
        font-size: x-small;
    }
}
</style>
