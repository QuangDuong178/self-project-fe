<template>
  <div class="message-bot">
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
.message-bot {
  border-radius: 0 10px 10px 10px;
  background: #fff;
  padding: 11px 16px 12px 16px;
  color: #000;
  font-family: 'Saira', SansSerif, serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
