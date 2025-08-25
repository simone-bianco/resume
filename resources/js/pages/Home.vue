<script setup lang="ts">
import GuestLayout from '@/layouts/GuestLayout.vue';
import Card from 'primevue/card';
import Image from 'primevue/image';
import Button from 'primevue/button';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const heroCardAnimation = {
    enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000',
    leaveClass: 'animate-leave fade-out-0'
};

const heroImageAnimation = {
    enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000',
    leaveClass: 'animate-leave fade-out-0'
};
</script>

<template>
    <GuestLayout>
        <div class="flex items-center justify-center min-h-screen bg-surface-50 dark:bg-surface-900 px-4 py-8">

            <div class="flex flex-col md:flex-row items-center w-full max-w-sm md:max-w-5xl">

                <div class="w-full md:w-6/12 md:order-2 md:-ml-12">
                    <div class="relative w-full h-64 md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            v-animateonscroll="heroImageAnimation"
                            src="https://www.dnafactory.it/images/team/simonebig_1f997d40e8.png"
                            :alt="t('hero.imageAlt')"
                            class="absolute inset-0 w-full h-full object-cover"
                            image-class="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <Card v-animateonscroll="heroCardAnimation"
                    class="relative z-10 w-11/12 md:w-7/12 shadow-2xl rounded-2xl bg-surface-0 dark:bg-surface-800 -mt-16 md:mt-0 md:order-1"
                >
                    <template #content>
                        <div class="p-6 md:p-8">
                            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-surface-900 dark:text-surface-0 mb-1">
                                {{ t('hero.name') }}
                            </h1>
                            <p class="text-md sm:text-lg text-primary-600 dark:text-primary-400 font-medium mb-4">
                                {{ t('hero.title') }}
                            </p>
                            <p class="text-sm sm:text-base text-surface-600 dark:text-surface-300 max-w-lg mb-6">
                                {{ t('hero.bio') }}
                            </p>
                            <div class="flex items-center gap-3">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Button icon="pi pi-github" severity="secondary" text rounded :aria-label="t('hero.githubAriaLabel')" />
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <Button icon="pi pi-linkedin" severity="secondary" text rounded :aria-label="t('hero.linkedinAriaLabel')" />
                                </a>
                                <a href="mailto:email@esempio.com">
                                    <Button :label="t('hero.contactLabel')" icon="pi pi-envelope" severity="primary" size="small" />
                                </a>
                            </div>
                        </div>
                    </template>
                </Card>

            </div>
        </div>
    </GuestLayout>
</template>

<style>
/* PrimeVue Image component fix per object-cover */
/* A volte la classe passata direttamente non basta, questo forza lo stile corretto */
.p-image-preview-container > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
