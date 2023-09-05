import { ComponentPropsOptions, FunctionalComponent, ref, Ref } from 'vue';
import { Message } from '@/types/models/message.ts';
import { BOT_TYPE, USER_TYPE } from '@/constants/common.ts';

export const useModalSuggestion = (emit: FunctionalComponent, props: ComponentPropsOptions<P>) => {
  const { defaultMessages } = props;
  const displayButton: Ref<Boolean> = ref(false);
  const messageList: Ref<Array<Message>> = ref([]);
  let index = 0;

  const loadingMessage = setInterval(async () => {
    if (index < defaultMessages.length) {
      await messageList.value.unshift({
        type: BOT_TYPE,
        message: defaultMessages[index],
      });
    }

    if (index === defaultMessages.length - 1) {
      displayButton.value = true;
      // messageScrollBar.scrollTo(0, messageScrollBar.scrollHeight);
      clearInterval(loadingMessage);
    }
    index++;
  }, 200);

  const testAPI = async () => {
    displayButton.value = false;
    messageList.value.unshift({
      type: USER_TYPE,
      message: 'はい。',
    });

    setTimeout(() => {
      emit('showChatModal');
      messageList.value = [];
    }, 1000);

    // displayAvatar.value = false;
  };

  return {
    displayButton,
    messageList,
    testAPI,
  };
};
