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

<template>
  <div class="image-information">
    <div class="ai-avt">
      <el-avatar :size="size" :src="src" />
      <div class="name">{{ name }}</div>
    </div>
  </div>
</template>

<style scoped>
.name {
  width: 37px;
  word-wrap: break-word;
}

.ai-avt {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
