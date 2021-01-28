module.exports = {
  siteMetadata: {
    title: `Faiz Maricar`,
    description: `I'm a front-end developer`,
    navigation: ["about", "blogs", "tutorials", "contact"],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
