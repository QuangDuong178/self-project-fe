<template>
  <div class="image-information">
    <el-avatar :size="size" :src="src" />
    <h1 class="name text-white">{{ name }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    size: {
      type: Number,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.image-information {
  text-align: center;
}

.image-information .name {
  text-align: center;
  font-family: 'Saira', SansSerif;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
