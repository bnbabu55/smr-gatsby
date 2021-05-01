import React from "react"
import { graphql } from "gatsby"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
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
    <Seo title={page.title} />
    <HeroBanner />
    <SMServices />
    <WebDesign />
    <SolutionSlider />
    <HomePortfolio />
    <FreeAuditForm />
    <Testimonials />
    <FreeQuoteForm />
    <TeamSlider />
    <HomeNews />
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
    }
  }
`
