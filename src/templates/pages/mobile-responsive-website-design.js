import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ContactForm from "../../components/ContactForm"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { MDXRenderer } from "gatsby-plugin-mdx"

const MobilePage = ({ data: { page, mobile, checkMark } }) => {
  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <section className="w-full py-10 text-lg">
        <div className="w-11/12 mx-auto">
          <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center py-12">
            Mobile Responsive Website Design
          </h1>
          <p className="pb-3">
            Websites today are viewed on a wide variety of devices having a
            multitude of resolution settings and screen sizes. From a 60-inch
            HDTV to a 4-inch Smartphone, the webpages need to be 100% scalable
            regardless of where being viewed. The Search Marketing Resource team
            has been developing Responsive Theme websites years before this was
            mainstream and have significant experience in the unique design
            challenges associated with a Mobile Friendly site.{" "}
          </p>
        </div>
        <div className="w-full py-20 my-5">
          <div className="w-11/12 mx-auto flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 items-center">
            <div className="w-full lg:w-3/5 mx-auto">
              <h2 className="text-2xl text-left uppercase pb-3 text-themeOrange-400">
                Mobile Responsive Graphic and Website Design
              </h2>
              <p className="text-lg text-left">
                Just a few years ago, the majority of visits to
                business-to-business and industrial market websites came from
                desktop PC’s and laptops. Traffic from mobile devices, cell
                phones and tablets accounted for less than 15% of all site
                visits. For retail and ecommerce business websites, the mobile
                device counts were higher, but still less than one-third by
                comparison.
              </p>
              <ul className="py-5 text-base">
                <li className="flex items-center pb-2">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">
                    Mobile phones are used to complete 3 out of 5 Internet
                    searches.
                  </span>
                </li>
                <li className="flex items-center pb-2">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">
                    75% of Smartphone owners rely on their devices for
                    directions and location-related businesses.
                  </span>
                </li>
                <li className="flex items-center pb-2">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">
                    Mobile Marketer states 70% of searches on cell phones lead
                    to an action within an hour.
                  </span>
                </li>
                <li className="flex items-center pb-2">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">
                    61% of local searches on mobile phones lead to an instant
                    phone call.
                  </span>
                </li>
                <li className="flex items-center pb-2">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">
                    Mobile phone coupons are redeemed 10 times more often than
                    paper coupons.
                  </span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMark.childImageSharp.gatsbyImageData}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-3">
                    By the end of 2017, over 65% of all internet traffic will be
                    via mobile phones.
                  </span>
                </li>
              </ul>
              <p className="text-lg text-left pb-3">
                Now, regardless of your target audience, over half of the
                End-User visits are from mobile devices. This trend increases
                daily and requires a website to be graphically designed and
                developed differently than in the past.
              </p>
              <p className="text-lg text-left pb-3">
                The graphic designer and programmer work together to ensure the
                functionality of the page elements. The text and images, at
                different resolutions, ‘wrap’ at proper breakpoints as
                determined by the size of device's screen size. Our web
                development team is very experienced in the design requirements
                and testing of Responsive Theme websites.
              </p>
              <div className="w-full mx-auto py-5">
                <h2 className="text-2xl text-left uppercase pb-3 text-themeBlue-600">
                  GOOGLE REQUIRES SITES TO BE MOBILE FRIENDLY
                </h2>
                <p className="text-lg text-left pb-3">
                  Until recently, Google did not track whether a website was
                  easily viewable on mobile devices regardless of the resolution
                  settings or screen size. That has now changed as Google scans
                  all websites to determine if the pages render as a Responsive
                  Theme and indexes it as 'Mobile Friendly'.
                </p>
                <p className="text-lg text-left pb-3">
                  If your website is not considered mobile device ready, then
                  Google will demote your website in the search rankings behind
                  those companies whose sites have a Responsive design theme.
                </p>
                <h3 className="text-2xl text-left pb-3 text-themeBlue-600 underline">
                  Statement from Google
                </h3>
                <p className="text-lg text-left pb-3 text-red-600">
                  ‘We have taken a strong stance on mobile SEO, and there will
                  be demotions if a website is not mobile friendly or is
                  misconfigured when it comes to being mobile friendly. The
                  demotion will only impact mobile, smartphone friendly, search
                  results and only impact web pages that are not smartphone
                  friendly or misconfigured when it comes to being smartphone
                  friendly’
                </p>
                <p className="text-lg text-left pb-3">
                  Fortunately, we are able to convert your current website to a
                  Responsive presentation while maintaining the graphic design,
                  images, content and page navigation. All of our new design or
                  redesign projects are coded to be Mobile Friendly.
                </p>
              </div>
            </div>
            <GatsbyImage
              alt="Mobile Friendly Design"
              image={mobile.childImageSharp.gatsbyImageData}
              className="w-full lg:w-2/5 mx-auto"
            />
          </div>
        </div>
      </section>
      <FreeAuditForm />
      <FreeQuoteForm />
      <ContactForm />
    </Layout>
  )
}

export default MobilePage

export const pageQuery = graphql`
  query MobilePageById(
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
    mobile: file(
      name: { regex: "/mobile-website-design/" }
      relativeDirectory: { eq: "mobile" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 442
          height: 552
          layout: FIXED
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    checkMark: file(
      name: { regex: "/check-mark/" }
      relativeDirectory: { eq: "webdev" }
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
