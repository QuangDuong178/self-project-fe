import { Ref, ref } from 'vue';
import { APP_ROUTE } from '@/constants/routes.ts';
import { Image } from '@/types/models/image.ts';
import asset11 from '@/assets/img/asset1-1.png';
import asset12 from '@/assets/img/asset1-2.png';
import asset13 from '@/assets/img/asset1-3.png';
import asset14 from '@/assets/img/asset1-4.png';
import asset15 from '@/assets/img/asset1-5.png';
import asset21 from '@/assets/img/asset2-1.png';
import asset22 from '@/assets/img/asset2-2.png';
import asset23 from '@/assets/img/asset2-3.png';
import asset31 from '@/assets/img/asset3-1.png';
import asset32 from '@/assets/img/asset3-2.png';
import asset41 from '@/assets/img/asset4-1.png';
import asset51 from '@/assets/img/asset5-1.png';
import asset52 from '@/assets/img/asset5-2.png';
import asset53 from '@/assets/img/asset5-3.png';
import asset54 from '@/assets/img/asset5-4.png';
import asset61 from '@/assets/img/asset6-1.png';
import asset62 from '@/assets/img/asset6-2.png';
import asset63 from '@/assets/img/asset6-3.png';
import asset71 from '@/assets/img/asset7-1.png';
import asset72 from '@/assets/img/asset7-2.png';
import { useRouter } from 'vue-router';
import avatar from '@/assets/img/avatar.png';
import { MessageBox } from '@/types/models/messageBox.ts';
import { Article } from '@/types/models/article.ts';

export const useModalResultShow = () => {
  const messageSendList: Ref<Array<String>> = ref([]);
  const messageBoxList: Ref<Array<MessageBox>> = ref([]);
  const messageInput: Ref<String> = ref('');
  const tagList: Ref<Array<String>> = ref(['お願いします', 'それはやめて']);
  const router = useRouter();
  const articleList: Ref<Array<Image>> = ref([]);
  const assets1: Array<Image> = [
    {
      id: 1,
      src: asset11,
    },
    {
      id: 2,
      src: asset12,
    },
    {
      id: 3,
      src: asset13,
    },
    {
      id: 4,
      src: asset14,
    },
    {
      id: 5,
      src: asset15,
    },
  ];

  const assets2: Array<Image> = [
    {
      id: 1,
      src: asset21,
    },
    {
      id: 2,
      src: asset22,
    },
    {
      id: 3,
      src: asset23,
    },
  ];

  const assets3: Array<Image> = [
    {
      id: 1,
      src: asset31,
    },
    {
      id: 2,
      src: asset32,
    },
  ];

  const assets4: Array<Image> = [
    {
      id: 1,
      src: asset41,
    },
  ];

  const assets5: Array<Image> = [
    {
      id: 1,
      src: asset51,
    },
    {
      id: 2,
      src: asset52,
    },
    {
      id: 3,
      src: asset53,
    },
    {
      id: 4,
      src: asset54,
    },
  ];

  const assets6: Array<Image> = [
    {
      id: 1,
      src: asset61,
    },
    {
      id: 2,
      src: asset62,
    },
    {
      id: 3,
      src: asset63,
    },
  ];

  const assets7: Array<Image> = [
    {
      id: 1,
      src: asset71,
    },
    {
      id: 2,
      src: asset72,
    },
  ];

  const defaultArticles: Array<Article> = [
    {
      id: 1,
      avatar: avatar,
      name: 'Artist Name Here',
      description:
        'アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。',
      assets: assets1,
    },
    {
      id: 2,
      avatar: avatar,
      name: 'Artist Name Here',
      description:
        'アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。',
      assets: assets2,
    },
    {
      id: 3,
      avatar: avatar,
      name: 'Artist Name Here',
      description:
        'アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。',
      assets: assets3,
    },
    {
      id: 4,
      avatar: avatar,
      name: 'Artist Name Here',
      description:
        'アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。',
      assets: assets4,
    },
    {
      id: 5,
      avatar: avatar,
      name: 'Artist Name Here',
      description:
        'アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。アーティストの来歴、説明などをGPTで要約したものを100文字程度で表記。',
      assets: assets5,
    },
  ];

  const index = 0;
  const loadding = setInterval(() => {
    articleList.value.push(defaultArticles[index]);

    if (index === defaultArticles.length - 1) {
      clearInterval(loadding);
    }
    index++;
  }, 1000);

  const mockMessageResponse: Array<String> = [
    '明るくポップな感じのもの…ですか',
    'いただいた好みの情報と合わせると…',
    'このあたりなど、いかがでしょう？',
  ];

  const handleTagList = async () => {
    tagList.value = [];
    await messageBoxList.value.push({
      messageBot: [
        'よかったです！',
        'はい。では担当に共有しておきますね',
        '数日中に入力いただいたメールアドレス宛に連絡が来ると思いますので\n' + 'しばらくお待ちいただければと思います',
        '今回はありがとうございました。',
      ],
      messageUser: 'お願いします',
    });
    await scrollFollow();
  };

  const message = ref('');

  const goToDetail = () => {
    router.push({
      path: APP_ROUTE.BLOG_DETAIL,
      params: {
        id: 1,
      },
    });
    window.location.href = APP_ROUTE.BLOG_DETAIL;
  };

  const handleClickSend = async (message: string) => {
    await messageBoxList.value.push({
      messageBot: [],
      messageUser: message,
    });
    await scrollFollow();
  };

  const scrollFollow = () => {
    const boxMessage = document.getElementById('content-rs');
    if (boxMessage) {
      boxMessage.scrollTo(0, boxMessage.scrollHeight);
    }
  };
  return {
    tagList,
    handleTagList,
    messageBoxList,
    handleClickSend,
    messageSendList,
    messageInput,
    goToDetail,
    message,
    APP_ROUTE,
    assets1,
    assets2,
    assets3,
    assets4,
    assets5,
    assets6,
    assets7,
    avatar,
    mockMessageResponse,
  };
};
