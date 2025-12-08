import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";
import Home from "@/pages/Home.vue";
import Message from "@/pages/Message.vue";
import News from "@/pages/News.vue";
import VueRouter from "vue-router";
const router = new VueRouter({
  routes: [{
    name:'gy',
    path: '/about',
    component: About,
    meta: {
      isAuth:true,
      title:'关于'
    }
  },
    {
      name:'zhuye',
    // 一级需要加斜杠
    path: '/home',
      component: Home,
     meta: {
      title:'主页'
    },
    children: [
      {
        name:'xingwen',
        // 二级不用加斜杠
        path: 'news',
        component: News,
        meta:{isAuth:true,title:'新闻'},
      },
      {
        name:'xiaoxi',
        // 二级不用加斜杠
        path: 'message',
        component: Message,
        meta: { isAuth: true, title: '消息' },//路由元信息给要经过验证的路由打标识
        children: [
          {
            name: 'xq',
            path: 'detail',
            component: Detail,
            meta:{title:'详情'},
            props($route) {
              return {id:$route.query.id,title:$route.query.title}
            }
          }
        ]
      }
    ]
  }]
})
// 全局前置路由守卫---在每次路由切换之前和初始化时调用
// router.beforeEach((to, from, next) => {
//   // if (to.path === '/home/news' || to.path === '/home/message')
//   // if(to.name === 'xingwen' || to.name === 'xiaoxi')
//   if(to.meta.isAuth)
//   {
//     if (localStorage.getItem('school') === 'at') {
//       next()//放行
//     }else {
//       alert('error')
//   }
//   }
//    else {
//     next()
//   }
// })
// 后置路由守位---在每次路由切换之后和初始化时调用
router.afterEach((to) => {
  //切换完才能改标题
    document.title = to.meta.title || '默认'
})

export default router