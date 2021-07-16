import React from "react"
import { graphql } from "gatsby"
import ContactForm from "../../components/ContactForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const AccountingPage = ({ data: { page } }) => {
  return (
    <Layout className="overflow-x-hidden break-all">
      <Seo seoData={page?.seo} />
      <section>
        <h1 className="w-11/12 mx-auto font-BebasNeue font-bold text-5xl text-themeOrange-400 text-center py-5">
          SEARCH MARKETING RESOURCE ACCOUNTING
        </h1>
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 py-8">
          <div>
            <h2 className="font-Montserrat text-2xl text-themeBlue-600 pb-5">
              SERVICES PAYMENT
            </h2>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
              We offer online payment for your convenience. Please include the
              invoice number(s) for which the payment is to be applied. You may
              add more than one invoice number, separate by commas.
            </p>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
              For continued monthly billings, you may opt in and click the
              'Recurring' icon.
            </p>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
              If have any questions, please contact
              accounting@searchmarketingresource.com.
            </p>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
              Thank you.
            </p>
          </div>
        </div>
        <hr className="w-11/12 mx-auto border-4 border-gray-300 my-8" />
        <div className="w-11/12 contact-wrapper mx-auto border border-gray-700 rounded-lg">
          <form className="text-gray-700 contact-form flex flex-col justify-center align-center m-10 font-Lato text-base">
            <div className="font-Montserrat text-lg font-bold pb-2">
              Step 1 of 2
            </div>
            <div className="grid gap-3 grid-cols-2">
              <input
                className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-3 lg:col-start-1 lg:col-end-2"
                type="number"
                placeholder="Amount"
                name="amount"
                id="amount"
              />
              <input
                className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-3 lg:col-start-1 lg:col-end-2"
                type="number"
                placeholder="Invoice #"
                name="invoice"
                id="invoice"
              />
              <textarea
                className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-span-2"
                type="textarea"
                placeholder="Comments"
                rows="6"
                name="message"
                id="message"
              />
              <button className="w-full text-white uppercase bg-themeOrange-400 rounded font-MontserratSemiBold px-8 py-2 tracking-wider text-base shadow-2xl mt-5 col-span-2">
                NEXT
              </button>
            </div>
          </form>
        </div>
      </section>
      <FreeQuoteForm />
      <ContactForm />
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
        schemaDetails
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
          formats: [AUTO, WEBP, AVIF]
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
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
