module.exports = {
  assetsDir: "static",
  publicPath:
    process.env.NODE_ENV === "production" ? process.env.VUE_APP_SRC_PATH : "/",
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true
  },
  lintOnSave: false
};
