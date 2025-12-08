<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games" msg="helo"></slot>
  </div>
</template>

<script>
export default {
  name: 'MyCategory',
  props: ['title'],
  data() {
    return {
    games:[
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