import {
  Input,
  Button,
  Menu,
  Tabs,
  Spin,
  Card,
  Popover,
  Table,
  Statistic,
  DatePicker,
  Dropdown,
  Form,
  Select,
  Switch
} from "ant-design-vue";
// import Cards from "@/components/component/Card.vue"
// import Police from "@/components/component/Police.vue"
// import Polices from "@/components/component/Polices.vue"
const ant = {
  install(Vue: {
    component: (arg0: string, arg1: any) => void;
    use: (arg0: any,) => void;
  }) {
    Vue.component(Button.name, Button);
    Vue.component(Input.name, Input);
    Vue.component(Card.name, Card);
    Vue.component(Popover.name, Popover);
    Vue.component(Table.name, Table);
    Vue.component(Dropdown.name, Dropdown);
    Vue.component(Spin.name, Spin);
    Vue.component(Statistic.name, Statistic);
    Vue.component(Switch.name,Switch);
    Vue.use(DatePicker)
    Vue.use(Menu)
    Vue.use(Form)
    Vue.use(Tabs);
    Vue.use(Select)
  }
};
export default ant;
