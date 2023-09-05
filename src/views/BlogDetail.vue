<template>
  <div class="animated-frame">
    <div class="grid">
      <HeaderWithBack :url="APP_ROUTE.RESULT_SHOW" />
      <div class="article-detail">
        <ArticleDetail :message="message" :size="45" :src="avatar" name="Artist Name Here" />
      </div>
      <div>
        <div v-for="(blog, index) in listBlog" class="blog-detail">
          <ImageWithDesc :key="index" :image="blog.image" :title-blog="blog.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { APP_ROUTE } from '@/constants/routes.ts';
import avatar from '@/assets/img/avatar.png';
import HeaderWithBack from '@/components/atoms/HeaderWithBack.vue';
import ArticleDetail from '@/components/blogs/ArticleDetail.vue';
import ImageWithDesc from '@/components/blogs/ImageWithDesc.vue';

export default defineComponent({
  components: {
    HeaderWithBack,
    ArticleDetail,
    ImageWithDesc,
  },
  setup() {
    const message =
      'アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。';
    let listBlog = [
      {
        image: 'https://cdn.pixabay.com/photo/2019/07/21/18/15/architecture-4353302_640.jpg',
        title: '絵画タイトル概要データが色々入ります。サイズ、タグ、説明概要要約など',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2016/09/12/16/38/lviv-1665105_640.jpg',
        title: '絵画タイトル概要データが色々入ります。サイズ、タグ、説明概要要約など',
      },
      {
        image: 'https://cdn.pixabay.com/photo/2017/09/09/17/38/background-2732790_640.jpg',
        title: '絵画タイトル概要データが色々入ります。サイズ、タグ、説明概要要約など',
      },
    ];

    return {
      avatar,
      message,
      listBlog,
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
.grid-container {
  width: 1000px;
  height: 1000px;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
}

.main-start {
  height: 295px;
  width: 100vw;
}

.animated-frame {
  background-color: #ffffffb2;
}

.header-button-back {
  background-color: #fff;
}
</style>
