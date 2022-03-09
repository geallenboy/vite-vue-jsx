import type { App } from 'vue';

import {
  Layout,
  Modal,
  Table,
  Menu,
  Input,
  Form,
  Card,
  Checkbox,
  Radio,
  Col,
  Row,
  Select,
  DatePicker,
} from 'ant-design-vue';

import 'dayjs/locale/zh-cn';

export function setupAntd(app: App<Element>) {
  app
    .use(Form)
    .use(Input)
    .use(Modal)
    .use(Table)
    .use(Menu)
    .use(Card)
    .use(Checkbox)
    .use(Radio)
    .use(Col)
    .use(Row)
    .use(Select)
    .use(Layout)
    .use(DatePicker);
}
