<script lang="ts" setup>
import { markRaw, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import LayoutHome from '@/layouts/LayoutHome.vue';

const layout = ref();
const route = useRoute();

watch(
  () => route.meta?.layout as string | undefined,
  async metaLayout => {
    try {
      const component = metaLayout && (await import(`./layouts/${metaLayout}.vue`));
      layout.value = markRaw(component?.default || LayoutHome);
    } catch (e) {
      layout.value = markRaw(LayoutHome);
    }
  },
  { immediate: true },
);
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style scoped></style>
