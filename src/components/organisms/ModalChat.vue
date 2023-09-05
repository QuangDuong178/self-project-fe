<script lang="ts">
import { defineComponent } from 'vue';
import TextMessage from '@/components/atoms/TextMessage.vue';
import ChatBoxMessages from '@/components/molecules/ChatBoxMessages.vue';
import { useModalChat } from '@/utils/useModalChat.ts';
import ModalArticleDetail from '@/components/organisms/ModalArticleDetail.vue';

export default defineComponent({
  name: 'ModalChat',
  components: { ModalArticleDetail, ChatBoxMessages, TextMessage },
  setup() {
    const { articleDetail, handleBack, goToDetail, contentList, handleClickSend, handleClickChooseGuide } =
      useModalChat();
    return { articleDetail, handleBack, goToDetail, contentList, handleClickSend, handleClickChooseGuide };
  },
  mounted() {
    const footer = document.getElementById('footer-rs');
    const content = document.getElementById('content-rs');

    if (content) {
      content.style.height = 'calc(100vh - (' + (footer ? footer.offsetHeight : 0) + 'px))';
    }
  },
});
</script>

<template>
  <div v-if="!articleDetail">
    <div id="content-rs" class="content-result chat-box">
      <ChatBoxMessages :content-list="contentList" @go-to-detail="goToDetail" @choose-guide="handleClickChooseGuide" />
    </div>
    <div id="footer-rs" class="mess-input">
      <TextMessage class="text-message" @handle-click-send="handleClickSend" />
    </div>
  </div>
  <div v-else>
    <ModalArticleDetail :id="articleDetail.id" :image="articleDetail.image" @handle-back="handleBack" />
  </div>
</template>

<style scoped>
.chat-box {
  display: flex;
  align-items: end;
  padding-bottom: 38px;
}

.mess-input {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666668;
  font-family: 'Noto Sans JP', serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  background: #edebeb;
  max-height: 30vh;
  min-height: 5vh;
  padding-left: 19px;
  padding-right: 14px;
}
</style>
