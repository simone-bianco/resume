<script setup lang="ts">
import { onMounted } from 'vue';
import { usePage, router } from '@inertiajs/vue3';
import Button from 'primevue/button';
import { useLayout } from '@/layouts/composables/layout';

const page = usePage();
const { isDarkTheme, setDarkMode } = useLayout();

function currentDarkFromProps(): boolean {
  const props: any = page.props || {};
  if (props.theme && typeof (props.theme as any).dark !== 'undefined') {
    return Boolean((props.theme as any).dark);
  }
  return false;
}

onMounted(() => {
  const shouldBeDark = currentDarkFromProps();
  setDarkMode(shouldBeDark);
});

function tenantAwareThemeUrl(): string {
  const props: any = page.props || {};
  const alias: string | undefined = props?.tenant?.alias;
  return alias ? `/${alias}/settings/theme` : '/settings/theme';
}

function toggleTheme() {
  // Compute next theme value deterministically
  const next = !isDarkTheme.value;
  // Optimistically apply UI
  setDarkMode(next);
  // Persist to backend (guests: session; auth: user settings)
  router.post(
    tenantAwareThemeUrl(),
    { dark: next },
    { preserveState: true, preserveScroll: true }
  );
}
</script>

<template>
  <Button type="button" class="layout-topbar-action" @click="toggleTheme">
    <i :class="['pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme }]" />
  </Button>
</template>
