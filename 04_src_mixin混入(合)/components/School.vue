<template>
  <div class="demo">
    <h2 @click="show">{{name}}</h2>
  </div>
</template>
<script>
// import { mixin } from '../mixin';
export default {
      name:"MySchool",
      data() {
        return { name: 'SCHOOL' }
      },
  // mixins: [mixin]
}

</script>