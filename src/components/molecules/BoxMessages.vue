<template>
  <TransitionGroup class="container box-message" name="fade-move" tag="ul">
    <div v-for="item of messageList" :key="item" class="relative">
      <li>
        <MessageBot v-if="item.type === BOT_TYPE()" :message="item.message" class="message-bot" />
      </li>
      <li v-if="item.type === USER_TYPE()" class="flex justify-end">
        <MessageUser :message="item.message" animation="fade-move" class="message-user" />
      </li>
    </div>
  </TransitionGroup>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessageBot from '@/components/atoms/MessageBot.vue';
import MessageUser from '@/components/atoms/MessageUser.vue';
import { Message } from '@/types/models/message.ts';
import { BOT_TYPE, USER_TYPE } from '@/constants/common.ts';

export default defineComponent({
  components: { MessageUser, MessageBot },
  methods: {
    BOT_TYPE() {
      return BOT_TYPE;
    },
    USER_TYPE() {
      return USER_TYPE;
    },
  },
  props: {
    messageList: {
      type: Array<Message>,
      required: true,
    },
  },
});
</script>

<style scoped>
.message-bot {
  width: fit-content;
  margin-left: 47px;
  margin-right: 46px;
  margin-bottom: 10px;
}

.message-user {
  width: fit-content;
  margin-left: 47px;
  margin-right: 46px;
  margin-bottom: 10px;
}

.box-message {
  max-height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
}
</style>
