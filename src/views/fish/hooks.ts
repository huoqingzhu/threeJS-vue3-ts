import { reactive ,onMounted, onBeforeUnmount,ref,toRef,nextTick} from "vue";
import {useStore} from "vuex";

interface Data {
  listData: any;
 
}
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
