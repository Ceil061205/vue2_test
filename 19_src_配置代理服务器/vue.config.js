const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  pages: {
    index: {
      // 修改入口文件
      entry:'src/main.js'
    }
  },
  // 关闭语法检查
  lintOnSave: false,
  //方式一 开启代理服务器 不能配置多个代理 不灵活 如果本地有就不会去其他地方拿了 有限撇陪前段资源
  // devServer: {
  //   proxy:'http://localhost:5000'
  // }

  // 方式二
  devServer: {
    proxy: {
      '/a': {
        target: 'http://localhost:5000',
        pathRewrite: { '^/a': '' },
        // 用于支持 websocket
        ws: true,
        // 不写默认也是true 用于配置请求头的host值
        changeOrigin:true
      },
      '/b': {
        target: 'http://localhost:5001',
        pathRewrite: { '^/b': '' },
        // 用于支持 websocket
        ws: true,
        // 不写默认也是true 用于配置请求头的host值
        changeOrigin:true
      }
    }
  }
}