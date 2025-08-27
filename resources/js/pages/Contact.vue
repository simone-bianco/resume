<script setup lang="ts">
import GuestLayout from '@/layouts/GuestLayout.vue';
import { useForm, usePage } from '@inertiajs/vue3';
import { Divider } from 'primevue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import Textarea from 'primevue/textarea';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';

const { t } = useI18n();
const page = usePage();

const projectEnter = {
    enterClass:
        'animate-enter fade-in-10 slide-in-from-b-12 animate-duration-1000',
};

const form = useForm({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
});

const hasSuccess = computed(() => !!(page.props as any)?.flash?.success);
const hasError = computed(() => !!(page.props as any)?.flash?.error);

function submit() {
    form.post(route('contact.send'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset('message');
        },
    });
}
</script>

<template>
    <GuestLayout>
        <section class="px-4 py-16 sm:py-24">
            <div class="container mx-auto max-w-3xl">
                <div class="mb-10 text-center">
                    <h2
                        class="text-3xl font-bold text-[var(--text-color)] sm:text-4xl"
                    >
                        {{ t('contact.sectionTitle') }}
                    </h2>
                </div>

                <Card class="contact-card" v-animateonscroll="projectEnter">
                    <template #content>
                        <div class="space-y-4">
                            <Message
                                v-if="hasSuccess"
                                severity="success"
                                :closable="false"
                            >
                                {{ t('contact.flash.success') }}
                            </Message>
                            <Message
                                v-if="hasError"
                                severity="error"
                                :closable="false"
                            >
                                {{ t('contact.flash.error') }}
                            </Message>

                            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label
                                        class="mb-1 block text-sm text-[var(--text-color)]"
                                        >{{
                                            t('contact.labels.firstName')
                                        }}</label
                                    >
                                    <InputText
                                        size="large"
                                        v-model="form.first_name"
                                        :placeholder="
                                            t('contact.placeholders.firstName')
                                        "
                                        class="w-full"
                                        :invalid="!!form.errors.first_name"
                                    />
                                    <small
                                        v-if="form.errors.first_name"
                                        class="p-error"
                                        >{{ form.errors.first_name }}</small
                                    >
                                </div>
                                <div>
                                    <label
                                        class="mb-1 block text-sm text-[var(--text-color)]"
                                        >{{
                                            t('contact.labels.lastName')
                                        }}</label
                                    >
                                    <InputText
                                        size="large"
                                        v-model="form.last_name"
                                        :placeholder="
                                            t('contact.placeholders.lastName')
                                        "
                                        class="w-full"
                                        :invalid="!!form.errors.last_name"
                                    />
                                    <small
                                        v-if="form.errors.last_name"
                                        class="p-error"
                                        >{{ form.errors.last_name }}</small
                                    >
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label
                                        class="mb-1 block text-sm text-[var(--text-color)]"
                                        >{{ t('contact.labels.email') }}</label
                                    >
                                    <InputText
                                        size="large"
                                        v-model="form.email"
                                        type="email"
                                        :placeholder="
                                            t('contact.placeholders.email')
                                        "
                                        class="w-full"
                                        :invalid="!!form.errors.email"
                                    />
                                    <small
                                        v-if="form.errors.email"
                                        class="p-error"
                                        >{{ form.errors.email }}</small
                                    >
                                </div>
                                <div>
                                    <label
                                        class="mb-1 block text-sm text-[var(--text-color)]"
                                        >{{ t('contact.labels.phone') }}</label
                                    >
                                    <InputText
                                        size="large"
                                        v-model="form.phone"
                                        :placeholder="
                                            t('contact.placeholders.phone')
                                        "
                                        class="w-full"
                                        :invalid="!!form.errors.phone"
                                    />
                                    <small
                                        v-if="form.errors.phone"
                                        class="p-error"
                                        >{{ form.errors.phone }}</small
                                    >
                                </div>
                            </div>

                            <div>
                                <label
                                    class="mb-1 block text-sm text-[var(--text-color)]"
                                    >{{ t('contact.labels.message') }}</label
                                >
                                <Textarea
                                    size="large"
                                    v-model="form.message"
                                    :placeholder="
                                        t('contact.placeholders.message')
                                    "
                                    rows="6"
                                    auto-resize
                                    class="w-full"
                                    :invalid="!!form.errors.message"
                                />
                                <small
                                    v-if="form.errors.message"
                                    class="p-error"
                                    >{{ form.errors.message }}</small
                                >
                            </div>

                            <Divider />

                            <div class="flex justify-end">
                                <Button
                                    size="large"
                                    :label="t('contact.actions.submit')"
                                    icon="pi pi-send"
                                    :loading="form.processing"
                                    @click="submit"
                                />
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </section>
    </GuestLayout>
</template>

<style scoped>
.contact-card {
    padding: 5px;
    border-radius: 1rem;
    border: 1px solid var(--surface-700);
    color: var(--text-color);
    transition:
        box-shadow var(--hover-transition-duration, 400ms)
            cubic-bezier(0.25, 0.8, 0.25, 1),
        border-color var(--hover-transition-duration, 400ms) ease;
}
</style>
