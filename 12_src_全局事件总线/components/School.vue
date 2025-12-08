<template>
  <div class="demo">
    <h2>{{name}}</h2>
  </div>
</template>
<script>
export default {
  name: "MySchool",
      props:['getSchool'],
      data() {
        return { name: 'SCHOOL' }
  },
  // 接受数据方
  mounted() {
    // console.log(this);
    this.$bus.$on('hello', (data) => {
      console.log(data);
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  }
}

</script>
<style scoped>
.demo{
  background-color: #8d3535;
  padding: 5px;
}
</style>