const { defineConfig } = require("@vue/cli-service")
let port = 8888

module.exports = defineConfig({
  // 第三方依赖是否需要转移，避免出现第三方的转移
  transpileDependencies: true,
  // 是否在开发环境下通过eslint-loader 在每次保存是lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效
  lintOnSave: false,
  // 代理端口配置
  devServer: {
    port,
    // 代理的地址
    proxy: {
      // change xxx-api/login => mock/login
      // detail: https://cli.vuejs.org/config/#devserver-proxy0132B43C.png
      [process.env.VUE_APP_BASE_API]: {
        target:
          process.env.VUE_APP_MOCK_ENABLE === "true"
            ? `http://localhost:8090`
            : process.env.VUE_APP_CONSOLE_URL,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  }
})
