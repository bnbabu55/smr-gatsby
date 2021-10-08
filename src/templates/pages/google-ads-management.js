import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ContactForm from "../../components/ContactForm"
import FreeAuditForm from "../../components/FreeAuditForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const GoogleAdsPage = ({
  data: { page, smpIcons, checkMark, bid, perfRpt },
}) => {
  const checkMarkImage = checkMark.childImageSharp.gatsbyImageData

  const bidImage = bid.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <section className="w-11/12 mx-auto py-10">
        <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center pt-10">
          Sponsored Search Ad Management Services
        </h1>
        <div className="py-10 text-themeGray-200 text-lg font-Lato grid grid-cols-1 lg:grid-cols-2 gap-x-3">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2">
            <h3 className="font-semibold text-2xl text-themeBlue-600 text-left pb-3">
              PPC CAMPAIGN MANAGEMENT
            </h3>
            <p>
              Pay-Per-Click (PPC) Google Ads Management is also known as
              Cost-Per-Click (CPC) and Sponsored Search. PPC is an advertising
              model where businesses pay each time an ad is clicked. A campaign
              consists of several Ad Groups targeting a different set of keyword
              phrases and Destination URLs of product or service website pages.{" "}
            </p>
          </div>
          <ul className="col-start-1 col-end-2 row-start-3 row-end-4 mt-5 lg:mt-0 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 grid grid-col-1 lg:grid-cols-2">
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Google Analytics Install</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Account Panel Setup</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Keyword Phrase Selection</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Keywords Budget Settings</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Ad Writing & Tracking</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Conversion Tracking</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Landing Page Creation</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Display (Image) Ads</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Remarketing</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Google Storefront</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-5 items-center py-5">
          <div className="w-full lg:w-2/5">
            <GatsbyImage
              image={bidImage}
              alt="Google Ads Keyword Research and Campaign Management"
            />
          </div>
          <div className="w-full lg:w-3/5">
            <h2 className="text-themeBlue-600 text-2xl font-semibold tracking-wide text-center py-3">
              ESTIMATING CLICK-THROUGH (TRAFFIC)
            </h2>
            <p className="py-3 text-xl">
              Using Google's traffic estimator tool for each phase in the
              program, we calculate the number of Searchers who will view your
              ads and potentially click through to your website. With this
              information, we set your daily campaign budget and closely monitor
              all activity including ad impressions, ad position (1-10),
              click-throughs and conversions. We review the overall performance
              of each ad and split test new ads, aiming for a better
              click-through rate (CTR). In addition, we track and remove any
              click-throughs from search terms that are not relevant to the
              product or service’s keyword phrases. This minimizes traffic and
              PPC costs from non-related keyword searches.
            </p>
            <p className="py-3 text-xl">
              Using Google's traffic estimator tool for each phase in the
              program, we calculate the number of Searchers who will view your
              ads and potentially click through to your website. With this
              information, we set your daily campaign budget and closely monitor
              all activity including ad impressions, ad position (1-10),
              click-throughs and conversions. We review the overall performance
              of each ad and split test new ads, aiming for a better
              click-through rate (CTR). In addition, we track and remove any
              click-throughs from search terms that are not relevant to the
              product or service’s keyword phrases. This minimizes traffic and
              PPC costs from non-related keyword searches.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 text-lg">
          <div className="wrapper py-5">
            <h3 className="flex text-2xl items-start pb-3 text-themeBlue-600 font-semibold">
              Keyword Research & Campaign Setup
            </h3>
            <GatsbyImage
              alt="Sponsored Search Campaigns"
              image={smpIcons.nodes[0].childImageSharp.gatsbyImageData}
              className="mr-3"
              style={{ float: "left" }}
            />
            <p className="pb-3 text-justify">
              The success and performance of a Sponsored Search campaign is
              dependent upon the selection of keyword phrases. These phrases
              should be specific to your products or services and help
              pre-qualify the Searcher who clicks through. If the keyword term
              is vague, or generic in phrasing, it causes your ad to be
              displayed (an impression) to End-Users only looking for similar
              products or services who may click-through, debiting your account,
              but ultimately do not convert (make a purchase or contact you).
            </p>
            <p className="pb-3">
              Long tail phrases that describe your company’s offerings will
              generate click-through traffic from qualified visitors. A typical
              Sponsored Search campaign is comprised of 75-200 keyword phrases,
              each with a different bid rate, also known as a click-through
              rate. The Google Ads Manager assembles phrases into separate
              groups, creating several ads with 25 or more search phrases
              associated with each ad.
            </p>
          </div>
          <div className="wrapper py-5">
            <h3 className="flex text-2xl items-start pb-3 text-themeBlue-600 font-semibold">
              SEO Optimized Website Content
            </h3>
            <GatsbyImage
              alt="Sponsored Search Ads"
              image={smpIcons.nodes[1].childImageSharp.gatsbyImageData}
              className="mr-3"
              style={{ float: "left" }}
            />
            <p className="pb-3 text-justify">
              Writing an ad that will stand out from your competitor’s listings
              is challenging. However, if certain attributes are applied this
              will maintain a high CTR (click-through rate) and good ad
              position, generating conversions and sales. There is limited copy
              space in writing an ad.
            </p>
            <p className="pb-3">
              We will compose a clear, concise message for each ad. We also
              write ‘calls to action’ in the header, like a special offer or an
              exceptional buy. We also add in ad extensions that can include
              your business’ phone number and address, if your business is
              local. Each ad and keywords are tracked for performance. This
              feedback leads to split testing ads to create the best version
              that gets results.
            </p>
          </div>
          <div className="wrapper py-5">
            <h3 className="flex text-2xl items-start pb-3 text-themeBlue-600 font-semibold">
              Pay-Per-Click Budgeting & Tracking
            </h3>
            <GatsbyImage
              alt="Adwords Budget Estimating"
              image={smpIcons.nodes[2].childImageSharp.gatsbyImageData}
              className="mr-3"
              style={{ float: "left" }}
            />
            <p className="pb-3 text-justify">
              The constant monitoring and analyzing of a Sponsored Search
              campaign's performance is required to achieve and maintain a high
              click-through rate of 3.00% or more, ad positions between 1-3rd
              place, and a measurable conversion rate. Each week your Google Ads
              Manager will submit a detailed report showing the text of each ad,
              the keyword phrases associated with the ad, weekly dollars spent
              and overall activity of the campaign.
            </p>
            <p className="pb-3">
              Included with the analysis report may be additional ad copy,
              keyword terms and recommendations that can include budget changes.
              Also, tracked and included in the report are the number of ad
              impressions (how often each ad was presented in keyword searches),
              amount of click-throughs to your website and the conversion rate.
              The conversion rate is the count of End-Users that either
              completed a contact form on the site, requested services or
              purchased an ecommerce product.
            </p>
          </div>
          <div className="wrapper py-5">
            <h3 className="flex text-2xl items-start pb-3 text-themeBlue-600 font-semibold">
              Landing Page Design
            </h3>
            <GatsbyImage
              alt="PPC Landing Page Design"
              image={smpIcons.nodes[3].childImageSharp.gatsbyImageData}
              className="mr-3"
              style={{ float: "left" }}
            />
            <p className="pb-3 text-justify">
              For some Google Ad campaigns, you may want to drive the
              click-through traffic to a newly designed landing page. This is a
              web page within your website that is not represented in your
              navigation links but developed with specific content and images
              similar to the campaign ad. This page may have a unique offer or
              pricing only presented to site visitors from your campaign. The
              landing page typically has limited navigation options and directs
              the End-User to make a conversion action.
            </p>
            <p className="pb-3">
              When a landing page is requested, the Google Ads Manager will work
              alongside one of our graphic artists to design the page and
              content layout. The page design will maintain the same colors,
              font styles and elements of the other website pages. Once
              approved, the development team will add the page to your website
              and add the copy and images. This new page URL will be added to
              the ad(s) of the campaign and tracked for conversions.
            </p>
          </div>
          <div className="clear-both"></div>
        </div>
        <div className="py-10 text-themeGray-200 text-lg font-Lato">
          <h3 className="font-semibold text-2xl text-themeBlue-600 text-left pb-3">
            CAMPAIGN TRACKING & REPORTING
          </h3>
          <p>
            Included in our campaign management is the preparation and
            submission of weekly reports detailing the performance of each ad
            group. Your Google Ads Manager monitors all aspects of your PPC
            (Pay-Per-Click) ad campaign and makes corrections to budget amounts,
            negative keyword searches and adjusts ads for a higher display
            position or better CTR (Click Through Rate). An effective Sponsored
            Search program can drive a significant amount of qualified search
            traffic to your site. This creates more direct emails and phone
            calls.
          </p>
          <div className="flex flex-col lg:flex-row lg:gap-x-5 py-5">
            <GatsbyImage
              image={perfRpt.childImageSharp.gatsbyImageData}
              alt="Google Ads Campaign Tracking and Reporting PPC"
              className="flex-1"
            />

            <ul className="flex-1 grid grid-cols-2 gap-x-5">
              <li className="flex items-center">
                <GatsbyImage
                  image={checkMarkImage}
                  alt="checkmark icon"
                  width="20"
                />
                <span className="pl-2">Campaign Name</span>
              </li>
              <li className="flex items-center">
                <GatsbyImage
                  image={checkMarkImage}
                  alt="checkmark icon"
                  width="20"
                />
                <span className="pl-2">Daily Budget</span>
              </li>
              <li className="flex items-center">
                <GatsbyImage
                  image={checkMarkImage}
                  alt="checkmark icon"
                  width="20"
                />
                <span className="pl-2">Click Throughs</span>
              </li>
              <li className="flex items-center">
                <GatsbyImage
                  image={checkMarkImage}
                  alt="checkmark icon"
                  width="20"
                />
                <span className="pl-2">Ad Impressions</span>
              </li>
              <li className="flex items-center">
                <GatsbyImage
                  image={checkMarkImage}
                  alt="checkmark icon"
                  width="20"
                />
                <span className="pl-2">Click Through Rate</span>
              </li>
              <li className="flex items-center">
                <GatsbyImage
                  image={checkMarkImage}
                  alt="checkmark icon"
                  width="20"
                />
                <span className="pl-2">Maximum Bids</span>
              </li>
              <li className="flex items-center">
                <GatsbyImage
                  image={checkMarkImage}
                  alt="checkmark icon"
                  width="20"
                />
                <span className="pl-2">Weekly Cost</span>
              </li>
              <li className="flex items-center">
                <GatsbyImage
                  image={checkMarkImage}
                  alt="checkmark icon"
                  width="20"
                />
                <span className="pl-2">Ad Position</span>
              </li>
              <li className="flex items-center">
                <GatsbyImage
                  image={checkMarkImage}
                  alt="checkmark icon"
                  width="20"
                />
                <span className="pl-2">Conversions</span>
              </li>
              <li className="flex items-center">
                <GatsbyImage
                  image={checkMarkImage}
                  alt="checkmark icon"
                  width="20"
                />
                <span className="pl-2">Click Per Call</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <FreeAuditForm />
      <ContactForm />
    </Layout>
  )
}

export default GoogleAdsPage

export const pageQuery = graphql`
  query GoogleAdsPageById(
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
    smpIcons: allFile(
      filter: {
        name: { regex: "/-icon/" }
        relativeDirectory: { eq: "google-ads" }
      }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 70
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    checkMark: file(
      name: { regex: "/check-mark/" }
      relativeDirectory: { eq: "google-ads" }
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
    bid: file(
      name: { regex: "/bid-strategy/" }
      relativeDirectory: { eq: "google-ads" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 440
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    perfRpt: file(
      name: { regex: "/perfromance-reports/" }
      relativeDirectory: { eq: "google-ads" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 500
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
