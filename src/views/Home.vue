<template>
  <div class="main-content-home">
    <Title description="powered by Mizu Inc." title="TaylorMade Travel"/>
    <RouterLink :to="APP_ROUTE.TELL_YOUR_PERSONAL">
      <Button class="btn-consult" text="Consult with a tailor"/>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {APP_ROUTE} from '@/constants/routes.ts';
import Title from '@/components/atoms/Title.vue';
import Button from '@/components/atoms/Button.vue';

export default defineComponent({
  components: {Button, Title},
  computed: {
    APP_ROUTE() {
      return APP_ROUTE;
    },
  },
});
</script>

<style scoped>
.main-content-home {
  padding-top: 76px;
  padding-right: 16px;
  text-align: center;
}

.btn-consult {
  margin-top: 290px;
  margin-left: 4px;
}
</style>
