import { reactive ,onMounted, onBeforeUnmount,ref,toRef,computed,watch,watchEffect,nextTick} from "vue";
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
  topData: {};//首页头部数据
}
interface echartState{
  option:object,
  value2:any,
  style:object,
  charts:{init:Function},
  listData:object
}
const topHosk = (): any => {
  const state: Data = reactive({
       topData:[],
  });
  // getData("/admin/data/detail").then((res)=>{
  //   state.topData=res.data
  // })
  state.topData={room_num:12,user_num:100,recharge_num:10,recharge_money:20000,service_money:2000,draw_money:1000,draw_num:10000}
  return {
    state, 
  };
};
// 折线统计图图表格
const echarts = (): any => {
  const echartState:echartState= reactive({
      option,
      value2:null,
      style: {
          height: "600px",
          width: "100%"
        },
      charts:{
          init: Object
        },
      listData:{}
  })
  const store = useStore();
  echartState.listData=store.state.listData
  nextTick(() => {
    echartState.charts.init();
  });
  const onChange=(data:any,dataString:string)=>{
       console.log(data,dataString); 
  }
  return {
    echartState,
    onChange 
  };
};
export { topHosk,echarts };
// 配置echart图表格信息
const option= {
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  },
  yAxis: {
    type: "value"
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: "line",
    areaStyle: {}
  }]
}
