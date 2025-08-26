<script setup lang="ts">
import { ref, nextTick, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import { route } from 'ziggy-js';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import UserMessageBubble from './UserMessageBubble.vue';
import InterlocutorMessageBubble from './InterlocutorMessageBubble.vue';
import { ChatMessage } from '@/types/dto';

const { t } = useI18n();

const props = withDefaults(
    defineProps<{
        chatHeight?: string;
        chatHistory?: ChatMessage[];
    }>(),
    {
        chatHistory: () => [],
        chatHeight: '600px',
    },
);

const userInput = ref('');
const isLoading = ref(false);
const isMinimized = ref(false);

const messages = ref(
    props.chatHistory && props.chatHistory.length > 0
        ? [...props.chatHistory]
        : [
            {
                id: 1,
                author: 'assistant',
                type: 'text',
                content: t('chat.welcome'),
            },
        ],
);

let writingTimeout: ReturnType<typeof setTimeout>;

async function sendMessage() {
    const text = userInput.value.trim();
    if (!text || isLoading.value) return;

    isLoading.value = true;
    messages.value.push({
        id: Date.now(),
        author: 'user',
        type: 'text',
        content: text,
    });
    userInput.value = '';
    await scrollToBottom();

    const thinkingMessageId = Date.now() + 1;
    messages.value.push({
        id: thinkingMessageId,
        author: 'assistant',
        type: 'thinking',
        content: t('chat.thinking'),
    });
    await scrollToBottom();

    writingTimeout = setTimeout(() => {
        const msg = messages.value.find((m) => m.id === thinkingMessageId);
        if (msg) msg.content = t('chat.writing');
    }, 1000);

    try {
        const response = await axios.post(route('chat'), { message: text });
        clearTimeout(writingTimeout);

        const msgIndex = messages.value.findIndex(
            (m) => m.id === thinkingMessageId,
        );
        if (msgIndex !== -1) {
            messages.value[msgIndex] = {
                id: thinkingMessageId,
                author: 'assistant',
                type: 'text',
                content: response.data.content,
            };
        }
    } catch (error) {
        clearTimeout(writingTimeout);

        const msgIndex = messages.value.findIndex(
            (m) => m.id === thinkingMessageId,
        );
        if (msgIndex !== -1) {
            messages.value[msgIndex] = {
                id: thinkingMessageId,
                author: 'assistant',
                type: 'error',
                content: t('chat.error'),
            };
        }
    } finally {
        isLoading.value = false;
        await scrollToBottom();
    }
}

const chatHistoryElement = ref<HTMLElement | null>(null);
async function scrollToBottom() {
    await nextTick();
    if (chatHistoryElement.value) {
        chatHistoryElement.value.scrollTop =
            chatHistoryElement.value.scrollHeight;
    }
}

// scroll al load
onMounted(() => {
    nextTick(() => {
        if (chatHistoryElement.value) {
            chatHistoryElement.value.scrollTop =
                chatHistoryElement.value.scrollHeight;
        }
    })
})

</script>

<template>
    <div
        class="chat-window"
        :class="{ 'is-minimized': isMinimized }"
        :style="{ height: isMinimized ? 'auto' : chatHeight }"
    >
        <div class="chat-close-button">
            <Button
                icon="pi pi-times"
                severity="danger"
                rounded aria-label="Cancel"
                @click.stop="$emit('close-chat')"
            />
        </div>
        <header class="chat-header" @click="isMinimized = !isMinimized">
            <span class="chat-title">{{ t('chat.title') }}</span>
            <Button
                :icon="
                    isMinimized
                        ? 'pi pi-window-maximize'
                        : 'pi pi-window-minimize'
                "
                severity="secondary"
                text
                rounded
                @click.stop="isMinimized = !isMinimized"
            />
            <Button
                icon="pi pi-times"
                severity="secondary"
                text
                rounded
                @click.stop="$emit('close-chat')"
            />
        </header>

        <template v-if="!isMinimized">
            <div ref="chatHistoryElement" class="chat-history">
                <div v-for="msg in messages" :key="msg.id">
                    <UserMessageBubble
                        v-if="msg.author === 'user'"
                        :message="msg"
                    />
                    <InterlocutorMessageBubble v-else :message="msg" />
                </div>
            </div>

            <footer class="chat-footer">
                <Textarea
                    ref="chatTextarea"
                    v-model="userInput"
                    :placeholder="t('chat.placeholder')"
                    autoResize
                    rows="1"
                    maxlength="300"
                    class="flex-grow !shadow-none"
                    autofocus
                    @keydown.enter.prevent="sendMessage"
                />
                <Button
                    icon="pi pi-send"
                    :disabled="isLoading || !userInput.trim()"
                    @click="sendMessage"
                />
            </footer>
        </template>
    </div>
</template>

<style scoped>
.chat-window {
    width: 350px;
    max-height: 80vh;
    border: 1px solid var(--surface-700);
    background: var(--surface-800);
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: all 300ms ease-in-out;
}
.chat-window.is-minimized {
    height: auto;
    max-height: 52px;
}

.chat-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-bottom: 1px solid var(--surface-700);
    cursor: pointer;
    flex-shrink: 0;
}
.chat-title {
    flex-grow: 1;
    font-weight: 600;
    font-size: 1.25rem;
}
.chat-history {
    flex-grow: 1;
    overflow-y: auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}
.chat-footer {
    display: flex;
    align-items: flex-end;
    padding: 0.75rem;
    gap: 0.5rem;
    border-top: 1px solid var(--surface-700);
}
:deep(.p-inputtextarea) {
    background: transparent !important;
    border: none !important;
    color: var(--surface-0);
    min-height: 24px;
    max-height: 100px;
    line-height: 1.5;
}

/* --- INIZIO MODIFICA --- */
/* Stili per schermi con larghezza massima di 410px */
@media (max-width: 410px) {
    .chat-window {
        /*
          Usiamo !important per sovrascrivere gli stili inline :style
          passati come props da ChatManager.vue (windowBottom, windowRight).
        */
        width: 100% !important;
        height: 100vh !important;
        max-height: 100vh !important;
        bottom: 0 !important;
        right: 0 !important;
        border-radius: 0.75rem 0.75rem 0 0 !important; /* Arrotonda solo gli angoli superiori */
        border-left: none !important;
        border-right: none !important;
        border-bottom: none !important;
    }
}


.chat-close-button {
    display: none;
}


@media (max-width: 410px) {
    .chat-close-button {
        display: flex;
        z-index: 500;
        position: fixed;
        top: 70px;
        right: 15px;
    }
}

/* --- FINE MODIFICA --- */
</style>
