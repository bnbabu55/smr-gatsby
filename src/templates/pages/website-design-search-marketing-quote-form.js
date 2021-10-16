import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ComparisionTable from "../../components/ComparisionTable"
import SEOProgramSelection from "../../components/SEOProgramSelection"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import WebDesignForm from "../../components/WebDesignForm"

const WebDesignQuotePage = ({ data: { page, seoImages } }) => {
  const useShareableState = () => {
    const [selectedProgram, setSelectedProgram] = useState("silver")
    const [formProgram, setFormProgram] = useState("silver")
    const [webDesign, setWebDesign] = useState("")
    const [formWeb, setFormWeb] = useState("")
    return {
      selectedProgram,
      setSelectedProgram,
      formProgram,
      setFormProgram,
      webDesign,
      setWebDesign,
      formWeb,
      setFormWeb,
    }
  }

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <div className="w-11/12 mx-auto pt-20 pb-10">
        <div className="wrapper">
          <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center">
            Web Design Services <br /> & <br /> Search Marketing Programs
          </h1>
          <hr className="w-1/2 mx-auto my-5 border-2 border-gray-300" />
          <p className="w-4/5 px-4 py-5 text-themeGray-200 text-lg font-Lato text-center mx-auto">
            Our website design and development services are industry recognized
            in delivering 'best in class' graphic designs and end-user
            experience. We have the experience and tenure to guide your team
            through the entire process of launching a new, dynamic online
            presentation of your products and services.
          </p>
          <WebDesignForm useShareableState={useShareableState} />
          <h2 className="text-themeOrange-400 pt-10 text-4xl font-BebasNeue font-bold tracking-wide text-center underline">
            Want To Increase Your Search Rankings
          </h2>

          <p className="py-5 text-center text-themeBlue-600 text-lg italic font-semibold">
            - Include Digital Marketing Or Social Media Services -
          </p>
          <p className="w-4/5 mx-auto px-4 py-5 text-themeGray-200 text-lg font-Lato text-center">
            For the past 15 years, Search Marketing Resource has been providing
            online marketing services ranging from 100% turn-key solutions to
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
        <FreeQuoteForm useShareableState={useShareableState} OnlySEO={false} />
      </div>
    </Layout>
  )
}

export default WebDesignQuotePage

export const pageQuery = graphql`
  query WebDesignQuotePageById(
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
