import {
  Input,
  Button,
  Menu,
  Spin,
  Card,
  Popover,
  Table
} from "ant-design-vue";

const ant = {
  install(Vue: {
    component: (arg0: string, arg1: any) => void;
    use: (arg0: typeof Menu) => void;
  }) {
    Vue.component(Button.name, Button);
    Vue.component(Input.name, Input);
    Vue.component(Card.name, Card);
    Vue.component(Popover.name, Popover);
    Vue.component(Table.name, Table);
    Vue.component(Spin.name, Spin);
    Vue.use(Menu);
  }
};
export default ant;
