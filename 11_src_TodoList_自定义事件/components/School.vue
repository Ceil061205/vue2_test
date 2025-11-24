<template>
  <div class="demo">
    <h2>{{name}}</h2>
    <!-- 通过父组件向子组价传递函数类型的Props实现子传父 -->
    <button @click="sendSchool">getSChool</button>
  </div>
</template>
<script>
export default {
  name: "MySchool",
      props:['getSchool'],
      data() {
        return { name: 'SCHOOL' }
  },
  methods: {
    sendSchool() {
          this.getSchool(this.name)
        }
      }
}

</script>
<style scoped>
.demo{
  background-color: #8d3535;
  padding: 5px;
}
</style>