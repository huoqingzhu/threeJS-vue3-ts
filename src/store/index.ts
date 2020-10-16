import { createStore } from "vuex";
export default createStore({
  state: {
    listData:{1:10}
  },
  mutations: {
    setData(state,value){
        state.listData=value
    }
  },
  actions: {
    setData(context,value){
      context.commit('setData',value)
    }
  },
  modules: {}
});
