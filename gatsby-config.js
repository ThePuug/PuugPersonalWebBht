module.exports = {
  siteMetadata: {
    title: "Baroque Horse Training",
  },
  plugins: [
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [ 
          "272086847",
        ]
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
//    {
//      resolve: "gatsby-plugin-manifest",
//      options: {
//        icon: "src/images/icon.png",
//      },
//    },
//    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
//        defaultLayouts: {
//          default: require.resolve("./src/templates/writings.js")
//        },
//        gatsbyRemarkPlugins: [
//          "gatsby-remark-images",
//        ],
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
//      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
//      __key: "pages",
    },
  ],
};
