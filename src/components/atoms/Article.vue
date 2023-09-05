<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Article',
  props: {
    id: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const descriptions = props.description.split('\n');
    return {
      descriptions,
    };
  },
});
</script>

<template>
  <el-row class="art-class">
    <el-col :span="4">
      <div class="art-left">
        <img :src="img" />
      </div>
    </el-col>
    <el-col :span="20">
      <div class="art-right">
        <p v-for="item of descriptions" :key="item">{{ item }}</p>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped>
.art-class {
  background: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  margin: 25px 14px 0;
  text-decoration: none !important;
}

.art-left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.art-right {
  color: #000;
  font-family: 'Saira', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 8px 11px 11px 7px;
}
</style>
