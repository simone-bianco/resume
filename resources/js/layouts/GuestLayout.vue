<script setup lang="ts">
import { computed, watch, ref } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3'; // Importa il router di Inertia
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
    (isDarkMode) => setDarkMode(true),
    { immediate: true }
);

// Definiamo le voci di menu come una proprietà "computed"
// così si aggiornano automaticamente al cambio di lingua.
const menuItems = computed(() => [
    {
        label: t('menu.home'),
        command: () => router.get(route('home')),
    },
    {
        label: t('menu.projects'),
        command: () => router.get(route('projects')),
    },
    {
        label: t('menu.resume'),
        command: () => router.get(route('resume')),
    },
]);

// Opzionale: Stile per integrare la Menubar con Tailwind CSS (Pass Through)
// Questo rimuove lo stile di default di PrimeVue per un look più pulito.
const pt = {
    root: { class: 'dark:bg-transparent dark:border-none p-0' },
    menu: { class: 'flex gap-2' },
    action: {
        class: 'text-surface-400 hover:text-surface-100 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium'
    },
    // Rimuoviamo l'icona del sottomenu se non ci sono sottomenu
    submenuIcon: { class: 'hidden' },
};
</script>

<template>
    <div class="relative flex min-h-screen flex-col bg-surface-950">
        <div class="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 sm:px-6 bg-surface-950/80 backdrop-blur-sm border-surface-800">
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
