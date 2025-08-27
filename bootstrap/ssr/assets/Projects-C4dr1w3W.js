import { defineComponent, resolveDirective, withCtx, unref, mergeProps, createSlots, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, withDirectives, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrGetDirectiveProps, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./GuestLayout-CToSNgqI.js";
import Card from "primevue/card";
import { Divider } from "primevue";
import { useI18n } from "vue-i18n";
import { route } from "ziggy-js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@inertiajs/vue3";
import "primevue/button";
import "primevue/menu";
import "primevue/image";
import "primevue/menubar";
import "primevue/drawer";
import "axios";
import "primevue/textarea";
import "primevue/progressspinner";
import "primevue/dialog";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Projects",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const projectEnter = {
      enterClass: "animate-enter fade-in-10 slide-in-from-b-12 animate-duration-1000"
    };
    const projects = [
      {
        titleKey: "projects.items.ammiraglio.title",
        categoryKey: "dnafactory",
        bodyKey: "projects.items.ammiraglio.body",
        linkPlaceholderKey: "projects.linkPlaceholder.private"
      },
      {
        titleKey: "projects.items.dieteincloud.title",
        categoryKey: "dnafactory",
        bodyKey: "projects.items.dieteincloud.body",
        link: "https://www.dieteincloud.it"
      },
      {
        titleKey: "projects.items.gruppoedico.title",
        categoryKey: "dnafactory",
        bodyKey: "projects.items.gruppoedico.body",
        link: "https://www.gruppoedico.it/",
        linkPlaceholderKey: "projects.linkPlaceholder.private"
      },
      {
        titleKey: "projects.items.mensa.title",
        categoryKey: "dnafactory",
        bodyKey: "projects.items.mensa.body",
        link: "https://institute.mensa.it/",
        linkPlaceholderKey: "projects.linkPlaceholder.private"
      },
      {
        titleKey: "projects.items.editorial_builder.title",
        categoryKey: "dnafactory",
        bodyKey: "projects.items.editorial_builder.body",
        linkPlaceholderKey: "projects.linkPlaceholder.private"
      },
      {
        titleKey: "projects.items.efarma.title",
        categoryKey: "dnafactory",
        bodyKey: "projects.items.efarma.body",
        link: "https://www.efarma.com"
      },
      {
        titleKey: "projects.items.astrolume.title",
        categoryKey: "dnafactory",
        link: "https://astrolume.ai",
        bodyKey: "projects.items.astrolume.body",
        linkPlaceholderKey: "projects.linkPlaceholder.private"
      },
      {
        titleKey: "projects.items.blog_suggestions_ai.title",
        categoryKey: "dnafactory",
        bodyKey: "projects.items.blog_suggestions_ai.body",
        linkPlaceholderKey: "projects.linkPlaceholder.private"
      },
      {
        titleKey: "projects.items.desk_helper_ai.title",
        categoryKey: "dnafactory",
        bodyKey: "projects.items.desk_helper_ai.body",
        linkPlaceholderKey: "projects.linkPlaceholder.private"
      },
      {
        titleKey: "projects.items.resume_ai.title",
        categoryKey: "personal",
        bodyKey: "projects.items.resume_ai.body",
        link: "https://github.com/simone-bianco/resume"
      },
      {
        titleKey: "projects.items.laravel_rules.title",
        categoryKey: "personal",
        bodyKey: "projects.items.laravel_rules.body",
        link: "https://github.com/simone-bianco/laravel-rules"
      },
      {
        titleKey: "projects.items.hrm.title",
        categoryKey: "universita",
        bodyKey: "projects.items.hrm.body",
        link: route("thesis"),
        linkPlaceholderKey: "projects.linkPlaceholder.legacy"
      }
    ];
    const sections = [
      { key: "dnafactory", titleKey: "projects.groupTitles.dnafactory" },
      { key: "personal", titleKey: "projects.groupTitles.personal" },
      { key: "universita", titleKey: "projects.groupTitles.universita" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = resolveDirective("animateonscroll");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="px-4 py-16 sm:py-24" data-v-e02454d5${_scopeId}><div class="container mx-auto max-w-3xl" data-v-e02454d5${_scopeId}><div class="text-center mb-10" data-v-e02454d5${_scopeId}><h2 class="text-3xl sm:text-4xl font-bold text-[var(--text-color)]" data-v-e02454d5${_scopeId}>${ssrInterpolate(unref(t)("projects.sectionTitle"))}</h2></div><!--[-->`);
            ssrRenderList(sections, (sec) => {
              _push2(`<div class="mb-12" data-v-e02454d5${_scopeId}>`);
              if (projects.some((p) => p.categoryKey === sec.key)) {
                _push2(`<div data-v-e02454d5${_scopeId}><div class="section-title" data-v-e02454d5${_scopeId}><h3 class="text-2xl font-semibold text-[var(--text-color)]" data-v-e02454d5${_scopeId}>${ssrInterpolate(unref(t)(sec.titleKey))}</h3><div class="title-underline" data-v-e02454d5${_scopeId}></div></div><div class="flex flex-col gap-6 mt-6" data-v-e02454d5${_scopeId}><!--[-->`);
                ssrRenderList(projects.filter((pr) => pr.categoryKey === sec.key), (p, idx) => {
                  _push2(ssrRenderComponent(unref(Card), mergeProps({
                    key: `${sec.key}-${idx}`,
                    class: "project-card"
                  }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, projectEnter)), createSlots({
                    title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)(p.titleKey))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)(p.titleKey)), 1)
                        ];
                      }
                    }),
                    subtitle: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="project-subtitle" data-v-e02454d5${_scopeId2}><span data-v-e02454d5${_scopeId2}>${ssrInterpolate(unref(t)(`projects.categories.${p.categoryKey}`))}</span></div>`);
                        _push3(ssrRenderComponent(unref(Divider), null, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode("div", { class: "project-subtitle" }, [
                            createVNode("span", null, toDisplayString(unref(t)(`projects.categories.${p.categoryKey}`)), 1)
                          ]),
                          createVNode(unref(Divider))
                        ];
                      }
                    }),
                    content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<p class="project-body" data-v-e02454d5${_scopeId2}>${ssrInterpolate(unref(t)(p.bodyKey))}</p>`);
                      } else {
                        return [
                          createVNode("p", { class: "project-body" }, toDisplayString(unref(t)(p.bodyKey)), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, [
                    p.link || p.linkPlaceholderKey ? {
                      name: "footer",
                      fn: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div class="project-footer" data-v-e02454d5${_scopeId2}>`);
                          if (p.link) {
                            _push3(`<a${ssrRenderAttr("href", p.link)} target="_blank" rel="noopener noreferrer" class="project-link" data-v-e02454d5${_scopeId2}>${ssrInterpolate(p.link)}</a>`);
                          } else {
                            _push3(`<span class="project-link-placeholder" data-v-e02454d5${_scopeId2}>${ssrInterpolate(unref(t)(p.linkPlaceholderKey))}</span>`);
                          }
                          _push3(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "project-footer" }, [
                              p.link ? (openBlock(), createBlock("a", {
                                key: 0,
                                href: p.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                class: "project-link"
                              }, toDisplayString(p.link), 9, ["href"])) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "project-link-placeholder"
                              }, toDisplayString(unref(t)(p.linkPlaceholderKey)), 1))
                            ])
                          ];
                        }
                      }),
                      key: "0"
                    } : void 0
                  ]), _parent2, _scopeId));
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></section>`);
          } else {
            return [
              createVNode("section", { class: "px-4 py-16 sm:py-24" }, [
                createVNode("div", { class: "container mx-auto max-w-3xl" }, [
                  createVNode("div", { class: "text-center mb-10" }, [
                    createVNode("h2", { class: "text-3xl sm:text-4xl font-bold text-[var(--text-color)]" }, toDisplayString(unref(t)("projects.sectionTitle")), 1)
                  ]),
                  (openBlock(), createBlock(Fragment, null, renderList(sections, (sec) => {
                    return createVNode("div", {
                      key: sec.key,
                      class: "mb-12"
                    }, [
                      projects.some((p) => p.categoryKey === sec.key) ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("div", { class: "section-title" }, [
                          createVNode("h3", { class: "text-2xl font-semibold text-[var(--text-color)]" }, toDisplayString(unref(t)(sec.titleKey)), 1),
                          createVNode("div", { class: "title-underline" })
                        ]),
                        createVNode("div", { class: "flex flex-col gap-6 mt-6" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(projects.filter((pr) => pr.categoryKey === sec.key), (p, idx) => {
                            return withDirectives((openBlock(), createBlock(unref(Card), {
                              key: `${sec.key}-${idx}`,
                              class: "project-card"
                            }, createSlots({
                              title: withCtx(() => [
                                createTextVNode(toDisplayString(unref(t)(p.titleKey)), 1)
                              ]),
                              subtitle: withCtx(() => [
                                createVNode("div", { class: "project-subtitle" }, [
                                  createVNode("span", null, toDisplayString(unref(t)(`projects.categories.${p.categoryKey}`)), 1)
                                ]),
                                createVNode(unref(Divider))
                              ]),
                              content: withCtx(() => [
                                createVNode("p", { class: "project-body" }, toDisplayString(unref(t)(p.bodyKey)), 1)
                              ]),
                              _: 2
                            }, [
                              p.link || p.linkPlaceholderKey ? {
                                name: "footer",
                                fn: withCtx(() => [
                                  createVNode("div", { class: "project-footer" }, [
                                    p.link ? (openBlock(), createBlock("a", {
                                      key: 0,
                                      href: p.link,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      class: "project-link"
                                    }, toDisplayString(p.link), 9, ["href"])) : (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "project-link-placeholder"
                                    }, toDisplayString(unref(t)(p.linkPlaceholderKey)), 1))
                                  ])
                                ]),
                                key: "0"
                              } : void 0
                            ]), 1024)), [
                              [_directive_animateonscroll, projectEnter]
                            ]);
                          }), 128))
                        ])
                      ])) : createCommentVNode("", true)
                    ]);
                  }), 64))
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e02454d5"]]);
export {
  Projects as default
};
