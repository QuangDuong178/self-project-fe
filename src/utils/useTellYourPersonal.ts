import { Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import { APP_ROUTE } from '@/constants/routes.ts';
import { validateEmail } from '@/utils/index.ts';

export const useTellYourPersonal = () => {
  const route = useRouter();
  // const ctx = getCurrentInstance().appContext.config.globalProperties;
  const MOCK_DROPDOWN = ['Option 1', 'Option 2', 'Option 3'];
  const nameValue = ref('');
  const emailValue = ref('');
  const birthDayValue = ref('');
  const annualIncomeValue = ref('');
  const budgetValue = ref('');
  const positionValue = ref('');

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
    validateField(nameValue.value, 'name');
    validateField(emailValue.value, 'email');
    validateField(birthDayValue.value, 'birthday');
    validateField(annualIncomeValue.value, 'annual');
    validateField(budgetValue.value, 'budget');
    validateField(positionValue.value, 'position');

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
    MOCK_DROPDOWN,
    nameValue,
    emailValue,
    birthDayValue,
    annualIncomeValue,
    budgetValue,
    positionValue,
    testAPI,
    error,
    errors,
  };
};
