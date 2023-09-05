<template>
  <span
    id="message"
    ref="message"
    class="message_input"
    contenteditable="true"
    placeholder="Start typing..."
    @keydown="breakLine"
  ></span>
  <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg" @click="send()">
    <g clip-path="url(#clip0_9_1035)">
      <path
        clip-rule="evenodd"
        d="M1.6363 2.78777L2.44739 7.45151H7.45194C7.87767 7.45151 8.22279 7.79662 8.22279 8.22236C8.22279 8.64809 7.87767 8.99321 7.45194 8.99321H2.44739L1.6363 13.6569L14.317 8.22236L1.6363 2.78777ZM1.0166 8.22236L0.0658136 2.75531C-0.0110501 2.31334 0.13196 1.86162 0.449169 1.54441C0.847735 1.14584 1.44881 1.03008 1.96689 1.25212L15.7419 7.15567C16.1685 7.33854 16.4452 7.75811 16.4452 8.22236C16.4452 8.6866 16.1685 9.10618 15.7419 9.28905L1.96689 15.1926C1.44881 15.4147 0.847735 15.2988 0.449169 14.9004C0.13196 14.5831 -0.0110503 14.1314 0.0658136 13.6894L1.0166 8.22236Z"
        fill="#8E8E93"
        fill-rule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_9_1035">
        <rect fill="white" height="16.4448" width="16.4448" />
      </clipPath>
    </defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from 'vue';

export default defineComponent({
  props: {},
  emits: ['handleClickSend'],
  setup(props, { emit }) {
    const sendEnable: Ref<Boolean> = ref(true);
    const editHeight = () => {
      const footer = document.getElementById('footer-rs');
      const content = document.getElementById('content-rs');

      if (content) {
        content.style.height = 'calc(100vh - (' + (footer ? footer.offsetHeight : 0) + 'px))';
        content.scrollTo(0, content.scrollHeight);
      }
    };
    const message = ref('');
    const send = () => {
      if (sendEnable.value) {
        if (message.value.innerText.trim() === '') {
          message.value.innerText = '';
          editHeight();
          return;
        }
        emit('handleClickSend', message.value.innerText.trim());
        message.value.innerText = '';
        editHeight();
      }
    };

    const breakLine = (event: KeyboardEvent) => {
      editHeight();
      if (event.key === 'Enter' && !event.shiftKey && sendEnable.value) {
        event.preventDefault();
        send();
      }
    };
    onMounted(() => {
      const inputElement = document.getElementById('message');

      inputElement?.addEventListener('compositionstart', event => {
        sendEnable.value = false;
      });
      inputElement?.addEventListener('compositionend', () => {
        sendEnable.value = true;
      });
    });

    return {
      message,
      send,
      breakLine,
    };
  },
});
</script>

<style scoped>
.message_input {
  background: inherit;
  resize: none;
  font-size: 16px;
  outline: none;
  color: black;
  font-family: 'Noto Sans JP', sans-serif;
  border: none;
  width: 95%;
  max-height: 29vh;
  overflow-y: auto;
}

span[contenteditable]:empty::before {
  content: 'Start typing...';
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 9.276px;
  display: inline-block;
  color: #666668;
}

span[contenteditable]:empty:focus::before {
  content: 'Start typing...';
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 9.276px;
  color: #666668;
}
</style>
