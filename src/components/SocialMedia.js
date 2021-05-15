import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

export const SocialMedia = () => {
  const { bgImages, socialItems } = useStaticQuery(
    graphql`
      query {
        bgImages: allFile(
          filter: {
            name: { regex: "/social-media-management-info/" }
            relativeDirectory: { eq: "social-media" }
          }
          sort: { fields: name, order: ASC }
        ) {
          nodes {
            name
            childImageSharp {
              gatsbyImageData(
                width: 1400
                placeholder: TRACED_SVG
                quality: 90
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        socialItems: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/social-media/" } }
          sort: { fields: fileAbsolutePath, order: ASC }
        ) {
          nodes {
            id
            html
            frontmatter {
              title
            }
          }
        }
      }
    `
  )

  return (
    <>
      <div>
        <figure className="overflow-hidden w-full">
          <GatsbyImage
            image={bgImages.nodes[0].childImageSharp.gatsbyImageData}
            alt="Social Media Info"
          />
        </figure>
      </div>
      <div className="about">
        {socialItems.nodes.map((socialItem, i) => {
          return (
            <div
              className={`mb-5 py-5 ${
                i % 2 === 0 ? "bg-gray-300" : "bg-white"
              }`}
              key={socialItem.id}
              id={socialItem.id}
            >
              <div className="">
                <div
                  className={`font-Lato text-left ${
                    i % 2 === 0 ? "text-themeBlue-100" : "text-themeOrange-400"
                  }`}
                >
                  <h2 className=" text-3xl font-bold">
                    {socialItem.frontmatter.title}
                  </h2>
                  <div className="text-lg py-5">{parse(socialItem.html)}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SocialMedia
