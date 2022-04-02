import { request, BaseResponse } from '@/utils/request';

/**
 * @description 用户信息
 */
export function userInfoApi() {
  return request<BaseResponse>({
    url: '/user/info',
    method: 'get'
  });
}

/**
 * @description 菜单列表
 */
export function menuListApi() {
  return request<BaseResponse>({
    url: '/menu/list',
    method: 'get'
  });
}
