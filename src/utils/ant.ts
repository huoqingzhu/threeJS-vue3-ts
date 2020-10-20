import {
  Input,
  Button,
  // Menu,
  Tabs,
  Spin,
  Card,
  Popover,
  Table
} from "ant-design-vue";
import Cards from "@/components/component/Card.vue"
import Police from "@/components/component/Police.vue"
import Polices from "@/components/component/Polices.vue"
const ant = {
  install(Vue: {
    component: (arg0: string, arg1: any) => void;
    use: (arg0: typeof Tabs) => void;
  }) {
    Vue.component(Button.name, Button);
    Vue.component(Input.name, Input);
    Vue.component(Card.name, Card);
    Vue.component(Popover.name, Popover);
    Vue.component(Table.name, Table);
    Vue.component(Spin.name, Spin);
    Vue.component("Card", Cards);
    Vue.component("Police", Police);
    Vue.component("Polices", Polices);
    Vue.use(Tabs);
  }
};
export default ant;
