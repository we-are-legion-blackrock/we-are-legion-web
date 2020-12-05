const path = require('path')
module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteMetadata: {
    title: 'We Are Legion',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'de'
      }
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
        icon: 'static/wal-logo.png',
      },
    },    
    `gatsby-plugin-sharp`,     
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
  ],
};
