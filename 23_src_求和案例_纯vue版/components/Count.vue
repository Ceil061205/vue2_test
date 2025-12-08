<template>
  <div >
    <h1>sum:{{ sum }}</h1>
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
export default {
  name: 'MyCount',
  data() {
    return {
      sum: 0,
      n:1
    }
  },
  methods: {
    increment() {
      this.sum += this.n
    },
    decrement() {
      this.sum -= this.n
    },
    incrementOdd() {
      if(this.sum % 2)
        this.sum += this.n
    },
    incrementWait() {
      setTimeout(() => {
        this.sum += this.n
      },300)
    },
  }
}
</script>
<style>
button{
  margin-left: 5px;
}
</style>