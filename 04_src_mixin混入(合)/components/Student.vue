<template>
  <div class="demo">
    <h2>{{ msg }}</h2>
    <h2 @click="show">{{name}}</h2>
  </div>
</template>
<script>
// import { mixin } from '../mixin';
export default {
  name: "MyStudent",
  data() {
    // 数据冲突以组件内为主
    return { msg: 'hh', name: 'xyz' }
  },
  // mixins: [mixin]
}
</script>
<style>
</style>