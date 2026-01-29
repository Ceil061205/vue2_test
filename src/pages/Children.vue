<template>
  <div>
    <button @click="checkItem">
    11111
  </button>
  </div>
</template>

<script>
export default {
  name: "MyChildren",
  inject: ['App'],
  methods: {
    // 子组件可以直接调用父组件的方法，不用 props 传
    checkItem() {
      this.App.validate(); // 直接调用父组件的校验方法
    }
  }
}
</script>

<style>

</style>