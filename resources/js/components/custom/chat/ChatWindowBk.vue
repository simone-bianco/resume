<script setup lang="ts">
import { ChatMessage } from '@/types/dto';
import axios from 'axios';
import { computed, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';
import avtar from '@/assets/images/avatar.png';

const assistantAvatar = avtar;

// --- PROPS & EMITS ---
// 1. Accettiamo di nuovo le props per il posizionamento
const props = withDefaults(
    defineProps<{
        chatHistory?: ChatMessage[];
        windowBottom?: string;
        windowRight?: string;
    }>(),
    {
        chatHistory: () => [],
        windowBottom: '2rem',
        windowRight: '2rem',
    },
);
const emit = defineEmits(['close-chat']);

// --- STYLING & POSITIONING ---
// 2. Creiamo delle variabili CSS a partire dalle props per usarle nello <style>
const chatContainerStyle = computed(() => ({
    '--window-bottom': props.windowBottom,
    '--window-right': props.windowRight,
}));

// (Il resto della logica <script> rimane invariato)
const { t } = useI18n();
const assistantId = 'assistant';
const participants = [
    {
        id: assistantId,
        name: 'Simone Bianco AI',
        imageUrl: assistantAvatar,
    },
];
const chatColors = ref({
    header: { bg: '#374151', text: '#ffffff' },
    launcher: { bg: '#3B82F6' },
    messageList: { bg: '#1f2937' },
    sentMessage: { bg: '#3B82F6', text: '#ffffff' },
    receivedMessage: { bg: '#4b5563', text: '#ffffff' },
    userInput: { bg: '#374151', text: '#ffffff' },
});

onMounted(() => {
    try {
        const styles = getComputedStyle(document.documentElement);
        const primaryColor = '#3B82F6';
        chatColors.value = {
            header: {
                bg: styles.getPropertyValue('--surface-700').trim(),
                text: styles.getPropertyValue('--surface-0').trim(),
            },
            launcher: { bg: primaryColor },
            messageList: {
                bg: styles.getPropertyValue('--surface-800').trim(),
            },
            sentMessage: { bg: primaryColor, text: '#ffffff' },
            receivedMessage: {
                bg: styles.getPropertyValue('--surface-700').trim(),
                text: styles.getPropertyValue('--surface-0').trim(),
            },
            userInput: {
                bg: styles.getPropertyValue('--surface-700').trim(),
                text: styles.getPropertyValue('--surface-0').trim(),
            },
        };
    } catch (e) {
        console.warn(
            'Impossibile leggere le variabili CSS per il tema della chat. Verrà usato un tema scuro di default.',
            e,
        );
    }
});

const internalMessages = ref<ChatMessage[]>([]);
if (props.chatHistory && props.chatHistory.length > 0) {
    internalMessages.value = [...props.chatHistory];
} else {
    internalMessages.value = [
        {
            id: 1,
            author: 'assistant',
            type: 'text',
            content: t('chat.welcome'),
        },
    ];
}

const showTypingIndicator = ref('');
const formattedMessages = computed(() => {
    return internalMessages.value
        .filter((msg) => msg.type !== 'thinking')
        .map((msg) => ({
            id: msg.id,
            type: 'text',
            author: msg.author === 'user' ? 'me' : assistantId,
            data: { text: msg.content },
        }));
});

async function handleMessageSent(message: { data: { text: string } }) {
    const text = message.data.text.trim();
    if (!text) return;
    internalMessages.value.push({
        id: Date.now(),
        author: 'user',
        type: 'text',
        content: text,
    });
    showTypingIndicator.value = assistantId;
    try {
        const response = await axios.post(route('chat'), { message: text });
        internalMessages.value.push({
            id: Date.now() + 1,
            author: 'assistant',
            type: 'text',
            content: response.data.content,
        });
    } catch (error) {
        console.error('Chat API error:', error);
        internalMessages.value.push({
            id: Date.now() + 1,
            author: 'assistant',
            type: 'error',
            content: t('chat.error'),
        });
    } finally {
        showTypingIndicator.value = '';
    }
}

function closeChat() {
    emit('close-chat');
}
</script>

<template>
    <div :style="chatContainerStyle">
        <beautiful-chat
            :participants="participants"
            :message-list="formattedMessages"
            :on-message-was-sent="handleMessageSent"
            :is-open="true"
            :close="closeChat"
            :show-launcher="false"
            :show-typing-indicator="showTypingIndicator"
            :colors="chatColors"
            :always-scroll-to-bottom="true"
            :message-styling="true"
            :show-close-button="true"
            :show-minimize-button="true"
        >
            <template #header>
                <div
                    class="px-4 py-3 text-lg font-semibold"
                    :style="{
                        backgroundColor: chatColors.header.bg,
                        color: chatColors.header.text,
                    }"
                >
                    {{ t('chat.title') }}
                </div>
            </template>

            <template #user-avatar="{ user }">
                <div v-if="user && user.imageUrl" class="avatar-container">
                    <img
                        :src="user.imageUrl"
                        alt="Avatar"
                        class="avatar-image"
                    />
                </div>
            </template>
        </beautiful-chat>
    </div>
</template>

<style>
/* 5. Regola CSS per il posizionamento su desktop */
.sc-chat-window {
    /* Usa le variabili CSS definite nello script, con un fallback per sicurezza */
    bottom: var(--window-bottom, 2rem) !important;
    right: var(--window-right, 2rem) !important;
}

/* Stili per la visualizzazione corretta dell'avatar */
.avatar-container {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
}
.avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Stili non-incapsulati per sovrascrivere quelli della libreria su mobile */
@media (max-width: 410px) {
    .sc-chat-window {
        width: 100% !important;
        height: 85vh !important;
        max-height: 85vh !important;
        top: auto !important;
        bottom: 0 !important;
        right: 0 !important;
        left: 0 !important;
        border-radius: 0.75rem 0.75rem 0 0 !important;
    }
}
</style>
