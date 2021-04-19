import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Categories from "../components/Categories"
import RecentPosts from "../components/RecentPosts"
import { FaFacebookSquare, FaHome, FaLinkedinIn } from "react-icons/fa"

const BlogPostTemplate = ({ data: { previous, next, post }, location }) => {
  const featuredImage = {
    fluid:
      post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }
  const title = post.title

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <section className="text-gray-600 mt-12 mb-5">
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
        <div className="blog-article">
          <div className="main-content">
            <ul className="w-full flex flex-col justify-start items-start">
              <li key={"blog-nav" + post.uri} className="w-full">
                <ul className="w-full flex flex-row pb-5 justify-center items-center">
                  <li className="w-1/12">
                    <Link
                      to="/news"
                      className="bg-themeBlue-text hover:bg-themeBlue-200"
                    >
                      <FaHome className="text-white bg-themeBlue-text text-4xl rounded-lg p-1" />
                    </Link>
                  </li>
                  <li className="w-11/12">
                    <ul className="w-full flex flex-row justify-between">
                      <li className="justify-self-start">
                        {previous && (
                          <Link
                            to={`/news${previous.uri}`}
                            rel="prev"
                            className="bg-themeBlue-text hover:bg-themeBlue-200 text-white px-2 py-1 rounded-lg"
                          >
                            ← {"Previous"}
                          </Link>
                        )}
                      </li>
                      <li className="justify-self-end">
                        {next && (
                          <Link
                            to={`/news${next.uri}`}
                            rel="next"
                            className="bg-themeBlue-text hover:bg-themeBlue-200 text-white px-2 py-1 rounded-lg"
                          >
                            {"Next"} →
                          </Link>
                        )}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li key={post.uri + "-title"}>
                <header>
                  <h2 className="-mt-2 py-3">
                    <span
                      itemProp="headline"
                      className="font-Lato font-bold text-2xl text-themeBlue-text leading-none text-left"
                    >
                      {parse(title)}
                    </span>
                  </h2>
                  <ul className="pb-3 flex">
                    {post.categories.nodes.map((cat, index, arr) => {
                      return (
                        <li key={cat.id + index} className="pb-3">
                          <Link
                            to={`/news${cat.uri}`}
                            className="font-Lato text-lg text-themeOrange"
                          >
                            {`${
                              arr.length !== index + 1
                                ? cat.name + ", "
                                : cat.name
                            }`}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </header>
              </li>
              <li key={post.uri + "-image"} className="w-full">
                <GatsbyImage
                  image={featuredImage.fluid}
                  alt={featuredImage.alt}
                />
              </li>
              <li
                key={post.uri + "-body"}
                className="w-full justify-center items-center"
              >
                <p className="font-Montserrat text-xl text-themeBlue-text py-3">
                  {post.date}
                </p>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <section
                    itemProp="description"
                    className="font-Lato prose md:prose-lg max-w-none text-justify"
                  >
                    {parse(post.content)}
                  </section>
                </article>
                <ul className="flex mt-5">
                  <li className="bg-facebookBlue text-white rounded-lg flex justify-evenly items-center px-2 py-1">
                    <a
                      className="bg-facebookBlue text-white rounded-lg flex justify-evenly items-center"
                      href={`https://www.facebook.com/sharer.php?u=${location.href}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookSquare className="mr-2" />
                      <span className="text-base"> Share</span>
                    </a>
                  </li>
                  <li className="bg-linkedInBlue text-white rounded-lg flex justify-evenly items-center px-2 py-1 ml-2">
                    <a
                      className="bg-linkedInBlue text-white rounded-lg flex justify-evenly items-center"
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${location.href}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn className="mr-2" />
                      <span className="text-base"> Share</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
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
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      author {
        node {
          firstName
          lastName
        }
      }
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 850
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
      categories {
        nodes {
          id
          name
          uri
        }
      }
    }

    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }

    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
  }
`
