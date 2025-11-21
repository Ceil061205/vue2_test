import Vue from 'vue'
import App from './App.vue'
import { mixin } from './mixin'
Vue.config.productionTip = false
// 全局混合
Vue.mixin(mixin)
new Vue({
  el:'#app',
  render: h => h(App),
})
  // .$mount('#app')
