<template>
  <div>
    <button @click="isShow = !isShow">显示、隐藏</button>
    <!-- 一组-group   要有唯一的key -->
    <transition-group appear>
      <h1 v-show="!isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">哈哈哈</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'MyTest',
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
  /* transition: 0.5s linear; */
}
/* 进入的起点 离开的终点 */
.v-enter,.v-leave-to{
  transform: translateX(-100%);
}
.v-enter-active,.v-leave-active{
  transition: 0.5s linear;
}
/* 进入的终点 */
.v-enter-to,.v-leave{
  transform: translateX(0);
}
</style>