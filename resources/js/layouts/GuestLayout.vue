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

const menuItems = computed(() => [
    {
        label: t('menu.home'),
        command: () => router.get(route('home')),
    },
    {
        label: t('menu.resume'),
        command: () => window.open(route('resume'), '_blank'),
    },
    {
        label: t('menu.thesis'),
        command: () => window.open(route('thesis'), '_blank'),
    },
]);

const pt = {
    root: { class: 'dark:bg-transparent dark:border-none p-0' },
    menu: { class: 'flex gap-2' },
    itemContent: { class: 'py-2' },
    action: {
        class: 'text-surface-400 hover:text-surface-100 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium'
    },
    submenuIcon: { class: 'hidden' },
};
</script>

<template>
    <div class="relative flex min-h-screen flex-col bg-surface-950">
        <div class="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-1 sm:px-6 bg-surface-950/80 backdrop-blur-sm border-surface-800">
            <div>
            </div>

            <div class="hidden sm:flex">
                <Menubar :model="menuItems" :pt="pt" />
            </div>

            <div class="flex items-center gap-2 sm:gap-3">
                <LanguageSwitcher />
            </div>
        </div>

        <div class="relative z-10 w-full px-4 pb-8 sm:px-6">
            <slot />
        </div>
    </div>
</template>
