<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { Divider, Card, Timeline } from 'primevue';

const { t } = useI18n();

const experienceAnimation = {
    enterClass: 'animate-enter fade-in-10 zoom-in-50 slide-in-from-l-20 animate-duration-1000' };

const experiences = ref([
    {
        titleKey: 'experience.dnafactory.title',
        companyKey: 'experience.dnafactory.company',
        descriptionKeys: [
            'experience.dnafactory.desc1', 'experience.dnafactory.desc2', 'experience.dnafactory.desc3',
            'experience.dnafactory.desc4', 'experience.dnafactory.desc5', 'experience.dnafactory.desc6',
        ],
        icon: 'pi pi-briefcase',
        color: '#FCC018'
    },
    {
        titleKey: 'experience.masters.title',
        companyKey: 'experience.masters.institution',
        descriptionKeys: [
            'experience.masters.desc1',
            'experience.masters.desc2',
        ],
        icon: 'pi pi-graduation-cap',
        color: '#4CAF50'
    },
    {
        titleKey: 'experience.freelance.title',
        companyKey: 'experience.freelance.company',
        descriptionKeys: [ 'experience.freelance.desc1' ],
        icon: 'pi pi-user',
        color: '#182bfc'
    },
    {
        titleKey: 'experience.diploma.title',
        companyKey: 'experience.diploma.institution',
        descriptionKeys: [
            'experience.diploma.desc1',
            'experience.diploma.desc2',
        ],
        icon: 'pi pi-book',
        color: '#FF9800'
    }
]);
</script>

<template>
    <section class="px-4 py-16 sm:py-24">
        <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-[var(--text-color)] mb-4">{{ t('experience.sectionTitle') }}</h2>
            </div>

            <Timeline :value="experiences" align="alternate" class="customized-timeline timeline-view">
                <template #marker="slotProps">
                    <span class="marker-icon" :style="{ backgroundColor: slotProps.item.color }">
                        <i :class="slotProps.item.icon"></i>
                    </span>
                </template>

                <template #content="slotProps">
                    <Card class="experience-card mt-5" v-animateonscroll="experienceAnimation">
                        <template #title>
                            {{ t(slotProps.item.titleKey) }}
                        </template>
                        <template #subtitle>
                            <div class="experience-subtitle">
                                <span class="company">{{ t(slotProps.item.companyKey) }}</span>
                            </div>
                            <Divider />
                        </template>
                        <template #content>
                            <ul class="description-list">
                                <li v-for="descKey in slotProps.item.descriptionKeys" :key="descKey">
                                    {{ t(descKey) }}
                                </li>
                            </ul>
                        </template>
                    </Card>
                </template>
            </Timeline>
            <div class="cards-only">
                <div v-for="(exp, idx) in experiences" :key="idx">
                    <Card class="experience-card mt-5" v-animateonscroll="experienceAnimation">
                        <template #title>
                            {{ t(exp.titleKey) }}
                        </template>
                        <template #subtitle>
                            <div class="experience-subtitle">
                                <span class="company">{{ t(exp.companyKey) }}</span>
                                <span class="separator"> | </span>
                            </div>
                            <Divider />
                        </template>
                        <template #content>
                            <ul class="description-list">
                                <li v-for="descKey in exp.descriptionKeys" :key="descKey">
                                    {{ t(descKey) }}
                                </li>
                            </ul>
                        </template>
                    </Card>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.experience-card {
    position: relative;
    border-radius: 1rem;
    border: 1px solid var(--surface-700);
    overflow: hidden;
    color: var(--text-color);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 400ms cubic-bezier(0.25, 0.8, 0.25, 1),
    border-color 400ms ease;
}


.experience-card:hover {
    box-shadow: 0 15px 40px rgba(var(--primary-color-rgb), 0.2);
    border-color: var(--primary-color);
}


.experience-card :deep(.p-card-body) {
    position: relative;
    z-index: 2;
}

.description-list {
    list-style: none;
    padding-left: 1.5rem;
    margin: 0;
    text-align: left;
    color: var(--text-color);
}

.description-list li {
    margin-bottom: 0.5rem;
}

.marker-icon {
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border-radius: 50%;
    z-index: 1;
}

@media screen and (max-width: 960px) {
    :deep(.customized-timeline .p-timeline-event:nth-child(even)) {
        flex-direction: row !important;
    }
    :deep(.customized-timeline .p-timeline-event-content) {
        text-align: left !important;
    }
    :deep(.customized-timeline .p-timeline-event-opposite) {
        flex: 0;
    }
}
.experience-card :deep(.p-card-subtitle) {
    color: var(--text-color);
}

.description-list li { position: relative; padding-left: 0.75rem; }
.description-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.34em;
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background-color: var(--primary-color);
    opacity: 0.9;
}

.cards-only { display: none; }

@media screen and (max-width: 410px) {
    :deep(.timeline-view) { display: none !important; }
    .cards-only { display: block; }
}

@media screen and (max-width: 460px) {
    .experience-card :deep(.p-card-body) {
        padding: 0.9rem 1rem;
    }
    .experience-card :deep(.p-card-title) {
        font-size: 1.05rem;
    }
    .experience-card :deep(.p-card-subtitle),
    .experience-card .experience-subtitle {
        font-size: 0.9rem;
    }
    .experience-card .description-list {
        padding-left: 0.6rem;
    }
    .experience-card .description-list li {
        font-size: 0.92rem;
        line-height: 1.35;
        padding-left: 0.5rem;
    }
}
</style>
