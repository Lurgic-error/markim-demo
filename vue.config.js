module.exports = {
    css: {
      loaderOptions: {
        scss: {
          additionalData: `
            @import "@/styles/abstracts/_variables.scss";
            @import "@/styles/abstracts/_functions.scss";
            @import "@/styles/abstracts/_mixins.scss";
          `
        }
      }
    }
  }