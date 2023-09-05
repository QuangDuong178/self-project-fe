<script lang="ts" setup>
defineProps<{
  image: string;
}>();
</script>

<template>
  <div class="mr-auto">
    <div class="image-item">
      <transition name="fade" mode="out-in">
        <img class="aspect-w-1 aspect-square object-cover" :src="image" />
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-in-out {
  animation: fadeinout 4s infinite;
}

@keyframes fadeinout {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
