import { Ref, ref } from 'vue';

export const useWorkThrough = () => {
  const isShowChatModal: Ref<Boolean> = ref(false);
  const defaultMessages: Ref<Array<String>> = ref([
    'はじめまして。私は Mizu Inc の Travel Planner AI',
    'あなたの旅の条件や希望、体験などを聞いて納得いく旅のプランニングをサポートしていきます',
    'まずは前提や人数、イメージなどを聞かせてもらって',
    '具体的なプランイメージが固まったら正式なプラン提示と見積もり依頼',
    'となります。よろしいでしょうか？',
  ]);

  const showChatModal = () => {
    isShowChatModal.value = true;
  };

  return {
    showChatModal,
    defaultMessages,
    isShowChatModal,
  };
};
