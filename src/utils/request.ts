import axios, { AxiosRequestConfig } from 'axios';

export interface RequestOptions {
  /** 当前接口权限, 不需要鉴权的接口请忽略， */
  permCode?: string;
  /** 请求成功是提示信息 */
  successMsg?: string;
  /** 请求失败是提示信息 */
  errorMsg?: string;
  /** 是否mock数据请求 */
  isMock?: boolean;
}

const UNKNOWN_ERROR = '未知错误，请重试';

/** 真实请求的路径前缀 */
const baseApiUrl = import.meta.env.VITE_BASE_API;
/** mock请求路径前缀 */
const baseMockUrl = import.meta.env.VITE_MOCK_API;

const service = axios.create({
  timeout: 6000
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      console.log(res.message || UNKNOWN_ERROR);

      const error = new Error(res.message || UNKNOWN_ERROR) as Error & { code: any };
      error.code = res.code;
      return Promise.reject(error);
    } else {
      return res;
    }
  },
  (error) => {
    // 处理 422 或者 500 的错误异常提示
    const errMsg = error?.response?.data?.message ?? UNKNOWN_ERROR;
    console.error(errMsg);
    error.message = errMsg;
    return Promise.reject(error);
  }
);

export type Response<T = any> = {
  code: number;
  message: string;
  data: T;
};

export type BaseResponse<T = any> = Promise<Response<T>>;

/**
 *
 * @param method - request methods
 * @param url - request url
 * @param data - request data or params
 */
export const request = <T = any>(
  config: AxiosRequestConfig,
  options: RequestOptions = {}
): Promise<T> => {
  try {
    const { isMock = true } = options;
    const fullUrl = `${isMock ? baseMockUrl : baseApiUrl}${config.url}`;
    config.url = fullUrl;

    const res: any = service.request(config);
    return res;
  } catch (error: any) {
    return error;
  }
};
