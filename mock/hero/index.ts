import { resultPageSuccess, resultSuccess } from '../_util';
import { MockMethod } from 'vite-plugin-mock';
import heroListJson from './_heroList.json';
import heroLoLListJson from './_lolHeroList.json';

export default [
  // 获取请求日志
  {
    url: '/mock-api/hero/list',
    method: 'get',
    timeout: 700,
    response: ({ query }: any) => {
      const { page = 1, limit = 10 } = query;
      const filterResult = heroListJson.filter((n: any) => n.cname.includes(query.cname || ''));
      return resultPageSuccess(page, limit, filterResult);
    },
  },
  {
    url: '/mock-api/hero/lol/list',
    method: 'get',
    timeout: 700,
    response: ({ query }: any) => {
      const { page = 1, limit = 10 } = query;
      const filterResult = heroLoLListJson.filter((n: any) => n.title.includes(query.title || ''));
      return resultPageSuccess(page, limit, filterResult);
    },
  },
  {
    url: '/mock-api/hero/lol/info',
    method: 'get',
    timeout: 200,
    response: ({ query }: any) => {
      const result = heroLoLListJson.find((n: any) => n.heroId == query.id);
      return resultSuccess(result);
    },
  },
] as MockMethod[];
