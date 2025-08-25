import { defineComponent, reactive, onMounted, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Test",
  __ssrInlineRender: true,
  setup(__props) {
    const scaleSteps = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
    const friendly = {
      "--text-color": "testo principale",
      "--text-color-secondary": "testo secondario",
      "--surface-border": "bordo contenuti / divider",
      "--surface-card": "sfondo card",
      "--surface-overlay": "sfondo overlay / popover",
      "--surface-hover": "sfondo hover contenuti",
      "--maskbg": "sfondo maschera modali",
      "--content-border-radius": "raggio bordi contenuti",
      "--focus-ring-color": "colore focus ring",
      "--primary-color": "colore primario",
      "--p-primary-color": "colore primario"
    };
    const groups = reactive([
      {
        title: "Surface aliases",
        vars: scaleSteps.map((s) => `--surface-${s}`)
      },
      {
        title: "Prime surfaces (raw)",
        vars: scaleSteps.map((s) => `--p-surface-${s}`)
      },
      {
        title: "Primary (tokens)",
        vars: [
          "--primary-color",
          "--p-primary-color",
          "--p-primary-50",
          "--p-primary-100",
          "--p-primary-200",
          "--p-primary-300",
          "--p-primary-400",
          "--p-primary-500",
          "--p-primary-600",
          "--p-primary-700",
          "--p-primary-800",
          "--p-primary-900",
          "--p-primary-950"
        ]
      },
      {
        title: "Text & misc",
        vars: [
          "--text-color",
          "--text-color-secondary",
          "--surface-border",
          "--surface-card",
          "--surface-overlay",
          "--surface-hover",
          "--maskbg",
          "--content-border-radius",
          "--focus-ring-color"
        ]
      }
    ]);
    const results = reactive({});
    function labelExpected(varName) {
      const m = varName.match(/--(?:p-)?(surface|primary)-(\d+)/);
      if (m) return `${m[1]}-${m[2]}`;
      if (friendly[varName]) return friendly[varName];
      return varName.replace(/^--/, "");
    }
    function resolveToColor(varName, fallbackRaw) {
      try {
        const probe = document.createElement("div");
        probe.style.color = `var(${varName})`;
        document.body.appendChild(probe);
        const c = getComputedStyle(probe).color;
        probe.remove();
        return c && c !== "rgba(0, 0, 0, 0)" ? c : fallbackRaw?.trim() || "";
      } catch {
        return fallbackRaw?.trim() || "";
      }
    }
    function computeVariables() {
      const style = getComputedStyle(document.documentElement);
      groups.forEach((g) => {
        const arr = [];
        g.vars.forEach((v) => {
          const raw = style.getPropertyValue(v);
          const value = raw ? raw.trim() : "";
          if (value) {
            const expected = labelExpected(v);
            const resolved = resolveToColor(v, value);
            arr.push({ name: v, value, resolved, expected });
          }
        });
        results[g.title] = arr;
      });
    }
    onMounted(() => {
      computeVariables();
    });
    const groupKeys = computed(() => Object.keys(results));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen px-4 py-6 md:py-10 bg-[var(--surface-ground,transparent)] text-[var(--text-color,#e5e7eb)]" }, _attrs))} data-v-7cc8219e><div class="max-w-6xl mx-auto" data-v-7cc8219e><div class="flex items-center justify-between mb-6" data-v-7cc8219e><h1 class="text-xl md:text-2xl font-bold" data-v-7cc8219e>Test Variabili CSS</h1><div class="flex items-center gap-2" data-v-7cc8219e><button class="px-3 py-2 rounded-md border border-surface-700 bg-surface-800 hover:bg-surface-700 text-sm text-surface-0" data-v-7cc8219e> Toggle Dark Mode </button><a href="/" class="px-3 py-2 rounded-md border border-surface-700 bg-surface-800 hover:bg-surface-700 text-sm text-surface-0" data-v-7cc8219e>Home</a></div></div><p class="text-sm text-[var(--text-color-secondary,#a3a3a3)] mb-4" data-v-7cc8219e> Ogni riquadro mostra: swatch di sfondo impostato con la variabile, nome della variabile, valore risolto e un sottotitolo &quot;Atteso&quot; che indica la scala/uso previsto (es. surface-900, primary-400, testo secondario...). </p><!--[-->`);
      ssrRenderList(groupKeys.value, (key) => {
        _push(`<div class="mb-10" data-v-7cc8219e><h2 class="text-lg font-semibold mb-3" data-v-7cc8219e>${ssrInterpolate(key)}</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-v-7cc8219e><!--[-->`);
        ssrRenderList(results[key], (item) => {
          _push(`<div class="rounded-lg overflow-hidden border border-surface-700 bg-surface-900 text-surface-0" data-v-7cc8219e><div class="h-20 w-full" style="${ssrRenderStyle({ backgroundColor: `var(${item.name})` })}" data-v-7cc8219e></div><div class="p-3 text-xs" data-v-7cc8219e><div class="font-mono break-all" data-v-7cc8219e>${ssrInterpolate(item.name)}</div><div class="text-[var(--text-color-secondary,#a3a3a3)]" data-v-7cc8219e>risolto: ${ssrInterpolate(item.resolved)}</div><div class="text-[var(--text-color-secondary,#a3a3a3)]" data-v-7cc8219e>valore: ${ssrInterpolate(item.value)}</div><div class="mt-1 text-[10px] uppercase tracking-wide text-primary-400" data-v-7cc8219e>Atteso: ${ssrInterpolate(item.expected)}</div></div></div>`);
        });
        _push(`<!--]--></div>`);
        if (!results[key] || results[key].length === 0) {
          _push(`<div class="text-sm text-[var(--text-color-secondary,#a3a3a3)]" data-v-7cc8219e> Nessuna variabile disponibile per questo gruppo. </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><section class="mt-16 space-y-6" data-v-7cc8219e><h2 class="text-xl font-bold" data-v-7cc8219e>Guida: come usare le variabili del tema</h2><p class="text-sm text-[var(--text-color-secondary,#a3a3a3)]" data-v-7cc8219e> Le variabili sono esposte a livello <code class="font-mono" data-v-7cc8219e>:root</code> e seguono i token PrimeVue/Aura. Puoi usare sia i token originali (<code class="font-mono" data-v-7cc8219e>--p-surface-*</code>, <code class="font-mono" data-v-7cc8219e>--p-primary-*</code>) sia gli alias comodi (<code class="font-mono" data-v-7cc8219e>--surface-*</code>, <code class="font-mono" data-v-7cc8219e>--primary-color</code>). Il tema scuro è attivato aggiungendo la classe <code class="font-mono" data-v-7cc8219e>dark</code> su <code class="font-mono" data-v-7cc8219e>html</code>. </p><div data-v-7cc8219e><h3 class="font-semibold mb-2" data-v-7cc8219e>1) Con le utility di Tailwind PrimeUI</h3><pre class="p-3 rounded-md bg-surface-800 border border-surface-700 text-[11px] overflow-auto" data-v-7cc8219e><code data-v-7cc8219e>
&lt;div class=&quot;bg-surface-900 text-surface-0 border border-surface-700 p-4 rounded-lg&quot;&gt;Contenuto&lt;/div&gt;
&lt;button class=&quot;ring-2 ring-primary-400 ring-offset-2 ring-offset-surface-950&quot;&gt;Focus&lt;/button&gt;
          </code></pre><p class="text-sm text-[var(--text-color-secondary,#a3a3a3)]" data-v-7cc8219e>Queste classi leggono i CSS var globali, quindi si aggiornano automaticamente con il tema.</p></div><div data-v-7cc8219e><h3 class="font-semibold mb-2" data-v-7cc8219e>2) Con valori arbitrari Tailwind</h3><pre class="p-3 rounded-md bg-surface-800 border border-surface-700 text-[11px] overflow-auto" data-v-7cc8219e><code data-v-7cc8219e>
&lt;div class=&quot;bg-[var(--surface-900)] text-[var(--text-color)]&quot;&gt;Usa var() direttamente&lt;/div&gt;
          </code></pre><p class="text-sm text-[var(--text-color-secondary,#a3a3a3)]" data-v-7cc8219e>Utile quando non esiste una utility dedicata.</p></div><div data-v-7cc8219e><h3 class="font-semibold mb-2" data-v-7cc8219e>3) In CSS scoped del componente</h3><pre class="p-3 rounded-md bg-surface-800 border border-surface-700 text-[11px] overflow-auto" data-v-7cc8219e><code data-v-7cc8219e>
/* &lt;style scoped&gt; */
.box { background: var(--surface-900); color: var(--text-color); border: 1px solid var(--surface-border); }
.box:focus { outline: none; box-shadow: 0 0 0 2px var(--focus-ring-color); }
          </code></pre></div><div data-v-7cc8219e><h3 class="font-semibold mb-2" data-v-7cc8219e>4) Inline style in Vue</h3><pre class="p-3 rounded-md bg-surface-800 border border-surface-700 text-[11px] overflow-auto" data-v-7cc8219e><code data-v-7cc8219e>
&lt;div :style=&quot;{ backgroundColor: &#39;var(--surface-900)&#39;, color: &#39;var(--text-color)&#39; }&quot; /&gt;
          </code></pre></div><div data-v-7cc8219e><h3 class="font-semibold mb-2" data-v-7cc8219e>5) Opacità ed effetti</h3><pre class="p-3 rounded-md bg-surface-800 border border-surface-700 text-[11px] overflow-auto" data-v-7cc8219e><code data-v-7cc8219e>
/* Usa il canale RGB del primario per alpha */
.box-shadow-primario { box-shadow: 0 10px 30px rgba(var(--primary-color-rgb), 0.25); }
/* Se supportato, color-mix */
.overlay { background: color-mix(in srgb, var(--p-primary-500) 20%, transparent); }
          </code></pre></div><div data-v-7cc8219e><h3 class="font-semibold mb-2" data-v-7cc8219e>6) Dark mode e override locali</h3><pre class="p-3 rounded-md bg-surface-800 border border-surface-700 text-[11px] overflow-auto" data-v-7cc8219e><code data-v-7cc8219e>
/* Il tema scuro è attivato da .dark su :root */
:root.dark { /* i token Prime cambiano automaticamente */ }
/* Puoi sovrascrivere localmente una variabile */
.card-specia { --surface-900: #101010; }
          </code></pre><p class="text-sm text-[var(--text-color-secondary,#a3a3a3)]" data-v-7cc8219e>Nota: le variabili sono risolte per cascata; un override su un contenitore influenza solo i figli.</p></div><div data-v-7cc8219e><h3 class="font-semibold mb-2" data-v-7cc8219e>7) Edge case e gotcha</h3><ul class="list-disc pl-6 text-sm text-[var(--text-color-secondary,#a3a3a3)] space-y-1" data-v-7cc8219e><li data-v-7cc8219e><strong data-v-7cc8219e>@apply</strong>: non puoi usare var() dentro @apply; usa utility o valori arbitrari.</li><li data-v-7cc8219e><strong data-v-7cc8219e>Fallback</strong>: var(--x, var(--y, #000)) per valori di ripiego.</li><li data-v-7cc8219e><strong data-v-7cc8219e>Ordine di import</strong>: gli alias sono importati globalmente da resources/js/assets/styles.scss. Assicurati che app.css sia incluso prima dei componenti.</li><li data-v-7cc8219e><strong data-v-7cc8219e>Valori letti via JS</strong>: leggere la custom property dà spesso la stringa var(...). La sezione test mostra anche il colore risolto.</li><li data-v-7cc8219e><strong data-v-7cc8219e>Token vs alias</strong>: puoi usare sia --p-surface-* che --surface-*; sono equivalenti nel progetto.</li></ul></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Test = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7cc8219e"]]);
export {
  Test as default
};
