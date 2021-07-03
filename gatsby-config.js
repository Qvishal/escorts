module.exports = {
  siteMetadata: {
    title: `Welcome to Escort Service agency`,
    description: `Book Mumbai Escorts for independent Mumbai Call Girls. Spend A Night and Get Full Satisfaction and Sexual pleasure With High Profile Call Girls in Mumbai.`,
    author: `@Qvishal`,
    siteUrl: `https://www.bookmumbaiescorts.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon2.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Dosis\:200,300,400,500,600,700,800`,
          `Playfair Display\:400,400i,700,700i,900,900i`,
          `Roboto\:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i`,
          `Roboto Condensed\:300,300i,400,400i,700,700i`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        sitemap: 'https://www.bookmumbaiescorts.com/sitemap.xml',
        policy: [{ userAgent: '*', Disallow: '' }]
        } 
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

  ],
}
