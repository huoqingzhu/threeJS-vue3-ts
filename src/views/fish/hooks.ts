import { reactive,watch } from "vue";
import {historys} from "@/api/article"
import { useRouter, useRoute } from "vue-router";
const history = (): any => {
    //列表数据
    const state= reactive({
      path:"room",
      historyData: [],
      policeData:[],
      loading: false,
      switchs:true,
      historyParams: {  page_no: 0, page_size: 10 },
      policeParams: {  page_no: 0, page_size: 10 },
      historyPagination: {
        total: 0,
        current: 1,
        pageSize: 10, //每页中显示10条数据
        showSizeChanger: true,
        pageSizeOptions: ["10", "15", "20", "30"], //每页中显示的数据
        showTotal: (total:any) => `共有 ${total} 条历史数据` //分页中显示总的数据
      },
    })
  // 观察路由变化
  const route = reactive(useRoute());
  console.log(route.path);
  watch(
    () => route.path,
    (a) => {
      // console.log(route);
      // console.log(a);
      const str=a.slice(0,6)
      console.log(str);
      if(str==="/play/"){
        const path=a.slice(6)
        state.path=path
        console.log("yes");
      }else{
        console.log(state.path);
        
        state.path="room"
      }
    }
  );

  // 获取数据
  const getHistory=()=>{
    historys(state.historyParams).then((res:any)=>{
      if(res.list.length>0){
        res.list.map((item:any)=>{
          item.time=formatDate(item.time*1000)
        })
      state.historyData=res.list||[]
      state.historyPagination.total=res.pages*res.list.length
      state.historyPagination.pageSize=res.list.length
      }
    }).catch((err)=>{
      state.historyData=[]
    })
  }
 //分页
  const historyChange=(pagination:any)=>{
    state.historyPagination.current = pagination.current;
    state.historyPagination.pageSize = pagination.pageSize;
    state.historyParams.page_no = pagination.current - 1;
    state.historyParams.page_size = pagination.pageSize;
    getHistory()
  }
 // 转换时间
  const  formatDate=(inputTime:any)=>{
     if(inputTime===0){
       return "未消除"
     }
    let date = new Date(inputTime);
    let y:any = date.getFullYear();
    let m:any = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    let d:any = date.getDate();
    d = d < 10 ? "0" + d : d;
    let h:any = date.getHours();
    h = h < 10 ? "0" + h : h;
    let minute:any = date.getMinutes();
    let second:any = date.getSeconds();
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
  }
  return {
    state, 
    getHistory,
    historyChange,
    formatDate
  };
};
export { history };
