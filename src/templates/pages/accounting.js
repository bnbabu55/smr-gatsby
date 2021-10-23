import React from "react"
import { graphql } from "gatsby"
import ContactSection from "../../components/ContactSection"
import FreeQuoteSection from "../../components/FreeQuoteSection"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import PaymentForm from "../../components/PaymentForm"

const AccountingPage = ({ data: { page } }) => {
  return (
    <Layout className="overflow-x-hidden break-all">
      <Seo seoData={page?.seo} />
      <div>
        <h1 className="w-11/12 mx-auto font-BebasNeue font-bold text-5xl text-themeOrange-400 text-center py-5">
          SEARCH MARKETING RESOURCE ACCOUNTING
        </h1>
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 py-8">
          <div>
            <h2 className="font-Montserrat text-2xl text-themeBlue-600 pb-5">
              SERVICES PAYMENT
            </h2>
          </div>
        </div>
        <div className="w-11/12 contact-wrapper mx-auto border border-gray-700 rounded-lg">
          <div className="p-3">
            <p className="pb-3 text-themeGray-200 text-sm lg:text-lg font-Lato text-left">
              We offer online payment for your convenience. Please include the
              invoice number(s) for which the payment is to be applied. You may
              add more than one invoice number, separate by commas.
            </p>
            <p className="pb-3 text-themeGray-200 text-sm lg:text-lg font-Lato text-left">
              For continued monthly billings, you may opt in and click the
              'Recurring' icon.
            </p>
            <p className="pb-3 text-themeGray-200 text-sm lg:text-lg font-Lato text-left">
              If have any questions, please contact{" "}
              <a
                href="mailto:accounting@searchmarketingresource.com"
                className="text-sm lg:text-lg"
              >
                <u>accounting@searchmarketingresource.com</u>
              </a>
              .
            </p>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato text-left">
              Thank you.
            </p>
            <h3 className="pb-3 text-themeGray-200 text-sm lg:text-lg font-LatoBold text-left">
              Search Marketing Resource LLC
            </h3>
          </div>
          <PaymentForm />
        </div>
      </div>
      <FreeQuoteSection />
      <ContactSection />
    </Layout>
  )
}

export default AccountingPage

export const pageQuery = graphql`
  query AccountingPageById(
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
    bgImage: file(
      name: { regex: "/-banner/" }
      relativeDirectory: { eq: "about" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 1400
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
    plxImage: file(
      name: { regex: "/-parallax/" }
      relativeDirectory: { eq: "about" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 1400
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
