// @ts-ignore
import type { Ref, UnwrapRef } from 'vue';

export interface BotMessage {
  id: number;
  avatar: string;
  name: string;
  messageList: Ref<UnwrapRef<{ type: string; message: string }[]>>;
}

export interface Message {
  message: string;
  type: string;
}

export interface ParamSample {
  type?: number;
}

export interface MessageSample {
  id: number;
  avatar: string;
  name?: string; // optional
  messageList?: Ref<UnwrapRef<{ type: string; message: string }[]>>; // optional
}
