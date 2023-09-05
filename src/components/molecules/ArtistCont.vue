<template>
  <div>
    <ArtistInfo :artist-name="name" :description="description" :src="src" />
    <AssetList :assets="assets" class="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AssetList from '@/components/atoms/AssetList.vue';
import { Image } from '@/types/models/image.ts';
import ArtistInfo from '@/components/atoms/ArtistInfo.vue';

export default defineComponent({
  components: { ArtistInfo, AssetList },
  props: {
    assets: {
      type: Array<Image>,
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
    description: {
      type: String,
      required: true,
    },
    animation: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.message-bot {
  width: 100%;
  margin-left: 9px;
  margin-top: 9px;
}

.messages {
  padding-top: 4px;
}
</style>
