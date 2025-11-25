import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { nanoid } from 'nanoid';
Vue.use(Vuex)

//求和功能相关的配置
const countOptions = {
  namespaced:true,
  actions: {
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
  },
  mutations: {
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
  },
  },
  state: {
    sum: 0,
    school: 'sgg',
    subject: 'qd',
  },
  getters: {
     bigSum(state) {
    return state.sum*10
  }
  }
}

const personOptions = {
  namespaced:true,
  actions: {
    addPersonWang(context,value) {
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON',value)
      } else {
        alert('wnag')
      }
    },
    addPersonServer(context) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
        },
        error => {
          alert(error.message)
        }
      )
    }
  },
  mutations: {
    ADD_PERSON(state, value) {
    state.personList.unshift(value)
  }
  },
  state: {
     personList: [
    {id:'001',name:'张三'}
  ]
  },
  getters: {
    firstPersonName(state) {
      return state.personList[0].name
    }
  }
}


// 创建store 暴露store
export default new Vuex.Store({
  modules: {
    countAbout:countOptions,
    personAbout:personOptions
  }
})
