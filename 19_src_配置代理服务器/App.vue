<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取car信息</button>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  methods: {
    getStudents()
    {
      axios.get('http://localhost:8080/a/students').then(
        response => { 
          console.log('success',response.data);
        },
        error => {
          console.log('fail',error.message);
        }
      )
    },
     getCars()
    {
      axios.get('http://localhost:8080/b/cars').then(
        response => { 
          console.log('success',response.data);
        },
        error => {
          console.log('fail',error.message);
        }
      )
    }
  }
  
}
</script>
