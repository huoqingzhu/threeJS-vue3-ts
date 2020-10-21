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
      showTotal: (total:any) => `共有 ${total} 条数据` //分页中显示总的数据
    },
    policePagination: {
      total: 0,
      current: 1,
      pageSize: 10, //每页中显示10条数据
      showSizeChanger: true,
      pageSizeOptions: ["10", "15", "20", "30"], //每页中显示的数据
      showTotal: (total:any) => `共有 ${total} 条数据` //分页中显示总的数据
    },
  })
  const getHistory=()=>{
    historys(state.historyParams).then((res:any)=>{
      state.historyData=res.list||[]
      console.log(state.historyData)
    })
  }
  const  historyChange=(pagination:any)=>{
    console.log(pagination);
    state.historyPagination.current = pagination.current;
    state.historyPagination.pageSize = pagination.pageSize;
    state.historyParams.page_no = pagination.current - 1;
    state.historyParams.page_size = pagination.pageSize;
    
  }
  const  policeChange=(pagination:any)=>{
    console.log(pagination);
    state.policePagination.current = pagination.current;
    state.policePagination.pageSize = pagination.pageSize;
    state.historyParams.page_no = pagination.current - 1;
    state.historyParams.page_size = pagination.pageSize;
    
  }
  const getPolice=()=>{
    police(state.historyParams).then((res:any)=>{
      state.policeData=res.list||[]
      console.log(state.policeData)
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
    policeChange
  };
};
export { history };
