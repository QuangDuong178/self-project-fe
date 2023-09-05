<template>
  <div>
    <h1 class="title-choose-picture">ピンとくる作品を選んでください</h1>
    <div class="grid grid-cols-2 gap-4 place-content-center w-full">
      <div v-for="item of imageList" key="item.id" class="el-image">
        <el-image :src="item.src" @click="$emit('choosePicture', item.id)"></el-image>
      </div>
    </div>
    <div class="text-center">
      <button class="button-other" @click="$emit('choosePicture', null)">この中には無い</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BOT_TYPE, USER_TYPE } from '@/constants/common.ts';
import { Image } from '@/types/models/image.ts';

export default defineComponent({
  // components: { MessageUser, MessageBot },
  methods: {
    BOT_TYPE() {
      return BOT_TYPE;
    },
    USER_TYPE() {
      return USER_TYPE;
    },
  },
  props: {
    imageList: {
      type: Array<Image>,
      required: true,
    },
  },
  emits: ['choosePicture'],
});
</script>

<style scoped>
.title-choose-picture {
  color: #000;
  text-align: center;
  font-family: Saira;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-bottom: 36px;
}

.el-image {
  width: 167px;
  height: 175px;
  box-shadow: rgba(0, 0, 0, 0.25);
}

.button-other {
  color: #303231;
  /* text-md/Medium */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  padding: 12px 18px;
  margin-top: 40px;
  border-radius: 46px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
