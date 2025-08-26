import { watch, onUnmounted, type Ref } from 'vue';

/**
 * @param {Ref<boolean>} isLocked
 */
export function useBodyScrollLock(isLocked: Ref<boolean>) {
    let scrollbarWidth = 0;

    watch(isLocked, (newVal) => {
        const body = document.body;

        if (newVal) {
            scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

            body.style.overflow = 'hidden';
            body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            body.style.overflow = '';
            body.style.paddingRight = '';
        }
    }, { immediate: false });

    onUnmounted(() => {
        if (isLocked.value) {
            const body = document.body;
            body.style.overflow = '';
            body.style.paddingRight = '';
        }
    });
}
