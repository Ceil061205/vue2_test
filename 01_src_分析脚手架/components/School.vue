<template>
  <div class="demo">
    <h2>{{name}}</h2>
    <button @click='out'>shuchu</button>
  </div>
        
    
</template>
<script>
export default {
      name:"MySchool",
      data() {
        return { name: 'xzy' }
      },
      methods: {
        out(){
          console.log(this.name);
        }
      },
}

</script>
<style>
  .demo{
    background-color: #b83d3d;
  }
</style>