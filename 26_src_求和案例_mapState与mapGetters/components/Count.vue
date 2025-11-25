<template>
  <div >
    <h1>sum:{{ sum }}</h1>
    <h3>{{ bigSum }}</h3>
    <h3>{{ school }}---{{subject }}</h3>
      <select v-model="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
      </select>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementOdd">奇数+</button>
      <button @click="incrementWait">等一等+</button>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex';
export default {
  name: 'MyCount',
  data() {
    return {
      n: 1,
      
    }
  },
  methods: {
    increment() {
      this.$store.commit('JIA',this.n)
    },
    decrement() {
      this.$store.commit('JIAN',this.n)
    },
    incrementOdd() {
        this.$store.dispatch('jiaOdd',this.n)
    },
    incrementWait() {
       this.$store.dispatch('jiaWait',this.n)
    },
  },
  computed: {
    // 借助mapstate生成计算属性，从state中读取数据（对象写法）
    // ...mapState({sum:'sum',school:'school',subject:'subject'})
    // 数组写法
    ...mapState(['sum', 'school', 'subject']),

    // 借助mapGetters生成计算属性，从getters中读取数据
    // ...mapGetters({bigSum:'bigSum',})
    ...mapGetters(['bigSum'])
  }
}
</script>
<style>
button{
  margin-left: 5px;
}
</style>