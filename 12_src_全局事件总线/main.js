import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// console.log(Vue.prototype);

 new Vue({
  el:'#app',
  render: h => h(App),
  beforeCreate() {
    // 生命周期中的this指向实例
    // 安装全局事件总线 可以实现任意组件通信
    Vue.prototype.$bus = this
  }
})
