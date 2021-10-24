import React from "react"
import { graphql } from "gatsby"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteSection from "../../components/FreeQuoteSection"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import ContactForm from "../../components/ContactForm"

const ContactPage = ({ data: { page, bgImage, plxImage } }) => {
  const pluginImage = getImage(bgImage.childImageSharp.gatsbyImageData)
  const sectionImage = getImage(plxImage.childImageSharp.gatsbyImageData)

  const image = convertToBgImage(pluginImage)
  const image2 = convertToBgImage(sectionImage)

  return (
    <Layout className="overflow-x-hidden break-all">
      <Seo seoData={page?.seo} />
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...image}
        preserveStackingContext
        id="ContactPage"
        className="w-full text-gray-800 font-LatoBlack py-16 flex flex-col gap-y-8 justify-center items-start border-b-4 border-themeGray-50 shadow-themeShadow mb-8"
      >
        <div className="flex flex-col justify-center items-center gap-y-8 ml-6 lg:ml-32 my-16">
          <div className="text-themeBlue-600 text-2xl lg:text-7xl font-LatoBold text-center">
            Call Us Today!
          </div>
          <div className="text-themeOrange-400 text-sm lg:text-4xl font-LatoLight text-center">
            Let’s Talk Today About <br />
            Your Marketing <br />
            Program Or Website Project
          </div>
        </div>
      </BackgroundImage>
      <div>
        <h1 className="w-11/12 mx-auto font-BebasNeue font-bold text-5xl text-themeOrange-400 text-center py-5">
          CONTACT SEARCH MARKETING RESOURCE LLC
        </h1>
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 py-8">
          <div>
            <h2 className="font-Montserrat text-2xl text-themeBlue-600 pb-5">
              SALES – SUPPORT – GENERAL INQUIRIES
            </h2>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
              Contact the Search Marketing Resource team today regarding any
              offline or online marketing requirement and will respond within
              24-48 hours.
            </p>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
              We are not a support ticket queue but a hands-on crew who will
              reply by email or a direct call.
            </p>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
              We provide services nationwide and are available from 7am-7pm east
              coast time.
            </p>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
              We appreciate the opportunity.
            </p>
            <div className="flex">
              <a
                href="https://www.facebook.com/Search-Marketing-Resource-108196670966/?ref=py_c"
                target="_blank"
                rel="noreferrer"
                className="pr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3rem"
                  height="3rem"
                  viewBox="0 0 408.788 408.788"
                  className="text-facebookBlue text-5xl"
                  role="img"
                  aria-label="Facebook Icon"
                >
                  <path
                    d="M353.701 0H55.087C24.665 0 .002 24.662.002 55.085v298.616c0 30.423 24.662 55.085 55.085 55.085h147.275l.251-146.078h-37.951a8.954 8.954 0 01-8.954-8.92l-.182-47.087a8.955 8.955 0 018.955-8.989h37.882v-45.498c0-52.8 32.247-81.55 79.348-81.55h38.65a8.955 8.955 0 018.955 8.955v39.704a8.955 8.955 0 01-8.95 8.955l-23.719.011c-25.615 0-30.575 12.172-30.575 30.035v39.389h56.285c5.363 0 9.524 4.683 8.892 10.009l-5.581 47.087a8.955 8.955 0 01-8.892 7.901h-50.453l-.251 146.078h87.631c30.422 0 55.084-24.662 55.084-55.084V55.085C408.786 24.662 384.124 0 353.701 0z"
                    fill="#4267B2"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/3280029"
                target="_blank"
                rel="noreferrer"
                className="pr-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3rem"
                  height="3rem"
                  viewBox="0 0 382 382"
                  className="text-linkedInBlue text-5xl"
                  role="img"
                  aria-label="LinkedIn Icon"
                >
                  <path
                    d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 01-9.246 9.246H286.73a9.247 9.247 0 01-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 01-9.246 9.246h-44.426a9.247 9.247 0 01-9.246-9.246V149.593a9.247 9.247 0 019.246-9.246h44.426a9.247 9.247 0 019.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"
                    fill="#0072b1"
                  />
                </svg>
              </a>
              <a
                href="https://goo.gl/maps/wcmHRrgMzpD2"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="48"
                  className="text-5xl"
                  role="img"
                  aria-label="Google My Business Icon"
                >
                  <path
                    d="M3.77 18.154h49.022v29.75c0 1.71-1.333 3.096-2.98 3.096H6.748c-1.644 0-2.977-1.387-2.977-3.096z"
                    fill="#4285f4"
                  />
                  <path
                    d="M3.77 24.65L28.661 51h21.142c1.66 0 3.007-1.4 3.006-3.127l-.018-29.72H3.77z"
                    fill="#231f20"
                    opacity=".1"
                  />
                  <path
                    d="M40.65 46.308c-3.852 0-6.966-3.236-6.966-7.237 0-4.001 3.114-7.237 6.966-7.237a6.54 6.54 0 014.666 1.892l-1.89 1.891A3.67 3.31 0 0040.65 34.5c-2.378 0-4.319 2.048-4.319 4.57 0 2.524 1.94 4.571 4.319 4.571 2.755 0 3.79-2.058 3.95-3.123h-3.95v-2.48h6.577c.059.361.109.723.109 1.198 0 4.136-2.667 7.072-6.686 7.072"
                    fill="#eee"
                  />
                  <path
                    d="M3.402 2.498l-3.4 15.656C0 22.209 3.164 25.5 7.07 25.5s7.07-3.29 7.07-7.346L16.253 0H6.41a3.084 3.203 0 00-3.007 2.498"
                    fill="#7baaf7"
                  />
                  <path
                    d="M16.254 0L14.14 18.154c0 4.056 3.166 7.346 7.07 7.346 3.905 0 7.07-3.29 7.07-7.346V0zm33.898 0h-9.844l2.113 18.154c0 4.056 3.164 7.346 7.07 7.346 3.905 0 7.07-3.29 7.07-7.346L53.16 2.499A3.084 3.203 0 0050.152 0"
                    fill="#3f51b5"
                  />
                  <path
                    d="M40.308 0H28.28v18.154c-.002 4.055 3.163 7.346 7.068 7.346 3.906 0 7.07-3.29 7.07-7.346z"
                    fill="#7baaf7"
                  />
                  <path
                    d="M14.14 18.154c0 4.055-3.165 7.346-7.07 7.346C3.166 25.5 0 22.21 0 18.154zm14.14 0H14.14h14.14c0 4.055-3.165 7.346-7.07 7.346-3.904 0-7.07-3.29-7.07-7.346m28.28 0c0 4.056 3.165 7.346 7.07 7.346 3.906 0 7.07-3.29 7.07-7.346zm-14.14 0h14.14-14.14c0 4.055 3.164 7.346 7.07 7.346 3.905 0 7.07-3.29 7.07-7.346"
                    opacity=".1"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full mt-5 lg:mt-0 mx-auto font-Montserrat text-themeGray-300">
            <h2 className="font-Montserrat text-2xl text-themeBlue-600 pb-5">
              SEARCH MARKETING RESOURCE, LLC
            </h2>
            <div className="pb-3">
              <div className="text-sm lg:text-lg text-themeGray-300">
                888-842-9033
              </div>
              <div className="text-lg">
                1123 Andover Court
                <br />
                Glendale Heights, IL 60139
              </div>
            </div>
            <div className="w-full text-themeBlue-600 text-lg pb-3">
              <div className="pb-3">
                sales@searchmarketingresource.com <br />
                <span className="text-themeGray-300">888-842-9033 x 11</span>
              </div>

              <div className="pb-3">
                support@searchmarketingresource.com <br />
                <span className="text-themeGray-300">888-842-9033 x 12</span>
              </div>

              <div className="pb-3">
                accounting@searchmarketingresource.com <br />
                <span className="text-themeGray-300">888-842-9033 x 14</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 contact-wrapper mx-auto border border-gray-700 rounded-lg">
          <ContactForm />
        </div>
      </div>
      <FreeAuditForm />
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...image2}
        preserveStackingContext
        id="parallax-section"
        className="w-full bg-fixed bg-blend-darken text-white text-center font-LatoBlack flex flex-col gap-y-8 justify-center items-start"
      >
        <div className="mx-auto flex flex-col justify-center items-center gap-y-8 my-8">
          <div className="font-BebasNeue font-bold text-5xl text-white py-5">
            ABOUT SEARCH MARKETING RESOURCE, LLC
          </div>
          <div className="text-sm lg:text-2xl font-Lato text-white italic">
            TEAM EXPERIENCE - PROJECT LEADERSHIP - INDUSTRY RECOGNIZED
          </div>
          <p className="w-9/12 mx-auto text-white text-xl pb-3">
            Search Marketing Resource is a national provider of online marketing
            solutions driving increased traffic through SEO programs and website
            graphic design for business-to-business, industrial, consumer and
            ecommerce focused vertical markets.
          </p>
          <p className="w-9/12 mx-auto text-white text-xl pb-3">
            Our website development team leaders, Search Marketing managers,
            senior programmers and graphic artists are well tenured having
            provided services to 1,000’s of companies nationwide.
          </p>
        </div>
      </BackgroundImage>

      <FreeQuoteSection />
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageById(
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
      name: { regex: "/-banner/" }
      relativeDirectory: { eq: "about" }
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
    plxImage: file(
      name: { regex: "/-parallax/" }
      relativeDirectory: { eq: "about" }
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
  }
`
