export interface BaseResponse<T> {
  code: string;
  data: T;
}

export interface TestResponseData {
  message: string;
}

export type TestResponse = BaseResponse<TestResponseData>;
