<template>
  <!--  <h1 class="title">Tell your personal</h1>-->
  <div class="h-full">
    <div id="choose-picture">
      <TransitionGroup :duration="2000" clzass="container" name="fade"> </TransitionGroup>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import avatar from '@/assets/img/avatar.png';
import picture1 from '@/assets/img/picture1.png';
import picture2 from '@/assets/img/picture2.png';
import picture3 from '@/assets/img/picture3.png';
import picture4 from '@/assets/img/picture4.png';
import AvatarBoxMessages from '@/components/molecules/AvatarBoxMessages.vue';
import { Image } from '@/types/models/image.ts';
import ChoosePicture from '@/components/molecules/ChoosePicture.vue';

export default defineComponent({
  components: { ChoosePicture, AvatarBoxMessages },
  emits: ['displayBoxMessage'],
  setup(props, { emit }) {
    let defaultMessage = ['では、診断を開始します。', '以下から、今の気分にマッチするものを1つ選んでください'];
    const displayChoosePicture: Ref<Boolean> = ref(false);
    const messageList: Ref<Array<String>> = ref([defaultMessage[0]]);
    let transition = 1;
    const totalTimeDisplayChoosePicture: Ref<Number> = ref(1);
    const defaultPicture: Array<Image> = [
      {
        id: 1,
        src: picture1,
      },
      {
        id: 2,
        src: picture2,
      },
      {
        id: 3,
        src: picture3,
      },
      {
        id: 4,
        src: picture4,
      },
    ];
    const choosePicture = (id: number) => {
      if (totalTimeDisplayChoosePicture.value === 3) {
        messageList.value = [];
        emit('displayBoxMessage');
      } else {
        totalTimeDisplayChoosePicture.value++;
      }
      console.log(totalTimeDisplayChoosePicture.value);
      transition = 1;

      defaultMessage = ['なるほど。ルネサンス後期…', 'ではこういった絵はいかがでしょう'];
      const avatarMessageBox = document.getElementById('choose-picture');
      avatarMessageBox.style.transform = 'none';
      avatarMessageBox.style.top = '365px';
      messageList.value = [defaultMessage[0]];
      displayChoosePicture.value = false;

      const loadMessage = setInterval(() => {
        switch (transition) {
          case 1: {
            avatarMessageBox.style.transform = 'translate(0, -5vh)';
            messageList.value.push(defaultMessage[transition]);
            break;
          }
          case 2: {
            avatarMessageBox.style.transform = 'translate(0, -35vh)';
            break;
          }
          default:
            displayChoosePicture.value = true;
            transition = 1;
            clearInterval(loadMessage);
        }
        transition++;
      }, 1500);
    };

    const loadMessage = setInterval(() => {
      const avatarMessageBox = document.getElementById('choose-picture');

      switch (transition) {
        case 1: {
          avatarMessageBox.style.transform = 'translate(0, -5vh)';
          messageList.value.push(defaultMessage[transition]);
          break;
        }
        case 2: {
          avatarMessageBox.style.transform = 'translate(0, -35vh)';
          break;
        }
        default:
          displayChoosePicture.value = true;
          transition = 1;
          clearInterval(loadMessage);
      }
      transition++;
    }, 1000);
    return {
      choosePicture,
      messageList,
      defaultPicture,
      avatar,
      displayChoosePicture,
    };
  },
  mounted() {},
});
</script>

<style scoped>
#avatar-box-messages {
  padding-right: 63px;
  padding-left: 26px;
  /*transform: translate(0, -100px);*/
  /*transform-origin: top left;*/
}

#choose-picture {
  transition-duration: 1000ms;
  position: fixed;
  top: 40vh;
}

.pick-picture {
  padding-top: 24px;
  padding-right: 19px;
  padding-left: 20px;
}
</style>
