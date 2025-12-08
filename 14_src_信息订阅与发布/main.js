import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

// console.log(Vue.prototype);

 new Vue({
  el:'#app',
  render: h => h(App),
})
