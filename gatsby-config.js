module.exports = {
  siteMetadata: {
    title: "Baroque Horse Training",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [ 
          "272086847",
        ]
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-less",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: ['.mdx','.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/default.js')
        },
        gatsbyRemarkPlugins:[
          "gatsby-remark-images"
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    "gatsby-remark-images",
    "gatsby-transformer-sharp",
  ],
};
