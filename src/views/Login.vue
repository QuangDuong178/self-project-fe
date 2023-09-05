<template>
  <h1 class="title">Log in</h1>
  <div class="main-content">
    <TextInput v-model="nameValue" class="input" name="name" place-holder="Name" />
    <TextInput v-model="emailValue" class="input" name="email" place-holder="Mail" />
  </div>
  <el-footer class="footer footer-login">
    <router-link :to="APP_ROUTE.TELL_YOUR_PERSONAL">
      <button class="btn-start text-white" @click="testAPI">Start!</button>
    </router-link>

    <div class="information information-login">
      <el-link>プライバシーポリシー</el-link>
    </div>
  </el-footer>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref } from 'vue';
import TextInput from '@/components/atoms/TextInput.vue';
import { ParamsTest } from '@/types/models/auth';
import { TestResponse } from '@/types/models/responses';
import { AxiosResponse } from 'axios';
import { APP_ROUTE } from '@/constants/routes.ts';

export default defineComponent({
  components: { TextInput },
  setup() {
    const ctx = getCurrentInstance().appContext.config.globalProperties;
    const nameValue = ref('');
    const emailValue = ref('');

    const testAPI = async (params: ParamsTest) => {
      const response: AxiosResponse<TestResponse> = await ctx.$repositories('message').message(params);
      return response.data;
    };

    return {
      nameValue,
      emailValue,
      testAPI,
    };
  },
  computed: {
    APP_ROUTE() {
      return APP_ROUTE;
    },
  },
});
</script>

<style scoped>
.footer-login {
  padding-top: 37px;
}

.information-login {
  padding-top: 32px;
}
</style>
