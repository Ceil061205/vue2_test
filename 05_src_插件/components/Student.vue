<template>
  <div class="demo">
    <h2>{{ msg }}</h2>
    <input v-fbind="name"/>

  </div>
</template>
<script>
export default {
  name: "MyStudent",
  data() {
    // 数据冲突以组件内为主
    return { msg: 'hh', name: 'xyz' }
  }
}
</script>
<style>
</style>