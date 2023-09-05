<template>
  <div class="asset-list grid grid-flow-col auto-cols-auto">
    <img v-for="item in assets" :src="item.src" class="assest" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Image } from '@/types/models/image.ts';

export default defineComponent({
  props: {
    assets: {
      type: Array<Image>,
      required: true,
    },
  },
});
</script>

<style scoped>
.asset-list {
  display: flex;
}

.assest {
  /* flex-grow: 1; */
  height: 75px;
  width: 100%;
}

.assest img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
