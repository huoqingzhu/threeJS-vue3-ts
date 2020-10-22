import { reactive ,onMounted, onBeforeUnmount,ref,toRef} from "vue";
import {useStore} from "vuex";
import {
  getData
} from "@/api/article";
import {
  Rotations
} from "@/hooks/index";
import {
  message
} from "ant-design-vue";
interface Data {
  listData: any;
  name: string;
}
const mapHosk = (): any => {
  const state: Data = reactive({
    listData:{1:30},
    name: "请求数据",
    open:false
   
  });
  
    const store = useStore();
    const fn = () => {
        getData("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150").then(res => {
          store.commit("setData", res.data);
        }).catch(()=>{
          message.error("服务器错误！")
        })     
    };

     if(!store.state.open){
      const {
        getList,
      } = Rotations(fn);
      getList();
      store.commit("openChange")
     }
  return {
    state, 
    
  };
};
export { mapHosk };
