<template>
  <!--  <h1 class="title">Tell your personal</h1>-->
  <div class="main-content-rs">
    <div class="container">
      <div class="mess-cont">
        <AvatarBoxMessages
          :message-list="['ふむ…このあたりでしょうか。いかがですか？。']"
          :size="61"
          :src="avatar"
          animation=""
          name="artadviser"
        />
      </div>
      <div>
        <ArtistCont
          :assets="assets1"
          :src="avatar"
          animation=""
          class="artist-cont"
          description="アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。"
          name="Artist Name Here"
        />

        <ArtistCont
          :assets="assets1"
          :src="avatar"
          animation=""
          class="artist-cont"
          description="アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。"
          name="Artist Name Here"
        />

        <ArtistCont
          :assets="assets1"
          :src="avatar"
          animation=""
          class="artist-cont"
          description="アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。"
          name="Artist Name Here"
        />

        <div class="mess-cont">
          <div class="my-text-cont">
            <div class="my-text-comp">
              <div class="my-text">もうちょっとこう…明るい感じの、ポップなやつ、ないの？</div>
            </div>
          </div>
          <div class="ai-text-cont">
            <AvatarBoxMessages
              :message-list="mockMessageResponse"
              :size="37"
              :src="avatar"
              animation=""
              name="artadviser"
            />
          </div>
        </div>

        <ArtistCont
          :assets="assets1"
          :src="avatar"
          animation=""
          class="artist-cont"
          description="アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。"
          name="Artist Name Here"
        />

        <ArtistCont
          :assets="assets1"
          :src="avatar"
          animation=""
          class="artist-cont"
          description="アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。"
          name="Artist Name Here"
        />

        <div class="mess-cont">
          <div class="my-text-cont">
            <div class="my-text-comp">
              <div class="my-text">もうちょっとこう…明るい感じの、ポップなやつ、ないの？</div>
            </div>
          </div>
          <div class="ai-text-cont">
            <AvatarBoxMessages
              :message-list="mockMessageResponse"
              :size="37"
              :src="avatar"
              animation=""
              name="artadviser"
            />
          </div>
          <div class="tag-list">
            <router-link :to="APP_ROUTE.BLOG_DETAIL" class="tag-item">お願いします</router-link>
            <div class="tag-item">それはやめて</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mess-input">
      <div>Start typing...</div>
      <svg fill="none" height="17" viewBox="0 0 17 17" width="17" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_9_1035)">
          <path
            clip-rule="evenodd"
            d="M1.6363 2.78777L2.44739 7.45151H7.45194C7.87767 7.45151 8.22279 7.79662 8.22279 8.22236C8.22279 8.64809 7.87767 8.99321 7.45194 8.99321H2.44739L1.6363 13.6569L14.317 8.22236L1.6363 2.78777ZM1.0166 8.22236L0.0658136 2.75531C-0.0110501 2.31334 0.13196 1.86162 0.449169 1.54441C0.847735 1.14584 1.44881 1.03008 1.96689 1.25212L15.7419 7.15567C16.1685 7.33854 16.4452 7.75811 16.4452 8.22236C16.4452 8.6866 16.1685 9.10618 15.7419 9.28905L1.96689 15.1926C1.44881 15.4147 0.847735 15.2988 0.449169 14.9004C0.13196 14.5831 -0.0110503 14.1314 0.0658136 13.6894L1.0166 8.22236Z"
            fill="#8E8E93"
            fill-rule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0_9_1035">
            <rect fill="white" height="16.4448" width="16.4448" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import AvatarBoxMessages from '@/components/molecules/AvatarBoxMessages.vue';
import avatar from '@/assets/img/avatar.png';
import picture from '@/assets/img/picture1.png';
import ArtistCont from '@/components/molecules/ArtistCont.vue';
import { Image } from '@/types/models/image.ts';
import { Message } from '@/types/models/message.ts';
import { APP_ROUTE } from '@/constants/routes.ts';

export default defineComponent({
  components: { ArtistCont, AvatarBoxMessages },
  setup() {
    const ctx = getCurrentInstance().appContext.config.globalProperties;
    const assets1: Array<Image> = [
      {
        id: 1,
        src: picture,
      },
      {
        id: 2,
        src: picture,
      },
      {
        id: 3,
        src: picture,
      },
      {
        id: 4,
        src: picture,
      },
    ];

    const mockMessageResponse: Array<Message> = [
      '明るくポップな感じのもの…ですか',
      'いただいた好みの情報と合わせると…',
      'このあたりなど、いかがでしょう？',
    ];

    return {
      APP_ROUTE,
      assets1,
      avatar,
      mockMessageResponse,
    };
  },
});
</script>

<style scoped>
.main-content-rs {
  background-image: url('@/assets/img/bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  margin: 0;
}

.artist-cont {
  background: rgba(255, 255, 255, 0.7);
  padding: 7px 8px 12px 8px;
  margin-top: 30px;
}

.artist-img img {
  border-radius: 41px;
  object-fit: cover;
  transform: translateY(-15px);
}

.assest img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mess-cont {
  padding: 25px;
  padding-bottom: 0;
}

.ai-avt img {
  width: 37px;
  height: 37px;
  border-radius: 37px;
  border: 1px solid #000;
  object-fit: cover;
}

.tag-list {
  display: flex;
  gap: 8px;
  padding-bottom: 8px;
  margin-top: 13px;
}

.tag-item {
  border-radius: 50px;
  border: 1px solid #ef5944;
  color: #ef5944;
  text-align: center;
  font-family: Saira;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 6px 20px;
}

.mess-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666668;
  font-family: Noto Sans JP;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 9.276px; /* 57.977% */
  background: #edebeb;
  height: 45px;
  padding-left: 19px;
  padding-right: 14px;
  margin-top: 8px;
}

.my-text-comp {
  border-radius: 10px 0px 10px 10px;
  background: #feaa9f;
  max-width: 260px;
}

.my-text-cont {
  display: flex;
  justify-content: end;
}

.my-text {
  color: #000;
  font-family: Saira;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 11px 16px 13px 35px;
}

.ai-text-cont {
  display: flex;
  max-width: 255px;
  justify-content: start;
  margin-top: 25px;
}
</style>
