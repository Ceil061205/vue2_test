<template>
  <div class="demo">
    <h2 class="qwe">{{ msg }}</h2>
    <h2>{{ name }}</h2>
    <button @click="submitName">sendname</button>
  </div>
</template>
<script>
import pubsub from 'pubsub-js';
export default {
  name: "MyStudent",
  data() {
    // 数据冲突以组件内为主
    return { msg: 'hh', name: 'xyz' }
  },
  methods: {
    submitName() {
      // 提供数据方
      // this.$bus.$emit('hello',this.name)
      pubsub.publish('hello',66)
    }
  }
}
</script>
<style scoped>
.demo{
  background-color: #49a81c;
  padding:5px;
  margin-top: 20px;
}
</style>
