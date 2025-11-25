<template>
  <div class="container">
    <Category title="food" >
      <img src="../public/1.png" alt="">
    </Category>
    <Category title="game" >
      <ul>
      <li v-for="(item,index) in games" :key="index">{{ item }}</li>
    </ul>
    </Category>
    <Category title="film" >
      <img controls src="../public/1.png"/>
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
  data() {
    return {
      foods : [
        "米饭", "面条", "汉堡", "披萨", "寿司",
        "火锅", "烧烤", "炸鸡", "牛排", "沙拉",
        "苹果", "香蕉", "橙子", "草莓", "西瓜",
        "奶茶", "咖啡", "可乐", "酸奶", "面包"
      ], games:[
        "英雄联盟", "王者荣耀", "原神", "和平精英", "我的世界",
        "塞尔达传说：旷野之息", "艾尔登法环", "CS2", "王者荣耀",
        "崩坏：星穹铁道", "动物森友会", "马里奥赛车", "暗黑破坏神4",
        "永劫无间", "第五人格", "炉石传说", "守望先锋2", "蛋仔派对"
      ],films: [
        "肖申克的救赎", "霸王别姬", "阿甘正传", "泰坦尼克号", "星际穿越",
        "盗梦空间", "复仇者联盟", "哪吒之魔童降世", "千与千寻", "哈利·波特系列",
        "流浪地球", "蜘蛛侠：平行宇宙", "教父", "这个杀手不太冷", "当幸福来敲门",
        "疯狂动物城", "楚门的世界", "龙猫", "蝙蝠侠：黑暗骑士", "寄生虫"
      ]
    }
  }
}
</script>
<style>
.container{
  display: flex;
  justify-content: space-around;
}
</style>