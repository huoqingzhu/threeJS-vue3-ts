import {reactive,onMounted, onBeforeUnmount} from "vue"
import {getData} from "@/api/article"
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
  }, 1000);
}
onMounted(() => {
  updateTime()
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
 * @params  一个函数函数
 *  @params  间隔多长时间
 * @returns getList 开始
 * @returns clear 结束轮训
 */
const Rotations=(fn:any,time=1)=>{
  let  timer=1
  const getList=()=>{
   try{
    fn()
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
    }, time*1000);
  }
return {getList,clear}
}
/**
 * 转化为时间字符串
 * @param {Date|number} date - Date 对象或时间戳(ms)
 * @param {boolean} [isFull=false] - 是否为完整日期时间
 * @param {string} [connector='-'] - 连接符
 * @returns {string} - yyyy-MM-dd
 */
const formatDate=(inputTime:any)=>{
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
export {time,Rotations}