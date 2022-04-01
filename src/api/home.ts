import { request, BaseResponse } from '@/utils/request';

/**
 * @description 首页-cardtab
 */
export function homeCardtab() {
  return request<BaseResponse>({
    url: '/home/cardtab',
    method: 'get',
  });
}

export interface homeCardtabType {
  titleNumber: number;
  title: string;
  tbNumber: number;
  rxse: number;
  rtbNumber: number;
}
