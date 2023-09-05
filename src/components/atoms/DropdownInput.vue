<template>
  <div>
    <div>
      <el-select
        :class="{ 'has-error': error }"
        :model-value="modelValue"
        :placeholder="placeHolder"
        class="dropdown-input"
        @update:modelValue="newValue => $emit('update:modelValue', newValue)"
      >
        <el-option v-for="item in options" :key="item" :value="item">{{ item }}</el-option>
      </el-select>
      <!--      <img src="src/assets/img/arrow-select.png" />-->
      <!--    <input :name="name" :placeholder="placeHolder" type="text" />-->
      <!--      <p v-if="error" class="text-red-600 error">{{ error }}</p>-->
    </div>
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
    options: {
      type: Array(String),
      required: true,
    },
  },
  emits: ['update:modelValue'],
});
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
