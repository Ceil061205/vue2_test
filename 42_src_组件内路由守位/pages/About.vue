<template>
  <h2>我是About的内容</h2>
</template>
<!-- 路由组件pages文件夹 -->
<script>
export default {
  name: 'MyAbout',
  // 通过路由规则进入该组件时被调用  来 (触发路由变化)
  beforeRouteEnter(to,from,next) {  
  if(to.meta.isAuth)
  {
    if (localStorage.getItem('school') === 'at1') {
      next()//放行
    }else {
      alert('error')
  }
  }
   else {
    next()
  }
  },
  //通过路由规则离开该组件时被调用 去
  beforeRouteLeave(to,from,next) {
    next()
  }
}
</script>

<style>

</style>