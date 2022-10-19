const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
});

module.exports = {
  pwa: {
    name: "vuestragram",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, "index.html"],
    },
  },
};
