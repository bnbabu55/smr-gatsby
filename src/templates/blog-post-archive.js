import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Categories from "../components/Categories"
import RecentPosts from "../components/RecentPosts"
import ContactSection from "../components/ContactSection"
import SubscriptionForm from "../components/SubscriptionForm"

const BlogIndex = ({
  data,
  pageContext: {
    nextPagePath,
    previousPagePath,
    currentPageBase,
    totalPages,
    currentPage,
    paginationArray,
  },
}) => {
  const posts = data.allWpPost.nodes
  const isFirst = currentPage === 1
  const isLast = currentPage === totalPages
  const seoData = data.archiveSeo.seo

  if (!posts.length) {
    return (
      <Layout>
        <Seo seoData={seoData} />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <Seo seoData={seoData} />

      <div className="text-gray-600 my-16">
        <div>
          <h2 className="font-BebasNeue font-bold tracking-wide text-5xl text-themeBlue-600 text-center">
            SEARCH MARKETING NEWS
          </h2>
          <p className="font-Montserrat font-semibold text-2xl text-themeOrange-400 text-center uppercase my-6">
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
                          alt={post.featuredImage.node.altText || ""}
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
                              <Link to={`${post.uri}`} itemProp="url">
                                <span
                                  itemProp="headline"
                                  className="font-MontserratBold tracking-wider text-base uppercase text-themeOrange-400 leading-none"
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
                          <div
                            itemProp="description"
                            className="font-Lato text-sm text-themeGray-200"
                          >
                            {parse(post.excerpt, {
                              replace: ({ attribs }) =>
                                attribs &&
                                attribs.class === "read-more" && <></>,
                            })}
                          </div>
                        </article>
                      </li>
                    </ul>
                  </li>
                )
              })}
            </ol>
          </div>
          <div className="sidebar">
            <SubscriptionForm />
            <RecentPosts />
            <Categories />
          </div>
        </div>
      </div>
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
            <li>
              <Link
                to={previousPagePath}
                rel="prev"
                className="text-themeBlue-200 hover:text-themeBlue-600"
                style={{
                  marginTop: "0.1rem",
                  marginBottom: "0.1rem",
                  padding: "0.5rem",
                }}
              >
                {"<< Prev"}
              </Link>{" "}
            </li>
          )}
          {paginationArray.map((x, i) => {
            return (
              <li
                key={`pagination-number${x}+${i}`}
                style={{
                  margin: 0,
                }}
              >
                {x === "..." ? (
                  x
                ) : (
                  <Link
                    to={`${x === 1 ? currentPageBase : currentPageBase + x}`}
                    className={`${
                      x === currentPage
                        ? "text-white bg-themeBlue-200 hover:bg-themeBlue-600"
                        : "text-themeBlue-200 hover:text-themeBlue-600"
                    }
                `}
                    style={{
                      marginTop: "0.1rem",
                      marginBottom: "0.1rem",
                      padding: "0.5rem",
                      textDecoration: "none",
                    }}
                  >
                    {x}
                  </Link>
                )}
              </li>
            )
          })}
          {/* {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`${i === 0 ? currentPageBase : currentPageBase + (i + 1)}`}
                className={`${
                  i + 1 === currentPage
                    ? "text-white bg-themeBlue-200 hover:bg-themeBlue-600"
                    : "text-themeBlue-200 hover:text-themeBlue-600"
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
          ))} */}
          {!isLast && (
            <li>
              <Link
                to={nextPagePath}
                rel="next"
                className="text-themeBlue-200 hover:text-themeBlue-600"
                style={{
                  marginTop: "0.1rem",
                  marginBottom: "0.1rem",
                  padding: "0.5rem",
                }}
              >
                {"Next >>"}
              </Link>
            </li>
          )}
        </ul>
      </div>
      <ContactSection />
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
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
    archiveSeo: wpPage(slug: { eq: "news" }) {
      seo {
        fullHead
        schema {
          raw
        }
      }
    }
  }
`
