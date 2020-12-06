module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteMetadata: {
    title: 'We Are Legion',
    author: 'Simon Stockhause',
    description: 'We Are Legion Webpage',
    keywords: `Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Gatsby, WoW, World of Warcraft, Shadowlands`,
    gatsby: 'https://www.gatsbyjs.org/',
    bulma: 'https://bulma.io/',
    siteUrl: `https://we-are-legion.xyz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'de',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'We Are Legion',
        short_name: 'WeAreLegion',
        start_url: '/',
        icon: 'static/wal-logo.jpg',
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
  ],
};
