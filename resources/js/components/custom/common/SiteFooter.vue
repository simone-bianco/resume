<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

const { t } = useI18n();

const isMobileView = ref(false);

const isDialogVisible = ref(false);

const checkScreenWidth = () => {
    isMobileView.value = window.innerWidth <= 840;
};

onMounted(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkScreenWidth);
});
</script>

<template>
    <footer class="mt-8 border-t border-surface-800/60 footer-container">
        <div class="w-full max-w-5xl mx-auto px-4 py-6">
            <div class="footer-layout flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 footer-icons-container">
                <div class="flex items-center gap-2">
                    <a href="https://github.com/simone-bianco" target="_blank" rel="noopener noreferrer" :aria-label="t('hero.githubAriaLabel')">
                        <Button icon="pi pi-github" severity="secondary" text rounded />
                    </a>
                    <a href="https://www.linkedin.com/in/simone-b-bb6761200/" target="_blank" rel="noopener noreferrer" :aria-label="t('hero.linkedinAriaLabel')">
                        <Button icon="pi pi-linkedin" severity="secondary" text rounded />
                    </a>
                    <a href="mailto:simone.bianco.sweng@gmail.com" :aria-label="t('hero.contactLabel')">
                        <Button icon="pi pi-envelope" severity="secondary" text rounded />
                    </a>

                    <Button
                        v-if="isMobileView"
                        icon="pi pi-info-circle"
                        aria-label="Apprendistato"
                        severity="primary"
                        rounded
                        class="pulsing-aura"
                        @click="isDialogVisible = true"
                    />
                </div>

                <div v-if="!isMobileView" class="max-w-md text-sm text-surface-400 flex items-start gap-2">
                    <i class="pi pi-info-circle mt-0.5 text-primary-400/80" aria-hidden="true"></i>
                    <p class="leading-snug">
                        {{ t('hero.apprenticeshipNotice') }}
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <Dialog v-model:visible="isDialogVisible" modal header="Apprendistato" :style="{ width: '25rem' }">
        <p class="m-0">
            {{ t('hero.apprenticeshipNotice') }}
        </p>
    </Dialog>
</template>

<style scoped>
/* Stili precedenti per il layout */
@media (max-width: 1319px) {
    .footer-layout {
        justify-content: flex-start;
    }
}
@media (min-width: 1200px) {
    .footer-layout {
        padding-right: 7rem;
    }
}
@media (max-width: 480px) {
    .footer-container {
        padding-bottom: 120px;
    }
    .footer-icons-container {
        display: flex;
        align-items: center;
        align-content: center;
        text-align: center;
    }
}

/* --- NUOVI STILI PER L'ANIMAZIONE DEL PULSANTE --- */
/* Definiamo l'animazione del "battito" o "aura" */
@keyframes pulse-aura {
    0%, 100% {
        transform: scale(1);
        box-shadow: 0 5px 15px rgba(var(--primary-color-rgb, 34, 211, 238), 0.2);
    }
    50% {
        transform: scale(1.05);
        box-shadow: 0 8px 25px rgba(var(--primary-color-rgb, 34, 211, 238), 0.4);
    }
}

/* Applichiamo l'animazione al nostro pulsante */
.pulsing-aura {
    animation: pulse-aura 2s infinite;
}
</style>
