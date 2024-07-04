/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `site-auth-gatsby-demo`,
    siteUrl: `https://gatsby-demo.site-auth.sahibsingh.dev`,
  },
  plugins: ["gatsby-plugin-postcss"],
};
