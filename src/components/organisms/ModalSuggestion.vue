<template>
  <div class="content-wth">
    <Transition name="fade">
      <AvatarTitle id="avatarInformation" :size="129" :src="avatar" name="Planner" />
    </Transition>
    <div id="message-scroll-bar" ref="scrollbarRef">
      <!--      <BoxMessages id="box-message-delete" :message-list="messageDeleteList" class="box-messages-delete" hidden="" />-->
      <BoxMessages id="box-message" ref="innerRef" :message-list="messageList" class="box-messages" />
    </div>
    <!--    <Test />-->
  </div>
  <Transition class="w-full" name="fade">
    <div v-if="displayButton" class="text-center pt-5">
      <Button text="はい。" @click="testAPI" />
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BOT_TYPE, USER_TYPE } from '@/constants/common.ts';
import BoxMessages from '@/components/molecules/BoxMessages.vue';
import AvatarTitle from '@/components/atoms/AvatarTitle.vue';
import avatar from '@/assets/img/avatar.png';
import { useModalSuggestion } from '@/utils/useModalSuggestion.ts';
import Button from '@/components/atoms/Button.vue';

export default defineComponent({
  components: { Button, BoxMessages, AvatarTitle },
  props: {
    defaultMessages: {
      type: Array<String>,
      required: true,
    },
  },
  emits: ['showChatModal'],
  setup(props, { emit }) {
    const { displayButton, messageList, testAPI } = useModalSuggestion(emit, props);
    return {
      avatar,
      displayButton,
      messageList,
      testAPI,
    };
  },
  methods: {
    BOT_TYPE() {
      return BOT_TYPE;
    },
    USER_TYPE() {
      return USER_TYPE;
    },
  },
});
</script>

<style scoped>
.btn-accept {
  margin-top: 20px;
}

.main-content-wth .content-wth {
  padding-top: 127px;
}

#message-scroll-bar {
  margin-top: 20px;
  height: 31vh;
  overflow-y: scroll;
}
</style>
