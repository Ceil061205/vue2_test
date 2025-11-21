<template>
  <div class="demo">
    <h2>{{ msg }}</h2>
    <h2>{{name}}</h2>
    <h2>{{ myAge+1 }}</h2>
    <button @click="update">update</button>
  </div>
</template>
<script>
export default {
      name:"MyStudent",
      data() {
        return {msg:'hh',myAge:this.age}
  },
  // 修改方法
  methods: {
    update() {
      this.myAge++
    }
  },
  // props: ['name','age']//简单声明接受
  // 接受并对类型限制
  // props: {
  //   name: String,
  //   age:Number
  // }
  props: {
    name: {
      type: String,
      required:true
    },
    age: {
      type: Number,
      default:99
    }
  }
}

</script>
<style>
</style>