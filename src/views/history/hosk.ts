import { reactive } from "vue";
import {historys,police} from "@/api/article"
const history = (): any => {
  const state= reactive({
    historyData: [{code:1,name:"点位1",value:12,unit:10,time:"2020"}],
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
    policePagination: {
      total: 0,
      current: 1,
      pageSize: 10, //每页中显示10条数据
      showSizeChanger: true,
      pageSizeOptions: ["10", "15", "20", "30"], //每页中显示的数据
      showTotal: (total:any) => `共有 ${total} 条报警数据` //分页中显示总的数据
    },
  })
  const getHistory=()=>{
    historys(state.historyParams).then((res:any)=>{
      if(res.list.length>0){
        res.list.map((item:any)=>{
          item.time=formatDate(item.time*1000)
        })
      }
      
      state.historyData=res.list||[]
      state.historyPagination.total=res.count
    })
  }
  const  historyChange=(pagination:any)=>{
    state.historyPagination.current = pagination.current;
    state.historyPagination.pageSize = pagination.pageSize;
    state.historyParams.page_no = pagination.current - 1;
    state.historyParams.page_size = pagination.pageSize;
    
  }
  const  policeChange=(pagination:any)=>{
    state.policePagination.current = pagination.current;
    state.policePagination.pageSize = pagination.pageSize;
    state.policeParams.page_no = pagination.current - 1;
    state.policeParams.page_size = pagination.pageSize;
    getPolice()
    
  }
  const  formatDate=(inputTime:any)=>{
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
  const getPolice=()=>{
    police(state.policeParams).then((res:any)=>{
      if(res.list.length>0){
        res.list.map((item:any)=>{
          item.happen_time=formatDate(item.happen_time*1000)
          item.clear_time=formatDate(item.clear_time*1000)
        })
      }
      state.policeData=res.list||[]
      state.policePagination.total=res.count
    })
  }
  const change=(val:boolean):void=>{
    state.switchs=val
  }
  return {
    state, 
    change,
    getHistory,
    getPolice,
    historyChange,
    policeChange,
    formatDate
  };
};
export { history };
