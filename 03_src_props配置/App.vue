<template>
  <div>
    <Student name="xyz" :age="22"/>
    <Student name="yy" />
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
  name: 'App',
  data() {
    return {
      msg:'hhhh'
    }
  },
  components: {
    Student,
  }
}
</script>

<style>

</style>