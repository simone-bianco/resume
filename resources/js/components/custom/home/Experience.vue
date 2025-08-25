<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';

const { t } = useI18n();

const experienceAnimation = {
    enterClass: 'animate-enter fade-in-10 zoom-in-50 slide-in-from-l-20 animate-duration-1000',
    leaveClass: 'animate-leave fade-out-0'
};

// AGGIORNATO: Aggiunti i dati sulla formazione e ordinati cronologicamente
const experiences = ref([
    {
        titleKey: 'experience.dnafactory.title',
        companyKey: 'experience.dnafactory.company',
        dateKey: 'experience.dnafactory.date',
        descriptionKeys: [
            'experience.dnafactory.desc1', 'experience.dnafactory.desc2', 'experience.dnafactory.desc3',
            'experience.dnafactory.desc4', 'experience.dnafactory.desc5', 'experience.dnafactory.desc6',
            'experience.dnafactory.desc7', 'experience.dnafactory.desc8', 'experience.dnafactory.desc9',
            'experience.dnafactory.desc10', 'experience.dnafactory.desc11', 'experience.dnafactory.desc12',
            'experience.dnafactory.desc13',
        ],
        icon: 'pi pi-briefcase',
        color: 'var(--primary-500)'
    },
    // --- NUOVO BLOCCO: MASTER'S DEGREE ---
    {
        titleKey: 'experience.masters.title',
        companyKey: 'experience.masters.institution',
        dateKey: 'experience.masters.date',
        descriptionKeys: [
            'experience.masters.desc1',
            'experience.masters.desc2',
        ],
        icon: 'pi pi-graduation-cap',
        color: '#4CAF50' // Un colore verde per distinguere la formazione
    },
    {
        titleKey: 'experience.freelance.title',
        companyKey: 'experience.freelance.company',
        dateKey: 'experience.freelance.date',
        descriptionKeys: [ 'experience.freelance.desc1' ],
        icon: 'pi pi-user',
        color: 'var(--surface-500)'
    },
    // --- NUOVO BLOCCO: DIPLOMA ---
    {
        titleKey: 'experience.diploma.title',
        companyKey: 'experience.diploma.institution',
        dateKey: 'experience.diploma.date',
        descriptionKeys: [
            'experience.diploma.desc1',
            'experience.diploma.desc2',
        ],
        icon: 'pi pi-book',
        color: '#FF9800' // Un colore arancione
    }
]);
</script>

<template>
    <section class="px-4 py-16 sm:py-24">
        <div class="container mx-auto max-w-6xl">
            <div class="text-center mb-16">
                <h2 class="text-3xl sm:text-4xl font-bold text-surface-0 mb-4">{{ t('experience.sectionTitle') }}</h2>
            </div>

            <Timeline :value="experiences" align="alternate" class="customized-timeline">
                <template #marker="slotProps">
                    <span class="marker-icon" :style="{ backgroundColor: slotProps.item.color }">
                        <i :class="slotProps.item.icon"></i>
                    </span>
                </template>

                <template #content="slotProps">
                    <Card class="experience-card" v-animateonscroll="experienceAnimation">
                        <template #title>
                            {{ t(slotProps.item.titleKey) }}
                        </template>
                        <template #subtitle>
                            <span class="font-bold">{{ t(slotProps.item.companyKey) }}</span> | {{ t(slotProps.item.dateKey) }}
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
        </div>
    </section>
</template>

<style scoped>
/* Stili "Elevated" per le card dell'esperienza (copiati e adattati da Skills.vue) */
.experience-card {
    position: relative;
    border-radius: 1rem;
    border: 1px solid var(--surface-700);
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),
    box-shadow 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}

.experience-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, var(--primary-400), var(--primary-600));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 400ms ease;
}

.experience-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(var(--primary-color-rgb), 0.2);
}

.experience-card:hover::before {
    opacity: 1;
}

.experience-card :deep(.p-card-body) {
    position: relative;
    z-index: 2;
}

/* Stili specifici per il contenuto della card-esperienza */
.description-list {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin: 0;
    text-align: left;
    color: var(--surface-400);
}

.description-list li {
    margin-bottom: 0.5rem;
}

/* Stili per la Timeline */
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

/* Stili per la responsività della Timeline (adattati dal tuo esempio) */
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
</style>
