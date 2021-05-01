const path = require(`path`)
const fs = require("fs")
const chunk = require(`lodash/chunk`)

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async gatsbyUtilities => {
  // Query our posts from the GraphQL server
  const posts = await getPosts(gatsbyUtilities)

  // If there are no posts in WordPress, don't do anything
  if (!posts.length) {
    return
  }

  // If there are posts, create pages for them
  await createIndividualBlogPostPages({ posts, gatsbyUtilities })

  // And a paginated archive for posts
  await createBlogPostArchive({ posts, gatsbyUtilities })

  const categories = await getCategories(gatsbyUtilities)

  // If there are no pages in WordPress, don't do anything
  if (!categories.length) {
    return
  }

  // And a paginated archive for categoriezed posts
  await createCategoriesArchive({ categories, posts, gatsbyUtilities })

  const pages = await getPages(gatsbyUtilities)

  // If there are no pages in WordPress, don't do anything
  if (!pages.length) {
    return
  }

  // If there are pages, create pages for them
  await createIndividualPages({ pages, gatsbyUtilities })
}

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualBlogPostPages = async ({ posts, gatsbyUtilities }) =>
  Promise.all(
    posts.map(({ previous, post, next }) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      gatsbyUtilities.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: `/news${post.uri}`,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/blog-post.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: post.id,

          // We also use the next and previous id's to query them and add links!
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  )

/**
 * This function creates all the individual pages in this site
 */
const createIndividualPages = async ({ pages, gatsbyUtilities }) =>
  Promise.all(
    pages.map(({ page }) => {
      let tempFile = fs.existsSync(`./src/templates/pages/${page.slug}.js`)
        ? `./src/templates/pages/${page.slug}.js`
        : `./src/templates/page.js`
      console.log(`${page.title} page - template file: ${tempFile}`)
      page.slug !== "news" &&
        // createPage is an action passed to createPages
        // See https://www.gatsbyjs.com/docs/actions#createPage for more info
        gatsbyUtilities.actions.createPage({
          // Use the WordPress uri as the Gatsby page path
          // This is a good idea so that internal links and menus work 👍
          path: page.uri,

          // use the blog post template as the page component
          component: path.resolve(tempFile),

          // `context` is available in the template as a prop and
          // as a variable in GraphQL.
          context: {
            // we need to add the post id here
            // so our blog post template knows which blog post
            // the current page is (when you open it in a browser)
            id: page.id,
          },
        })
    })
  )

/**
 * This function creates archive pages for all blogs in this site
 */
async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage)
  const totalPages = postsChunkedIntoArchivePages.length

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1

      const getPagePath = page => {
        if (page > 0 && page <= totalPages) {
          // Since our news is our blog page
          // we want the first page to be "/news/" and any additional pages
          // to be numbered.
          // "/news/2" for example
          return page === 1 ? `/news` : `/news/${page}`
        }

        return null
      }

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/blog-post-archive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,
          totalPages,
          currentPage: pageNumber,
          currentPageBase: `/news/`,

          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      })
    })
  )
}

/**
 * This function creates archive pages for each categories of blogs in this site
 */
async function createCategoriesArchive({ categories, posts, gatsbyUtilities }) {
  const graphqlResult = await gatsbyUtilities.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)

  const { postsPerPage } = graphqlResult.data.wp.readingSettings

  categories.map((cat, i) => {
    let filteredPosts = posts.filter(post =>
      post.post.categories.nodes.some(category => category.id === cat.id)
    )

    const postsChunkedIntoArchivePages = chunk(filteredPosts, postsPerPage)
    const totalPages = postsChunkedIntoArchivePages.length

    return Promise.all(
      postsChunkedIntoArchivePages.map(async (_posts, index) => {
        const pageNumber = index + 1

        const getPagePath = page => {
          if (page > 0 && page <= totalPages) {
            // Since our news is our blog page
            // we want the first page to be "/news/" and any additional pages
            // to be numbered.
            // "/news/2" for example
            return page === 1 ? `/news${cat.uri}` : `/news${cat.uri}${page}`
          }

          return null
        }

        // createPage is an action passed to createPages
        // See https://www.gatsbyjs.com/docs/actions#createPage for more info
        await gatsbyUtilities.actions.createPage({
          path: getPagePath(pageNumber),

          // use the blog post archive template as the page component
          component: path.resolve(`./src/templates/blog-post-archive.js`),

          // `context` is available in the template as a prop and
          // as a variable in GraphQL.
          context: {
            // the index of our loop is the offset of which posts we want to display
            // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
            // etc
            offset: index * postsPerPage,

            // We need to tell the template how many posts to display too
            postsPerPage,
            totalPages,
            currentPage: pageNumber,
            currentPageBase: `/news${cat.uri}`,

            nextPagePath: getPagePath(pageNumber + 1),
            previousPagePath: getPagePath(pageNumber - 1),
          },
        })
      })
    )
  })
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
            categories {
              nodes {
                id
              }
            }
          }

          next {
            id
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    )
    return
  }
  return graphqlResult.data.allWpPost.edges
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress categories. If there are any GraphQL error it throws an error
 * Otherwise it will return the categories 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getCategories({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpCategory {
      allWpCategory {
        nodes {
          id
          name
          uri
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your pages`,
      graphqlResult.errors
    )
    return
  }
  return graphqlResult.data.allWpCategory.nodes
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress pages. If there are any GraphQL error it throws an error
 * Otherwise it will return the pages 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPages({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPage {
      # Query all WordPress blog posts sorted by date
      allWpPage {
        edges {
          # note: this is a GraphQL alias. It renames "node" to "page" for this query
          # We're doing this because this "node" is a page! It makes our code more readable further down the line.
          page: node {
            id
            uri
            slug
            title
          }
        }
      }
    }
  `)

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your pages`,
      graphqlResult.errors
    )
    return
  }
  return graphqlResult.data.allWpPage.edges
}
