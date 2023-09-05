<template>
  <TransitionGroup class="container" name="fade" tag="ul">
    <div class="my-text-cont">
      <div class="my-text-comp">
        <div v-for="message in messageUserList" class="my-text">{{ message }}</div>
      </div>
    </div>
    <div class="ai-text-cont">
      <AvatarBoxMessages :message-list="messageBotList" :size="37" :src="avatar" animation="" name="artadviser" />
    </div>
  </TransitionGroup>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Message } from '@/types/models/message.ts';
import { BOT_TYPE, USER_TYPE } from '@/constants/common.ts';
import AvatarBoxMessages from '@/components/molecules/AvatarBoxMessages.vue';

export default defineComponent({
  components: { AvatarBoxMessages },
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
  setup(props) {
    const messageUserList = props.messageList.filter(item => item.type === USER_TYPE).map(item => item.message);
    const messageBotList = props.messageList.filter(item => item.type === BOT_TYPE).map(item => item.message);
    return {
      messageUserList,
      messageBotList,
    };
  },
});
</script>

<style scoped>
.my-text-comp {
  border-radius: 10px 0px 10px 10px;
  background: #feaa9f;
  max-width: 260px;
}

.my-text-cont {
  display: flex;
  justify-content: end;
}

.my-text {
  color: #000;
  font-family: Saira;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 11px 16px 13px 35px;
}

.ai-text-cont {
  display: flex;
  max-width: 255px;
  justify-content: start;
  margin-top: 25px;
}
</style>
