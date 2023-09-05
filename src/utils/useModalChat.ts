import { Ref, ref } from 'vue';
import { BOT_TYPE, GUIDE_TYPE, USER_TYPE } from '@/constants/common.ts';
import { ContentDetail } from '@/types/models/content-detail.ts';
import { ContentDetailType } from '@/types/enums/content-detail.ts';
import { Article } from '@/types/models/article.ts';
import article from '@/assets/img/article.png';

export const useModalChat = () => {
  const articleDetail: Ref<Article> = ref(null);

  const handleBack = () => {
    articleDetail.value = null;
  };

  const goToDetail = (article: Article) => {
    articleDetail.value = article;
  };
  const contentList: Ref<Array<ContentDetail>> = ref(
    [
      {
        type: ContentDetailType.MESSAGE,
        content: {
          type: BOT_TYPE,
          message: 'では、よろしくお願いします。',
        },
      },
      {
        type: ContentDetailType.MESSAGE,
        content: {
          type: BOT_TYPE,
          message: 'まず、今回のご旅行ですが、希望の場所やご予算、期間などはすでにお決まりでしょうか？',
        },
      },
    ].reverse(),
  );

  const defaultArticle: Array<Article> = [
    {
      id: 1,
      image: article,
      description:
        '京都のヘリポートから 1200 年以上の歴史を持つ高野山という仏教(密教)の天空都市まで フライトし、精進料理を食べ、ナイトツアーを行い、宿泊する。\n' +
        '\n' +
        '予算\n' +
        '70 万円〜100 万円 ※ポンド表記',
    },
    {
      id: 2,
      image: article,
      description:
        '京都の有名な陶芸家のひとり、伊藤南山の窯元で、陶芸作品を見ながら食事ができ、陶器 もオーダーできる\n' +
        '\n' +
        'ランチまたはディナー 予算 \n' +
        '6万円〜50万円〜 (陶器のオーダー次第。) ※ポンド表記',
    },
    {
      id: 3,
      image: article,
      description:
        '京都の美術館やアートギャラリー、工芸のアトリエ等を巡り、気に入ったものがあれば購 入する\n' +
        'ツアー 予算：20 万円〜100 万円〜 ',
    },
  ];

  const handleClickChooseGuide = (message: string) => {
    contentList.value.unshift({
      type: ContentDetailType.MESSAGE,
      content: {
        type: USER_TYPE,
        message: message,
      },
    });
    contentList.value = contentList.value.filter(item => {
      if (item.type === ContentDetailType.MESSAGE) {
        return item.content.type !== GUIDE_TYPE;
      }
    });

    for (const article of defaultArticle) {
      contentList.value.unshift({
        type: ContentDetailType.ARTICLE,
        content: article,
      });
    }
    console.log(contentList.value);
  };

  const handleClickSend = async (message: string) => {
    let second = 0;

    contentList.value.unshift({
      type: ContentDetailType.MESSAGE,
      content: {
        type: USER_TYPE,
        message: message,
      },
    });

    const loadMessage = setInterval(() => {
      switch (second) {
        case 0: {
          contentList.value.unshift({
            type: ContentDetailType.MESSAGE,
            content: {
              type: BOT_TYPE,
              message: 'お聞かせいただいても？',
            },
          });

          contentList.value.unshift({
            type: ContentDetailType.MESSAGE,
            content: {
              type: BOT_TYPE,
              message: 'あんまり決めてないけど…そうだな\n' + '5泊くらいで考えてるよ？',
            },
          });
          break;
        }
        case 1: {
          const messageGuidesReceive =
            '・東京周辺 5 日間のプラン \n' + '・京都・大阪周辺 5 日間のプラン \n' + '・それ以外を 1 ヶ所入れるプラン ';

          contentList.value.unshift({
            type: ContentDetailType.MESSAGE,
            content: {
              type: BOT_TYPE,
              message: messageGuidesReceive,
            },
          });

          const messageGuidesReceives = messageGuidesReceive.split('\n');
          for (const item of messageGuidesReceives) {
            contentList.value.unshift({
              type: ContentDetailType.MESSAGE,
              content: {
                type: GUIDE_TYPE,
                message: item.slice(1, item.length),
              },
            });
          }

          break;
        }
        default:
          clearInterval(loadMessage);
      }
      second++;
    }, 1000);
  };
  return {
    contentList,
    articleDetail,
    handleBack,
    goToDetail,
    handleClickSend,
    handleClickChooseGuide,
  };
};
