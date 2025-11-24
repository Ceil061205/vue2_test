<template>
  <div>
    <button @click="isShow = !isShow">显示、隐藏</button>
    <!-- 一组-group   要有唯一的key -->
    <transition-group 
      appear 
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="!isShow"  class="animate__animated" key="1">你好啊</h1>
      <h1 v-show="isShow"  class="animate__animated" key="2">哈哈哈</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: 'MyTest3',
  data() {
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
h1{
  background-color: #b64141;
}
</style>