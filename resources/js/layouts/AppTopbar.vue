<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import { useLayout } from '@/layouts/composables/layout';
import LanguageSwitcher from '@/components/custom/inputs/Switchers/LanguageSwitcher.vue';
import Logo from '@/components/custom/Logo.vue';
import UserMenu from '@/components/custom/menu/UserMenu.vue';

const { toggleMenu } = useLayout();
</script>

<template>
    <div class="layout-topbar flex align-items-center w-full border-b-1 border-b-surface-500">

        <div class="flex align-items-center gap-2">
            <button class="layout-menu-button layout-topbar-action" @click="toggleMenu">
                <i class="pi pi-bars"></i>
            </button>
            <Link :href="route('home')" class="layout-topbar-logo">
                <Logo width="65px" />
            </Link>
        </div>

        <div class="flex align-items-center gap-3 ml-auto">
<!--            <ThemeSwitcher />-->
            <LanguageSwitcher />

            <UserMenu />
        </div>
    </div>
</template>

<style scoped>
.layout-topbar-logo {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
}
</style>
