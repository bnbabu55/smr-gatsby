import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Categories from "../components/Categories"
import RecentPosts from "../components/RecentPosts"

const BlogPostTemplate = ({ data: { previous, next, post }, location }) => {
  const featuredImage = {
    fluid:
      post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
    alt: post.featuredImage?.node?.alt || ``,
  }
  const title = post.title

  return (
    <Layout>
      <Seo seoData={post?.seo} />

      <section className="text-gray-600 mt-12 mb-5">
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
        <div className="blog-article">
          <div className="main-content">
            <ul className="w-full flex flex-col justify-start items-start">
              <li key={"blog-nav" + post.uri} className="w-full">
                <ul className="w-full flex flex-row pb-5 justify-center items-center">
                  <li className="w-1/12">
                    <Link
                      to="/news"
                      className="bg-themeBlue-600 hover:bg-themeBlue-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 460.298 460.297"
                        width="2.25rem"
                        className="text-white bg-themeBlue-600 text-xl rounded-lg p-1 fill-current"
                      >
                        <title>News Home</title>
                        <path d="M230.149 120.939L65.986 256.274c0 .191-.048.472-.144.855-.094.38-.144.656-.144.852v137.041c0 4.948 1.809 9.236 5.426 12.847 3.616 3.613 7.898 5.431 12.847 5.431h109.63V303.664h73.097v109.64h109.629c4.948 0 9.236-1.814 12.847-5.435 3.617-3.607 5.432-7.898 5.432-12.847V257.981c0-.76-.104-1.334-.288-1.707L230.149 120.939z" />
                        <path d="M457.122 225.438L394.6 173.476V56.989c0-2.663-.856-4.853-2.574-6.567-1.704-1.712-3.894-2.568-6.563-2.568h-54.816c-2.666 0-4.855.856-6.57 2.568-1.711 1.714-2.566 3.905-2.566 6.567v55.673l-69.662-58.245c-6.084-4.949-13.318-7.423-21.694-7.423-8.375 0-15.608 2.474-21.698 7.423L3.172 225.438c-1.903 1.52-2.946 3.566-3.14 6.136-.193 2.568.472 4.811 1.997 6.713l17.701 21.128c1.525 1.712 3.521 2.759 5.996 3.142 2.285.192 4.57-.476 6.855-1.998L230.149 95.817l197.57 164.741c1.526 1.328 3.521 1.991 5.996 1.991h.858c2.471-.376 4.463-1.43 5.996-3.138l17.703-21.125c1.522-1.906 2.189-4.145 1.991-6.716-.195-2.563-1.242-4.609-3.141-6.132z" />
                      </svg>
                    </Link>
                  </li>
                  <li className="w-11/12">
                    <ul className="w-full flex flex-row justify-between">
                      <li className="justify-self-start">
                        {previous && (
                          <Link
                            to={`/news${previous.uri}`}
                            rel="prev"
                            className="bg-themeBlue-600 hover:bg-themeBlue-200 text-white px-2 py-1 rounded-lg"
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
                            className="bg-themeBlue-600 hover:bg-themeBlue-200 text-white px-2 py-1 rounded-lg"
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
                      className="font-LatoBold tracking-wide text-3xl text-themeBlue-600 leading-none text-left"
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
                            className="font-Lato text-lg text-themeOrange-400"
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
                <p className="font-Montserrat text-xl text-themeBlue-600 py-3">
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 408.788 408.788"
                        className="fill-current text-white text-lg mr-2"
                      >
                        <title>Facebook</title>
                        <path
                          d="M353.701 0H55.087C24.665 0 .002 24.662.002 55.085v298.616c0 30.423 24.662 55.085 55.085 55.085h147.275l.251-146.078h-37.951a8.954 8.954 0 01-8.954-8.92l-.182-47.087a8.955 8.955 0 018.955-8.989h37.882v-45.498c0-52.8 32.247-81.55 79.348-81.55h38.65a8.955 8.955 0 018.955 8.955v39.704a8.955 8.955 0 01-8.95 8.955l-23.719.011c-25.615 0-30.575 12.172-30.575 30.035v39.389h56.285c5.363 0 9.524 4.683 8.892 10.009l-5.581 47.087a8.955 8.955 0 01-8.892 7.901h-50.453l-.251 146.078h87.631c30.422 0 55.084-24.662 55.084-55.084V55.085C408.786 24.662 384.124 0 353.701 0z"
                          fill="white"
                        />
                      </svg>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1rem"
                        height="1rem"
                        viewBox="0 0 382 382"
                        className="fill-current text-white text-lg mr-2"
                      >
                        <title>LinkedIn</title>
                        <path
                          d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 01-9.246 9.246H286.73a9.247 9.247 0 01-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 01-9.246 9.246h-44.426a9.247 9.247 0 01-9.246-9.246V149.593a9.247 9.247 0 019.246-9.246h44.426a9.247 9.247 0 019.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"
                          fill="white"
                        />
                      </svg>
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
                    className="w-full text-sm border-gray-300 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white text-xs uppercase font-RalewayBold tracking-widest bg-themeBlue-200 hover:bg-themeBlue-600 rounded py-2 mt-3 shadow-md"
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
      seo {
        fullHead
        schemaDetails
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
