<template>
  <div class="artist-info">
    <div class="artist-img">
      <img :src="src" />
    </div>
    <div class="artist-header">
      <div class="artist-title">{{ artistName }}</div>
      <div class="artist-des">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    artistName: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.artist-info {
  display: flex;
  /* justify-content: space-between; */
}

.artist-img {
  margin-right: 9px;
}

.artist-img img {
  max-width: 41px;
  width: 41px;
  height: 41px;
  border-radius: 41px;
  object-fit: cover;
  transform: translateY(-15px);
}

.artist-title {
  color: #000;
  font-family: Noto Sans JP;
  font-size: 14.493px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 8px;
}

.artist-des {
  color: #000;
  font-family: Noto Sans JP;
  font-size: 7.493px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.artist-header {
  margin-bottom: 13px;
}
</style>
