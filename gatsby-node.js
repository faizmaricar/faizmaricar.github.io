const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@pages": path.resolve(__dirname, "src/pages"),
        "@sections": path.resolve(__dirname, "src/sections"),
        "@components": path.resolve(__dirname, "src/components"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@providers": path.resolve(__dirname, "src/providers"),
      },
    },
  })
}
