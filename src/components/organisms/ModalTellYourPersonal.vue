<template>
  <div class="text-center">
    <h1 class="title">Tell your personal</h1>
    <div class="main-content-typ">
      <TextInput v-model="nameValue" :error="errors.includes('name')" class="input" name="name" place-holder="Name" />
      <TextInput
        v-model="emailValue"
        :error="errors.includes('email')"
        class="input"
        name="email"
        place-holder="Mail"
      />
      <DateInput
        v-model="birthDayValue"
        :error="errors.includes('birthday')"
        class="input date-input"
        name="date"
        place-holder="Year of birth"
      />
      <DropdownInput
        v-model="annualIncomeValue"
        :error="errors.includes('annual')"
        :options="MOCK_DROPDOWN"
        class="input"
        name="income"
        place-holder="annual income"
      />
      <DropdownInput
        v-model="budgetValue"
        :error="errors.includes('budget')"
        :options="MOCK_DROPDOWN"
        class="input"
        name="budget"
        place-holder="Budget"
      />
      <DropdownInput
        v-model="positionValue"
        :error="errors.includes('position')"
        :options="MOCK_DROPDOWN"
        class="input-last-element"
        name="position"
        place-holder="Position"
      />
    </div>
    <el-footer class="footer">
      <Button text="Start!" @click="testAPI" />
    </el-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextInput from '@/components/atoms/TextInput.vue';
import DateInput from '@/components/atoms/DateInput.vue';
import DropdownInput from '@/components/atoms/DropdownInput.vue';
import { APP_ROUTE } from '@/constants/routes.ts';
import { useTellYourPersonal } from '@/utils/useTellYourPersonal.ts';
import Button from '@/components/atoms/Button.vue';

export default defineComponent({
  components: { Button, DropdownInput, DateInput, TextInput },
  setup() {
    const {
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
    } = useTellYourPersonal();
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
  },
  computed: {
    APP_ROUTE() {
      return APP_ROUTE;
    },
  },
});
</script>

<style scoped>
.title {
  padding-top: 107px;
}

.main-content-typ {
  padding-top: 56px;
}
</style>
