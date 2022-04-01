export interface userInfoType {
  age?: number;
  name?: string;
}

export interface UserState {
  userInfo: userInfoType;
}

export interface MenuitemType {
  name: string;
  icon: string;
  url: string;
  id: string;
}

export interface menuType {
  name: string;
  icon: string;
  url: string;
  id: string;
  children?: menuType[];
}
