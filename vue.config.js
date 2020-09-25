module.exports = {
  // configureWebpack: {
  //   devServer: {
  //     proxy: {
  //       '/api': {
  //         target:  'http://localhost:3000',
  //         pathRewrite: { '^/api': '' },
  //         changeOrigin: true,
  //         secure: false,
  //       }
  //     }
  //   }
  // },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/style/variables.scss";`
      }
    }
  }
}
