<template>
  <div class="image-information">
    <el-avatar :size="size" :src="src" class="ms-3" />
    <h1 class="name mt-3 ms-2">{{ name }}</h1>
  </div>
  <div class="message-bot ms-12">{{ message }}</div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { APP_ROUTE } from '@/constants/routes.ts';

export default defineComponent({
  props: {
      message: {
        type: String,
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
});
</script>

<style scoped>
.message-bot {
  border-radius: 0 10px 10px 10px;
  padding: 0px 16px 12px 16px;
  color: #000;
  font-family: 'Saira', SansSerif, serif;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.image-information {
  text-align: center;
  display: flex;
}

.image-information .name {
  color: #000;
  text-align: center;
  font-family: 'Saira', SansSerif;
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}
</style>
