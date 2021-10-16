import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ComparisionTable from "../../components/ComparisionTable"
import SEOProgramSelection from "../../components/SEOProgramSelection"
import FreeQuoteForm from "../../components/FreeQuoteForm"

const DigMarkPage = ({ data: { page, seoImages } }) => {
  const useShareableState = () => {
    const [selectedProgram, setSelectedProgram] = useState("silver")
    const [formProgram, setFormProgram] = useState("silver")
    return {
      selectedProgram,
      setSelectedProgram,
      formProgram,
      setFormProgram,
    }
  }

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <div className="w-11/12 mx-auto pt-20 pb-10">
        <div className="wrapper">
          <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center">
            SEO PROGRAMS
          </h1>
          <p className="py-5 text-center text-themeBlue-600 text-xl">
            Select the program you're interested in, to get a{" "}
            <span className="text-themeOrange-400 italic">free quote</span>
          </p>
          <p className="px-4 py-5 text-themeGray-200 text-lg font-Lato text-center mx-auto">
            For the past 15 years, Search Marketing Resource has been providing
            online marketing services ranging from 100/% turn-key solutions to
            ala carte programs tailored to a client's specific needs and budget.
            As such, we have developed four uniquely effective Digital Marketing
            grouping of services that will fit your business needs well.
          </p>
        </div>
        <SEOProgramSelection
          seoImages={seoImages}
          useShareableState={useShareableState}
        />
        <ComparisionTable />
        <FreeQuoteForm useShareableState={useShareableState} OnlySEO={true} />
      </div>
    </Layout>
  )
}

export default DigMarkPage

export const pageQuery = graphql`
  query DigMarkPageById(
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
    seoImages: allFile(
      filter: { relativeDirectory: { eq: "digital-marketing" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 66
            height: 66
            layout: FIXED
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`
