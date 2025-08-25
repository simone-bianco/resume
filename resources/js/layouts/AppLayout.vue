<script setup lang="ts">
import { useLayout } from '@/layouts/composables/layout';
import { computed, ref, watch, onMounted } from 'vue';
import { usePage } from '@inertiajs/vue3';
import AppFooter from './AppFooter.vue';
import AppSidebar from './AppSidebar.vue';
import AppTopbar from './AppTopbar.vue';
import useAppToast from '@/utils/toast';
import Toast from 'primevue/toast';
import type { CSSProperties } from 'vue';
import backgroundImageUrl from '@/assets/images/layout/background.png';

const { layoutConfig, layoutState, isSidebarActive, setDarkMode } = useLayout();
const page = usePage();
const { toastSuccess, toastError, toastInfo } = useAppToast();

onMounted(() => {
    const flash = page.props.flash;

    if (flash?.success) {
        toastSuccess(flash.success);
    }

    if (flash?.error) {
        toastError(flash.error);
    }

    if (flash?.info) {
        toastInfo(flash.info);
    }
});

// Force dark theme (temporary until multi-theme support). Keep layoutConfig in sync and ensure html has 'dark' class.
onMounted(() => {
    setDarkMode(true);
});

const outsideClickListener = ref(null);

watch(isSidebarActive, (newVal) => {
    if (newVal) {
        bindOutsideClickListener();
    } else {
        unbindOutsideClickListener();
    }
});

const containerClass = computed(() => {
    return {
        'layout-overlay': layoutConfig.menuMode === 'overlay',
        'layout-static': layoutConfig.menuMode === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive,
        'layout-mobile-active': layoutState.staticMenuMobileActive
    };
});

const appBackgroundStyle = computed<CSSProperties>(() => ({
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh'
}));

function bindOutsideClickListener() {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event) => {
            if (isOutsideClicked(event)) {
                layoutState.overlayMenuActive = false;
                layoutState.staticMenuMobileActive = false;
                layoutState.menuHoverActive = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
}

function unbindOutsideClickListener() {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener);
        outsideClickListener.value = null;
    }
}

function isOutsideClicked(event) {
    const sidebarEl = document.querySelector('.layout-sidebar');
    const topbarEl = document.querySelector('.layout-menu-button');

    return !(sidebarEl.isSameNode(event.target) || sidebarEl.contains(event.target) || topbarEl.isSameNode(event.target) || topbarEl.contains(event.target));
}
</script>

<template>
    <div class="layout-wrapper" :class="containerClass" :style="appBackgroundStyle">
        <app-topbar></app-topbar>
        <app-sidebar></app-sidebar>
        <div class="layout-main-container surface-ground">
            <div class="layout-main py-4 lg:py-6">
                <div class="mx-auto w-full max-w-screen-xl px-3 sm:px-4 lg:px-6">
                    <slot></slot>
                </div>
            </div>
            <app-footer></app-footer>
        </div>
        <div class="layout-mask animate-fadein"></div>
    </div>
    <Toast position="bottom-right" />
</template>
