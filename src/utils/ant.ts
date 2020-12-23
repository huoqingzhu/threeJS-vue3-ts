import {
  Input,
  Button,
  Menu,
  Tabs,
  Spin,
  Card,
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
    Vue.component(Spin.name, Spin);
    Vue.component(Switch.name,Switch);
    Vue.use(Menu)
    Vue.use(Tabs);
    Vue.use(Select)
  }
};
export default ant;
