module.exports = {
  siteMetadata: {
    title: 'We Are Legion',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'We Are Legion',
        short_name: 'WeAreLegion',
        start_url: '/',
        icon: 'src/images/wal-logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'de'
      }
    }
  ],
};
