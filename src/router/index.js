import About from "@/components/About.vue";
import Home from "@/components/Home.vue";
import VueRouter from "vue-router";
import Home from './components/Home.vue';
import About from './components/About.vue';
const router = new VueRouter({
  routes: [{
    path: '/about',
    component:About
  },
  {
    path: '/home',
    component:Home
  }]
})