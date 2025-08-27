import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext, reactive, onMounted, onUnmounted, nextTick, watch, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { usePage, router } from "@inertiajs/vue3";
import { useI18n } from "vue-i18n";
import { route } from "ziggy-js";
import Button from "primevue/button";
import Menu from "primevue/menu";
import Image from "primevue/image";
import Menubar from "primevue/menubar";
import Drawer from "primevue/drawer";
import axios from "axios";
import Textarea from "primevue/textarea";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import ProgressSpinner from "primevue/progressspinner";
import Dialog from "primevue/dialog";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "LanguageSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    const page = usePage();
    const languagesMap = computed(() => {
      const langs = page.props?.languages;
      if (langs && typeof langs === "object" && Object.keys(langs).length > 0) {
        return langs;
      }
      return { en: "English", it: "Italiano" };
    });
    const availableLanguages = computed(() => {
      return Object.keys(languagesMap.value);
    });
    if (page.props.locale) {
      locale.value = page.props.locale;
    }
    const menu = ref(null);
    function getFlagUrl(lang) {
      const map = {
        it: "https://cdn.countryflags.com/thumbs/italy/flag-round-250.png",
        en: "https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png"
      };
      return map[lang] || "https://cdn.countryflags.com/thumbs/united-nations/flag-round-250.png";
    }
    const items = computed(() => {
      if (!Array.isArray(availableLanguages.value)) {
        return [];
      }
      return availableLanguages.value.map((lang) => ({
        label: getLanguageLabel(lang),
        lang,
        flagUrl: getFlagUrl(lang),
        command: () => switchLanguage(lang)
      }));
    });
    function getLanguageLabel(lang) {
      return languagesMap.value[lang] || lang.toUpperCase();
    }
    function switchLanguage(lang) {
      locale.value = lang;
      try {
        window.dispatchEvent(new CustomEvent("language:changed", { detail: lang }));
        window.laravelCookieConsent?.updateTexts?.(lang);
      } catch {
      }
      const props = page.props;
      const alias = props?.tenant?.alias;
      const url = alias ? `/${alias}/settings/language` : "/settings/language";
      router.post(url, {
        locale: lang
      }, {
        preserveState: true,
        preserveScroll: true,
        only: []
      });
    }
    function toggleMenu(event) {
      menu.value?.toggle(event);
    }
    const currentFlagUrl = computed(() => getFlagUrl(locale.value));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "language-switcher" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Button), {
        onClick: toggleMenu,
        size: "large",
        variant: "text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Image), {
              src: currentFlagUrl.value,
              alt: "current language",
              width: "25",
              height: "25",
              style: { "display": "inline-block" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Image), {
                src: currentFlagUrl.value,
                alt: "current language",
                width: "25",
                height: "25",
                style: { "display": "inline-block" }
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Menu), {
        ref_key: "menu",
        ref: menu,
        model: items.value,
        popup: true
      }, {
        item: withCtx(({ item, props }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<a${ssrRenderAttrs(mergeProps(props.action, { class: "flex align-items-center gap-2 w-full" }))}${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Image), {
              src: item.flagUrl,
              alt: item.lang + " flag",
              width: "18",
              height: "18"
            }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            if (item.lang === unref(locale)) {
              _push2(`<i class="pi pi-check ml-auto"${_scopeId}></i>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</a>`);
          } else {
            return [
              createVNode("a", mergeProps(props.action, { class: "flex align-items-center gap-2 w-full" }), [
                createVNode(unref(Image), {
                  src: item.flagUrl,
                  alt: item.lang + " flag",
                  width: "18",
                  height: "18"
                }, null, 8, ["src", "alt"]),
                createVNode("span", null, toDisplayString(item.label), 1),
                item.lang === unref(locale) ? (openBlock(), createBlock("i", {
                  key: 0,
                  class: "pi pi-check ml-auto"
                })) : createCommentVNode("", true)
              ], 16)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/inputs/Switchers/LanguageSwitcher.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const layoutConfig = reactive({
  preset: "Aura",
  primary: "emerald",
  surface: null,
  darkTheme: false,
  menuMode: "static"
});
const layoutState = reactive({
  staticMenuDesktopInactive: false,
  overlayMenuActive: false,
  profileSidebarVisible: false,
  configSidebarVisible: false,
  staticMenuMobileActive: false,
  menuHoverActive: false,
  activeMenuItem: null
});
function useLayout() {
  const setActiveMenuItem = (item) => {
    layoutState.activeMenuItem = item.value || item;
  };
  const setDarkMode = (enabled) => {
    const shouldEnable = !!enabled;
    layoutConfig.darkTheme = shouldEnable;
    document.documentElement.classList.toggle("dark", shouldEnable);
  };
  const toggleDarkMode = () => {
    if (!document.startViewTransition) {
      setDarkMode(!layoutConfig.darkTheme);
      return;
    }
    document.startViewTransition(() => setDarkMode(!layoutConfig.darkTheme));
  };
  const toggleMenu = () => {
    if (layoutConfig.menuMode === "overlay") {
      layoutState.overlayMenuActive = !layoutState.overlayMenuActive;
    }
    if (window.innerWidth > 991) {
      layoutState.staticMenuDesktopInactive = !layoutState.staticMenuDesktopInactive;
    } else {
      layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
    }
  };
  const isSidebarActive = computed(() => layoutState.overlayMenuActive || layoutState.staticMenuMobileActive);
  const isDarkTheme = computed(() => layoutConfig.darkTheme);
  const getPrimary = computed(() => layoutConfig.primary);
  const getSurface = computed(() => layoutConfig.surface);
  return {
    layoutConfig,
    layoutState,
    toggleMenu,
    isSidebarActive,
    isDarkTheme,
    getPrimary,
    getSurface,
    setActiveMenuItem,
    toggleDarkMode,
    setDarkMode
  };
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "UserMessageBubble",
  __ssrInlineRender: true,
  props: {
    message: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "message-wrapper" }, _attrs))} data-v-ba8b2cf1><div class="message-bubble" data-v-ba8b2cf1><p class="message-content" data-v-ba8b2cf1>${ssrInterpolate(_ctx.message.content)}</p></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/chat/UserMessageBubble.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const UserMessageBubble = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-ba8b2cf1"]]);
const avatar = "/build/assets/avatar-C7D1tYvk.png";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InterlocutorMessageBubble",
  __ssrInlineRender: true,
  props: {
    message: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "message-wrapper" }, _attrs))} data-v-0d9f2022>`);
      _push(ssrRenderComponent(unref(Image), {
        src: unref(avatar),
        class: "w-8 h-8 rounded-full flex-shrink-0"
      }, null, _parent));
      _push(`<div class="${ssrRenderClass([{ "bubble-danger": _ctx.message.type === "error" }, "message-bubble"])}" data-v-0d9f2022>`);
      if (_ctx.message.type === "thinking") {
        _push(ssrRenderComponent(unref(ProgressSpinner), {
          style: { "width": "20px", "height": "20px" },
          strokeWidth: "6"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="message-content" data-v-0d9f2022>${ssrInterpolate(_ctx.message.content)}</p></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/chat/InterlocutorMessageBubble.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const InterlocutorMessageBubble = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-0d9f2022"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChatBubble",
  __ssrInlineRender: true,
  emits: ["open-chat"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-3" }, _attrs))} data-v-bd4edc4a><div role="button" tabindex="0"${ssrRenderAttr("aria-label", unref(t)("chatBubble.text"))} class="chat-bubble relative inline-block cursor-pointer select-none text-center border border-[var(--bubble-border)] bg-[var(--bubble-bg)] text-[var(--bubble-fg)] px-5 py-3 text-sm text-left font-semibold max-w-[180px] rounded-tr-lg rounded-br-lg rounded-bl-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950" data-v-bd4edc4a>${ssrInterpolate(unref(t)("chatBubble.text"))}</div><div data-v-bd4edc4a>`);
      _push(ssrRenderComponent(unref(Image), {
        src: unref(avatar),
        "image-class": "w-[80px]"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/chat/ChatBubble.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ChatBubble = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bd4edc4a"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Chat",
  __ssrInlineRender: true,
  props: {
    chatHeight: { default: "600px" },
    bubbleBottom: { default: "2rem" },
    bubbleRight: { default: "2rem" },
    windowBottom: { default: "0rem" },
    windowRight: { default: "0rem" },
    chatHistory: { default: () => [] }
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const chatWindowState = ref(
      0
      /* closed */
    );
    const isMinimized = computed(() => {
      return chatWindowState.value === 1;
    });
    const isClosed = computed(() => {
      return chatWindowState.value === 0;
    });
    const toggleMinimize = async () => {
      if (isClosed.value) return;
      if (isMinimized.value) {
        chatWindowState.value = 2;
        await scrollToBottom();
      } else {
        chatWindowState.value = 1;
      }
    };
    const isSmallScreen = ref(false);
    function updateSmallScreen() {
      if (typeof window !== "undefined") {
        isSmallScreen.value = window.matchMedia("(max-width: 410px)").matches;
      }
    }
    onMounted(() => {
      updateSmallScreen();
      if (typeof window !== "undefined") {
        window.addEventListener("resize", updateSmallScreen);
      }
    });
    onUnmounted(() => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateSmallScreen);
      }
    });
    const chatHistoryElement = ref(null);
    async function scrollToBottom() {
      await nextTick();
      if (chatHistoryElement.value) {
        chatHistoryElement.value.scrollTop = chatHistoryElement.value.scrollHeight;
      }
    }
    onMounted(() => {
      nextTick(() => {
        if (chatHistoryElement.value) {
          chatHistoryElement.value.scrollTop = chatHistoryElement.value.scrollHeight;
        }
      });
    });
    const userInput = ref("");
    const isLoading = ref(false);
    const messages = ref(
      props.chatHistory && props.chatHistory.length > 0 ? [...props.chatHistory] : [
        {
          id: 1,
          author: "assistant",
          type: "text",
          content: t("chat.welcome")
        }
      ]
    );
    watch(
      () => chatWindowState.value,
      async (newVal) => {
        if (newVal === 2) {
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
    let writingTimeout;
    async function sendMessage() {
      const text = userInput.value.trim();
      if (!text || isLoading.value) return;
      isLoading.value = true;
      messages.value.push({
        id: Date.now(),
        author: "user",
        type: "text",
        content: text
      });
      userInput.value = "";
      await scrollToBottom();
      const thinkingMessageId = Date.now() + 1;
      messages.value.push({
        id: thinkingMessageId,
        author: "assistant",
        type: "thinking",
        content: t("chat.thinking")
      });
      await scrollToBottom();
      writingTimeout = setTimeout(() => {
        const msg = messages.value.find((m) => m.id === thinkingMessageId);
        if (msg) msg.content = t("chat.writing");
      }, 1e3);
      try {
        const response = await axios.post(route("chat"), { message: text });
        clearTimeout(writingTimeout);
        const msgIndex = messages.value.findIndex(
          (m) => m.id === thinkingMessageId
        );
        if (msgIndex !== -1) {
          messages.value[msgIndex] = {
            id: thinkingMessageId,
            author: "assistant",
            type: "text",
            content: response.data.content
          };
        }
      } catch {
        clearTimeout(writingTimeout);
        const msgIndex = messages.value.findIndex(
          (m) => m.id === thinkingMessageId
        );
        if (msgIndex !== -1) {
          messages.value[msgIndex] = {
            id: thinkingMessageId,
            author: "assistant",
            type: "error",
            content: t("chat.error")
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
        await axios.post(route("chat.reset"));
        messages.value = [
          {
            id: Date.now(),
            author: "assistant",
            type: "text",
            content: t("chat.welcome")
          }
        ];
        userInput.value = "";
      } catch {
        messages.value.push({
          id: Date.now(),
          author: "assistant",
          type: "error",
          content: t("chat.error")
        });
      } finally {
        isLoading.value = false;
        await scrollToBottom();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps(_ctx.$attrs, _attrs))} data-v-98e816c9>`);
      _push(ssrRenderComponent(ChatBubble, {
        style: [
          chatWindowState.value === 0 || isSmallScreen.value && chatWindowState.value === 1 ? null : { display: "none" },
          { bottom: _ctx.bubbleBottom, right: _ctx.bubbleRight }
        ],
        class: "fixed-chat-element",
        onOpenChat: ($event) => chatWindowState.value = 2
        /* open */
      }, null, _parent));
      _push(`<div class="fixed-chat-element chat-window-container" style="${ssrRenderStyle([
        chatWindowState.value !== 0 && !(isSmallScreen.value && chatWindowState.value === 1) ? null : { display: "none" },
        { bottom: _ctx.windowBottom, right: _ctx.windowRight }
      ])}" data-v-98e816c9><div class="${ssrRenderClass([{ "is-minimized": isMinimized.value }, "chat-window"])}" style="${ssrRenderStyle({ height: isMinimized.value ? "auto" : _ctx.chatHeight })}" data-v-98e816c9><div class="chat-close-button" data-v-98e816c9>`);
      _push(ssrRenderComponent(unref(Button), {
        class: "mr-2",
        icon: "pi pi-refresh",
        severity: "warn",
        rounded: "",
        onClick: resetChat
      }, null, _parent));
      _push(ssrRenderComponent(unref(Button), {
        icon: "pi pi-times",
        severity: "danger",
        rounded: "",
        "aria-label": "Cancel",
        onClick: ($event) => chatWindowState.value = 0
        /* closed */
      }, null, _parent));
      _push(`</div><header class="chat-header" data-v-98e816c9><span class="chat-title" data-v-98e816c9>${ssrInterpolate(unref(t)("chat.title"))}</span>`);
      _push(ssrRenderComponent(unref(Button), {
        icon: isMinimized.value ? "pi pi-window-maximize" : "pi pi-window-minimize",
        severity: "secondary",
        text: "",
        rounded: "",
        onClick: toggleMinimize
      }, null, _parent));
      _push(ssrRenderComponent(unref(Button), {
        icon: "pi pi-refresh",
        severity: "secondary",
        text: "",
        rounded: "",
        onClick: resetChat
      }, null, _parent));
      _push(ssrRenderComponent(unref(Button), {
        icon: "pi pi-times",
        severity: "secondary",
        text: "",
        rounded: "",
        onClick: ($event) => chatWindowState.value = 0
        /* closed */
      }, null, _parent));
      _push(`</header>`);
      if (!isMinimized.value) {
        _push(`<!--[--><div class="chat-history" data-v-98e816c9><!--[-->`);
        ssrRenderList(messages.value, (msg) => {
          _push(`<div data-v-98e816c9>`);
          if (msg.author === "user") {
            _push(ssrRenderComponent(UserMessageBubble, { message: msg }, null, _parent));
          } else if (msg.content?.length > 0) {
            _push(ssrRenderComponent(InterlocutorMessageBubble, { message: msg }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div><footer class="chat-footer" data-v-98e816c9>`);
        _push(ssrRenderComponent(unref(Textarea), {
          modelValue: userInput.value,
          "onUpdate:modelValue": ($event) => userInput.value = $event,
          placeholder: unref(t)("chat.placeholder"),
          maxlength: "300",
          class: "flex-grow !shadow-none",
          rows: "1",
          style: { "border-radius": "20px", "max-height": "100px" },
          size: "large",
          "auto-resize": true,
          autofocus: "",
          onKeydown: sendMessage
        }, null, _parent));
        _push(ssrRenderComponent(unref(Button), {
          icon: "pi pi-send",
          disabled: isLoading.value || !userInput.value.trim(),
          onClick: sendMessage
        }, null, _parent));
        _push(`</footer><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/chat/Chat.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Chat = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-98e816c9"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const isMobileView = ref(false);
    const isDialogVisible = ref(false);
    const checkScreenWidth = () => {
      isMobileView.value = window.innerWidth <= 840;
    };
    onMounted(() => {
      checkScreenWidth();
      window.addEventListener("resize", checkScreenWidth);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", checkScreenWidth);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><footer class="mt-8 border-t border-surface-800/60 footer-container" data-v-5cc648b3><div class="w-full max-w-5xl mx-auto px-4 py-6" data-v-5cc648b3><div class="footer-layout flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 footer-icons-container" data-v-5cc648b3><div class="flex items-center gap-2" data-v-5cc648b3><a href="https://github.com/simone-bianco" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("aria-label", unref(t)("hero.githubAriaLabel"))} data-v-5cc648b3>`);
      _push(ssrRenderComponent(unref(Button), {
        icon: "pi pi-github",
        severity: "secondary",
        text: "",
        rounded: ""
      }, null, _parent));
      _push(`</a><a href="https://www.linkedin.com/in/simone-b-bb6761200/" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("aria-label", unref(t)("hero.linkedinAriaLabel"))} data-v-5cc648b3>`);
      _push(ssrRenderComponent(unref(Button), {
        icon: "pi pi-linkedin",
        severity: "secondary",
        text: "",
        rounded: ""
      }, null, _parent));
      _push(`</a><a href="mailto:simone9292@live.com"${ssrRenderAttr("aria-label", unref(t)("hero.contactLabel"))} data-v-5cc648b3>`);
      _push(ssrRenderComponent(unref(Button), {
        icon: "pi pi-envelope",
        severity: "secondary",
        text: "",
        rounded: ""
      }, null, _parent));
      _push(`</a>`);
      if (isMobileView.value) {
        _push(ssrRenderComponent(unref(Button), {
          icon: "pi pi-info-circle",
          "aria-label": "Apprendistato",
          severity: "primary",
          rounded: "",
          class: "pulsing-aura",
          onClick: ($event) => isDialogVisible.value = true
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!isMobileView.value) {
        _push(`<div class="max-w-md text-sm text-surface-400 flex items-start gap-2" data-v-5cc648b3><i class="pi pi-info-circle mt-0.5 text-primary-400/80" aria-hidden="true" data-v-5cc648b3></i><p class="leading-snug" data-v-5cc648b3>${ssrInterpolate(unref(t)("hero.apprenticeshipNotice"))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></footer>`);
      _push(ssrRenderComponent(unref(Dialog), {
        visible: isDialogVisible.value,
        "onUpdate:visible": ($event) => isDialogVisible.value = $event,
        modal: "",
        header: "Apprendistato",
        style: { width: "25rem" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="m-0" data-v-5cc648b3${_scopeId}>${ssrInterpolate(unref(t)("hero.apprenticeshipNotice"))}</p>`);
          } else {
            return [
              createVNode("p", { class: "m-0" }, toDisplayString(unref(t)("hero.apprenticeshipNotice")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/common/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SiteFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5cc648b3"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const page = usePage();
    const { setDarkMode } = useLayout();
    watch(
      () => page.props?.theme?.dark,
      () => setDarkMode(true),
      { immediate: true }
    );
    const currentRouteName = computed(() => page.props?.currentRoute);
    const menuKey = computed(() => page.url);
    const menuItems = computed(() => [
      {
        key: "home",
        routeName: "home",
        label: t("menu.home"),
        command: () => router.get(route("home"))
      },
      {
        key: "projects",
        routeName: "projects",
        label: t("menu.projects"),
        command: () => router.get(route("projects"))
      },
      {
        key: "resume",
        routeName: "resume",
        label: t("menu.resume"),
        command: () => window.open(route("resume"), "_blank")
      },
      {
        key: "thesis",
        routeName: "thesis",
        label: t("menu.thesis"),
        command: () => window.open(route("thesis"), "_blank")
      },
      {
        key: "contact",
        routeName: "contact",
        label: t("menu.contact"),
        command: () => router.get(route("contact"))
      }
    ]);
    const drawerVisible = ref(false);
    const isRouteActive = (itemRoute) => {
      if (!itemRoute) return false;
      return currentRouteName.value ? currentRouteName.value === itemRoute : route().current(itemRoute);
    };
    const pt = {
      root: { class: "dark:bg-transparent dark:border-none p-0" },
      menu: { class: "flex gap-2" },
      itemContent: { class: "py-2" },
      action: (options) => {
        const itemRoute = options?.item?.routeName;
        const isActive = itemRoute ? currentRouteName.value ? currentRouteName.value === itemRoute : route().current(itemRoute) : false;
        const base = "transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium";
        const state = isActive ? "text-surface-0 bg-surface-800" : "text-surface-400 hover:text-surface-100";
        return {
          class: `${base} ${state}`,
          "aria-current": isActive ? "page" : void 0
        };
      },
      submenuIcon: { class: "hidden" }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex min-h-screen flex-col bg-surface-950" }, _attrs))}><div class="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-1 sm:px-6 bg-surface-950/80 backdrop-blur-sm border-surface-800"><div class="flex items-center"><button type="button" class="menu-toggle inline-flex items-center justify-center rounded-full p-2 text-surface-200 hover:bg-surface-800 focus:outline-none focus:ring-2 focus:ring-primary-500" aria-label="Open menu"><span class="pi pi-bars text-lg"></span></button></div><div class="flex menubar">`);
      _push(ssrRenderComponent(unref(Menubar), {
        key: menuKey.value,
        model: menuItems.value,
        pt,
        breakpoint: "275px"
      }, null, _parent));
      _push(`</div><div class="flex items-center w-20 justify-end">`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(Drawer), {
        visible: drawerVisible.value,
        "onUpdate:visible": ($event) => drawerVisible.value = $event,
        position: "left",
        dismissable: true,
        showCloseIcon: true,
        blockScroll: true,
        header: "Menu"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<nav class="mt-2"${_scopeId}><ul class="flex flex-col gap-2"${_scopeId}><!--[-->`);
            ssrRenderList(menuItems.value, (item) => {
              _push2(`<li${_scopeId}><button type="button"${ssrRenderAttr("aria-current", isRouteActive(item.routeName) ? "page" : void 0)} class="${ssrRenderClass([
                "w-full text-left transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium",
                isRouteActive(item.routeName) ? "text-surface-0 bg-surface-800" : "text-surface-400 hover:text-surface-100"
              ])}"${_scopeId}>${ssrInterpolate(item.label)}</button></li>`);
            });
            _push2(`<!--]--></ul></nav>`);
          } else {
            return [
              createVNode("nav", { class: "mt-2" }, [
                createVNode("ul", { class: "flex flex-col gap-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(menuItems.value, (item) => {
                    return openBlock(), createBlock("li", {
                      key: item.key
                    }, [
                      createVNode("button", {
                        type: "button",
                        onClick: ($event) => {
                          item.command();
                          drawerVisible.value = false;
                        },
                        "aria-current": isRouteActive(item.routeName) ? "page" : void 0,
                        class: [
                          "w-full text-left transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium",
                          isRouteActive(item.routeName) ? "text-surface-0 bg-surface-800" : "text-surface-400 hover:text-surface-100"
                        ]
                      }, toDisplayString(item.label), 11, ["onClick", "aria-current"])
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative z-10 w-full flex-grow px-4 pt-16 pb-8 sm:px-6">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(Chat, {
        chatHistory: unref(page).props.chatHistory,
        class: "mb-10"
      }, null, _parent));
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/GuestLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
