<template>
  <div class="demo">
    <h2>{{name}}</h2>
    <button @click='out'>shuchu</button>
  </div>
        
    
</template>
<script>
export default {
      name:"MyStudent",
      data() {
        return { name: 'xzyd' }
      },
      methods: {
        out(){
          console.log(this.name);
        }
      },
}

</script>