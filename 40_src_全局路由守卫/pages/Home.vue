<template>
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul class="nav nav-tabs">
          <li> 
            <router-link   class="list-group-item" active-class="active" to="/home/news">News</router-link>
          </li>
          <li>
            <router-link   class="list-group-item" active-class="active" to="/home/message">Message</router-link>
          </li>
        </ul>
        <!-- include指定某个组件 写的是组件的name 不展示的组持续挂载 -->
        <!-- <keep-alive include="MyNews"> -->
          <!-- 缓存多个 -->
        <keep-alive :include="['MyNews','MyMessage']">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MyHome',
}
</script>

<style>

</style>