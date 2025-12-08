<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue';
export default {
  name: 'App',
  data() {
    return {
      msg: 'hhhh'
    }
  },
  components: {
    Student,
    School
  }
}
</script>
<style>
.app{
  background-color: #817777;
  padding: 5px;
}
</style>