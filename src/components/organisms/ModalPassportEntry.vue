<template>
  <div class="text-center">
    <h1 class="title-pe title">Passport Entry</h1>
    <div class="main-content-typ">
      <TextInput
        v-model="emailValue"
        :error="errors.includes('email')"
        class="input"
        name="email"
        place-holder="Mail"
      />
      <TextInput
        v-model="passwordValue"
        :error="errors.includes('password')"
        class="input"
        name="email"
        place-holder="Password sent to you by email"
      />

      <el-upload class="upload" drag multiple>
        <div class="el-upload__text">Upload passport image</div>
      </el-upload>
    </div>
    <el-footer class="footer">
      <Button text="Send" @click="testAPI" />
    </el-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextInput from '@/components/atoms/TextInput.vue';
import { APP_ROUTE } from '@/constants/routes.ts';
import Button from '@/components/atoms/Button.vue';
import { useModalPassportEntry } from '@/utils/useModalPassportEntry.ts';

export default defineComponent({
  components: { Button, TextInput },
  setup() {
    const { emailValue, passwordValue, testAPI, error, errors } = useModalPassportEntry();
    return {
      emailValue,
      passwordValue,
      testAPI,
      error,
      errors,
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
.title-pe {
  padding-top: 150px;
}

.main-content-typ {
  padding-top: 56px;
}

.el-upload__text {
  color: #fff;
  font-family: 'Saira', sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
