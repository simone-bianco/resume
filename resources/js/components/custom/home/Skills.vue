<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import Card from 'primevue/card';

const { t } = useI18n();

const skillAnimations = [
    { enterClass: 'animate-enter fade-in-10 spin-in-[-45deg] slide-in-from-t-12 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' },
    { enterClass: 'animate-enter fade-in-10 zoom-in-50 slide-in-from-t-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' },
    { enterClass: 'animate-enter fade-in-10 spin-in-[45deg] slide-in-from-t-16 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' },
    { enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-b-12 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' },
    { enterClass: 'animate-enter fade-in-10 zoom-in-50 slide-in-from-b-20 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' },
    { enterClass: 'animate-enter fade-in-10 spin-in-[-45deg] slide-in-from-b-16 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' },
];

const skillsData = [
    { icon: 'pi pi-code', titleKey: 'skills.languages.title', descriptionKey: 'skills.languages.items' },
    { icon: 'pi pi-server', titleKey: 'skills.frameworks.title', descriptionKey: 'skills.frameworks.items' },
    { icon: 'pi pi-database', titleKey: 'skills.databases.title', descriptionKey: 'skills.databases.items' },
    { icon: 'pi pi-box', titleKey: 'skills.tools.title', descriptionKey: 'skills.tools.items' },
    { icon: 'pi pi-sitemap', titleKey: 'skills.architectures.title', descriptionKey: 'skills.architectures.items' },
    { icon: 'pi pi-globe', titleKey: 'skills.locales.title', descriptionKey: 'skills.locales.items' }
];
</script>

<template>
    <section class="px-4 py-16 sm:py-24">
        <div class="container mx-auto max-w-6xl">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                <Card v-for="(skill, index) in skillsData" :key="skill.titleKey"
                      class="skill-card" v-animateonscroll="skillAnimations[index]">
                    <template #content>
                        <div class="skill-icon-wrapper">
                            <i :class="skill.icon"></i>
                        </div>
                        <h3 class="skill-title">{{ t(skill.titleKey) }}</h3>
                        <p class="skill-description">{{ t(skill.descriptionKey) }}</p>
                    </template>
                </Card>

            </div>
        </div>
    </section>
</template>

<style scoped>
.skill-card {
    width: 320px;
    height: 240px;
    border-radius: 1rem;
    text-align: center;
    border: 1px solid var(--surface-700);
    transition: transform 300ms ease, box-shadow 300ms ease;
}

.skill-card :deep(.p-card-body),
.skill-card :deep(.p-card-content) {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
}

.skill-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(var(--primary-color-rgb), 0.1);
}

.skill-icon-wrapper {
    margin-bottom: 1rem;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--surface-900);
    color: var(--primary-400);
    flex-shrink: 0;
}

.skill-icon-wrapper i {
    font-size: 1.75rem;
}

.skill-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--surface-0);
    margin-bottom: 0.5rem;
}

.skill-description {
    color: var(--surface-400);
    font-size: 0.95rem;
    line-height: 1.6;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
