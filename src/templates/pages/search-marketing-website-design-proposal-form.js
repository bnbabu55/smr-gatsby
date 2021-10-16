import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ComparisionTable from "../../components/ComparisionTable"
import SEOProgramSelection from "../../components/SEOProgramSelection"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import WebDesignForm from "../../components/WebDesignForm"

const WebDesignProposalPage = ({ data: { page, seoImages } }) => {
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
            Search Marketing Programs <br /> & <br /> Web Design Services
          </h1>
          <hr className="w-1/2 mx-auto my-5 border-2 border-gray-300" />
          <p className="px-4 py-5 text-themeGray-200 text-lg font-Lato text-center mx-auto">
            For the past 15 years, Search Marketing Resource has been providing
            online marketing services ranging from 100/% turn-key solutions to
            ala carte programs tailored to a client's specific needs and budget.
            As such, we have developed four uniquely effective Digital Marketing
            grouping of services that will fit your business needs well.
          </p>
          <p className="py-10 text-center text-themeBlue-600 text-lg italic font-semibold">
            - Select an individual marketing program and add website design
            services as well -
          </p>
        </div>
        <SEOProgramSelection
          seoImages={seoImages}
          useShareableState={useShareableState}
        />
        <ComparisionTable />
        <div className="py-10 font-Lato text-center mx-auto">
          <div className="">
            <h3 className="text-3xl text-themeBlue-600 uppercase py-5">
              website design service
            </h3>
            <span className="text-xl italic text-themeOrange-400">
              - Include a Website Redesign Quote -
            </span>
            <p className="text-lg py-5 w-4/5 mx-auto">
              If you are considering a redesign of your current site, our
              website design and development services are industry recognized in
              delivering 'best in class' graphic designs and end-user
              experience. We have the experience and tenure to guide your team
              through the entire process of launching a new, dynamic online
              presentation of your products and services.
            </p>
          </div>
          <WebDesignForm useShareableState={useShareableState} />
        </div>

        <FreeQuoteForm useShareableState={useShareableState} OnlySEO={false} />
      </div>
    </Layout>
  )
}

export default WebDesignProposalPage

export const pageQuery = graphql`
  query WebDesignProposalPageById(
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
