/**
 * 👋 Hey there!
 * This file is the starting point for your new WordPress/Gatsby site! 🚀
 * For more information about what this file is and does, see
 * https://www.gatsbyjs.com/docs/gatsby-config/
 *
 */
const path = require(`path`)
const tailwindConfig = require("./tailwind.config.js")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log("PROJ_URL: " + process.env.GATSBY_PROJ_URL)

module.exports = {
  siteMetadata: {
    title:
      "Website SEO, Design and Development Company | Search Marketing Resource LLC",
    description:
      "Search Marketing Resource provides digital marketing services in the form of Search Engine Optimization (SEO), graphic design and website development solutions. Our Search Marketing programs are affordable and turnkey, with award-winning design and results-oriented SEO services.",
    // gatsby develop run uses this
    siteUrl: process.env.GATSBY_PROJ_URL || `http://localhost:8000/`,
    // gatsby build run uses this
    // siteUrl:
    //   process.env.GATSBY_PROJ_URL ||
    //   `https://gatsbysite.devsmr-development.com/`,
  },
  flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
  },
  /**
   * Adding plugins to this array adds them to your Gatsby site.
   *
   * Gatsby has a rich ecosystem of plugins.
   * If you need any more you can search here: https://www.gatsbyjs.com/plugins/
   */ plugins: [
    {
      resolve: `gatsby-plugin-schema-snapshot`,
      options: {
        path: `schema.gql`,
        exclude: {
          plugins: [`gatsby-source-npm-package-search`],
        },
        update: false,
      },
    },

    {
      /**
       * First up is the WordPress source plugin that connects Gatsby
       * to your WordPress site.
       *
       * visit the plugin docs to learn more
       * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
       *
       */
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url: process.env.WPGRAPHQL_URL || `https://smr-sandbox.com/graphql`,
        type: {
          Post: {
            limit: 1000,
          },
          Portfolio: {
            limit: 1000,
          },
        },
        schema: {
          perPage: 200, // currently set to 100
          requestConcurrency: 15, // currently set to 15
          previewRequestConcurrency: 5, // currently set to 5
          timeout: 600000,
        },
      },
    },
    /**
     * We need this plugin so that it adds the "File.publicURL" to our site
     * It will allow us to access static url's for assets like PDF's
     *
     * See https://www.gatsbyjs.org/packages/gatsby-source-filesystem/ for more info
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },

    /**
     * The following two plugins are required if you want to use Gatsby image
     * See https://www.gatsbyjs.com/docs/gatsby-image/#setting-up-gatsby-image
     * if you're curious about it.
     */
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      // See https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/?=gatsby-plugin-manifest
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SMR Gatsby Site`,
        short_name: `GatsbyJS & WP`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/smr-icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },

    // See https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/?=gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require("autoprefixer"),
        ],
      },
    },
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-offline`,
    /**
     * this (optional) plugin enables Progressive Web App + Offline functionality
     * To learn more, visit: https://gatsby.dev/offline
     */
  ],
}
