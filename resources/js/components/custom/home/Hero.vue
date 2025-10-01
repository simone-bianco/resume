<script setup lang="ts">
import Card from 'primevue/card';
import Image from 'primevue/image';
import Button from 'primevue/button';
import { useI18n } from 'vue-i18n';
import { Divider } from 'primevue';

const { t } = useI18n();

const heroCardAnimation = {
    enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000',
};

const heroImageAnimation = {
    enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000',
};
</script>

<template>
    <section class="flex items-center justify-center px-4 py-8 sm:py-16 md:py-24">

        <div class="flex flex-col md:flex-row items-center w-full max-w-sm md:max-w-5xl">
            <div class="hero-image-container w-full md:w-6/12 md:order-2 md:-ml-12">
                <div class="relative w-full h-64 md:h-[500px] rounded-2xl shadow-xl">
                    <Image
                        v-animateonscroll="heroImageAnimation"
                        src="https://www.dnafactory.it/images/team/simonebig_1f997d40e8.png"
                        :alt="t('hero.imageAlt')"
                        image-class="hero-image"
                    />

                </div>
            </div>
            <Card v-animateonscroll="heroCardAnimation"
                  class="hero-card sb-fancy-card relative z-10 w-11/12 md:w-7/12 rounded-2xl bg-surface-800 -mt-16 md:mt-0 md:order-1">
                <template #content>
                    <div class="hero-card-content p-6 md:p-8">
                        <h1 class="hero-title text-2xl sm:text-3xl lg:text-4xl font-bold mb-1">
                            {{ t('hero.name') }}
                        </h1>
                        <p class="text-md sm:text-lg text-primary-400 font-medium mb-4">
                            {{ t('hero.title') }}
                        </p>
                        <Divider />
                        <p class="text-sm sm:text-base max-w-lg mb-6 text-[var(--text-color)]">
                            {{ t('hero.bio') }}
                        </p>
                        <div class="flex items-center gap-3">
                            <a href="https://github.com/simone-bianco" target="_blank" rel="noopener noreferrer">
                                <Button icon="pi pi-github" severity="secondary" text rounded
                                        :aria-label="t('hero.githubAriaLabel')" />
                            </a>
                            <a href="https://www.linkedin.com/in/simone-b-bb6761200/" target="_blank" rel="noopener noreferrer">
                                <Button icon="pi pi-linkedin" severity="secondary" text rounded
                                        :aria-label="t('hero.linkedinAriaLabel')" />
                            </a>
                            <a href="mailto:simone.bianco.sweng@gmail.com">
                                <Button :label="t('hero.contactLabel')" icon="pi pi-envelope" severity="primary"
                                        size="small" />
                            </a>
                        </div>
                    </div>
                </template>
            </Card>
        </div>
    </section>
</template>

<style scoped>
.hero-card,
.hero-image {
    transition: transform var(--hover-transition-duration) cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow var(--hover-transition-duration) cubic-bezier(0.25, 0.8, 0.25, 1);
}

.hero-card { color: var(--surface-0); }

.hero-image-container {
    perspective: 1500px;
    transform-style: preserve-3d;
}

.hero-image-container :deep(.hero-image) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    border-radius: 1rem;
    transform-origin: center top;
}


.hero-image-container:hover>div {
    box-shadow: 0 0 50px 20px rgba(var(--primary-color-rgb), 0.3);
    transition: box-shadow var(--hover-transition-duration) ease-out;
}

@media (max-width: 389px) {
    .hero-card-content { padding: 0.75rem; }
    .hero-title { font-size: 1.25rem; line-height: 1.75rem; }
    .hero-image-container :deep(.hero-image) { object-position: 50% 15%; }
}
</style>
