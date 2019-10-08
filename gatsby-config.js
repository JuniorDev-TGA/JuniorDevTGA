module.exports = {
  siteMetadata: {
    title: `JuniorDev Tauranga`,
    description: `We are a community for juniors, students, people still learning and those already working, for self learners, bootcampers, or grads and students in formal education.`,
    author: `@JuniorDevTGA`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#313440`,
        theme_color: `#313440`,
        display: `minimal-ui`,
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us3.list-manage.com/subscribe/post?u=67fa8efa895833b5dd1fdd70a&amp;id=f59a6fe6d2",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
