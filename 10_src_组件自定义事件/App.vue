<template>
  <div class="app">
    <h1>{{ msg }},{{ studentName }}</h1>
    <!-- 通过父组件向子组价传递函数类型的Props实现子传父 -->
    <School :getSchool="getSchool"/>
    <!-- 通过父组件向子组价绑定一个自定义事件实现子传父 -->
    <!-- <Student v-on:a="getStudent"/> -->
    <!-- <Student @a.once="getStudent"/> -->
     <!-- <Student @a="getStudent" @b="m1"/> -->

    <!--过父组件向子组价绑定一个自定义事件实现子传父  第二种ref灵活性强 -->
    <!-- 组件要用原身dom事件需要加native -->
    <Student ref="student" @click.native="show"/>

    <!-- 绑定自定义事件把函数放在父组件中 -->
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue';
export default {
  name: 'App',
  data() {
    return {
      msg: 'hhhh',
      studentName:""
    }
  },
  components: {
    Student,
    School
  },
  methods: {
    show(){alert('1')},
    getSchool(name) {
      console.log('shoudao',name);
    },
    getStudent(name,...params) {
      console.log('xuesheng', name, params);
      this.studentName = name;
    },
    // m1() {
    //   console.log('m1');
      
    // }
  },
  mounted(){
    // this.$refs.student.$on('a',this.getStudent)
    this.$refs.student.$on('a',this.getStudent)
    // this.$refs.student.$on('a', (name,...params)=> {
    //   console.log('name', name, params);
    //   console.log(this);
      
    //   this.studentName = name;
    // })
    // this.$refs.student.$once('a',this.getStudent)//一次性
  }
}
</script>
<style>
.app{
  background-color: #817777;
  padding: 5px;
}
</style>