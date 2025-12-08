<template>
  <div class="demo">
    <h2 class="qwe">{{ msg }}</h2>
    <h2>{{ num }}</h2>
    <button @click="add">num++</button>
    <button @click="sendStudent">studnet</button>
    <button @click="unbind">unbind</button>
    <button @click="death">销毁组件</button>
  </div>
</template>
<script>
export default {
  name: "MyStudent",
  data() {
    // 数据冲突以组件内为主
    return { msg: 'hh', name: 'xyz',num:0 }
  },
  methods: {
    add() {
      console.log('num');
      this.num++;
    },
    sendStudent() {
      // 出发student组件实例身上的a事件
      this.$emit('a', this.name, 66, 88)
      // this.$emit('b')
    },
    unbind() {
      // 解绑一个自定义事件
      this.$off('a')
      // 解绑多个自定义事件
      // this.$off(['a','b'])
      // 所有的全解绑
      // this.$off()
    },
    death() {
      // 销毁组件实例 自定义事件全不能用了
      this.$destroy()
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
