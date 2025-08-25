<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import avatar from '@/assets/images/avatar.png';
import Image from 'primevue/image';

const { t } = useI18n();
const emit = defineEmits(['open-chat']);

function triggerOpenChat() {
    emit('open-chat');
    console.log('ChatBubble cliccata! Evento "open-chat" emesso.');
}
</script>

<template>
    <div class="flex items-center gap-3">
        <div
            class="chat-bubble"
            role="button"
            tabindex="0"
            :aria-label="t('chatBubble.text')"
            @click="triggerOpenChat"
            @keydown.enter="triggerOpenChat"
        >
            {{ t('chatBubble.text') }}
        </div>
        <div>
            <Image :src="avatar" image-class="w-[80px]" />
        </div>
    </div>
</template>

<style scoped>
/* Usiamo @apply per creare un componente con le utility di Tailwind, ma tenendo il template pulito */
.chat-bubble {
    /* Variabili semantiche locali mappate ai token globali */
    --bubble-bg: var(--surface-900);
    --bubble-fg: var(--surface-0);
    --bubble-border: var(--surface-700);

    @apply relative inline-block cursor-pointer select-none text-center;
    @apply px-5 py-3; /* padding */
    @apply text-sm text-left font-semibold; /* text style */
    @apply max-w-[180px]; /* max width */

    /* Forma del fumetto (3 angoli su 4 arrotondati) */
    @apply rounded-tr-lg rounded-br-lg rounded-bl-lg;

    /* Colori del fumetto con variabili locali (mantengono in sync la coda) */
    background-color: var(--bubble-bg);
    color: var(--bubble-fg);
    @apply border;
    border-color: var(--bubble-border);

    /* Animazione */
    animation: pulse 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
}

/* Stile per accessibilità (focus da tastiera) */
.chat-bubble:focus-visible {
    @apply outline-none ring-2 ring-primary-400 ring-offset-2 ring-offset-surface-950;
}

/* La coda del fumetto rimane con clip-path perché è il metodo più robusto */
.chat-bubble::after {
    content: '';
    @apply absolute top-1/2 left-full -translate-y-1/2;
    width: 9px;
    height: 16px;
    background-color: var(--bubble-bg);
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    /* Aggiungiamo un bordo anche alla coda per coerenza */
    border-right: 1px solid var(--bubble-border);
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        box-shadow: 0 5px 15px rgba(var(--primary-color-rgb, 34, 211, 238), 0.2);
    }
    50% {
        transform: scale(1.05);
        box-shadow: 0 8px 25px rgba(var(--primary-color-rgb, 34, 211, 238), 0.4);
    }
}

/* Rispetta le preferenze di riduzione del movimento */
@media (prefers-reduced-motion: reduce) {
    .chat-bubble { animation: none; }
}
</style>
