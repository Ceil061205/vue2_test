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
  lintOnSave: false
}