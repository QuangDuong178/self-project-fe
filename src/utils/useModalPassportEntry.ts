import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { APP_ROUTE } from '@/constants/routes.ts';
import { validateEmail } from '@/utils/index.ts';

export const useModalPassportEntry = () => {
  const route = useRouter();
  // const ctx = getCurrentInstance().appContext.config.globalProperties;
  const emailValue = ref('');
  const passwordValue = ref('');

  const errors: Ref<Array<String>> = ref([]);
  const error: Ref<String> = ref('');

  const validateField = (value: string, name: string) => {
    if (value.trim() === '') {
      errors.value.push(name);
    }
  };

  const testAPI = () => {
    errors.value = [];
    error.value = '';
    validateField(emailValue.value, 'name');
    validateField(passwordValue.value, 'password');

    if (errors.value.length > 0) {
      error.value = '未入力の項目があります。';
    } else if (!validateEmail(emailValue.value)) {
      errors.value.push('email');
      error.value = 'メールアドレスが正しい形式ではありません。';
    } else {
      route.push(APP_ROUTE.WORKTHROUGH);
    }

    // const response: AxiosResponse<TestResponse> = await ctx.$repositories('message').message(params);
    // return response.data;

    // goTo;
  };

  return {
    emailValue,
    passwordValue,
    testAPI,
    error,
    errors,
  };
};
