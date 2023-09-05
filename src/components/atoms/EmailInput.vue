<template>
  <div>
    <input v-model="emailValue" :name="name" :placeholder="placeHolder" class="input-text" type="email" />
    <!--    <input :name="name" :placeholder="placeHolder" type="text" />-->
    <p v-if="error" class="text-red-600 error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    placeHolder: {
      type: String,
      required: false,
    },
    error: {
      type: String,
      required: false,
    },
    format: {
      type: String,
      required: false,
    },
  },
  setup() {
    const emailValue = ref('');
    return { emailValue };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
