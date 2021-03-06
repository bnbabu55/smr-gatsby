import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import ContactSection from "../components/ContactSection"

const PageTemplate = ({ data: { page } }) => {
  return (
    <Layout>
      <Seo seoData={page?.seo} />
      {page.title}
      <ContactSection />
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageById(
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
  }
`
