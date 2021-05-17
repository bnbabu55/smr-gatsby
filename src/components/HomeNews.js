import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import parse, { domToReact } from "html-react-parser"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const HomeNews = () => {
  const { homeNews, bgImage } = useStaticQuery(graphql`
    query HomeRecentNews {
      homeNews: allWpPost(sort: { fields: [date], order: DESC }, limit: 4) {
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
                    width: 190
                    height: 120
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
      bgImage: allFile(
        filter: {
          name: { regex: "/news-bg/" }
          relativeDirectory: { eq: "background" }
        }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 1400
              placeholder: BLURRED
              quality: 90
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  if (!homeNews?.nodes || homeNews.nodes === 0) return null

  const pluginImage = getImage(bgImage.nodes[0].childImageSharp.gatsbyImageData)

  const image = convertToBgImage(pluginImage)

  const options = {
    replace: domNode => {
      if (!domNode.attribs) {
        return
      }

      if (domNode.name === "p" && domNode.attribs.class !== "read-more") {
        return (
          <p
            itemProp="description"
            className="font-Lato text-lg text-white line-clamp-2 mt-2 text-justify"
          >
            {domToReact(domNode.children, options)}
          </p>
        )
      }

      if (domNode.attribs.class === "read-more") {
        return <></>
      }
    },
  }

  return (
    <BackgroundImage
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...image}
      preserveStackingContext
      id="HomeNews"
      className="py-10 mx-auto home-news"
    >
      <div className="w-11/12 text-center mx-auto py-5">
        <div className="text-center mx-auto mb-5">
          <h2>
            <Link
              to="/news"
              className="text-white font-BebasNeue text-5xl hover:underline"
            >
              News <span className="text-lg lowercase"> read more...</span>
            </Link>
          </h2>

          <h2 className="text-themeOrange-100 font-Montserrat text-2xl uppercase my-5">
            Digital Marketing &amp; Website Design News
          </h2>

          <p className="font-Lato text-lg text-center text-white pb-8">
            Stay Current on Search Marketing Resource events, industry news,
            recent projects, the latest design practices and online marketing
            advice - Opt In on our News Page and receive posts alerts to your
            email
          </p>
        </div>
        <ul className="grid grid-cols-1 lg:grid-cols-2 grid-rows-4 lg:grid-rows-2 gap-3">
          {homeNews.nodes.map((post, i) => {
            let gridPosition = ""
            if (i === 0) {
              gridPosition = "col-start-1 col-end-2 row-start-1 row-end-2"
            } else if (i === 1) {
              gridPosition =
                "col-start-1 col-end-2 row-start-2 row-end-3 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2"
            } else if ((i + 1) % 2 === 0) {
              gridPosition =
                "col-start-1 col-end-2" +
                " row-start-" +
                (i + 1) +
                " row-end-" +
                (i + 2) +
                " lg:col-start-2 lg:col-end-3" +
                " lg:row-start-" +
                (i - 1) +
                " lg:row-end-" +
                i
            } else {
              gridPosition =
                "col-start-1 col-end-2" +
                " row-start-" +
                (i + 1) +
                " row-end-" +
                (i + 2) +
                " lg:row-start-" +
                i +
                " lg:row-end-" +
                (i + 1)
            }

            return (
              <li key={post.id} className={`mb-8 ${gridPosition}`}>
                <ul
                  key={post.id + "-recent-ul"}
                  className={`flex flex-col lg:flex-row gap-3`}
                >
                  <li
                    key={post.id + "-image-li"}
                    className="mb-3 lg:mb-0 flex justify-center items-center lg:justify-start lg:items-start"
                  >
                    <Link
                      to={`/news${post.uri}`}
                      itemProp="url"
                      key={post.id + "-body-link"}
                      className="w-full"
                      aria-label={post.featuredImage.node.altText}
                    >
                      <GatsbyImage
                        key={post.id + "-image"}
                        image={
                          post.featuredImage.node.localFile.childImageSharp
                            .gatsbyImageData
                        }
                        alt={post.featuredImage.node.altText}
                      />
                    </Link>
                  </li>
                  <li
                    key={post.id + "-body-li"}
                    className="justify-center items-center lg:justify-start lg:items-start text-left ml-1 mb-2"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <Link
                      to={`/news${post.uri}`}
                      itemProp="url"
                      key={post.id + "-body-link"}
                      className="w-full font-Montserrat text-xl uppercase text-themeOrange-100"
                    >
                      {parse(post.title)}
                    </Link>
                    {parse(post.excerpt, options)}
                  </li>
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    </BackgroundImage>
  )
}

export default HomeNews
