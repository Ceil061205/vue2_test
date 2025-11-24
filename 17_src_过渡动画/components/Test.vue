<template>
  <div>
    <button @click="isShow = !isShow">显示、隐藏</button>
    <!-- 默认上来就有效果 -->
    <transition appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>
    <!-- <transition name="h" >
      <h1 v-show="isShow" >你好啊</h1>
    </transition> -->
  </div>
</template>

<script>
export default {
  name: 'MyTest2',
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
/* 取名就改成h-。。。。 */
.v-enter-active{
  animation: a 0.5s linear;
}
.v-leave-active{
  animation: a 1s reverse;
}
@keyframes a {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>