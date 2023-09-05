<template>
  <button class="btn" @click="$emit('handleOnclick')">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  emits: ['handleOnclick'],
});
</script>

<style scoped>
.btn {
  color: #000;
  font-family: 'Poppins', serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  padding: 12px 18px;
  border-radius: 46px;
  background: #58e5c4;
  box-shadow: 0 1px 8px 0 rgba(255, 255, 255, 0.46);
}
</style>
