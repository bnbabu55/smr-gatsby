import React from "react"
import { graphql } from "gatsby"
import ContactSection from "../../components/ContactSection"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteSection from "../../components/FreeQuoteSection"
import HeroBanner from "../../components/HeroBanner"
import HomeNews from "../../components/HomeNews"
import HomePortfolio from "../../components/HomePortfolio"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import SMServices from "../../components/SMServices"
import SolutionSlider from "../../components/SolutionSlider"
import TeamSlider from "../../components/TeamSlider"
import Testimonials from "../../components/Testimonials"
import WebDesign from "../../components/WebDesign"

const HomePage = ({ data: { page } }) => (
  <Layout>
    <Seo seoData={page?.seo} />
    <HeroBanner />
    <SMServices />
    <WebDesign />
    <SolutionSlider />
    <HomePortfolio />
    <FreeAuditForm home={true} />
    <Testimonials />
    <FreeQuoteSection />
    <TeamSlider />
    <HomeNews />
    <ContactSection />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query HomePageById(
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
