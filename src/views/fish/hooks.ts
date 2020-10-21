import { reactive } from "vue";
import {useStore} from "vuex";
const fish = (): any => {
  const State= reactive({
    listData:{}
  })
  const store = useStore();
  State.listData=store.state.listData

  return {
    State, 
  };
};
export { fish };
