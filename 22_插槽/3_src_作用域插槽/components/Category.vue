<template>
  <div>
    <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games" msg="helo"></slot>
  </div>
  <children></children>
  </div>
</template>

<script>
import Children from '../../../src/pages/Children.vue';
export default {
  name: 'MyCategory',
  components: {
    Children
  },
  props: ['title'],
  data() {
    return {
      games: [
        "英雄联盟", "王者荣耀", "原神", "和平精英", "我的世界"
      ]
    }
  }
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