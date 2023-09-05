<template>
  <div class="text-center">
    <h1 class="title">{{ title }}</h1>
    <p v-if="description" class="description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped></style>
