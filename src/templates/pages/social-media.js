import React from "react"
import { graphql } from "gatsby"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import SocialMedia from "../../components/SocialMedia"

const SocialMediaPage = ({ data: { page } }) => {
  return (
    <Layout>
      <Seo title={page.title} />
      <section className="w-11/12 mx-auto py-10">
        <div className="top_padding_page top_padding page_content_website faq-page top-space">
          <div className="wrapper">
            <div className="top_content">
              <h1 className="text-themeOrange text-5xl font-BebasNeue text-center">
                Social Media Management
              </h1>
            </div>
            <div className="py-5 text-themeGray-200 text-lg font-Lato">
              <p>
                Having an active Social Media campaign is an important element
                to increasing and maintaining your online visibility. Social
                Media offers a platform from which to engage the End-Users,
                share company events, industry news and build relationships with
                current and future customers. Today, more End-Users search
                Facebook for recommendations on products and services than
                Google, Yahoo or Bing combined. As such, the Search Engines have
                moved to include 'like' posts from Facebook in your 'organic'
                search results.
              </p>
              <p className="pt-3">
                However, many businesses lack the internal resources to manage
                their Social Media accounts. They rely on content management
                firms like Search Marketing Resource to write, edit and track
                their Google+, Twitter, Facebook and LinkedIn Social Media
                accounts.
              </p>
              <p className="pt-3">
                Our Social Media program management services provide monthly
                article postings to all your Social Media accounts. The content
                is derived from various industry sources, written to be
                proprietary to your company’s products and services, and include
                backlinking URL’s to your website. Each post is constructed to
                carry many of the keywords you are targeting for top search
                rankings as well.
              </p>
            </div>
          </div>
        </div>
        <SocialMedia />
      </section>
      <FreeQuoteForm />
    </Layout>
  )
}

export default SocialMediaPage

export const pageQuery = graphql`
  query SocMedPageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    page: wpPage(id: { eq: $id }) {
      id
      content
      title
      slug
    }
  }
`
