import { menuData, menuType } from '@/config/menu';
import { useRoute } from 'vue-router';

const getOpenKeys = (data: menuType[]): string[] => {
  const oks: string[] = [];
  for (const key of data) {
    oks.push(key.id);
  }
  return oks;
};

const useMenu = (): [menuType[], string[], string[]] => {
  const location = useRoute();
  const openKeys: string[] = getOpenKeys(menuData);
  console.log(openKeys, 33);

  const selectedKeys: string[] = [location.path];
  return [menuData, openKeys, selectedKeys];
};

export default useMenu;
