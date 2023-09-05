<template>
  <div class="message-guide w-full">
    <p v-for="mess in breakMessages" :key="mess">{{ mess }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const breakMessages = props.message.split('\n');
    return {
      breakMessages,
    };
  },
});
</script>

<style scoped>
.message-guide {
  border-radius: 50px;
  border: 3px solid #58e5c4;
  background: rgba(255, 255, 255, 0.72);
  padding: 11px 4px 11px 9px;
  color: #000;
  font-family: 'Saira', SansSerif, serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
