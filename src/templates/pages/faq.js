import React from "react"
import { graphql } from "gatsby"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import FaqSection from "../../components/FaqSection"

const FaqPage = ({ data: { page } }) => {
  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <FaqSection />
      <div className="flex">
        <hr className="border-4 border-themeBlue-100 w-1/2" />
        <hr className="border-4 border-themeOrange w-1/2" />
      </div>
      <FreeAuditForm />
      <FreeQuoteForm />
    </Layout>
  )
}

export default FaqPage

export const pageQuery = graphql`
  query FaqPageById(
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
  }
`
