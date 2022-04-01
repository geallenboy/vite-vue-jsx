export interface initStoreType<T> {
  code: number;
  data: T | [];
  message: string;
  type?: string;
}
