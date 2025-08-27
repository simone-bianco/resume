import { defineComponent, resolveDirective, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext, ref, createBlock, openBlock, Fragment, renderList, createTextVNode, withDirectives } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./GuestLayout-CToSNgqI.js";
import Card from "primevue/card";
import Image from "primevue/image";
import Button from "primevue/button";
import { useI18n } from "vue-i18n";
import { Divider, Timeline, Card as Card$1 } from "primevue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "ziggy-js";
import "primevue/menu";
import "primevue/menubar";
import "primevue/drawer";
import "axios";
import "primevue/textarea";
import "primevue/progressspinner";
import "primevue/dialog";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const heroCardAnimation = {
      enterClass: "animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000"
    };
    const heroImageAnimation = {
      enterClass: "animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = resolveDirective("animateonscroll");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center px-4 py-8 sm:py-16 md:py-24" }, _attrs))} data-v-dd9970b9><div class="flex flex-col md:flex-row items-center w-full max-w-sm md:max-w-5xl" data-v-dd9970b9><div class="hero-image-container w-full md:w-6/12 md:order-2 md:-ml-12" data-v-dd9970b9><div class="relative w-full h-64 md:h-[500px] rounded-2xl shadow-xl" data-v-dd9970b9>`);
      _push(ssrRenderComponent(unref(Image), mergeProps({
        src: "https://www.dnafactory.it/images/team/simonebig_1f997d40e8.png",
        alt: unref(t)("hero.imageAlt"),
        "image-class": "hero-image"
      }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, heroImageAnimation)), null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(Card), mergeProps({ class: "hero-card sb-fancy-card relative z-10 w-11/12 md:w-7/12 rounded-2xl bg-surface-800 -mt-16 md:mt-0 md:order-1" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, heroCardAnimation)), {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="hero-card-content p-6 md:p-8" data-v-dd9970b9${_scopeId}><h1 class="hero-title text-2xl sm:text-3xl lg:text-4xl font-bold mb-1" data-v-dd9970b9${_scopeId}>${ssrInterpolate(unref(t)("hero.name"))}</h1><p class="text-md sm:text-lg text-primary-400 font-medium mb-4" data-v-dd9970b9${_scopeId}>${ssrInterpolate(unref(t)("hero.title"))}</p>`);
            _push2(ssrRenderComponent(unref(Divider), null, null, _parent2, _scopeId));
            _push2(`<p class="text-sm sm:text-base max-w-lg mb-6 text-[var(--text-color)]" data-v-dd9970b9${_scopeId}>${ssrInterpolate(unref(t)("hero.bio"))}</p><div class="flex items-center gap-3" data-v-dd9970b9${_scopeId}><a href="https://github.com/simone-bianco" target="_blank" rel="noopener noreferrer" data-v-dd9970b9${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              icon: "pi pi-github",
              severity: "secondary",
              text: "",
              rounded: "",
              "aria-label": unref(t)("hero.githubAriaLabel")
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="https://www.linkedin.com/in/simone-b-bb6761200/" target="_blank" rel="noopener noreferrer" data-v-dd9970b9${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              icon: "pi pi-linkedin",
              severity: "secondary",
              text: "",
              rounded: "",
              "aria-label": unref(t)("hero.linkedinAriaLabel")
            }, null, _parent2, _scopeId));
            _push2(`</a><a href="mailto:simone9292@live.com" data-v-dd9970b9${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Button), {
              label: unref(t)("hero.contactLabel"),
              icon: "pi pi-envelope",
              severity: "primary",
              size: "small"
            }, null, _parent2, _scopeId));
            _push2(`</a></div></div>`);
          } else {
            return [
              createVNode("div", { class: "hero-card-content p-6 md:p-8" }, [
                createVNode("h1", { class: "hero-title text-2xl sm:text-3xl lg:text-4xl font-bold mb-1" }, toDisplayString(unref(t)("hero.name")), 1),
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
                    href: "https://www.linkedin.com/in/simone-b-bb6761200/",
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/home/Hero.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-dd9970b9"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Skills",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const skillAnimations = [
      { enterClass: "animate-enter fade-in-10 spin-in-[-45deg] slide-in-from-t-12 animate-duration-1000" },
      { enterClass: "animate-enter fade-in-10 zoom-in-50 slide-in-from-t-20 animate-duration-1000" },
      { enterClass: "animate-enter fade-in-10 spin-in-[45deg] slide-in-from-t-16 animate-duration-1000" },
      { enterClass: "animate-enter fade-in-10 spin-in-45 slide-in-from-b-12 animate-duration-1000" },
      { enterClass: "animate-enter fade-in-10 zoom-in-50 slide-in-from-b-20 animate-duration-1000" },
      { enterClass: "animate-enter fade-in-10 spin-in-[-45deg] slide-in-from-b-16 animate-duration-1000" }
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 py-16 sm:py-24" }, _attrs))} data-v-9eeb7da8><div class="container mx-auto max-w-6xl" data-v-9eeb7da8><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center" data-v-9eeb7da8><!--[-->`);
      ssrRenderList(skillsData, (skill, index) => {
        _push(ssrRenderComponent(unref(Card), mergeProps({
          key: skill.titleKey,
          class: "skill-card sb-fancy-card"
        }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, skillAnimations[index])), {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="skill-icon-wrapper" data-v-9eeb7da8${_scopeId}><i class="${ssrRenderClass(skill.icon)}" data-v-9eeb7da8${_scopeId}></i></div><h3 class="skill-title" data-v-9eeb7da8${_scopeId}>${ssrInterpolate(unref(t)(skill.titleKey))}</h3><p class="skill-description" data-v-9eeb7da8${_scopeId}>${ssrInterpolate(unref(t)(skill.descriptionKey))}</p>`);
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/home/Skills.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Skills = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9eeb7da8"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Experience",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const experienceAnimation = {
      enterClass: "animate-enter fade-in-10 zoom-in-50 slide-in-from-l-20 animate-duration-1000"
    };
    const experiences = ref([
      {
        titleKey: "experience.dnafactory.title",
        companyKey: "experience.dnafactory.company",
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
        descriptionKeys: ["experience.freelance.desc1"],
        icon: "pi pi-user",
        color: "#182bfc"
      },
      {
        titleKey: "experience.diploma.title",
        companyKey: "experience.diploma.institution",
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
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-4 py-16 sm:py-24" }, _attrs))} data-v-c8fc8bec><div class="container mx-auto max-w-6xl" data-v-c8fc8bec><div class="text-center mb-16" data-v-c8fc8bec><h2 class="text-3xl sm:text-4xl font-bold text-[var(--text-color)] mb-4" data-v-c8fc8bec>${ssrInterpolate(unref(t)("experience.sectionTitle"))}</h2></div>`);
      _push(ssrRenderComponent(unref(Timeline), {
        value: experiences.value,
        align: "alternate",
        class: "customized-timeline timeline-view"
      }, {
        marker: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="marker-icon" style="${ssrRenderStyle({ backgroundColor: slotProps.item.color })}" data-v-c8fc8bec${_scopeId}><i class="${ssrRenderClass(slotProps.item.icon)}" data-v-c8fc8bec${_scopeId}></i></span>`);
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
                  _push3(`<div class="experience-subtitle" data-v-c8fc8bec${_scopeId2}><span class="company" data-v-c8fc8bec${_scopeId2}>${ssrInterpolate(unref(t)(slotProps.item.companyKey))}</span></div>`);
                  _push3(ssrRenderComponent(unref(Divider), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "experience-subtitle" }, [
                      createVNode("span", { class: "company" }, toDisplayString(unref(t)(slotProps.item.companyKey)), 1)
                    ]),
                    createVNode(unref(Divider))
                  ];
                }
              }),
              content: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<ul class="description-list" data-v-c8fc8bec${_scopeId2}><!--[-->`);
                  ssrRenderList(slotProps.item.descriptionKeys, (descKey) => {
                    _push3(`<li data-v-c8fc8bec${_scopeId2}>${ssrInterpolate(unref(t)(descKey))}</li>`);
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
                    createVNode("span", { class: "company" }, toDisplayString(unref(t)(slotProps.item.companyKey)), 1)
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
      _push(`<div class="cards-only" data-v-c8fc8bec><!--[-->`);
      ssrRenderList(experiences.value, (exp, idx) => {
        _push(`<div data-v-c8fc8bec>`);
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
              _push2(`<div class="experience-subtitle" data-v-c8fc8bec${_scopeId}><span class="company" data-v-c8fc8bec${_scopeId}>${ssrInterpolate(unref(t)(exp.companyKey))}</span><span class="separator" data-v-c8fc8bec${_scopeId}> | </span></div>`);
              _push2(ssrRenderComponent(unref(Divider), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "experience-subtitle" }, [
                  createVNode("span", { class: "company" }, toDisplayString(unref(t)(exp.companyKey)), 1),
                  createVNode("span", { class: "separator" }, " | ")
                ]),
                createVNode(unref(Divider))
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul class="description-list" data-v-c8fc8bec${_scopeId}><!--[-->`);
              ssrRenderList(exp.descriptionKeys, (descKey) => {
                _push2(`<li data-v-c8fc8bec${_scopeId}>${ssrInterpolate(unref(t)(descKey))}</li>`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/custom/home/Experience.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Experience = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c8fc8bec"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(Hero, { class: "mt-10 md:mt-24" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Experience, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(Skills, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(Hero, { class: "mt-10 md:mt-24" }),
              createVNode(Experience),
              createVNode(Skills)
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
