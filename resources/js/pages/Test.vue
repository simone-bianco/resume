<script setup lang="ts">
import { onMounted, reactive, computed } from 'vue';
import { useAppHead } from '@/composables/useAppHead';
import { useHead } from '@unhead/vue';

useAppHead({
  title: 'Pagina di test',
  description: 'Pagina di prova per verifiche tema e variabili UI. Non indicizzare.',
});

useHead({
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
  ],
});

// Remove chat widget script on this page via key-based deduplication
useHead({
  script: [
    { key: 'chat-widget' }
  ]
});

// Utility to build a scale array like 0, 50, 100..950
const scaleSteps = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

// Human-friendly labels for non-scale tokens
const friendly: Record<string, string> = {
  '--text-color': 'testo principale',
  '--text-color-secondary': 'testo secondario',
  '--surface-border': 'bordo contenuti / divider',
  '--surface-card': 'sfondo card',
  '--surface-overlay': 'sfondo overlay / popover',
  '--surface-hover': 'sfondo hover contenuti',
  '--maskbg': 'sfondo maschera modali',
  '--content-border-radius': 'raggio bordi contenuti',
  '--focus-ring-color': 'colore focus ring',
  '--primary-color': 'colore primario',
  '--p-primary-color': 'colore primario'
};

// Define variable groups to probe
const groups = reactive([
  {
    title: 'Surface aliases',
    vars: scaleSteps.map((s) => `--surface-${s}`)
  },
  {
    title: 'Prime surfaces (raw)',
    vars: scaleSteps.map((s) => `--p-surface-${s}`)
  },
  {
    title: 'Primary (tokens)',
    vars: [
      '--primary-color',
      '--p-primary-color',
      '--p-primary-50',
      '--p-primary-100',
      '--p-primary-200',
      '--p-primary-300',
      '--p-primary-400',
      '--p-primary-500',
      '--p-primary-600',
      '--p-primary-700',
      '--p-primary-800',
      '--p-primary-900',
      '--p-primary-950'
    ]
  },
  {
    title: 'Text & misc',
    vars: [
      '--text-color',
      '--text-color-secondary',
      '--surface-border',
      '--surface-card',
      '--surface-overlay',
      '--surface-hover',
      '--maskbg',
      '--content-border-radius',
      '--focus-ring-color'
    ]
  }
]);

interface VarEntry { name: string; value: string; resolved: string; expected: string; }

const results = reactive<Record<string, VarEntry[]>>({});

function labelExpected(varName: string): string {
  // Scales: surface or primary like --surface-900 or --p-primary-400
  const m = varName.match(/--(?:p-)?(surface|primary)-(\d+)/);
  if (m) return `${m[1]}-${m[2]}`;
  // Exact token friendly mapping
  if (friendly[varName]) return friendly[varName];
  // Default fallback to raw name without --
  return varName.replace(/^--/, '');
}

function resolveToColor(varName: string, fallbackRaw: string): string {
  try {
    const probe = document.createElement('div');
    probe.style.color = `var(${varName})`;
    document.body.appendChild(probe);
    const c = getComputedStyle(probe).color;
    probe.remove();
    // If the browser couldn't resolve, it may return an empty string or 'rgba(0, 0, 0, 0)' for unset.
    return c && c !== 'rgba(0, 0, 0, 0)' ? c : (fallbackRaw?.trim() || '');
  } catch {
    return fallbackRaw?.trim() || '';
  }
}

function computeVariables() {
  const style = getComputedStyle(document.documentElement);
  groups.forEach((g) => {
    const arr: VarEntry[] = [];
    g.vars.forEach((v) => {
      const raw = style.getPropertyValue(v);
      const value = raw ? raw.trim() : '';
      if (value) {
        const expected = labelExpected(v);
        const resolved = resolveToColor(v, value);
        arr.push({ name: v, value, resolved, expected });
      }
    });
    results[g.title] = arr;
  });
}

function toggleDark() {
  const el = document.documentElement;
  el.classList.toggle('dark');
  // recompute to reflect new values
  computeVariables();
}

onMounted(() => {
  computeVariables();
});

const groupKeys = computed(() => Object.keys(results));
</script>

