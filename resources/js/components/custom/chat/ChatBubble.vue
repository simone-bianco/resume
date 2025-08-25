<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import avatar from '@/assets/images/avatar.png';
import Image from 'primevue/image';

const { t } = useI18n();
const emit = defineEmits(['open-chat']);

function triggerOpenChat() {
    emit('open-chat');
}
</script>

<template>
    <div class="flex items-center gap-3">
        <div
            role="button"
            tabindex="0"
            :aria-label="t('chatBubble.text')"
            @click="triggerOpenChat"
            @keydown.enter="triggerOpenChat"
            class="chat-bubble
                relative inline-block cursor-pointer select-none text-center
                border border-[var(--bubble-border)]
                bg-[var(--bubble-bg)] text-[var(--bubble-fg)]
                px-5 py-3
                text-sm text-left font-semibold
                max-w-[180px]
                rounded-tr-lg rounded-br-lg rounded-bl-lg
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400
                focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950
            "
        >
            {{ t('chatBubble.text') }}
        </div>
        <div>
            <Image :src="avatar" image-class="w-[80px]" />
        </div>
    </div>
</template>

<style scoped>
/*
 * La classe .chat-bubble ora contiene solo stili che non hanno
 * un'utility class equivalente in Tailwind, come le variabili e l'animazione.
*/
.chat-bubble {
    /* Variabili semantiche locali */
    --bubble-bg: var(--surface-900);
    --bubble-fg: var(--surface-0);
    --bubble-border: var(--surface-700);

    /* Animazione */
    animation: pulse 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
}

/*
 * Gli pseudo-elementi come ::after non possono essere stilizzati dal template.
 * Per questo motivo, le direttive @apply per la "coda" del fumetto DEVONO rimanere qui.
*/
.chat-bubble::after {
    content: '';
    @apply absolute top-1/2 left-full -translate-y-1/2;
    width: 9px;
    height: 16px;
    background-color: var(--bubble-bg);
    clip-path: polygon(0 0, 100% 50%, 0 100%);
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
