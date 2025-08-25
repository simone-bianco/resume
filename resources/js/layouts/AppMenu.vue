<script setup lang="ts">
import { computed, onMounted } from 'vue';
import AppMenuItem from './AppMenuItem.vue';
import { route } from 'ziggy-js';
import { useLayout } from './composables/layout';
import { usePage, router } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import tenantAwareRoute from "@/utils/tenantAwareRoute";
import CampaignSelect from '@/components/custom/models/campaign/CampaignSelect.vue';

const { setActiveMenuItem } = useLayout();
const page = usePage();
const { t } = useI18n();

const selectedCampaign = computed(() => {
    return page.props.lastVisitedCampaign || null;
});

const onCampaignChange = (campaignId: string) => {
    if (campaignId) {
        router.post(tenantAwareRoute('tenant.campaigns.select', { campaign: campaignId }));
    }
};

const isLandlord = computed(() => {
    return !page.props.tenant;
});

const getCampaignSection = () => {
    // const tenant = window.location.pathname.split('/')[1];
    return {
        label: selectedCampaign.value?.name,
            items: [
        {
            label: t('Dashboard'),
            icon: 'pi pi-fw pi-home',
            to: tenantAwareRoute('tenant.dashboard'),
            routeName: 'tenant.dashboard',
            description: t('Dashboard overview'),
            disabled: !selectedCampaign.value
        },
        {
            label: t('Characters'),
            icon: 'pi pi-fw pi-user',
            to: tenantAwareRoute('tenant.characters.index'),
            routeName: 'tenant.characters.index',
            description: t('Manage characters'),
            disabled: !selectedCampaign.value
        },
        {
            label: t('Locations'),
            icon: 'pi pi-fw pi-map',
            to: tenantAwareRoute('tenant.locations.index'),
            routeName: 'tenant.locations.index',
            description: t('Locations & Hierarchies'),
            disabled: !selectedCampaign.value
        },
        // {
        //     label: t('Test'),
        //     icon: 'pi pi-fw pi-cog',
        //     to: route('tenant.test', { tenant }),
        //     routeName: 'tenant.test',
        //     description: t('Test page')
        // },
    ]
    }
}

const model = computed(() => {
    if (isLandlord.value) {
        return [
            {
                label: t('Landlord'),
                items: [
                    {
                        label: t('Dashboard'),
                        icon: 'pi pi-fw pi-home',
                        to: route('dashboard'),
                        routeName: 'dashboard',
                        description: t('Impersonate tenants')
                    },
                    {
                        label: t('TipTap Example'),
                        icon: 'pi pi-fw pi-pencil',
                        to: route('tiptap-example'),
                        routeName: 'tiptap-example',
                        description: t('Rich text editor example')
                    }
                ]
            }
        ];
    } else {
        const menu = [
            {
                items: [
                    {
                        label: t('Campaigns'),
                        icon: 'pi pi-fw pi-flag',
                        to: tenantAwareRoute('tenant.campaigns.index'),
                        routeName: 'tenant.campaigns.index',
                        description: t('Manage campaigns')
                    },
                ]
            },
        ];

        if (selectedCampaign.value) {
            menu.push(getCampaignSection());
        }

        return menu;
    }
});

const findActiveMenuItem = () => {
    for (const section of model.value) {
        for (const item of section.items) {
            if (item.routeName && route().current(item.routeName + '*')) {
                setActiveMenuItem('0-' + section.items.indexOf(item));
                return;
            }
        }
    }
};

onMounted(() => {
    findActiveMenuItem();
});
</script>

<template>
    <div v-if="!isLandlord" class="p-3">
        <div class="border-top-1 surface-border pt-3">
            <label for="campaign-select" class="block text-sm font-semibold text-color-secondary mb-2">{{ t('Active Campaign') }}</label>
            <CampaignSelect @campaign-selected="onCampaignChange" />
        </div>
    </div>

    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i" :disabled="item.disabled" />
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
