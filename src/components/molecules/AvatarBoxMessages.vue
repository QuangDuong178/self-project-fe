<template>
  <div class="flex">
    <AvatarInformation :size="size" :src="src" name="artadviser" />
    <TransitionGroup class="container messages" name="fade" tag="ul">
      <div v-for="item of messageList" :key="item">
        <MessageBot :message="item" class="message-bot w-full" />
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessageBot from '@/components/atoms/MessageBot.vue';
import AvatarInformation from '@/components/atoms/AvatarInformation.vue';

export default defineComponent({
  components: { AvatarInformation, MessageBot },
  props: {
    messageList: {
      type: Array<String>,
      required: true,
    },
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
.message-bot {
  width: 100%;
  margin-left: 9px;
  margin-top: 9px;
}

.messages {
  padding-top: 4px;
}
</style>
