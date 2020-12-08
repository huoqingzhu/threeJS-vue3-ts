const state = {
  user: {
    name:"",
    token:""
  }, // 需要管理的状态数据
}
const mutations = {
  setUser (state, val) {
          state.user = val
      }
}
const getters = {}
const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}