<template>
  <div>
    <Student />
    <School/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue';
export default {
  name: 'App',
  data() {
    return {
      msg:'hhhh'
    }
  },
  components: {
    Student,
    School
  }
}
</script>
<!-- 不用给app里面加scoped -->
<style>

</style>