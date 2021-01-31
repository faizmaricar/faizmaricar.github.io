module.exports = {
  siteMetadata: {
    title: `Faiz Maricar`,
    titleTemplate: "%s · The Real Hero",
    description: `Faiz Maricar, Front-end developer`,
    url: "https://faizmaricar.github.io",
    twitterUsername: "@faizmaricar",
    navigation: ["about", "blogs", "tutorials", "contact"],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
}
