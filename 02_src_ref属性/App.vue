<template>
  <div>
    <!-- ref用来代替id -->
    <h1 v-text="msg" ref="title"></h1>
    <button @click="show">shu</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
  name: 'App',
  data() {
    return {
      msg:'hhhh'
    }
  },
  methods:{
    show() {
      // 真实dom元素
      console.log(this.$refs.title);
      // vc实例对象
      console.log(this.$refs.sch);
      
      
    }
  }
  ,
  components: {
    School,
  }
}
</script>

<style>

</style>