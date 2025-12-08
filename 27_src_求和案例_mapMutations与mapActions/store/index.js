import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 用于创建vuex中最核心的store
// 准备actions-用于响应组件中的动作
const actions = {
  // jia(context,value) {
  //   context.commit('JIA',value)
  // },
  // jian(context,value) {
  //   context.commit('JIAN',value)
  // },
  jiaOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('JIA',value)
    }
  },
  jiaWait(context, value) {
    setTimeout(() => {
      context.commit('JIA',value)
    },300)
  }
}
// 准备mutations-用于操作数据（state）
const mutations = {
  JIA(state,value) {
    state.sum += value
  },
  JIAN(state, value) {
    state.sum -= value
  },
  JIAODD(state, value) {
      state.sum += value
  },
  JIAWAIT(state, value) {
    state.sum += value
  }
}
// 准备state-用于储存数据
const state = {
  sum: 0,
  school: 'sgg',
  subject:'qd'
}
// 准备getters-用于将state中的数据进行加工 (类似computed)
const getters = {
  bigSum(state) {
    return state.sum*10
  }
}

// 创建store 暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
