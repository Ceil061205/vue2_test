<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义插槽就是 挖个坑，等组件的使用者进行填充 -->
    <slot>默认</slot>
  </div>
</template>

<script>
export default {
  name: 'MyCategory',
  props:['title']
}
</script>

<style>
.category{
  background-color: skyblue;
  width: 200px;
  /* height: 300px; */
}
h3{
  background-color: pink;
  text-align: center;
}
img{
  width: 100%;
}
</style>