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
    name: "请求数据",
   
  });
    const store = useStore();
    const fn = () => {
      getData("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50").then(res => {
        store.commit("setData", res.data);
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
