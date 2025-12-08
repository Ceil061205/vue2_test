<template>
  <div class="demo">
    <h2>{{name}}</h2>
  </div>
</template>
<script>
import pubsub from 'pubsub-js';
export default {
  name: "MySchool",
      props:['getSchool'],
      data() {
        return { name: 'SCHOOL' }
  },
  // methods: {
  //   demo(msgName,data) {
      
  //   }
  // },

  // 接受数据方
  mounted() {
    // console.log(this);
    // this.$bus.$on('hello', (data) => {
    //   console.log(data);
    // })
    this.pid = pubsub.subscribe('hello',(msgNmae,data)=> {
      console.log('hellodioay',msgNmae,data);
    })
    // this.pid = pubsub.subscribe('hello',this.demo)
  },
  beforeDestroy() {
    // this.$bus.$off('hello')
    pubsub.unsubscribe(this.pid)
  }
}

</script>
<style scoped>
.demo{
  background-color: #8d3535;
  padding: 5px;
}
</style>