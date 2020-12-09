import { createStore } from "vuex";
export default createStore({
  state: {
    listData:{1:10},
    // 蜂鸣器报警
    police:0,
    keepLiveRoute:["Notice"],
    // token
    token:"",
    // 控制首页请求
    open:false,
    // 报警闪烁
    twinkle:true
  },
  mutations: {
    setData(state,value){
        state.listData=value
    },
    pliceChange(state,value){
      state.police=value
    },
    openChange(state){
      state.open=true
    },
    setTwinkle(state,value){
      state.twinkle=value
    }
  },
  actions: {
    setData(context,value){
      context.commit('setData',value)
    },
    
    pliceChange(context,value){
         if(context.state.police===0){
             console.log("发送报警")
         }else{
           console.log("报警还没消除")
         }
         context.state.police
    }
  },
  modules: {}
});
