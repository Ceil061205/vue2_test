<template>
  <div class="container">
    <Category title="game" >
      <template scope=a>
        <ul>
          <li v-for="(item,index) in a.games" :key="index">{{ item }}</li>
        </ul>
        <h2>{{ a.msg }}</h2>
      </template>
    </Category>
    <Category title="game" >
      <template scope='{games}'>
        <ul>
          <li v-for="(item,index) in games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="game" >
      <template slot-scope='{games}'>
        <ul>
          <li v-for="(item,index) in games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue';
export default {
  name: 'App',
  components: {
    Category
  },
  
}
</script>
<style>
.container,.foot{
  display: flex;
  justify-content: space-around;
}
</style>