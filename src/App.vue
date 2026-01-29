<template>
  <div>
    <div class="row">
      <Banner a="1" @click="handleTest"/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 浏览器历史浏览记录两种模式 replace替换当前栈顶   默认是push -->
          <router-link  class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link  class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <!-- 使用 VNode 组件，传入通过组件实例创建的 customVNode -->
    <VNode :content="customVNode" />
    <Test/>
    <Add :list.sync="formList" />
  </div>
</template>

<script>
import Banner from './components/Banner.vue';
import Test from './pages/test2.js'
import Add from './pages/Add.vue';
// Vue 2 中无需手动导入 h，render 函数会自动传入；如果是 Vue 3 则保留导入
// import { h } from 'vue' 

export default {
  name: 'App',
  components: {
    Banner,
    Test,
    Add,
    // 修复：还原 VNode 函数式组件（核心是接收 VNode 并渲染）
    VNode: {
      functional: true,
      props: {
        content: {
          type: Object, // VNode 是对象类型
          required: true,
          description: '需要渲染的 VNode 内容'
        }
      },
      // Vue 2 中 render 函数第一个参数就是 h（createElement），无需全局导入
      render: (h, ctx) => ctx.props.content, 
    }
  },
  data() {
    return {
      // 修复：在 data 中创建 VNode（有组件实例上下文）
      // Vue 2 用 this.$createElement 替代全局 h()，绑定当前组件实例
      customVNode: this.$createElement('div', { class: 'bar', innerHTML: 'hello' }),
      formList: [{ content: "" }],
    };
  },
  provide() {
    return {
      App: this, // 把自己的实例暴露出去，命名为 App
    };
  },
  methods: {
    // 父组件有一个“校验表单”的方法
    validate() {
      console.log('校验所有表单项');
    },
    handleTest() {
      console.log('1111');
    }
  },
  mounted() {
    console.log(this) // 打印当前组件实例
  }
}
</script>