import { defineComponent, computed, resolveDirective, withCtx, unref, mergeProps, createTextVNode, toDisplayString, createVNode, createBlock, createCommentVNode, openBlock, withDirectives, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./GuestLayout-CToSNgqI.js";
import { usePage, useForm } from "@inertiajs/vue3";
import { Divider } from "primevue";
import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Message from "primevue/message";
import Textarea from "primevue/textarea";
import { useI18n } from "vue-i18n";
import { route } from "ziggy-js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "primevue/menu";
import "primevue/image";
import "primevue/menubar";
import "primevue/drawer";
import "axios";
import "primevue/progressspinner";
import "primevue/dialog";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const page = usePage();
    const projectEnter = {
      enterClass: "animate-enter fade-in-10 slide-in-from-b-12 animate-duration-1000"
    };
    const form = useForm({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: ""
    });
    const hasSuccess = computed(() => !!page.props?.flash?.success);
    const hasError = computed(() => !!page.props?.flash?.error);
    function submit() {
      form.post(route("contact.send"), {
        preserveScroll: true,
        onSuccess: () => {
          form.reset("message");
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_animateonscroll = resolveDirective("animateonscroll");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="px-4 py-16 sm:py-24" data-v-18ae7cbc${_scopeId}><div class="container mx-auto max-w-3xl" data-v-18ae7cbc${_scopeId}><div class="mb-10 text-center" data-v-18ae7cbc${_scopeId}><h2 class="text-3xl font-bold text-[var(--text-color)] sm:text-4xl" data-v-18ae7cbc${_scopeId}>${ssrInterpolate(unref(t)("contact.sectionTitle"))}</h2></div>`);
            _push2(ssrRenderComponent(unref(Card), mergeProps({ class: "contact-card" }, ssrGetDirectiveProps(_ctx, _directive_animateonscroll, projectEnter)), {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="space-y-4" data-v-18ae7cbc${_scopeId2}>`);
                  if (hasSuccess.value) {
                    _push3(ssrRenderComponent(unref(Message), {
                      severity: "success",
                      closable: false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(t)("contact.flash.success"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(t)("contact.flash.success")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (hasError.value) {
                    _push3(ssrRenderComponent(unref(Message), {
                      severity: "error",
                      closable: false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(t)("contact.flash.error"))}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(t)("contact.flash.error")), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="grid grid-cols-1 gap-4 md:grid-cols-2" data-v-18ae7cbc${_scopeId2}><div data-v-18ae7cbc${_scopeId2}><label class="mb-1 block text-sm text-[var(--text-color)]" data-v-18ae7cbc${_scopeId2}>${ssrInterpolate(unref(t)("contact.labels.firstName"))}</label>`);
                  _push3(ssrRenderComponent(unref(InputText), {
                    size: "large",
                    modelValue: unref(form).first_name,
                    "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                    placeholder: unref(t)("contact.placeholders.firstName"),
                    class: "w-full",
                    invalid: !!unref(form).errors.first_name
                  }, null, _parent3, _scopeId2));
                  if (unref(form).errors.first_name) {
                    _push3(`<small class="p-error" data-v-18ae7cbc${_scopeId2}>${ssrInterpolate(unref(form).errors.first_name)}</small>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div data-v-18ae7cbc${_scopeId2}><label class="mb-1 block text-sm text-[var(--text-color)]" data-v-18ae7cbc${_scopeId2}>${ssrInterpolate(unref(t)("contact.labels.lastName"))}</label>`);
                  _push3(ssrRenderComponent(unref(InputText), {
                    size: "large",
                    modelValue: unref(form).last_name,
                    "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                    placeholder: unref(t)("contact.placeholders.lastName"),
                    class: "w-full",
                    invalid: !!unref(form).errors.last_name
                  }, null, _parent3, _scopeId2));
                  if (unref(form).errors.last_name) {
                    _push3(`<small class="p-error" data-v-18ae7cbc${_scopeId2}>${ssrInterpolate(unref(form).errors.last_name)}</small>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="grid grid-cols-1 gap-4 md:grid-cols-2" data-v-18ae7cbc${_scopeId2}><div data-v-18ae7cbc${_scopeId2}><label class="mb-1 block text-sm text-[var(--text-color)]" data-v-18ae7cbc${_scopeId2}>${ssrInterpolate(unref(t)("contact.labels.email"))}</label>`);
                  _push3(ssrRenderComponent(unref(InputText), {
                    size: "large",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    placeholder: unref(t)("contact.placeholders.email"),
                    class: "w-full",
                    invalid: !!unref(form).errors.email
                  }, null, _parent3, _scopeId2));
                  if (unref(form).errors.email) {
                    _push3(`<small class="p-error" data-v-18ae7cbc${_scopeId2}>${ssrInterpolate(unref(form).errors.email)}</small>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div data-v-18ae7cbc${_scopeId2}><label class="mb-1 block text-sm text-[var(--text-color)]" data-v-18ae7cbc${_scopeId2}>${ssrInterpolate(unref(t)("contact.labels.phone"))}</label>`);
                  _push3(ssrRenderComponent(unref(InputText), {
                    size: "large",
                    modelValue: unref(form).phone,
                    "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                    placeholder: unref(t)("contact.placeholders.phone"),
                    class: "w-full",
                    invalid: !!unref(form).errors.phone
                  }, null, _parent3, _scopeId2));
                  if (unref(form).errors.phone) {
                    _push3(`<small class="p-error" data-v-18ae7cbc${_scopeId2}>${ssrInterpolate(unref(form).errors.phone)}</small>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div data-v-18ae7cbc${_scopeId2}><label class="mb-1 block text-sm text-[var(--text-color)]" data-v-18ae7cbc${_scopeId2}>${ssrInterpolate(unref(t)("contact.labels.message"))}</label>`);
                  _push3(ssrRenderComponent(unref(Textarea), {
                    size: "large",
                    modelValue: unref(form).message,
                    "onUpdate:modelValue": ($event) => unref(form).message = $event,
                    placeholder: unref(t)("contact.placeholders.message"),
                    rows: "6",
                    "auto-resize": "",
                    class: "w-full",
                    invalid: !!unref(form).errors.message
                  }, null, _parent3, _scopeId2));
                  if (unref(form).errors.message) {
                    _push3(`<small class="p-error" data-v-18ae7cbc${_scopeId2}>${ssrInterpolate(unref(form).errors.message)}</small>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(unref(Divider), null, null, _parent3, _scopeId2));
                  _push3(`<div class="flex justify-end" data-v-18ae7cbc${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Button), {
                    size: "large",
                    label: unref(t)("contact.actions.submit"),
                    icon: "pi pi-send",
                    loading: unref(form).processing,
                    onClick: submit
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "space-y-4" }, [
                      hasSuccess.value ? (openBlock(), createBlock(unref(Message), {
                        key: 0,
                        severity: "success",
                        closable: false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("contact.flash.success")), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      hasError.value ? (openBlock(), createBlock(unref(Message), {
                        key: 1,
                        severity: "error",
                        closable: false
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("contact.flash.error")), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "mb-1 block text-sm text-[var(--text-color)]" }, toDisplayString(unref(t)("contact.labels.firstName")), 1),
                          createVNode(unref(InputText), {
                            size: "large",
                            modelValue: unref(form).first_name,
                            "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                            placeholder: unref(t)("contact.placeholders.firstName"),
                            class: "w-full",
                            invalid: !!unref(form).errors.first_name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"]),
                          unref(form).errors.first_name ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "p-error"
                          }, toDisplayString(unref(form).errors.first_name), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "mb-1 block text-sm text-[var(--text-color)]" }, toDisplayString(unref(t)("contact.labels.lastName")), 1),
                          createVNode(unref(InputText), {
                            size: "large",
                            modelValue: unref(form).last_name,
                            "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                            placeholder: unref(t)("contact.placeholders.lastName"),
                            class: "w-full",
                            invalid: !!unref(form).errors.last_name
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"]),
                          unref(form).errors.last_name ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "p-error"
                          }, toDisplayString(unref(form).errors.last_name), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "mb-1 block text-sm text-[var(--text-color)]" }, toDisplayString(unref(t)("contact.labels.email")), 1),
                          createVNode(unref(InputText), {
                            size: "large",
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            type: "email",
                            placeholder: unref(t)("contact.placeholders.email"),
                            class: "w-full",
                            invalid: !!unref(form).errors.email
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"]),
                          unref(form).errors.email ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "p-error"
                          }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "mb-1 block text-sm text-[var(--text-color)]" }, toDisplayString(unref(t)("contact.labels.phone")), 1),
                          createVNode(unref(InputText), {
                            size: "large",
                            modelValue: unref(form).phone,
                            "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                            placeholder: unref(t)("contact.placeholders.phone"),
                            class: "w-full",
                            invalid: !!unref(form).errors.phone
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"]),
                          unref(form).errors.phone ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "p-error"
                          }, toDisplayString(unref(form).errors.phone), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "mb-1 block text-sm text-[var(--text-color)]" }, toDisplayString(unref(t)("contact.labels.message")), 1),
                        createVNode(unref(Textarea), {
                          size: "large",
                          modelValue: unref(form).message,
                          "onUpdate:modelValue": ($event) => unref(form).message = $event,
                          placeholder: unref(t)("contact.placeholders.message"),
                          rows: "6",
                          "auto-resize": "",
                          class: "w-full",
                          invalid: !!unref(form).errors.message
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"]),
                        unref(form).errors.message ? (openBlock(), createBlock("small", {
                          key: 0,
                          class: "p-error"
                        }, toDisplayString(unref(form).errors.message), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode(unref(Divider)),
                      createVNode("div", { class: "flex justify-end" }, [
                        createVNode(unref(Button), {
                          size: "large",
                          label: unref(t)("contact.actions.submit"),
                          icon: "pi pi-send",
                          loading: unref(form).processing,
                          onClick: submit
                        }, null, 8, ["label", "loading"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></section>`);
          } else {
            return [
              createVNode("section", { class: "px-4 py-16 sm:py-24" }, [
                createVNode("div", { class: "container mx-auto max-w-3xl" }, [
                  createVNode("div", { class: "mb-10 text-center" }, [
                    createVNode("h2", { class: "text-3xl font-bold text-[var(--text-color)] sm:text-4xl" }, toDisplayString(unref(t)("contact.sectionTitle")), 1)
                  ]),
                  withDirectives((openBlock(), createBlock(unref(Card), { class: "contact-card" }, {
                    content: withCtx(() => [
                      createVNode("div", { class: "space-y-4" }, [
                        hasSuccess.value ? (openBlock(), createBlock(unref(Message), {
                          key: 0,
                          severity: "success",
                          closable: false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("contact.flash.success")), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        hasError.value ? (openBlock(), createBlock(unref(Message), {
                          key: 1,
                          severity: "error",
                          closable: false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("contact.flash.error")), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "mb-1 block text-sm text-[var(--text-color)]" }, toDisplayString(unref(t)("contact.labels.firstName")), 1),
                            createVNode(unref(InputText), {
                              size: "large",
                              modelValue: unref(form).first_name,
                              "onUpdate:modelValue": ($event) => unref(form).first_name = $event,
                              placeholder: unref(t)("contact.placeholders.firstName"),
                              class: "w-full",
                              invalid: !!unref(form).errors.first_name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"]),
                            unref(form).errors.first_name ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "p-error"
                            }, toDisplayString(unref(form).errors.first_name), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "mb-1 block text-sm text-[var(--text-color)]" }, toDisplayString(unref(t)("contact.labels.lastName")), 1),
                            createVNode(unref(InputText), {
                              size: "large",
                              modelValue: unref(form).last_name,
                              "onUpdate:modelValue": ($event) => unref(form).last_name = $event,
                              placeholder: unref(t)("contact.placeholders.lastName"),
                              class: "w-full",
                              invalid: !!unref(form).errors.last_name
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"]),
                            unref(form).errors.last_name ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "p-error"
                            }, toDisplayString(unref(form).errors.last_name), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 gap-4 md:grid-cols-2" }, [
                          createVNode("div", null, [
                            createVNode("label", { class: "mb-1 block text-sm text-[var(--text-color)]" }, toDisplayString(unref(t)("contact.labels.email")), 1),
                            createVNode(unref(InputText), {
                              size: "large",
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              type: "email",
                              placeholder: unref(t)("contact.placeholders.email"),
                              class: "w-full",
                              invalid: !!unref(form).errors.email
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"]),
                            unref(form).errors.email ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "p-error"
                            }, toDisplayString(unref(form).errors.email), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("label", { class: "mb-1 block text-sm text-[var(--text-color)]" }, toDisplayString(unref(t)("contact.labels.phone")), 1),
                            createVNode(unref(InputText), {
                              size: "large",
                              modelValue: unref(form).phone,
                              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                              placeholder: unref(t)("contact.placeholders.phone"),
                              class: "w-full",
                              invalid: !!unref(form).errors.phone
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"]),
                            unref(form).errors.phone ? (openBlock(), createBlock("small", {
                              key: 0,
                              class: "p-error"
                            }, toDisplayString(unref(form).errors.phone), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "mb-1 block text-sm text-[var(--text-color)]" }, toDisplayString(unref(t)("contact.labels.message")), 1),
                          createVNode(unref(Textarea), {
                            size: "large",
                            modelValue: unref(form).message,
                            "onUpdate:modelValue": ($event) => unref(form).message = $event,
                            placeholder: unref(t)("contact.placeholders.message"),
                            rows: "6",
                            "auto-resize": "",
                            class: "w-full",
                            invalid: !!unref(form).errors.message
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"]),
                          unref(form).errors.message ? (openBlock(), createBlock("small", {
                            key: 0,
                            class: "p-error"
                          }, toDisplayString(unref(form).errors.message), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode(unref(Divider)),
                        createVNode("div", { class: "flex justify-end" }, [
                          createVNode(unref(Button), {
                            size: "large",
                            label: unref(t)("contact.actions.submit"),
                            icon: "pi pi-send",
                            loading: unref(form).processing,
                            onClick: submit
                          }, null, 8, ["label", "loading"])
                        ])
                      ])
                    ]),
                    _: 1
                  })), [
                    [_directive_animateonscroll, projectEnter]
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18ae7cbc"]]);
export {
  Contact as default
};
