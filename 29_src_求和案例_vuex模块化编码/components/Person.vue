<template>
  <div>
    <h1>person</h1>
    <h3 style="color: red;">sum{{ sum }}</h3>
    <h3>first{{ firstPersonName }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name" @keyup.enter="add">
    <button @click="add">添加</button><button @click="addWang">添加w</button>
    <button @click="addP">添加r</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
// import { mapState } from 'vuex';
export default {
  name: 'MyPerson',
  data() {
    return {
      name:''
    }
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name }
      this.$store.commit('personAbout/ADD_PERSON',personObj)
      this.name = '';
      
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name }
      this.$store.dispatch('personAbout/addPersonWang',personObj)
      this.name = '';
    },
    addP() {
      this.$store.dispatch('personAbout/addPersonServer')
    }
  },
  computed: {
    personList() {
      return this.$store.state.personAbout.personList
    },
    sum() {
      return this.$store.state.countAbout.sum
    },
    firstPersonName(){
      return this.$store.getters['personAbout/firstPersonName']
    }

    // ...mapState(['personList'])
  }
}
</script>

<style>

</style>