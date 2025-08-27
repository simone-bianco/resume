<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import axios from 'axios';
import { route } from 'ziggy-js';
import Button from 'primevue/button';
import Textarea from 'primevue/textarea';
import UserMessageBubble from './UserMessageBubble.vue';
import InterlocutorMessageBubble from './InterlocutorMessageBubble.vue';
import { ChatMessage } from '@/types/dto';
import ChatBubble from '@/components/custom/chat/ChatBubble.vue';

const { t } = useI18n();


const props = withDefaults(
    defineProps<{
        chatHeight?: string;
        bubbleBottom?: string,
        bubbleRight?: string,
        windowBottom?: string,
        windowRight?: string,
        chatHistory?: ChatMessage[]
    }>(),
    {
        chatHistory: () => [],
        chatHeight: '600px',
        bubbleBottom: '2rem',
        bubbleRight: '2rem',
        windowBottom: '0rem',
        windowRight: '0rem',
    },
);

enum ChatState {
    closed,
    minimized,
    open,
}

const chatWindowState = ref<ChatState>(ChatState.closed);
const isMinimized = computed(() => {
    return chatWindowState.value === ChatState.minimized;
})
const isClosed = computed(() => {
    return chatWindowState.value === ChatState.closed;
})
const toggleMinimize = async () => {
    if (isClosed.value) return;

    if (isMinimized.value) {
        chatWindowState.value = ChatState.open;
        await scrollToBottom();
    } else {
        chatWindowState.value = ChatState.minimized;
    }
}

const isSmallScreen = ref(false);
function updateSmallScreen() {
    if (typeof window !== 'undefined') {
        isSmallScreen.value = window.matchMedia('(max-width: 410px)').matches;
    }
}

onMounted(() => {
    updateSmallScreen();
    if (typeof window !== 'undefined') {
        window.addEventListener('resize', updateSmallScreen);
    }
});

onUnmounted(() => {
    if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateSmallScreen);
    }
});

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


const userInput = ref('');
const isLoading = ref(false);

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

// Ensure scroll when opening the chat and whenever messages change
watch(
    () => chatWindowState.value,
    async (newVal) => {
        if (newVal === ChatState.open) {
            await scrollToBottom();
        }
    }
);

watch(
    () => messages.value.length,
    async () => {
        await scrollToBottom();
    }
);

