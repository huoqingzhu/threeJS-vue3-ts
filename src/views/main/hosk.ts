import { reactive ,onMounted, onBeforeUnmount,ref,toRef} from "vue";
import { article } from "@/api/article";
import {Rotation} from "@/hooks/index";
interface Data {
  listData: any;
  name: string;
}
const mapHosk = (): any => {
  const state: Data = reactive({
    listData:1,
    name: "请求数据"
  });
  const data= toRef(state, 'listData')
  const {getList,clear} = Rotation(data)
  const getDate = () => {
  };
 
  onMounted(()=>{
    getList()
  })
  onBeforeUnmount(()=>{
    clear()
  })
  return {
    state,
    data,
    getDate
  };
};
export { mapHosk };
