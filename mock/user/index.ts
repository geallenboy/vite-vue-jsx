import { MockMethod } from 'vite-plugin-mock';
import { resultSuccess } from '../_util';

const userInfo = {
  name: 'garron',
  age: 30
};

export default [
  {
    url: '/mock-api/user/info',
    timeout: 1000,
    method: 'get',
    response: () => resultSuccess(userInfo)
  }
] as MockMethod[];
