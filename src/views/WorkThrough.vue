<template>
  <!--  <h1 class="title">Tell your personal</h1>-->
  <div class="main-content-wth">
    <Transition name="fade-move">
      <div v-if="!isShowChatModal">
        <ModalSuggestion :default-messages="defaultMessages" message-list="" @show-chat-modal="showChatModal" />
      </div>
    </Transition>
    <Transition class="w-full" mode="in-out" name="fade">
      <div v-if="isShowChatModal" class="h-full">
        <ModalChat />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModalSuggestion from '@/components/organisms/ModalSuggestion.vue';
import { useWorkThrough } from '@/utils/useWorkThrough.ts';
import ModalChat from '@/components/organisms/ModalChat.vue';

export default defineComponent({
  components: { ModalChat, ModalSuggestion },

  setup() {
    const { showChatModal, defaultMessages, isShowChatModal } = useWorkThrough();
    return {
      showChatModal,
      defaultMessages,
      isShowChatModal,
    };
  },
});
</script>

<style scoped>
.main-content-wth {
  max-height: 100%;
}

.btn-accept {
  margin-top: 20px;
}

.main-content-wth .content-wth {
  padding-top: 127px;
}

.main-content-wth .content-wth .box-messages {
  padding-top: 20px;
}
</style>
