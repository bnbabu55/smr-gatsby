import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ContactSection from "../../components/ContactSection"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteSection from "../../components/FreeQuoteSection"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const ECommercePage = ({ data: { page, checkMark, ecommerce, icons } }) => {
  const checkMarkImage = checkMark.childImageSharp.gatsbyImageData

  const ecommerceImage = ecommerce.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <div className="w-full mx-auto text-center py-10">
        <h1 className="w-11/12 mx-auto text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center pt-10">
          Ecommerce Website Design and Development
        </h1>
        <div className="w-11/12 mx-auto py-10 text-themeGray-200 text-left text-lg">
          <p className="pb-3">
            Ecommerce website development has unique challenges beyond typical
            graphic design and Content Management Systems (CMS). Considerations
            include updating product inventory, bulk pricing, shipping
            calculations, payment processing, security and, if required,
            interfacing the online orders to an accounting software application.
          </p>
          <p className="">
            This is where experience is critical to providing guidance through
            all aspects of the End-Users experience and your successful
            management of order fulfillment. Our team has designed, programmed
            and launched industry-leading storefront websites for retail,
            industrial and B2B (Business to Business) service oriented markets.
          </p>
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-5 text-left text-xl">
          <div className="wrapper py-5">
            <GatsbyImage
              alt="Website Storefront Design"
              image={icons.nodes[0].childImageSharp.gatsbyImageData}
              className="float-left mr-3"
            />
            <h3 className="pl-3 text-2xl pb-3">
              Retail &amp; Consumer Markets
            </h3>
            <p className="pb-3">
              Our consumer focused storefront designs provide an intuitive
              product navigation process, complete with a 3-tier click-to-order
              process. This approach presents the products quickly to the site
              visitor and offers a simple, secure checkout method. The ecommerce
              platform(s) are open source, so there are no licensing fees and
              are scalable to manage a range of products numbering from a
              several dozen to thousands of items.
            </p>
          </div>
          <div className="wrapper py-5">
            <GatsbyImage
              alt="E-Business Solutions"
              image={icons.nodes[1].childImageSharp.gatsbyImageData}
              className="float-left mr-3"
            />
            <h3 className="pl-3 text-2xl pb-3">
              Service &amp; Business-To-Business
            </h3>
            <p className="pb-3">
              Companies serving the B2B marketplace have adopted e-Business
              solutions to simplify the reordering of supplies and services to
              their customer base. This promotes repeat purchases. The ecommerce
              process presents the most recent products and/or services ordered,
              creates an online invoice and can allow for varied forms of
              payment including check, pay on delivery and Net 30 billing.
            </p>
          </div>
          <div className="wrapper py-5">
            <GatsbyImage
              alt="Industrial Online Selling"
              image={icons.nodes[2].childImageSharp.gatsbyImageData}
              className="float-left mr-3"
            />
            <h3 className="pl-3 text-2xl pb-3">
              Industrial Shipping Solutions
            </h3>
            <p className="pb-3">
              Businesses providing heavy industrial products and machinery are
              looking to expand their marketing footprint and are seeking a
              national presence. Offering these types of goods for online
              purchase requires unique product presentation and pricing.
              Shipping is also of consideration with ‘real-time’ quotes created
              from transport vendors as the order is being placed.
            </p>
          </div>
          <div className="wrapper py-5">
            <GatsbyImage
              alt="Wholesale E-Business Services"
              image={icons.nodes[3].childImageSharp.gatsbyImageData}
              className="float-left mr-3"
            />
            <h3 className="pl-3 text-2xl pb-3">Wholesale Pricing Options</h3>
            <p className="pb-3">
              Our team has provided ecommerce solutions to wholesale and
              distribution companies in most major markets. Programming
              typically allows for tiered pricing based on the End-Users login
              credentials and the amount of product ordered, all tracked in the
              database schema. Shipping calculations include LTL Freight costs
              as well as standard carriers.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="w-11/12 mx-auto text-center flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full lg:w-3/5 p-5">
              <h2 className="text-2xl tracking-wide py-5 text-left text-themeOrange-400">
                ECOMMERCE – CREATE NEW BUSINESS OPPORTUNITIES
              </h2>
              <p className="text-left text-lg">
                Whether you are adding ecommerce functionality to a current site
                or updating your storefront to a new platform, the Search
                Marketing Resource team has the experience to offer best
                practices for your target audience and lead the project to a
                successful launch.
              </p>
              <ul className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-around py-5 text-lg">
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Open Source Platforms</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Storefront Designs</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Payment Gateways</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">CRM Integration</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Email Notifications</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Tiered Pricing</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Search Optimized</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Product Management</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Database Engineering</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Secure Transactions</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-2/5">
              <GatsbyImage
                image={ecommerceImage}
                alt="Search Marketing Program Reports"
              />
            </div>
          </div>
        </div>
      </div>
      <FreeAuditForm />
      <FreeQuoteSection />
      <ContactSection />
    </Layout>
  )
}

export default ECommercePage

export const pageQuery = graphql`
  query ECommercePageById(
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
      relativeDirectory: { eq: "program-results" }
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
    ecommerce: file(
      name: { regex: "/ecommerce-open-source-solutions/" }
      relativeDirectory: { eq: "ecommerce" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 500
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
    icons: allFile(
      filter: {
        name: { regex: "/-icon/" }
        relativeDirectory: { eq: "ecommerce" }
      }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 75
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`
