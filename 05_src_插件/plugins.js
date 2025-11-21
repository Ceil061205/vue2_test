export default {
  install(Vue,a,b,c) {
    console.log('##', Vue,a,b,c);
    // 全局
    Vue.directive('fbind',{
      //刚绑定时会被调用一上来
      bind(element, binding) {
        element.value = binding.value;
      },
      // 元素被插入页面
      inserted(element) {
        element.focus()
      },
      // 模版被重新解析时
      update(element, binding) {
        element.value = binding.value;
      }
    })
  }
}