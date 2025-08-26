import { watch, onUnmounted, type Ref } from 'vue';

/**
 * Un composable Vue 3 per bloccare/sbloccare lo scroll del body.
 * Gestisce anche il layout shift causato dalla scomparsa della scrollbar.
 * @param {Ref<boolean>} isLocked - Una ref booleana che determina se lo scroll è bloccato.
 */
export function useBodyScrollLock(isLocked: Ref<boolean>) {
    let scrollbarWidth = 0;

    // Usiamo watch invece di watchEffect per avere più controllo
    watch(isLocked, (newVal) => {
        const body = document.body;

        if (newVal) {
            // Calcola la larghezza della scrollbar PRIMA di nasconderla
            scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

            // Applica gli stili per bloccare lo scroll
            body.style.overflow = 'hidden';
            body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            // Rimuovi gli stili per ripristinare lo scroll
            body.style.overflow = '';
            body.style.paddingRight = '';
        }
    }, { immediate: false }); // immediate: false per evitare di eseguirlo al mount se non necessario

    // Assicurati di ripristinare lo scroll se il componente che lo ha bloccato viene smontato
    onUnmounted(() => {
        if (isLocked.value) {
            const body = document.body;
            body.style.overflow = '';
            body.style.paddingRight = '';
        }
    });
}
