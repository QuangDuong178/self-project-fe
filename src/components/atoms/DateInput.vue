<template>
  <div>
    <el-date-picker
      :class="{ 'has-error': error }"
      :model-value="modelValue"
      :placeholder="placeHolder"
      class="date-input"
      type="date"
      value-format="YYYY-MM-DD"
      @update:modelValue="newValue => $emit('update:modelValue', newValue)"
    />
    <!--    <p v-if="error" class="text-red-600 error">{{ error }}</p>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeHolder: {
      type: String,
      required: false,
    },
    error: {
      type: Boolean,
      required: false,
    },
    format: {
      type: String,
      required: false,
    },
  },
  emits: ['update:modelValue'],
});
</script>

<style scoped></style>
