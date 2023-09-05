<template>
  <div>
    <el-input
      :id="name"
      :class="{ 'has-error': error }"
      :model-value="modelValue"
      :name="name"
      :placeholder="placeHolder"
      class="input-text"
      type="text"
      @update:modelValue="newValue => $emit('update:modelValue', newValue)"
    />
    <!--    <input :name="name" :placeholder="placeHolder" type="text" />-->
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
