import { reactive ,onMounted, onBeforeUnmount,ref,toRef,nextTick} from "vue";
import {useStore} from "vuex";

interface Data {
  listData: any;
  name: string;
}
const echarts = (): any => {
  const echartState= reactive({
    option,
    sty: {
      height: "500px",
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
  return {
    echartState, 
  };
};
export { echarts };
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