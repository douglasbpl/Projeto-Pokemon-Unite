module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Pokemon Unite",
  },
  plugins: ["gatsby-plugin-styled-components"],
  plugins: [`gatsby-plugin-react-helmet`],
  plugins: [ {
      resolve: "gatsby-source-graphql",
      options: {
                typeName: "alldata",
                fieldName: "alldata",
                url: "https://api-us-east-1.graphcms.com/v2/ckvtiw36d0bqn01xv7cst26b8/master",
      },
    },
  ]
  }
