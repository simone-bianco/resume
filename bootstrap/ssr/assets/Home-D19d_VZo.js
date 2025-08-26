import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, createBlock, createCommentVNode, toDisplayString, openBlock, useSSRContext, reactive, watch, resolveDirective, Fragment, renderList, createTextVNode, withDirectives, onMounted, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { usePage, router } from "@inertiajs/vue3";
import { useI18n } from "vue-i18n";
import { route } from "ziggy-js";
import Button from "primevue/button";
import Menu from "primevue/menu";
import Image from "primevue/image";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import Menubar from "primevue/menubar";
import Card from "primevue/card";
import { Divider, Timeline, Card as Card$1 } from "primevue";
import axios from "axios";
import Textarea from "primevue/textarea";
import ProgressSpinner from "primevue/progressspinner";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "language-switcher" }, _attrs))} data-v-f2caadd0>`);
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
            _push2(`<a${ssrRenderAttrs(mergeProps(props.action, { class: "flex align-items-center gap-2 w-full" }))} data-v-f2caadd0${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Image), {
              src: item.flagUrl,
              alt: item.lang + " flag",
              width: "18",
              height: "18"
            }, null, _parent2, _scopeId));
            _push2(`<span data-v-f2caadd0${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            if (item.lang === unref(locale)) {
              _push2(`<i class="pi pi-check ml-auto" data-v-f2caadd0${_scopeId}></i>`);
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/inputs/Switchers/LanguageSwitcher.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const LanguageSwitcher = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-f2caadd0"]]);
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
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const page = usePage();
    const { setDarkMode } = useLayout();
    watch(
      () => page.props?.theme?.dark,
      // (isDarkMode) => setDarkMode(isDarkMode ?? false),
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
      }
    ]);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex min-h-screen flex-col bg-surface-950" }, _attrs))}><div class="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-1 sm:px-6 bg-surface-950/80 backdrop-blur-sm border-surface-800"><div></div><div class="flex menubar">`);
      _push(ssrRenderComponent(unref(Menubar), {
        key: menuKey.value,
        model: menuItems.value,
        pt,
        breakpoint: "275px"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(LanguageSwitcher, null, null, _parent));
      _push(`</div></div><div class="relative z-10 w-full px-4 pb-8 sm:px-6">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/GuestLayout.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const heroCardAnimation = {
      enterClass: "animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000",
      leaveClass: "animate-leave fade-out-0"
    };
    const heroImageAnimation = {
      enterClass: "animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000",
      leaveClass: "animate-leave fade-out-0"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = resolveDirective("animateonscroll");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center px-4 py-8 sm:py-16 md:py-24" }, _attrs))} data-v-7a0e1b70><div class="flex flex-col md:flex-row items-center w-full max-w-sm md:max-w-5xl" data-v-7a0e1b70><div class="hero-image-container w-full md:w-6/12 md:order-2 md:-ml-12" data-v-7a0e1b70><div class="relative w-full h-64 md:h-[500px] rounded-2xl shadow-xl" data-v-7a0e1b70>`);
      _push(ssrRenderComponent(unref(Image), mergeProps({
        src: "https://www.dnafactory.it/images/team/simonebig_1f997d40e8.png",
        alt: unref(t)("hero.imageAlt"),
        "image-class": "hero-image"
      }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, heroImageAnimation)), null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(Card), mergeProps({ class: "hero-card sb-fancy-card relative z-10 w-11/12 md:w-7/12 rounded-2xl bg-surface-800 -mt-16 md:mt-0 md:order-1" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, heroCardAnimation)), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 md:p-8" data-v-7a0e1b70${_scopeId}><h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1" data-v-7a0e1b70${_scopeId}>${ssrInterpolate(unref(t)("hero.name"))}</h1><p class="text-md sm:text-lg text-primary-400 font-medium mb-4" data-v-7a0e1b70${_scopeId}>${ssrInterpolate(unref(t)("hero.title"))}</p>`);
            _push2(ssrRenderComponent(unref(Divider), null, null, _parent2, _scopeId));
            _push2(`<p class="text-sm sm:text-base max-w-lg mb-6 text-[var(--text-color)]" data-v-7a0e1b70${_scopeId}>${ssrInterpolate(unref(t)("hero.bio"))}</p><div class="flex items-center gap-3" data-v-7a0e1b70${_scopeId}><a href="https://github.com/simone-bianco" target="_blank" rel="noopener noreferrer" data-v-7a0e1b70${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              icon: "pi pi-github",
              severity: "secondary",
              text: "",
              rounded: "",
              "aria-label": unref(t)("hero.githubAriaLabel")
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" data-v-7a0e1b70${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              icon: "pi pi-linkedin",
              severity: "secondary",
              text: "",
              rounded: "",
              "aria-label": unref(t)("hero.linkedinAriaLabel")
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="mailto:simone9292@live.com" data-v-7a0e1b70${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              label: unref(t)("hero.contactLabel"),
              icon: "pi pi-envelope",
              severity: "primary",
              size: "small"
            }, null, _parent2, _scopeId));
            _push2(`</a></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 md:p-8" }, [
                createVNode("h1", { class: "text-2xl sm:text-3xl lg:text-4xl font-bold mb-1" }, toDisplayString(unref(t)("hero.name")), 1),
                createVNode("p", { class: "text-md sm:text-lg text-primary-400 font-medium mb-4" }, toDisplayString(unref(t)("hero.title")), 1),
                createVNode(unref(Divider)),
                createVNode("p", { class: "text-sm sm:text-base max-w-lg mb-6 text-[var(--text-color)]" }, toDisplayString(unref(t)("hero.bio")), 1),
                createVNode("div", { class: "flex items-center gap-3" }, [
                  createVNode("a", {
                    href: "https://github.com/simone-bianco",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    createVNode(unref(Button), {
                      icon: "pi pi-github",
                      severity: "secondary",
                      text: "",
                      rounded: "",
                      "aria-label": unref(t)("hero.githubAriaLabel")
                    }, null, 8, ["aria-label"])
                  ]),
                  createVNode("a", {
                    href: "https://www.linkedin.com/",
                    target: "_blank",
                    rel: "noopener noreferrer"
                  }, [
                    createVNode(unref(Button), {
                      icon: "pi pi-linkedin",
                      severity: "secondary",
                      text: "",
                      rounded: "",
                      "aria-label": unref(t)("hero.linkedinAriaLabel")
                    }, null, 8, ["aria-label"])
                  ]),
                  createVNode("a", { href: "mailto:simone9292@live.com" }, [
                    createVNode(unref(Button), {
                      label: unref(t)("hero.contactLabel"),
                      icon: "pi pi-envelope",
                      severity: "primary",
                      size: "small"
                    }, null, 8, ["label"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/home/Hero.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-7a0e1b70"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const skillAnimations = [
      { enterClass: "animate-enter fade-in-10 spin-in-[-45deg] slide-in-from-t-12 animate-duration-1000", leaveClass: "animate-leave fade-out-0" },
      { enterClass: "animate-enter fade-in-10 zoom-in-50 slide-in-from-t-20 animate-duration-1000", leaveClass: "animate-leave fade-out-0" },
      { enterClass: "animate-enter fade-in-10 spin-in-[45deg] slide-in-from-t-16 animate-duration-1000", leaveClass: "animate-leave fade-out-0" },
      { enterClass: "animate-enter fade-in-10 spin-in-45 slide-in-from-b-12 animate-duration-1000", leaveClass: "animate-leave fade-out-0" },
      { enterClass: "animate-enter fade-in-10 zoom-in-50 slide-in-from-b-20 animate-duration-1000", leaveClass: "animate-leave fade-out-0" },
      { enterClass: "animate-enter fade-in-10 spin-in-[-45deg] slide-in-from-b-16 animate-duration-1000", leaveClass: "animate-leave fade-out-0" }
    ];
    const skillsData = [
      { icon: "pi pi-code", titleKey: "skills.languages.title", descriptionKey: "skills.languages.items" },
      { icon: "pi pi-server", titleKey: "skills.frameworks.title", descriptionKey: "skills.frameworks.items" },
      { icon: "pi pi-database", titleKey: "skills.databases.title", descriptionKey: "skills.databases.items" },
      { icon: "pi pi-box", titleKey: "skills.tools.title", descriptionKey: "skills.tools.items" },
      { icon: "pi pi-sitemap", titleKey: "skills.architectures.title", descriptionKey: "skills.architectures.items" },
      { icon: "pi pi-globe", titleKey: "skills.locales.title", descriptionKey: "skills.locales.items" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = resolveDirective("animateonscroll");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 py-16 sm:py-24" }, _attrs))} data-v-c63d8884><div class="container mx-auto max-w-6xl" data-v-c63d8884><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" data-v-c63d8884><!--[-->`);
      ssrRenderList(skillsData, (skill, index) => {
        _push(ssrRenderComponent(unref(Card), mergeProps({
          key: skill.titleKey,
          class: "skill-card sb-fancy-card"
        }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, skillAnimations[index])), {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="skill-icon-wrapper" data-v-c63d8884${_scopeId}><i class="${ssrRenderClass(skill.icon)}" data-v-c63d8884${_scopeId}></i></div><h3 class="skill-title" data-v-c63d8884${_scopeId}>${ssrInterpolate(unref(t)(skill.titleKey))}</h3><p class="skill-description" data-v-c63d8884${_scopeId}>${ssrInterpolate(unref(t)(skill.descriptionKey))}</p>`);
            } else {
              return [
                createVNode("div", { class: "skill-icon-wrapper" }, [
                  createVNode("i", {
                    class: skill.icon
                  }, null, 2)
                ]),
                createVNode("h3", { class: "skill-title" }, toDisplayString(unref(t)(skill.titleKey)), 1),
                createVNode("p", { class: "skill-description" }, toDisplayString(unref(t)(skill.descriptionKey)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/home/Skills.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Skills = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-c63d8884"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Experience",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const experienceAnimation = {
      enterClass: "animate-enter fade-in-10 zoom-in-50 slide-in-from-l-20 animate-duration-1000",
      leaveClass: "animate-leave fade-out-0"
    };
    const experiences = ref([
      {
        titleKey: "experience.dnafactory.title",
        companyKey: "experience.dnafactory.company",
        dateKey: "experience.dnafactory.date",
        descriptionKeys: [
          "experience.dnafactory.desc1",
          "experience.dnafactory.desc2",
          "experience.dnafactory.desc3",
          "experience.dnafactory.desc4",
          "experience.dnafactory.desc5",
          "experience.dnafactory.desc6",
          "experience.dnafactory.desc7",
          "experience.dnafactory.desc8",
          "experience.dnafactory.desc9",
          "experience.dnafactory.desc10",
          "experience.dnafactory.desc11",
          "experience.dnafactory.desc12",
          "experience.dnafactory.desc13"
        ],
        icon: "pi pi-briefcase",
        color: "#FCC018"
      },
      {
        titleKey: "experience.masters.title",
        companyKey: "experience.masters.institution",
        dateKey: "experience.masters.date",
        descriptionKeys: [
          "experience.masters.desc1",
          "experience.masters.desc2"
        ],
        icon: "pi pi-graduation-cap",
        color: "#4CAF50"
      },
      {
        titleKey: "experience.freelance.title",
        companyKey: "experience.freelance.company",
        dateKey: "experience.freelance.date",
        descriptionKeys: ["experience.freelance.desc1"],
        icon: "pi pi-user",
        color: "#182bfc"
      },
      {
        titleKey: "experience.diploma.title",
        companyKey: "experience.diploma.institution",
        dateKey: "experience.diploma.date",
        descriptionKeys: [
          "experience.diploma.desc1",
          "experience.diploma.desc2"
        ],
        icon: "pi pi-book",
        color: "#FF9800"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = resolveDirective("animateonscroll");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 py-16 sm:py-24" }, _attrs))} data-v-e6a7145d><div class="container mx-auto max-w-6xl" data-v-e6a7145d><div class="text-center mb-16" data-v-e6a7145d><h2 class="text-3xl sm:text-4xl font-bold text-[var(--text-color)] mb-4" data-v-e6a7145d>${ssrInterpolate(unref(t)("experience.sectionTitle"))}</h2></div>`);
      _push(ssrRenderComponent(unref(Timeline), {
        value: experiences.value,
        align: "alternate",
        class: "customized-timeline timeline-view"
      }, {
        marker: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="marker-icon" style="${ssrRenderStyle({ backgroundColor: slotProps.item.color })}" data-v-e6a7145d${_scopeId}><i class="${ssrRenderClass(slotProps.item.icon)}" data-v-e6a7145d${_scopeId}></i></span>`);
          } else {
            return [
              createVNode("span", {
                class: "marker-icon",
                style: { backgroundColor: slotProps.item.color }
              }, [
                createVNode("i", {
                  class: slotProps.item.icon
                }, null, 2)
              ], 4)
            ];
          }
        }),
        content: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Card$1), mergeProps({ class: "experience-card mt-5" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, experienceAnimation)), {
              title: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)(slotProps.item.titleKey))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)(slotProps.item.titleKey)), 1)
                  ];
                }
              }),
              subtitle: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="experience-subtitle" data-v-e6a7145d${_scopeId2}><span class="company" data-v-e6a7145d${_scopeId2}>${ssrInterpolate(unref(t)(slotProps.item.companyKey))}</span><span class="separator" data-v-e6a7145d${_scopeId2}> | </span><span class="date" data-v-e6a7145d${_scopeId2}>${ssrInterpolate(unref(t)(slotProps.item.dateKey))}</span></div>`);
                  _push3(ssrRenderComponent(unref(Divider), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "experience-subtitle" }, [
                      createVNode("span", { class: "company" }, toDisplayString(unref(t)(slotProps.item.companyKey)), 1),
                      createVNode("span", { class: "separator" }, " | "),
                      createVNode("span", { class: "date" }, toDisplayString(unref(t)(slotProps.item.dateKey)), 1)
                    ]),
                    createVNode(unref(Divider))
                  ];
                }
              }),
              content: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul class="description-list" data-v-e6a7145d${_scopeId2}><!--[-->`);
                  ssrRenderList(slotProps.item.descriptionKeys, (descKey) => {
                    _push3(`<li data-v-e6a7145d${_scopeId2}>${ssrInterpolate(unref(t)(descKey))}</li>`);
                  });
                  _push3(`<!--]--></ul>`);
                } else {
                  return [
                    createVNode("ul", { class: "description-list" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(slotProps.item.descriptionKeys, (descKey) => {
                        return openBlock(), createBlock("li", { key: descKey }, toDisplayString(unref(t)(descKey)), 1);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              withDirectives((openBlock(), createBlock(unref(Card$1), { class: "experience-card mt-5" }, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)(slotProps.item.titleKey)), 1)
                ]),
                subtitle: withCtx(() => [
                  createVNode("div", { class: "experience-subtitle" }, [
                    createVNode("span", { class: "company" }, toDisplayString(unref(t)(slotProps.item.companyKey)), 1),
                    createVNode("span", { class: "separator" }, " | "),
                    createVNode("span", { class: "date" }, toDisplayString(unref(t)(slotProps.item.dateKey)), 1)
                  ]),
                  createVNode(unref(Divider))
                ]),
                content: withCtx(() => [
                  createVNode("ul", { class: "description-list" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(slotProps.item.descriptionKeys, (descKey) => {
                      return openBlock(), createBlock("li", { key: descKey }, toDisplayString(unref(t)(descKey)), 1);
                    }), 128))
                  ])
                ]),
                _: 2
              }, 1024)), [
                [_directive_animateonscroll, experienceAnimation]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="cards-only" data-v-e6a7145d><!--[-->`);
      ssrRenderList(experiences.value, (exp, idx) => {
        _push(`<div data-v-e6a7145d>`);
        _push(ssrRenderComponent(unref(Card$1), mergeProps({ class: "experience-card mt-5" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, experienceAnimation)), {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)(exp.titleKey))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)(exp.titleKey)), 1)
              ];
            }
          }),
          subtitle: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="experience-subtitle" data-v-e6a7145d${_scopeId}><span class="company" data-v-e6a7145d${_scopeId}>${ssrInterpolate(unref(t)(exp.companyKey))}</span><span class="separator" data-v-e6a7145d${_scopeId}> | </span><span class="date" data-v-e6a7145d${_scopeId}>${ssrInterpolate(unref(t)(exp.dateKey))}</span></div>`);
              _push2(ssrRenderComponent(unref(Divider), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "experience-subtitle" }, [
                  createVNode("span", { class: "company" }, toDisplayString(unref(t)(exp.companyKey)), 1),
                  createVNode("span", { class: "separator" }, " | "),
                  createVNode("span", { class: "date" }, toDisplayString(unref(t)(exp.dateKey)), 1)
                ]),
                createVNode(unref(Divider))
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul class="description-list" data-v-e6a7145d${_scopeId}><!--[-->`);
              ssrRenderList(exp.descriptionKeys, (descKey) => {
                _push2(`<li data-v-e6a7145d${_scopeId}>${ssrInterpolate(unref(t)(descKey))}</li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                createVNode("ul", { class: "description-list" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(exp.descriptionKeys, (descKey) => {
                    return openBlock(), createBlock("li", { key: descKey }, toDisplayString(unref(t)(descKey)), 1);
                  }), 128))
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/home/Experience.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Experience = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e6a7145d"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "UserMessageBubble",
  __ssrInlineRender: true,
  props: {
    message: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "message-wrapper" }, _attrs))} data-v-4df5e3a6><div class="message-bubble" data-v-4df5e3a6><p class="message-content" data-v-4df5e3a6>${ssrInterpolate(_ctx.message.content)}</p></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/chat/UserMessageBubble.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const UserMessageBubble = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-4df5e3a6"]]);
const avatar = "/build/assets/avatar-C7D1tYvk.png";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "InterlocutorMessageBubble",
  __ssrInlineRender: true,
  props: {
    message: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "message-wrapper" }, _attrs))} data-v-91f85fc7>`);
      _push(ssrRenderComponent(unref(Image), {
        src: unref(avatar),
        class: "w-8 h-8 rounded-full flex-shrink-0"
      }, null, _parent));
      _push(`<div class="${ssrRenderClass([{ "bubble-danger": _ctx.message.type === "error" }, "message-bubble"])}" data-v-91f85fc7>`);
      if (_ctx.message.type === "thinking") {
        _push(ssrRenderComponent(unref(ProgressSpinner), {
          style: { "width": "20px", "height": "20px" },
          strokeWidth: "6"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="message-content" data-v-91f85fc7>${ssrInterpolate(_ctx.message.content)}</p></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/chat/InterlocutorMessageBubble.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const InterlocutorMessageBubble = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-91f85fc7"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/chat/ChatBubble.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ChatBubble = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bd4edc4a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      _push(`<div${ssrRenderAttrs(mergeProps(_ctx.$attrs, _attrs))} data-v-18f99f1f>`);
      _push(ssrRenderComponent(ChatBubble, {
        style: [
          chatWindowState.value === 0 ? null : { display: "none" },
          { bottom: _ctx.bubbleBottom, right: _ctx.bubbleRight }
        ],
        class: "fixed-chat-element",
        onOpenChat: ($event) => chatWindowState.value = 2
        /* open */
      }, null, _parent));
      _push(`<div class="fixed-chat-element chat-window-container" style="${ssrRenderStyle([
        chatWindowState.value !== 0 ? null : { display: "none" },
        { bottom: _ctx.windowBottom, right: _ctx.windowRight }
      ])}" data-v-18f99f1f><div class="${ssrRenderClass([{ "is-minimized": isMinimized.value }, "chat-window"])}" style="${ssrRenderStyle({ height: isMinimized.value ? "auto" : _ctx.chatHeight })}" data-v-18f99f1f><div class="chat-close-button" data-v-18f99f1f>`);
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
      _push(`</div><header class="chat-header" data-v-18f99f1f><span class="chat-title" data-v-18f99f1f>${ssrInterpolate(unref(t)("chat.title"))}</span>`);
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
        _push(`<!--[--><div class="chat-history" data-v-18f99f1f><!--[-->`);
        ssrRenderList(messages.value, (msg) => {
          _push(`<div data-v-18f99f1f>`);
          if (msg.author === "user") {
            _push(ssrRenderComponent(UserMessageBubble, { message: msg }, null, _parent));
          } else {
            _push(ssrRenderComponent(InterlocutorMessageBubble, { message: msg }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div><footer class="chat-footer" data-v-18f99f1f>`);
        _push(ssrRenderComponent(unref(Textarea), {
          ref: "chatTextarea",
          modelValue: userInput.value,
          "onUpdate:modelValue": ($event) => userInput.value = $event,
          placeholder: unref(t)("chat.placeholder"),
          autoResize: "",
          rows: "1",
          maxlength: "300",
          class: "flex-grow !shadow-none",
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/chat/Chat.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Chat = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-18f99f1f"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  props: {
    chatHistory: { default: () => [] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$8, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Hero, { class: "mt-10 md:mt-24" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Skills, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Experience, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Chat, {
              chatHistory: props.chatHistory,
              class: "mb-10"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Hero, { class: "mt-10 md:mt-24" }),
              createVNode(Skills),
              createVNode(Experience),
              createVNode(Chat, {
                chatHistory: props.chatHistory,
                class: "mb-10"
              }, null, 8, ["chatHistory"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
