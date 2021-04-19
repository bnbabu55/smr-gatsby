import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Categories from "../components/Categories"
import RecentPosts from "../components/RecentPosts"

const BlogIndex = ({
  data,
  pageContext: {
    nextPagePath,
    previousPagePath,
    currentPageBase,
    totalPages,
    currentPage,
  },
}) => {
  const posts = data.allWpPost.nodes
  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages

  if (!posts.length) {
    return (
      <Layout>
        <Seo title="Blog Archive" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo title="All posts" />

      <section className="text-gray-600 my-16">
        <div>
          <h2 className="font-BebasNeue text-5xl text-themeBlue-text text-center">
            SEARCH MARKETING NEWS
          </h2>
          <p className="font-Montserrat text-2xl text-themeOrange text-center uppercase my-6">
            Seo and SEM Marketing & Website Design News
          </p>
          <p className="font-Lato text-lg text-themeGray-200 text-center my-6">
            Stay current on leading online marketing trends and the latest
            website development <br />
            practices by opting-in to receive our monthly News posts.
          </p>
        </div>
        <div className="all-blogs">
          <div className="main-content">
            <ol>
              {posts.map(post => {
                const title = post.title

                return (
                  <li key={post.uri} className="pb-8">
                    <ul className="flex flex-col md:flex-row">
                      <li key={post.uri + "-image"} className="w-full md:w-2/6">
                        <GatsbyImage
                          image={
                            post.featuredImage.node.localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt={post.featuredImage.node.altText}
                        />
                      </li>
                      <li
                        key={post.uri + "-body"}
                        className="w-full justify-center items-center md:w-4/6 md:ml-20"
                      >
                        <article
                          className="post-list-item"
                          itemScope
                          itemType="http://schema.org/Article"
                        >
                          <header>
                            <h2 className="-mt-2">
                              <Link to={`/news${post.uri}`} itemProp="url">
                                <span
                                  itemProp="headline"
                                  className="font-Montserrat text-base uppercase text-themeOrange leading-none"
                                >
                                  {parse(title)}
                                </span>
                              </Link>
                            </h2>
                            <p className="font-Lato text-sm text-themeGray-200 pb-2">
                              Posted by{" "}
                              <span>{`${post.author.node.firstName} ${post.author.node.lastName}`}</span>
                            </p>
                          </header>
                          <section
                            itemProp="description"
                            className="font-Lato text-sm text-themeGray-200"
                          >
                            {parse(post.excerpt, {
                              replace: ({ attribs }) =>
                                attribs &&
                                attribs.class === "read-more" && <></>,
                            })}
                          </section>
                        </article>
                      </li>
                    </ul>
                  </li>
                )
              })}
            </ol>
          </div>
          <div className="sidebar">
            <div className="subscription">
              <div>
                <label
                  htmlFor="subemail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="subemail"
                    name="subemail"
                    placeholder="Your Email Address:"
                    required
                    className="w-full text-sm border-gray-300 rounded-lg shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white text-xs uppercase font-RalewayBold tracking-widest bg-indigo-600 hover:bg-indigo-800 rounded py-2 mt-3 shadow-md"
                  aria-label="submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <RecentPosts />
            <Categories />
          </div>
        </div>
      </section>
      <div>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link
              to={previousPagePath}
              rel="prev"
              className="text-themeBlue-200 hover:text-themeBlue-100"
              style={{
                marginTop: "0.1rem",
                marginBottom: "0.1rem",
                padding: "0.5rem",
              }}
            >
              {"<< Prev"}
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`${
                  i === 0 ? currentPageBase : currentPageBase + (i + 1)
                }`}
                className={`${
                  i + 1 === currentPage
                    ? "text-white bg-themeBlue-200 hover:bg-themeBlue-100"
                    : "text-themeBlue-200 hover:text-themeBlue-100"
                }
                `}
                style={{
                  marginTop: "0.1rem",
                  marginBottom: "0.1rem",
                  padding: "0.5rem",
                  textDecoration: "none",
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link
              to={nextPagePath}
              rel="next"
              className="text-themeBlue-200 hover:text-themeBlue-100"
              style={{
                marginTop: "0.1rem",
                marginBottom: "0.1rem",
                padding: "0.5rem",
              }}
            >
              {"Next >>"}
            </Link>
          )}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        author {
          node {
            firstName
            lastName
          }
        }
        featuredImage {
          node {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  width: 330
                  height: 190
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`