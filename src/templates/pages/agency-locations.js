import React from "react"
import { graphql, Link } from "gatsby"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ContactForm from "../../components/ContactForm"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import Testimonials from "../../components/Testimonials"

const LocationsPage = ({ data: { page, bgImage, seoImages, checkMark } }) => {
  const pluginImage = getImage(bgImage.childImageSharp.gatsbyImageData)

  const image = convertToBgImage(pluginImage)

  return (
    <Layout className="overflow-x-hidden break-all">
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
            className="bg-themeOrange-400 font-Montserrat text-white uppercase text-xs lg:text-base rounded px-6 py-3"
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
            className="bg-themeOrange-400 font-Montserrat text-white uppercase text-xs lg:text-base rounded px-6 py-3"
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
              to="/about/"
              className="bg-themeBlue-600 font-Montserrat text-white uppercase text-xs lg:text-base rounded px-6 py-3"
            >
              Meet The Team
            </Link>
          </div>
        </div>
      </section>
      <section className="w-11/12 mx-auto py-12">
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Many businesses no longer rely on traditional methods of
          advertisement, and they have come to realize that there is a strong
          online reach which, when used to its full effect, can grow their
          businesses exponentially. For this reason, we work hard to see to it
          that our clients have a strong online presence and reach, ensuring
          that their products and services reach as many people as possible.
        </p>
        <h2
          className="font-Lato text-3xl underline pb-5 text-center"
          style={{ textDecorationColor: "#ffa800" }}
        >
          Why Choose Search Marketing Resource as Your Chicago SEO Company?
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Search Marketing Resource has a passion to see that your business uses
          premium SEO knowledge and tools to generate leads for your local or
          national business.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Our Team Strives to Ensure:
        </p>
        <ul className="font-Lato text-lg">
          <li className="flex gap-x-3 items-center pb-3">
            <GatsbyImage
              image={checkMark?.childImageSharp?.gatsbyImageData}
              alt="Blue Check Mark"
            />
            Your business has a great local or national online presence
          </li>
          <li className="flex gap-x-3 items-center pb-3">
            <GatsbyImage
              image={checkMark?.childImageSharp?.gatsbyImageData}
              alt="Blue Check Mark"
            />
            The views to your website generate and grow your business
          </li>
          <li className="flex gap-x-3 items-center pb-3">
            <GatsbyImage
              image={checkMark?.childImageSharp?.gatsbyImageData}
              alt="Blue Check Mark"
            />
            The result of traffic to your business is measured
          </li>
        </ul>
        <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5 lg:gap-y-0 items-center">
          <div className="flex-1">
            <h2
              className="font-Lato text-3xl underline pb-5 text-center"
              style={{ textDecorationColor: "#ffa800" }}
            >
              When you choose Search Marketing Resource, you can expect:
            </h2>
            <ul className="font-Lato text-lg list-disc list-inside">
              <li className="pb-3">
                <strong>Dedicated SEO Manager –</strong> Our SEO managers
                partner with you to reach your goals in local and national SEO
                results. We develop strategic SEO, PPC, social media, and
                conversion optimized digital marketing plans for your campaign.
                We are available during business hours to talk with you about
                your campaign.
              </li>
              <li className="pb-3">
                <strong>Full Transparency –</strong> We onboard you with a
                user-friendly analytics dashboard. It pulls in data directly
                from Google Analytics, Google My Business, all your social media
                accounts, Google Ads, Google and Bing keyword ranking results,
                and more to have in one place for real-time results.
              </li>
              <li className="pb-3">
                <strong>Targeted Results-Driven Decisions –</strong> Our team
                has years of experience researching a variety of keywords for
                service and product-based industries in lead-generation and
                ecommerce. We provide high-quality targeted leads that can bring
                your business more conversions
              </li>
              <li className="pb-3">
                <strong>Weekly and Monthly Reporting –</strong> Our in-depth
                reports provide the data you need on a weekly and monthly basis
                to make quick, efficient decisions for your business operations.
              </li>
              <li className="pb-3">
                <strong>Reliable Service –</strong> Our team has experience in
                all aspects of digital marketing, web design and development,
                and more. We constantly review our clients’ websites and update
                them with a site analysis to quickly fix any issues that may
                affect your site’s keyword rankings, speed, crawlability, and
                more.
              </li>
            </ul>
          </div>
          <GatsbyImage
            image={seoImages?.nodes[2]?.childImageSharp?.gatsbyImageData}
            alt="SEO Team at SMR Agency in Chicago"
            className="mx-auto lg:w-[400px] lg:h-[240px] border-2 border-themeBlue-600"
          />
        </div>
      </section>
      <section className="bg-themeOrange-400 text-white text-center py-16">
        <div className="font-Lato text-xl lg:text-3xl pb-5">
          Ready to see how our Chicago-based SEO company helps grow your leads
          and sales?
        </div>
        <p className="font-Lato text-xl pb-5">Get a FREE proposal!</p>
        <Link
          to="/search-marketing-website-design-proposal-form"
          className="bg-themeBlue-600 font-Montserrat text-white uppercase text-xs lg:text-base rounded px-6 py-3"
        >
          Request Your Free Proposal Now!
        </Link>
      </section>
      <div className="w-11/12 mx-auto py-10">
        <h2
          className="font-Lato text-3xl underline pb-5 text-center"
          style={{ textDecorationColor: "#ffa800" }}
        >
          Chicago SEO &amp; Digital Marketing Services
        </h2>
        <p className="w-8/12 mx-auto font-Lato text-lg text-center pb-5">
          At Search Marketing Resource, we stand behind our work with 100%
          integrity, cutting-edge industry techniques, and results. Our team of
          in-house SEO experts help make your goals a reality.
        </p>
      </div>
      <Testimonials />
      <section className="bg-themeOrange-400 text-white text-center py-16">
        <div
          className="font-Lato text-xl lg:text-3xl pb-5 underline"
          style={{ textDecorationColor: "#00497a" }}
        >
          Get Started to Achieve Higher Keyword Rankings, More Traffic and Leads
        </div>
        <p className="w-7/12 mx-auto font-Lato text-sm lg:text-lg pb-5">
          Contact us today for a FREE SEO Proposal to get started today. We will
          perform a Site Audit and schedule a call to guide you in the right
          direction to grow your business.
        </p>
        <Link
          to="/search-marketing-website-design-proposal-form"
          className="bg-themeBlue-600 font-Montserrat text-white uppercase text-xs lg:text-base rounded px-6 py-3"
        >
          Request Your Free SEO Proposal Today!
        </Link>
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
