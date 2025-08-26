<script setup lang="ts">
import { computed, watch } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';
import LanguageSwitcher from '@/components/custom/inputs/Switchers/LanguageSwitcher.vue';
import { useLayout } from '@/layouts/composables/layout';
import Menubar from 'primevue/menubar';

const { t } = useI18n();
const page = usePage();
const { setDarkMode } = useLayout();

watch(
    () => (page.props as any)?.theme?.dark,
    // (isDarkMode) => setDarkMode(isDarkMode ?? false),
    () => setDarkMode(true),
    { immediate: true }
);

// Current route name shared from server for robust active highlighting
const currentRouteName = computed(() => (page.props as any)?.currentRoute);

// Key to force Menubar re-render on route change
const menuKey = computed(() => (page as any).url);


const menuItems = computed(() => [
    {
        key: 'home',
        routeName: 'home',
        label: t('menu.home'),
        command: () => router.get(route('home')),
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
]);

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
            <div>
            </div>

            <div class="flex menubar">
                <Menubar :key="menuKey" :model="menuItems" :pt="pt" :breakpoint="'275px'" />
            </div>

            <div class="flex items-center gap-2">
                <LanguageSwitcher />
            </div>
        </div>

        <div class="relative z-10 w-full px-4 pb-8 sm:px-6">
            <slot />
        </div>
    </div>
</template>

<style>
@media (max-width: 380px) {
    .menubar {
        font-size: x-small;
    }
}
</style>
