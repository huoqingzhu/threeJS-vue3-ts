import { reactive ,onMounted, onBeforeUnmount,ref,toRef} from "vue";
import {useStore} from "vuex";
import {
  getData
} from "@/api/article";
import {
  Rotations
} from "@/hooks/index";
interface Data {
  listData: any;
  name: string;
}
const mapHosk = (): any => {
  const state: Data = reactive({
    listData:{1:30},
    name: "请求数据"
  });
    const store = useStore();
    const fn = () => {
      getData("1").then(res => {
        store.commit("setData", res.data);
        state.listData=store.state.listData
      });
    };
    const {
      getList,
      
    } = Rotations(fn);
    getList();
  return {
    state, 
  };
};
export { mapHosk };
