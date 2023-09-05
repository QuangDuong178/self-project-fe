import { Article } from '@/types/models/article.ts';
import { Message } from '@/types/models/message.ts';

export interface ContentDetail {
  type: string;
  content: Array<Article> | Message;
}
