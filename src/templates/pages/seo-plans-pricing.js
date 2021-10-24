import React, { useState } from "react"
import { graphql } from "gatsby"
import FreeQuoteSection from "../../components/FreeQuoteSection"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ContactSection from "../../components/ContactSection"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import SEOProgramSelection from "../../components/SEOProgramSelection"
import ComparisionTable from "../../components/ComparisionTable"
import FreeQuoteForm from "../../components/FreeQuoteForm"

const SEOPlansPage = ({ data: { page, bgImage, googleImage, seoImages } }) => {
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

  const pluginImage = getImage(bgImage.childImageSharp.gatsbyImageData)

  const image = convertToBgImage(pluginImage)

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...image}
        preserveStackingContext
        id="SEOPlansPage"
        className="w-full text-gray-800 font-LatoBlack py-16 flex flex-col gap-y-8 justify-center items-start border-b-4 border-themeGray-50 shadow-themeShadow mb-8"
      >
        <div className="text-themeBlue-600 text-2xl lg:text-7xl pl-12 lg:pl-28 font-LatoBold text-center">
          We Place Your <br />
          Business In Front Of
        </div>
        <GatsbyImage
          image={googleImage.childImageSharp.gatsbyImageData}
          alt="Website design for small business client banner"
          className="lg:ml-60 ml-6"
          layout="intrinsic"
        />
        <div className="text-themeOrange-400 text-sm lg:text-4xl pl-12 lg:pl-28 font-LatoLight text-center">
          Digital Marketing Programs &amp; <br />
          Social Media Management Solutions
        </div>
      </BackgroundImage>
      <div className="w-11/12 mx-auto">
        <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center">
          DIGITAL MARKETING SERVICE PLANS
        </h1>

        <div className="py-5 text-center">
          <p className="text-themeGray-200 text-lg font-Lato pb-3">
            Every business has its own individual approach to marketing - the
            goals, budget and expectations. And for online marketing, your SEO
            opportunities may differ from your competition for your website
            updates, keyword phrase selection and Social Media management.
          </p>
          <p className="text-themeGray-200 text-lg font-Lato">
            Many companies are looking to fully optimize their website with top
            search marketing practices while other businesses require an ongoing
            SEO program to better align their website with Google, Yahoo and
            Bing. This includes monthly Blog articles written, Social Media
            posts, Business Directory placement and weekly monitoring of their
            Digital Marketing campaign results.
          </p>
          <p className="text-lg text-themeBlue-600 font-Lato font-bold italic py-10">
            &lt;&lt; Select A SEO Program That Best Meets Your Online Marketing
            Objectives &amp; Strategies &gt;&gt;
          </p>
          <SEOProgramSelection
            seoImages={seoImages}
            useShareableState={useShareableState}
          />
          <ComparisionTable />
          <p className="text-themeGray-200 text-lg font-Lato py-10">
            The above programs are very effective in generating top position
            keyword rankings and driving organic search traffic to your website.
            For the past 15 years, Search Marketing Resource has been providing
            online marketing services ranging from 100% turn-key solutions to
            ala carte programs tailored to a client’s specific needs and budget.
          </p>
          <FreeQuoteForm useShareableState={useShareableState} OnlySEO={true} />
        </div>
      </div>

      <FreeQuoteSection />
      <ContactSection />
    </Layout>
  )
}

export default SEOPlansPage

export const pageQuery = graphql`
  query SEOPlansPageById(
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
      name: { regex: "/digital-marketing-packages/" }
      relativeDirectory: { eq: "seo-plans" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
    googleImage: file(
      name: { regex: "/google-image/" }
      relativeDirectory: { eq: "seo-plans" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 260
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
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
