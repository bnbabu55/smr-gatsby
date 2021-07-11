import React from "react"
import { graphql, Link } from "gatsby"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ContactForm from "../../components/ContactForm"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import SwiperCore, { Autoplay, Pagination } from "swiper"

SwiperCore.use([Autoplay, Pagination])

const LocationsPage = ({ data: { page, bgImage, seoImages, checkMark } }) => {
  const pluginImage = getImage(bgImage.childImageSharp.gatsbyImageData)

  const image = convertToBgImage(pluginImage)

  const onChangeHandler = e => {
    const chosenPlan = e.target.value

    if (chosenPlan !== "webdesign") {
      const hideBox =
        e.target.parentElement.parentElement.previousSibling.firstChild
      hideBox.classList.remove("invisible")
      const resetElems = document.querySelectorAll(
        `input[name="services14N"]:not(:checked)`
      )
      for (let i = 0; i < resetElems.length; i++) {
        resetElems[
          i
        ].parentElement.parentElement.previousSibling.firstChild.classList.add(
          "invisible"
        )
      }
    }
  }

  return (
    <Layout className="overflow-x-hidden">
      <Seo seoData={page?.seo} />
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...image}
        preserveStackingContext
        id="LocationsPage"
        className="w-full text-gray-800 font-LatoBlack py-16 flex flex-col gap-y-8 justify-center items-start border-b-4 border-themeGray-50 shadow-themeShadow mb-8"
      >
        <div className="flex flex-col justify-center items-center gap-y-8 ml-6 lg:ml-32 my-16">
          <div className="text-themeBlue-600 text-2xl lg:text-7xl font-LatoBold text-center">
            Get A FREE SEO <br />
            Proposal
          </div>
          <div className="text-themeOrange-400 text-sm lg:text-4xl font-LatoLight text-center">
            Chicago SEO Company{" "}
          </div>
          <Link
            to="/search-marketing-website-design-proposal-form"
            className="bg-themeOrange-400 text-white uppercase text-xl rounded px-4 py-2"
          >
            Request Your Free Proposal
          </Link>
        </div>
      </BackgroundImage>
      <section className="w-11/12 mx-auto flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 py-8">
        <div className="flex-1">
          <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
            Search Marketing Resource is a Chicago-based SEO agency that
            improves and expands the digital marketing reach for our national
            and local clients. Our clients range from small, mid, large and
            Fortune 500 companies in both the ecommerce and service-based
            markets.
          </p>
          <p className="pb-8 text-themeGray-200 text-lg font-Lato mx-auto">
            Our team of committed SEO experts have years of experience working
            with companies in building their leads and sales. We are a
            full-service digital agency, offering services in online marketing
            including SEO, web design and development, pay-per-click, social
            media and graphic design.
          </p>
          <Link
            to="/search-marketing-website-design-proposal-form"
            className="bg-themeOrange-400 text-white uppercase text-xl rounded px-4 py-2"
          >
            Get Your Free Proposal
          </Link>
        </div>
        <GatsbyImage
          image={seoImages?.nodes[0]?.childImageSharp?.gatsbyImageData}
          alt="Chicago Bean in City SEO Agency"
          className="mx-auto lg:w-[400px] border-2 border-themeOrange-200"
        />
      </section>
      <section className="bg-themeOrange-400">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-y-5 lg:gap-x-8 py-12">
          <GatsbyImage
            image={seoImages?.nodes[1]?.childImageSharp?.gatsbyImageData}
            alt="SEO Team at SMR Agency in Chicago"
            className="mx-auto lg:w-[400px] border-2 border-themeBlue-600"
          />
          <div className="flex-1">
            <h2 className="font-Lato text-3xl text-white underline pb-5">
              Our Team Works to Provide Your Business With:
            </h2>
            <ul className="font-Lato text-lg text-white">
              <li className="flex gap-x-3 items-center pb-3">
                <GatsbyImage
                  image={checkMark?.childImageSharp?.gatsbyImageData}
                  alt="Blue Check Mark"
                />
                Increased Search Engine Rankings for Keywords
              </li>
              <li className="flex gap-x-3 items-center pb-3">
                <GatsbyImage
                  image={checkMark?.childImageSharp?.gatsbyImageData}
                  alt="Blue Check Mark"
                />
                Targeted High-Quality Website Traffic
              </li>
              <li className="flex gap-x-3 items-center pb-3">
                <GatsbyImage
                  image={checkMark?.childImageSharp?.gatsbyImageData}
                  alt="Blue Check Mark"
                />
                More Visibility Locally or Nationally
              </li>
              <li className="flex gap-x-3 items-center pb-3">
                <GatsbyImage
                  image={checkMark?.childImageSharp?.gatsbyImageData}
                  alt="Blue Check Mark"
                />
                Improved Lead Generation and Revenue
              </li>
              <li className="flex gap-x-3 items-center pb-3">
                <GatsbyImage
                  image={checkMark?.childImageSharp?.gatsbyImageData}
                  alt="Blue Check Mark"
                />
                Weekly and Monthly Reports Showing Results
              </li>
              <li className="flex gap-x-3 items-center pb-3">
                <GatsbyImage
                  image={checkMark?.childImageSharp?.gatsbyImageData}
                  alt="Blue Check Mark"
                />
                Dedicated SEO Manager
              </li>
              <li className="flex gap-x-3 items-center pb-8">
                <GatsbyImage
                  image={checkMark?.childImageSharp?.gatsbyImageData}
                  alt="Blue Check Mark"
                />
                Transparency with a User-Friendly Customer Analytics Platform
              </li>
            </ul>
            <Link
              to="/search-marketing-website-design-proposal-form"
              className="bg-themeBlue-600 text-white uppercase text-xl rounded px-4 py-2"
            >
              Meet The Team
            </Link>
          </div>
        </div>
      </section>
      <FreeQuoteForm />
      <ContactForm />
    </Layout>
  )
}

export default LocationsPage

export const pageQuery = graphql`
  query LocationsPageById(
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
      relativeDirectory: { eq: "agency-locations" }
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
    seoImages: allFile(
      filter: {
        relativeDirectory: { eq: "agency-locations" }
        name: { regex: "/-section-/" }
      }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 400
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    checkMark: file(
      name: { regex: "/01-check-mark-blue/" }
      relativeDirectory: { eq: "agency-locations" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 20
          height: 20
          layout: FIXED
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
