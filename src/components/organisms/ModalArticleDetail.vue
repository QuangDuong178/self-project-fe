<script lang="ts">
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'ModalArticleDetail',
  props: {
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  emits: ['handleBack'],
  setup(props, { emit }) {
    onMounted(() => {
      const contentAd = document.getElementById('content-ad');
      contentAd.style.backgroundImage = 'url(' + props.image + ')';
    });
    return {};
  },
});
</script>

<template>
  <div id="content-ad" class="detail-content">
    <svg
      class="icon-back"
      fill="none"
      height="30"
      viewBox="0 0 30 30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
      @click="$emit('handleBack')"
    >
      <path
        d="M13.414 25.414C13.0389 25.7889 12.5303 25.9996 12 25.9996C11.4697 25.9996 10.9611 25.7889 10.586 25.414L1.586 16.414C1.21106 16.0389 1.00042 15.5303 1.00042 15C1.00042 14.4697 1.21106 13.9611 1.586 13.586L10.586 4.586C10.9632 4.22168 11.4684 4.0201 11.9928 4.02465C12.5172 4.02921 13.0188 4.23955 13.3896 4.61036C13.7605 4.98118 13.9708 5.4828 13.9753 6.0072C13.9799 6.53159 13.7783 7.0368 13.414 7.414L8 13L27 13C27.5304 13 28.0391 13.2107 28.4142 13.5858C28.7893 13.9609 29 14.4696 29 15C29 15.5304 28.7893 16.0391 28.4142 16.4142C28.0391 16.7893 27.5304 17 27 17L8 17L13.414 22.586C13.7889 22.9611 13.9996 23.4697 13.9996 24C13.9996 24.5303 13.7889 25.0389 13.414 25.414Z"
        fill="white"
      />
    </svg>

    <div class="container">
      <div class="art-img">
        <img :src="image" />
      </div>
      <div class="animated-text">
        京都の有名な陶芸家のひとり、伊藤南山の窯元で、陶芸作品を見ながら食事ができ、陶器 もオーダーできる
        <br />
        <br />

        ランチまたはディナー 予算
        <br />

        6万円〜50万円〜 (陶器のオーダー次第。) ※ポンド表記
      </div>
      <div class="temp-text">
        <div class="temp-title">情報の章タイトルが入ります。</div>
        <div>
          テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。
        </div>
      </div>
      <div class="temp-text">
        <div class="temp-title">情報の章タイトルが入ります。</div>
        <div>
          テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。
        </div>
      </div>
      <div class="temp-text">
        <div class="temp-title">情報の章タイトルが入ります。</div>
        <div>
          テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。テキスト情報が入ります。
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-content {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  height: 100vh;
}

.container {
  background: rgba(255, 255, 255, 0.88);
  padding: 25px;
  color: #000;
  font-family: 'Saira', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 90vw;
  margin: 10px auto;
  height: 90vh;
}

.art-img img {
  width: 100%;
  height: 129px;
  object-fit: cover;
}

.temp-text {
  margin-top: 40px;
}

.temp-title {
  margin-bottom: 12px;
}

.animated-text {
  margin-top: 25px;
  animation: slideDown 1s forwards;
}

.icon-back {
  margin-left: 8px;
  padding-top: 3px;
}

@keyframes slideDown {
  0% {
    transform: translate(20px, -100px);
    opacity: 0;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>
