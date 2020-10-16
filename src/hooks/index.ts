import {reactive,onMounted, onBeforeUnmount} from "vue"
/**
 * 获取时间
 * @returns date 日期 time 时间
 */
const time=()=>{
const timeState = reactive({date:"",time:"",timeInterval:1})
const updateTime=()=> {
 
  timeState.timeInterval = setInterval(() => {
    const data = new Date();
    const Y = data.getFullYear() + "年";
    const M =
      (data.getMonth() + 1 < 10 ?
        "0" + (data.getMonth() + 1) :
        data.getMonth() + 1) + "月";

    const D = data.getDate() + "日";
    timeState.date = Y + M + D;
    timeState.time =
      data.getHours().toString().padStart(2, "0") +
      ":" +
      data.getMinutes().toString().padStart(2, "0") +
      ":" +
      data.getSeconds().toString().padStart(2, "0"); // 修改数据date
    // console.log(_this.time);
  }, 1000);
}
onMounted(() => {
  updateTime()
  console.log(timeState.timeInterval)
})
onBeforeUnmount(()=>{
  clearInterval(timeState.timeInterval)
})
  return {
    timeState
  }
}
/**
 * http轮询
 * @param   一个响应式数据
 * @returns getList 开始
 * @returns clear 结束轮训
 */
const Rotation=(listData:any)=>{
  let  timer=1
  const getList=()=>{
   try{
  listData.value=listData.value+1
    start()
   }catch{
    clear()
   }
  }
  const clear=()=>{ 
      clearTimeout(timer); // 清除
  }
 const start=()=> {
   timer = setTimeout(() => {
      getList();
    }, 1000);
  }
return {getList,clear}
}
export {time,Rotation}