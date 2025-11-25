<template>
  <div >
    <h1>sum:{{ sum }}</h1>
    <h3>{{ bigSum }}</h3>
    <h3>{{ school }}---{{subject }}</h3>
    <h3 style="color: red;">person{{ personList.length }}</h3>
      <select v-model="n">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="3">3</option>
      </select>
      <!-- 必须传参否则参数为事件对象 -->
      <button @click="increment(n)">+</button>
      <button @click="decrement(n)">-</button>
       <!-- <button @click="JIA(n)">+</button>
      <button @click="JIAN(n)">-</button> -->
      <button @click="incrementOdd(n)">奇数+</button>
      <button @click="incrementWait(n)">等一等+</button>
  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
export default {
  name: 'MyCount',
  data() {
    return {
      n: 1,
      
    }
  },
  methods: {
    // increment() {
    //   this.$store.commit('JIA',this.n)
    // },
    // decrement() {
    //   this.$store.commit('JIAN',this.n)
    // },

    // 借助mapMutations生成对应的方法，方法中会调用commit联系mutations（对象写法）
    ...mapMutations({ increment: 'JIA', decrement:'JIAN'}),
    // ...mapMutations([ 'JIA', 'JIAN'] ),

    // incrementOdd() {
    //     this.$store.dispatch('jiaOdd',this.n)
    // },
    // incrementWait() {
    //    this.$store.dispatch('jiaWait',this.n)
    // },
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})//数组写法与以上同理
  },
  computed: {
    // 借助mapstate生成计算属性，从state中读取数据（对象写法）
    // ...mapState({sum:'sum',school:'school',subject:'subject'})
    // 数组写法
    ...mapState(['sum', 'school', 'subject','personList']),

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