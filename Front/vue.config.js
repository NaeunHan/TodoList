const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
  },
  css:{
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/assets/style/_mixins.scss";
        @import "~@/assets/style/_variables.scss";
        @import "~@/assets/style/_mediaQueries.scss";
        @import "~@/assets/style/_svg.scss";
        @import "~@/assets/style/_common.scss";
        `
       }
      }
     }
    }
   )
