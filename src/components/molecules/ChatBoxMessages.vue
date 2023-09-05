<template>
  <TransitionGroup class="container chat-box-message" name="fade-message" tag="ul">
    <div v-for="(item, index) of contentList" :key="item" class="relative">
      <template v-if="item.type === ContentDetailType().MESSAGE">
        <li v-if="item.content.type === BOT_TYPE()">
          <el-avatar
            v-if="
              index === contentList.length - 1 ||
              contentList[index + 1].type !== ContentDetailType().MESSAGE ||
              contentList[index + 1].content.type !== BOT_TYPE()
            "
            :size="36.362"
            :src="avatar"
            class="avatar-box-chat"
          ></el-avatar>
          <MessageBot :message="item.content.message" class="message-bot" />
        </li>
        <Transition mode="out-in" name="fade">
          <li v-if="item.content.type === GUIDE_TYPE()" class="flex justify-end w-full">
            <MessageGuide
              :message="item.content.message"
              class="message-user w-full"
              @click="$emit('chooseGuide', item.content.message)"
            />
          </li>
        </Transition>

        <li v-if="item.content.type === USER_TYPE()" class="flex justify-end">
          <MessageUser :message="item.content.message" animation="" class="message-user" />
        </li>
      </template>
      <template v-if="item.type === ContentDetailType().ARTICLE">
        <Article
          :id="item.content.id"
          :description="item.content.description"
          :img="item.content.image"
          @click="$emit('goToDetail', item.content)"
        />
      </template>
    </div>
  </TransitionGroup>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MessageBot from '@/components/atoms/MessageBot.vue';
import MessageUser from '@/components/atoms/MessageUser.vue';
import { BOT_TYPE, GUIDE_TYPE, USER_TYPE } from '@/constants/common.ts';
import avatar from '@/assets/img/avatar.png';
import MessageGuide from '@/components/atoms/MessageGuide.vue';
import { ContentDetail } from '@/types/models/content-detail.ts';
import { ContentDetailType } from '@/types/enums/content-detail.ts';
import Article from '@/components/atoms/Article.vue';

export default defineComponent({
  components: { Article, MessageGuide, MessageUser, MessageBot },

  props: {
    contentList: {
      type: Array<ContentDetail>,
      required: true,
    },
  },
  emits: ['chooseGuide', 'goToDetail'],
  setup() {
    return {
      avatar,
    };
  },

  methods: {
    GUIDE_TYPE() {
      return GUIDE_TYPE;
    },
    BOT_TYPE() {
      return BOT_TYPE;
    },
    USER_TYPE() {
      return USER_TYPE;
    },
    ContentDetailType() {
      return ContentDetailType;
    },
  },
});
</script>

<style scoped>
.message-bot {
  width: fit-content;
  margin-left: 58px;
  margin-right: 35px;
  margin-bottom: 10px;
}

.message-user {
  width: fit-content;
  margin-left: 64px;
  margin-right: 35px;
  margin-bottom: 10px;
}

.avatar-box-chat {
  position: absolute;
  top: -20px;
  left: 11px;
}

.chat-box-message {
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
}
</style>
