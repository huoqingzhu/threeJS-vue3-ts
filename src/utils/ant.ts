import { Button } from "ant-design-vue";

const ant = {
  install(Vue: { component: (arg0: string, arg1: typeof Button) => void }) {
    Vue.component(Button.name, Button);
  }
};
export default ant;
