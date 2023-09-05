<template>
  <Transition :name="animation">
    <div class="message-user">
      <p v-for="mess in breakMessages" :key="mess">{{ mess }}</p>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    },
    animation: {
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
.message-user {
  border-radius: 10px 0 10px 10px;
  background: #58e5c4;
  padding: 11px 4px 11px 9px;
  color: #000;
  font-family: 'Saira', SansSerif, serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