let writingTimeout: ReturnType<typeof setTimeout> | undefined;

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
    } catch {
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

async function resetChat() {
    if (isLoading.value) return;
    try {
        isLoading.value = true;
        if (writingTimeout) {
            clearTimeout(writingTimeout);
        }
        await axios.post(route('chat.reset'));
        messages.value = [
            {
                id: Date.now(),
                author: 'assistant',
                type: 'text',
                content: t('chat.welcome'),
            },
        ];
        userInput.value = '';
    } catch {
        messages.value.push({
            id: Date.now(),
            author: 'assistant',
            type: 'error',
            content: t('chat.error'),
        });
    } finally {
        isLoading.value = false;
        await scrollToBottom();
    }
}
</script>

<template>
    <div v-bind="$attrs">
        <ChatBubble
            v-show="chatWindowState === ChatState.closed || (isSmallScreen && chatWindowState === ChatState.minimized)"
            class="fixed-chat-element"
            :style="{ bottom: bubbleBottom, right: bubbleRight }"
            @open-chat="chatWindowState = ChatState.open"
        />
        <div
            class="fixed-chat-element chat-window-container"
            v-show="chatWindowState !== ChatState.closed && !(isSmallScreen && chatWindowState === ChatState.minimized)"
            :style="{ bottom: windowBottom, right: windowRight }"
        >
            <div
                class="chat-window"
                :class="{ 'is-minimized': isMinimized }"
                :style="{ height: isMinimized ? 'auto' : chatHeight }"
            >
                <div class="chat-close-button">
                    <Button
                        class="mr-2"
                        icon="pi pi-refresh"
                        severity="warn"
                        rounded
                        @click.stop="resetChat"
                    />
                    <Button
                        icon="pi pi-times"
                        severity="danger"
                        rounded aria-label="Cancel"
                        @click.stop="chatWindowState = ChatState.closed"
                    />
                </div>
                <header class="chat-header" @click="toggleMinimize">
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
                        @click.stop="toggleMinimize"
                    />
                    <Button
                        icon="pi pi-refresh"
                        severity="secondary"
                        text
                        rounded
                        @click.stop="resetChat"
                    />
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        text
                        rounded
                        @click.stop="chatWindowState = ChatState.closed"
                    />
                </header>

                <template v-if="!isMinimized">
                    <div ref="chatHistoryElement" class="chat-history">
                        <div v-for="msg in messages" :key="msg.id">
                            <UserMessageBubble
                                v-if="msg.author === 'user'"
                                :message="msg"
                            />
                            <InterlocutorMessageBubble v-else-if="msg.content?.length > 0" :message="msg" />
                        </div>
                    </div>

                    <footer class="chat-footer">
                        <Textarea
                            v-model="userInput"
                            :placeholder="t('chat.placeholder')"
                            maxlength="300"
                            class="flex-grow !shadow-none"
                            rows="1"
                            style="border-radius: 20px; min-height: 40px; max-height: 100px"
                            :auto-resize="true"
                            autofocus
                            @keydown.enter.exact.prevent="sendMessage"
                        />
                        <Button
                            icon="pi pi-send"
                            :disabled="isLoading || !userInput.trim()"
                            @click="sendMessage"
                        />
                    </footer>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>
.chat-window {
    width: 350px;
    max-height: 80vh;
    border: 1px solid var(--surface-700);
    background: var(--surface-800);
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
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
    scrollbar-width: thin;
    scrollbar-color: var(--surface-600) transparent;
}

:deep(.chat-history::-webkit-scrollbar) {
    width: 4px;
    height: 4px;
}
:deep(.chat-history::-webkit-scrollbar-track) {
    background: transparent;
}
:deep(.chat-history::-webkit-scrollbar-thumb) {
    background-color: var(--surface-600);
    border-radius: 9999px;
    border: none;
}
:deep(.chat-history::-webkit-scrollbar-button) {
    display: none;
    width: 0;
    height: 0;
}
.chat-footer {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    gap: 0.5rem;
    border-top: 1px solid var(--surface-700);
}

@media (max-width: 410px) {
    .chat-window {
        width: 100% !important;
        height: 100vh !important;
        max-height: 100vh !important;
        bottom: 0 !important;
        right: 0 !important;
        border-top-left-radius: 0.75rem;
        border-top-right-radius: 0.75rem;
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

.fixed-chat-element {
    position: fixed;
    z-index: 1000;
}

@media (min-width: 411px) {
    .chat-window-container {
        right: 10vw !important;
    }
}

:deep(.p-inputtextarea) {
    background: transparent !important;
    border: none !important;
    color: var(--surface-0);
    resize: none;

    line-height: 1.5em; /* Assicura che 1em sia l'altezza di una riga */
    min-height: calc(1.5em * var(--rows, 3) + var(--input-padding-y, 0.75rem) * 2 + var(--input-border-width, 1px) * 2);

    max-height: calc(1.5em * 4 + var(--input-padding-y, 0.75rem) * 2 + var(--input-border-width, 1px) * 2);

    overflow-y: auto !important;

    scrollbar-width: thin;
    scrollbar-color: var(--surface-600) transparent;
}

:deep(.p-inputtextarea::-webkit-scrollbar) {
    width: 4px;
    height: 4px;
}
:deep(.p-inputtextarea::-webkit-scrollbar-track) {
    background: transparent;
}
:deep(.p-inputtextarea::-webkit-scrollbar-thumb) {
    background-color: var(--surface-600);
    border-radius: 9999px;
    border: none;
}
:deep(.p-inputtextarea::-webkit-scrollbar-button) {
    display: none;
    width: 0;
    height: 0;
}
</style>
