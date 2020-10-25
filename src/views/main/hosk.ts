import { reactive ,onMounted, onBeforeUnmount,ref,toRef,computed,watch,watchEffect} from "vue";
import {useStore} from "vuex";
import {
  article
} from "@/api/article";
import {
  Rotations
} from "@/hooks/index";
import {
  message
} from "ant-design-vue";
interface Data {
  watchChange: any;
  listData: any;
  name: string;
}
const mapHosk = (): any => {
  const state: Data = reactive({
    listData:[],
    name: "计算属性",
    open:false,
    watchChange:{
      name:"观察属性",
      age:18,
      hobby:[1,2,4,5]
    }
  });
  
    const store = useStore();
    const fn = () => {
      article().then((res:any) => {
         state.listData=res
          
        }).catch(()=>{
          message.error("服务器错误！")
        })     
    };
    watch(state.watchChange,() => {
    console.log("3.x变化了")
    },{deep: true, 
      immediate: false, })
    watchEffect(() => console.log(state.watchChange.age))
  // 只发起  一次 轮训请求
     if(!store.state.open){
      const {
        getList,
      } = Rotations(fn);
      getList();
      store.commit("openChange")
   
     }
     const setColor=computed(()=>{
       return (value:any)=>{
           return `${state.name}${value}`
       }
     })
  return {
    state, 
    setColor
  };
};
export { mapHosk };