<template>
  <div class="min-h-screen px-4 py-6 md:py-10 bg-[var(--surface-ground,transparent)] text-[var(--text-color,#e5e7eb)]">
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-xl md:text-2xl font-bold">Test Variabili CSS</h1>
        <div class="flex items-center gap-2">
          <button class="px-3 py-2 rounded-md border border-surface-700 bg-surface-800 hover:bg-surface-700 text-sm text-surface-0" @click="toggleDark">
            Toggle Dark Mode
          </button>
          <a href="/" class="px-3 py-2 rounded-md border border-surface-700 bg-surface-800 hover:bg-surface-700 text-sm text-surface-0">Home</a>
        </div>
      </div>

      <p class="text-sm text-[var(--text-color-secondary,#a3a3a3)] mb-4">
        Ogni riquadro mostra: swatch di sfondo impostato con la variabile, nome della variabile, valore risolto e
        un sottotitolo "Atteso" che indica la scala/uso previsto (es. surface-900, primary-400, testo secondario...).
      </p>

      <div v-for="key in groupKeys" :key="key" class="mb-10">
        <h2 class="text-lg font-semibold mb-3">{{ key }}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div
            v-for="item in results[key]"
            :key="item.name"
            class="rounded-lg overflow-hidden border border-surface-700 bg-surface-900 text-surface-0"
          >
            <div class="h-20 w-full" :style="{ backgroundColor: `var(${item.name})` }" />
            <div class="p-3 text-xs">
              <div class="font-mono break-all">{{ item.name }}</div>
              <div class="text-[var(--text-color-secondary,#a3a3a3)]">risolto: {{ item.resolved }}</div>
              <div class="text-[var(--text-color-secondary,#a3a3a3)]">valore: {{ item.value }}</div>
              <div class="mt-1 text-[10px] uppercase tracking-wide text-primary-400">Atteso: {{ item.expected }}</div>
            </div>
          </div>
        </div>
        <div v-if="!results[key] || results[key].length === 0" class="text-sm text-[var(--text-color-secondary,#a3a3a3)]">
          Nessuna variabile disponibile per questo gruppo.
        </div>
      </div>

      <!-- Guida di utilizzo -->
      <section class="mt-16 space-y-6">
        <h2 class="text-xl font-bold">Guida: come usare le variabili del tema</h2>
        <p class="text-sm text-[var(--text-color-secondary,#a3a3a3)]">
          Le variabili sono esposte a livello <code class="font-mono">:root</code> e seguono i token PrimeVue/Aura.
          Puoi usare sia i token originali (<code class="font-mono">--p-surface-*</code>, <code class="font-mono">--p-primary-*</code>)
          sia gli alias comodi (<code class="font-mono">--surface-*</code>, <code class="font-mono">--primary-color</code>). Il tema scuro è attivato aggiungendo la classe <code class="font-mono">dark</code> su <code class="font-mono">html</code>.
        </p>

        <div>
          <h3 class="font-semibold mb-2">1) Con le utility di Tailwind PrimeUI</h3>
          <pre class="p-3 rounded-md bg-surface-800 border border-surface-700 text-[11px] overflow-auto"><code>
&lt;div class="bg-surface-900 text-surface-0 border border-surface-700 p-4 rounded-lg"&gt;Contenuto&lt;/div&gt;
&lt;button class="ring-2 ring-primary-400 ring-offset-2 ring-offset-surface-950"&gt;Focus&lt;/button&gt;
          </code></pre>
          <p class="text-sm text-[var(--text-color-secondary,#a3a3a3)]">Queste classi leggono i CSS var globali, quindi si aggiornano automaticamente con il tema.</p>
        </div>

        <div>
          <h3 class="font-semibold mb-2">2) Con valori arbitrari Tailwind</h3>
          <pre class="p-3 rounded-md bg-surface-800 border border-surface-700 text-[11px] overflow-auto"><code>
&lt;div class="bg-[var(--surface-900)] text-[var(--text-color)]"&gt;Usa var() direttamente&lt;/div&gt;
          </code></pre>
          <p class="text-sm text-[var(--text-color-secondary,#a3a3a3)]">Utile quando non esiste una utility dedicata.</p>
        </div>

        <div>
          <h3 class="font-semibold mb-2">3) In CSS scoped del componente</h3>
          <pre class="p-3 rounded-md bg-surface-800 border border-surface-700 text-[11px] overflow-auto"><code>
/* &lt;style scoped&gt; */
.box { background: var(--surface-900); color: var(--text-color); border: 1px solid var(--surface-border); }
.box:focus { outline: none; box-shadow: 0 0 0 2px var(--focus-ring-color); }
          </code></pre>
        </div>

        <div>
          <h3 class="font-semibold mb-2">4) Inline style in Vue</h3>
          <pre class="p-3 rounded-md bg-surface-800 border border-surface-700 text-[11px] overflow-auto"><code>
&lt;div :style="{ backgroundColor: 'var(--surface-900)', color: 'var(--text-color)' }" /&gt;
          </code></pre>
        </div>

        <div>
          <h3 class="font-semibold mb-2">5) Opacità ed effetti</h3>
          <pre class="p-3 rounded-md bg-surface-800 border border-surface-700 text-[11px] overflow-auto"><code>
/* Usa il canale RGB del primario per alpha */
.box-shadow-primario { box-shadow: 0 10px 30px rgba(var(--primary-color-rgb), 0.25); }
/* Se supportato, color-mix */
.overlay { background: color-mix(in srgb, var(--p-primary-500) 20%, transparent); }
          </code></pre>
        </div>

        <div>
          <h3 class="font-semibold mb-2">6) Dark mode e override locali</h3>
          <pre class="p-3 rounded-md bg-surface-800 border border-surface-700 text-[11px] overflow-auto"><code>
/* Il tema scuro è attivato da .dark su :root */
:root.dark { /* i token Prime cambiano automaticamente */ }
/* Puoi sovrascrivere localmente una variabile */
.card-specia { --surface-900: #101010; }
          </code></pre>
          <p class="text-sm text-[var(--text-color-secondary,#a3a3a3)]">Nota: le variabili sono risolte per cascata; un override su un contenitore influenza solo i figli.</p>
        </div>

        <div>
          <h3 class="font-semibold mb-2">7) Edge case e gotcha</h3>
          <ul class="list-disc pl-6 text-sm text-[var(--text-color-secondary,#a3a3a3)] space-y-1">
            <li><strong>@apply</strong>: non puoi usare var() dentro @apply; usa utility o valori arbitrari.</li>
            <li><strong>Fallback</strong>: var(--x, var(--y, #000)) per valori di ripiego.</li>
            <li><strong>Ordine di import</strong>: gli alias sono importati globalmente da resources/js/assets/styles.scss. Assicurati che app.css sia incluso prima dei componenti.</li>
            <li><strong>Valori letti via JS</strong>: leggere la custom property dà spesso la stringa var(...). La sezione test mostra anche il colore risolto.</li>
            <li><strong>Token vs alias</strong>: puoi usare sia --p-surface-* che --surface-*; sono equivalenti nel progetto.</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
pre { color: var(--surface-0); }
</style>
