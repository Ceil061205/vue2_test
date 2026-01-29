export default {
  name: "MyTest2",
  functional: true,
  // render(h) {
  //   // return h('div','内容')
    
  // }
    render(h, ctx) { 
    // 正确写法1：return 和 h() 同一行
    return h('div', { 
      // 第二个参数：VNode 属性（样式、类名、事件等）
      style: { color: 'red', padding: '10px' },
      class: 'my-test2',
      on: {
        click: () => console.log('点击了MyTest2组件')
      }
    }, '这是MyTest2函数式组件的内容'); // 第三个参数：子节点（文本/VNode数组）

    // 正确写法2：用括号包裹（换行也可以）
    // return (
    //   h('div', '这是MyTest2函数式组件的内容')
    // );
  },
}