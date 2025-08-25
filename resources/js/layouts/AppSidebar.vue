<script setup lang="ts">
import AppMenu from './AppMenu.vue';
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import tenantAwareRoute from '@/utils/tenantAwareRoute';
import { route } from 'ziggy-js';

const page = usePage();
const { t } = useI18n();

const isAuthenticated = computed(() => Boolean(page.props.auth?.user));
const isLandlord = computed(() => Boolean(page.props.isLandlord));

// CSRF token for POST via Inertia Link (avoids 419)
computed(() => {
    const el = (typeof document !== 'undefined') ? document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement | null : null;
    return el?.content ?? '';
});
</script>

<template>
    <div class="layout-sidebar">
        <app-menu></app-menu>

        <div v-if="isAuthenticated" class="mt-auto px-3 pb-3">
            <hr class="mb-3 border-neutral-200 dark:border-neutral-800" />
            <Link
                :href="isLandlord ? route('logout') : tenantAwareRoute('tenant.logout')"
                method="post"
                as="button"
                class="p-button p-button-text w-full flex items-center gap-2 justify-start"
            >
                <i class="pi pi-sign-out" />
                <span>{{ t('Log Out') }}</span>
            </Link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
