import { reactive } from "vue";
import {useStore} from "vuex";

interface Data {
  listData: any;
 
}
const store = useStore();
 

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
