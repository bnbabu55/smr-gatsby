import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ContactSection from "../../components/ContactSection"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteSection from "../../components/FreeQuoteSection"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const WebDevPage = ({ data: { page, checkMark, graphics, devSlides } }) => {
  const analyticsImage = graphics.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <div className="w-full py-10 text-lg">
        <div className="w-11/12 mx-auto">
          <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center py-12">
            Website Development Process
          </h1>
          <p className="pb-3">
            Every design is unique and proprietary to your company, your target
            audience and your message. The look and feel of your website and the
            overall functionality can vary depending on your vertical industry
            and business model.{" "}
          </p>
          <p className="pb-3">
            Whether you have a brick and mortar store, a business-to-business
            service offering, wholesale industrial products or are 100% consumer
            focused, our team managers will incorporate your brand and style
            into the project.{" "}
          </p>
        </div>
        <div className="w-full bg-themeBlue-600 text-white py-20 my-5">
          <div className="w-11/12 mx-auto flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
            <div className="w-full lg:w-3/5 mx-auto">
              <h2 className="text-2xl text-center pb-3 text-themeOrange-100">
                PROJECT DESIGN & DEVELOPMENT PHASES
              </h2>
              <p className="text-lg text-left pb-3">
                The entire{" "}
                <Link
                  to="/web-design-services/"
                  className="text-white underline"
                >
                  website development and design process
                </Link>{" "}
                is scheduled into separate milestones and deliverables. Team
                leaders will manage and guide each phase as it is completed and
                work with you to ensure your satisfaction with the project.
              </p>
              <ul className="grid grid-cols-1 lg:grid-cols-2">
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">Target Audience</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">Design Preferences</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">Cohesive Brand</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">Mockups Approval</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">Content Review</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">HTML Programming</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">Required Functionality</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">Demo Site Review</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">Webpage Navigation</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">Website Goes Live</span>
                </li>
              </ul>
            </div>
            <GatsbyImage
              alt="Website Design Process"
              image={analyticsImage}
              className="w-full lg:w-2/5 mx-auto"
            />
          </div>
        </div>
        <div className="w-11/12 mx-auto py-12">
          {devSlides?.nodes.map((devSlide, index) => {
            return (
              <div key={devSlide?.id}>
                <div
                  key={devSlide?.id}
                  className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 items-center justify-center"
                >
                  <div className="w-full lg:w-3/5 mx-auto">
                    <h3 className="text-2xl text-left pb-3 text-themeOrange-400">
                      {devSlide?.frontmatter?.title}
                    </h3>
                    <MDXRenderer className="text-lg text-justify">
                      {devSlide.body}
                    </MDXRenderer>
                  </div>
                  <GatsbyImage
                    alt={devSlide?.frontmatter?.altTxt || ""}
                    image={
                      devSlide?.frontmatter?.featuredImage?.childImageSharp
                        .gatsbyImageData
                    }
                    className="w-full lg:w-2/5 mx-auto"
                  />
                </div>
                {devSlides?.nodes.length - 1 !== index && (
                  <hr className="my-10 w-1/3 mx-auto border-gray-300" />
                )}
              </div>
            )
          })}
        </div>
      </div>
      <FreeAuditForm />
      <FreeQuoteSection />
      <ContactSection />
    </Layout>
  )
}

export default WebDevPage

export const pageQuery = graphql`
  query WebDevPageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    page: wpPage(id: { eq: $id }) {
      id
      content
      title
      slug
      seo {
        fullHead
        schema {
          raw
        }
      }
    }
    checkMark: file(
      name: { regex: "/check-mark/" }
      relativeDirectory: { eq: "webdev" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 20
          height: 20
          layout: FIXED
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
    graphics: file(
      name: { regex: "/00-graphic-design-process/" }
      relativeDirectory: { eq: "webdev" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 470
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
    devSlides: allMdx(
      filter: { fileAbsolutePath: { regex: "/webdev/" } }
      sort: { fields: frontmatter___featuredImage___name, order: ASC }
    ) {
      nodes {
        id
        body
        frontmatter {
          title
          altTxt
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                width: 390
                height: 220
                layout: FIXED
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
      }
    }
  }
`
