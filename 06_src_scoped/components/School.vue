<template>
  <div class="demo">
    <h2>{{name}}</h2>
  </div>
</template>
<script>
export default {
      name:"MySchool",
      data() {
        return { name: 'SCHOOL' }
      },
}

</script>
<!-- scoped局部样式 防止冲突 给最外层div加了一个唯一属性 -->
<style scoped>
.demo{
  background-color: #8d3535;
}
</style>