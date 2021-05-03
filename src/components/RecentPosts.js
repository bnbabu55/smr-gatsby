import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

const RecentPosts = () => {
  const { recentPosts } = useStaticQuery(graphql`
    query WordPressRecentPost {
      recentPosts: allWpPost(sort: { fields: [date], order: DESC }, limit: 3) {
        nodes {
          id
          excerpt
          uri
          date(formatString: "MMMM DD, YYYY")
          month: date(formatString: "MMMM")
          title
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    layout: FIXED
                    width: 62
                    height: 50
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
  `)

  if (!recentPosts?.nodes || recentPosts.nodes === 0) return null

  let postMonth = ""
  let renderHeader = false
  return (
    <div className="recentposts" key="recent-post-wrapper">
      {recentPosts.nodes.map((post, i) => {
        if (postMonth !== post.month) {
          postMonth = post.month
          renderHeader = true
        } else {
          renderHeader = false
        }
        return (
          <div key={post.id + "-title"}>
            {renderHeader && (
              <h3
                key={post.id + "-title"}
                className="block font-Lato font-semibold text-lg text-themeBlue-text py-2 mb-2 border-b-2 border-themeBlue-100"
              >
                {post.month}
              </h3>
            )}
            <ul key={post.id + "-recent-ul"} className="flex flex-row">
              <li key={post.id + "-image-li"} className="">
                <GatsbyImage
                  key={post.id + "-image"}
                  image={
                    post.featuredImage.node.localFile.childImageSharp
                      .gatsbyImageData
                  }
                  alt={post.featuredImage.node.altText}
                />
              </li>
              <li
                key={post.id + "-body-li"}
                className="justify-center items-center ml-1 mb-2"
              >
                <article
                  key={post.id + "-body-article"}
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header key={post.id + "-body-header"}>
                    <h2 className="-mt-2" key={post.id + "-body-h2"}>
                      <Link
                        to={`/news${post.uri}`}
                        itemProp="url"
                        key={post.id + "-body-link"}
                      >
                        <span
                          key={post.id + "-body-span-1"}
                          itemProp="headline"
                          className="font-Montserrat text-xs uppercase text-themeOrange"
                          style={{ lineHeight: "90%" }}
                        >
                          {parse(post.title)}
                        </span>
                      </Link>
                    </h2>
                    <p
                      key={post.id + "-body-p"}
                      className="font-Lato text-xs text-themeBlue-text pb-1"
                    >
                      <span key={post.id + "-body-span"}>{post.date}</span>
                    </p>
                  </header>
                  <section
                    key={post.id + "-body-section"}
                    itemProp="description"
                    className="font-Lato text-sm text-themeGray-200 line-clamp-2"
                  >
                    {parse(post.excerpt, {
                      replace: ({ attribs }) =>
                        attribs && attribs.class === "read-more" && <></>,
                    })}
                  </section>
                </article>
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default RecentPosts
