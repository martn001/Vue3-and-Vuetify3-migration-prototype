module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.runtime.esm.js",
      },
    },
  },
};
