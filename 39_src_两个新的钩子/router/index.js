import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";
import Home from "@/pages/Home.vue";
import Message from "@/pages/Message.vue";
import News from "@/pages/News.vue";
import VueRouter from "vue-router";
export default new VueRouter({
  routes: [{
    name:'gy',
    path: '/about',
    component:About
  },
    {
    // 一级需要加斜杠
    path: '/home',
    component: Home,
    children: [
      {
        // 二级不用加斜杠
        path: 'news',
        component:News
      },
      {
        // 二级不用加斜杠
        path: 'message',
        component: Message,
        children: [
          {
            name: 'xq',
            path: 'detail',
            component: Detail,
            props($route) {
              return {id:$route.query.id,title:$route.query.title}
            }
          }
        ]
      }
    ]
  }]
})
