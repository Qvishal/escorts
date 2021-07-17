
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /node-modules/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    //const oldPage = { ...page }

    // Recreate the modified page
    //deletePage(oldPage)
    createPage(page)
  }
}

