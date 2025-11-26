<template>
   <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- params传参字符串写法 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
         <!-- 对象写法 -->
        <router-link :to="{
          name: 'xq',//params参数必须用name
          // params: {
          //   id: m.id,
          //   title: m.title
          // }
           query: {
            id: m.id,
            title: m.title
          }
        }">{{m.title}}</router-link>&nbsp;&nbsp;
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MyMessage',
  data() {
    return {
      messageList: [
        { id: '001', title: '001' },
        { id: '002', title: '002' },
        { id: '003', title: '003' },
        { id: '004' ,title: '004' },
      ]
    }
  }
}
</script>

<style>

</style>