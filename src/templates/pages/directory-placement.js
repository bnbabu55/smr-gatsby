import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ContactSection from "../../components/ContactSection"
import FreeQuoteSection from "../../components/FreeQuoteSection"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const BusinessDirectoryPage = ({
  data: { page, checkMarks, dSubmission, listings, yext },
}) => {
  const checkMarkBlue = checkMarks.nodes[0].childImageSharp.gatsbyImageData
  const checkMarkOrange = checkMarks.nodes[1].childImageSharp.gatsbyImageData
  const submissionImage = dSubmission.childImageSharp.gatsbyImageData
  const yextImage = yext.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <div className="w-full mx-auto text-center py-10">
        <div className="w-11/12 mx-auto">
          <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center pt-10">
            Business Directory Management
          </h1>
          <div className="py-10 text-themeGray-200 text-left text-lg">
            <p className="pb-3">
              An important step in optimizing your website for both national and
              local searches is claiming or creating your business listing with
              the recognized online business directories. This will help to
              increase your online visibility with the Search Engines and in the
              business directory sites your business prospects and customers are
              using, such as Yelp, Manta, Yellow Pages, Super Pages and Merchant
              Circle, just to name a few.
            </p>
          </div>
          <div className="flex justify-between py-5">
            <div></div>
            <h2 className="font-MontserratSemiBold italic text-2xl text-themeBlue-600">
              We Partnered With Yext, The Industry Leading <br />
              Directory Management Software Provider
            </h2>
            <GatsbyImage
              image={yextImage}
              alt="Yext icon"
              className="justify-self-end"
            />
          </div>
          <ol className="w-11/12 mx-auto text-left list-decimal list-inside">
            <li className="text-themeOrange-400 text-xl py-3">
              Your Business Information Must Be Accurate
              <p className="text-gray-700 text-lg">
                Your business has been automatically created in many business
                directories but no doubt with incorrect information or missing .
                This will negatively affect your search rankings. We fix this!
              </p>
            </li>
            <li className="text-themeOrange-400 text-xl py-3">
              Improving Your Local Visibility
              <p className="text-gray-700 text-lg">
                Google states that 76% of people who use local search visit a
                business within a day. Your address needs to be 100% accurate to
                appear in the right location on the different online maps.
              </p>
            </li>
            <li className="text-themeOrange-400 text-xl py-3">
              Generate More Business Inquiries
              <p className="text-gray-700 text-lg">
                Directories allow users to search by services, location, and
                category. If your listing is updated or created correctly, it
                will be searchable in the directories consumers use.
              </p>
            </li>
            <li className="text-themeOrange-400 text-xl py-3">
              Increase Online “Word of Mouth”
              <p className="text-gray-700 text-lg">
                Many directories allow customers to provide a business review.
                Being listed in these directories place you in a direct channel
                with your target audience and increases the “social proof” of
                your business.
              </p>
            </li>
            <li className="text-themeOrange-400 text-xl py-3">
              Strengthen Your Business Reputation
              <p className="text-gray-700 text-lg">
                Consumers search for information about the businesses they
                intend to purchase from. Having your company appear in a
                multitude of listings increases their comfort level.
              </p>
            </li>
            <li className="text-themeOrange-400 text-xl py-3">
              Increase Brand Awareness
              <p className="text-gray-700 text-lg">
                Every encounter a person has with your business increases their
                awareness with your brand. Being active in directories and
                Social Media provides a significant advantage ahead of your
                competition.
              </p>
            </li>
            <li className="text-themeOrange-400 text-xl py-3">
              Increase Your SEO Program Performance
              <p className="text-gray-700 text-lg">
                The Search Engines need to be trusted by its users, so the more
                accurate and consistent of your online information, the more the
                Search Engines will promote your business ahead of your
                competition.
              </p>
            </li>
          </ol>
        </div>
        <h2 className="font-MontserratSemiBold italic text-2xl text-themeBlue-600 py-5">
          Search Marketing Resource 100% Manages, Maintains & Monitors
          <br />
          All Your Business Directory Listings
        </h2>
        <p className="w-11/12 text-lg text-left mx-auto">
          Google, Yahoo and Bing are constantly comparing the NAP (name,
          address, phone) from the separate directories to confirm if the
          information that has been indexed is accurate or in conflict. If the
          comparative data does not match properly and is nonexistent, the
          Search Engine(s) may determine to minimize your search rankings or not
          present the company in the search results at all.
        </p>
        <div className="w-11/12 mx-auto">
          <h2 className="font-MontserratBold text-2xl text-themeBlue-600 py-10">
            ! YOUR COMPANY PLACED & MANAGED IN 50+ TOP DIRECTORIES !
          </h2>
          <div className="flex gap-x-5 items-center font-semibold text-lg italic text-themeOrange-400">
            <p className="w-1/4">
              Submitting, correcting and maintaining the accuracy of these
              listings is time consuming and a tedious process. In our SEO
              programs, we include this service or can be provided as a separate
              service.
            </p>
            <div className="w-1/2">
              <GatsbyImage
                image={submissionImage}
                alt="SEO Citation Building"
                width={590}
                className="flex-none border border-themeOrange-400"
              />
              <Link
                to="/directory-listing-network"
                className="mt-3 text-base text-themeBlue-600 font-semibold"
              >
                &lt;&lt;&lt;CLICK TO VIEW LIST&gt;&gt;&gt;
              </Link>
            </div>
            <p className="w-1/4">
              The accuracy of your company information is effectively managed on
              Social Media platforms like Facebook, Twitter, LinkedIn and Google
              My Business but also in all the top directories and Search Engine
              ‘local’ databases.
            </p>
          </div>
        </div>

        <div className="w-11/12 mx-auto py-5">
          <h3 className="text-themeOrange-400 text-5xl font-BebasNeue tracking-wide text-center pt-10">
            EFFECTIVE SEO SERVICES
          </h3>
          <div className="flex flex-col lg:flex-row lg:gap-x-5 justify-center items-center">
            <div className="flex-1 text-right text-lg">
              <p className="pb-4">
                Our SEO programs are all inclusive of best practices to ensure
                the promotion or your company with the Search Engines to achieve
                top rankings with all keyword phrases targeted. Our SEO Managers
                contact each data aggregator and claim your listing while
                updating any inaccuracies.
              </p>
              <p>
                This is critical to serving accurate data to all online business
                listing resources and directories. These listings are routinely
                reviewed to guarantee the information is current across all data
                aggregators, data enhancers and directories.
              </p>
            </div>
            <form className="flex-1 text-gray-700 contact-form flex flex-col justify-center align-center m-10 font-Lato text-base">
              <div className="font-Montserrat text-base text-red uppercase bg-themeBlue-600 text-white py-2 mb-3 rounded-lg">
                SCAN YOUR LISTINGS
              </div>
              <div className="grid gap-3 grid-cols-3">
                <input
                  className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-4"
                  type="text"
                  placeholder="Business Name"
                  name="company"
                  id="company"
                />
                <input
                  className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-4"
                  type="text"
                  placeholder="Business Address"
                  name="addr1"
                  id="addr1"
                />
                <input
                  className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-4 lg:col-start-1 lg:col-end-2"
                  type="text"
                  placeholder="City"
                  name="city"
                  id="city"
                />
                <input
                  className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-4 lg:col-start-2 lg:col-end-3"
                  type="text"
                  placeholder="State"
                  name="state"
                  id="state"
                />
                <input
                  className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-4 lg:col-start-3 lg:col-end-4"
                  type="text"
                  placeholder="Zip Code"
                  name="zip"
                  id="zip"
                />
                <input
                  className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-4 lg:col-start-1 lg:col-end-2"
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  id="phone"
                />
                <input
                  className="w-full border border-gray-700 p-3  rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-4 lg:col-start-2 lg:col-end-4"
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                />
                <button className="w-full text-white uppercase bg-themeOrange-400 rounded font-MontserratSemiBold px-8 py-2 tracking-wider text-base shadow-2xl mt-5 col-span-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-11/12 mx-auto pt-10">
          <div className="wrapper py-3 text-lg text-left flex gap-x-8 items-center ">
            <GatsbyImage
              image={checkMarkOrange}
              alt="check mark orange"
              width={107}
            />
            <div className="flex-1">
              <h3 className="flex items-center pb-3 text-3xl text-themeBlue-600">
                Directory Listing Audit
              </h3>
              <p className="pb-3">
                A complete audit will be performed to determine which listings
                need updated or created with your correct business details. All
                top 50 authoritative directories are reviewed including Yellow
                Pages, Manta, Merchant Circle, Local.com, Super Pages and
                Chamber of Commerce.org.
              </p>
            </div>
          </div>
          <div className="wrapper py-3 text-lg text-left flex gap-x-8 items-center ">
            <GatsbyImage
              image={checkMarkBlue}
              alt="check mark blue"
              width={107}
            />
            <div className="flex-1">
              <h3 className="flex items-center pb-3 text-3xl text-themeOrange-400">
                Claim Existing Listings
              </h3>
              <p className="pb-3">
                All directories will be managed and ‘claimed’. This ensures
                access to the listings for future updates in the event of an
                address or phone number change. In claiming the listings we also
                add your logo, business description and bio photo.
              </p>
            </div>
          </div>
          <div className="wrapper py-3 text-lg text-left flex gap-x-8 items-center ">
            <GatsbyImage
              image={checkMarkOrange}
              alt="check mark orange"
              width={107}
            />
            <div className="flex-1">
              <h3 className="flex items-center pb-3 text-3xl text-themeBlue-600">
                Directories Updated (Citation Building)
              </h3>
              <p className="pb-3">
                Once the directories are updated, a comprehensive report listing
                each vendor with your listing information will be generated and
                provided. The listings are routinely monitored to make certain
                your business details remain accurate and consistent.
              </p>
            </div>
          </div>
          <div className="wrapper py-3 text-lg text-left flex gap-x-8 items-center ">
            <GatsbyImage
              image={checkMarkBlue}
              alt="check mark blue"
              width={107}
            />
            <div className="flex-1">
              <h3 className="flex items-center pb-3 text-3xl text-themeOrange-400">
                Data Aggregators
              </h3>
              <p className="pb-3">
                The four major data aggregators (
                <a
                  href="http://www.infogroup.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-themeBlue-600"
                >
                  {" "}
                  Infogroup
                </a>
                ,
                <a
                  href="http://www.acxiom.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-themeBlue-600"
                >
                  {" "}
                  Acxiom
                </a>
                ,
                <a
                  href="https://www.neustarlocaleze.biz/welcome"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-themeBlue-600"
                >
                  {" "}
                  Localeze
                </a>
                ,
                <a
                  href="https://www.factual.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg text-themeBlue-600"
                >
                  {" "}
                  Factual
                </a>
                ), are responsible for transmitting much of your company’s
                information that exists online. These aggregators propagate
                information to a variety of publishing outlets, including search
                engines, social media platforms, review sites, and business
                directories.
              </p>
            </div>
          </div>
        </div>
        <div className="text-left mx-auto">
          <h2 className="bg-themeBlue-600 text-white text-2xl text-center uppercase py-3 mb-8 gap-x-3">
            Major Data Aggregators
          </h2>

          <div className="w-11/12 mx-auto flex items-center">
            <GatsbyImage
              alt="Info Group Update"
              image={listings.nodes[0].childImageSharp.gatsbyImageData}
            />
            <div className="w-4/5 pl-4">
              <h3 className="text-2xl text-themeOrange-400 pb-5">Infogroup</h3>

              <p className="text-lg">
                Infogroup’s databases contain information on businesses and
                consumers across the USA and around the world. This data is
                accessible through a number of different websites, including
                infoUSA.com, Salesgenie.com and Onesource.com.
              </p>
            </div>
          </div>
          <hr className="border border-b-0 border-gray-400 w-1/3 mx-auto my-10" />
          <div className="w-11/12 mx-auto flex items-center">
            <GatsbyImage
              alt="Localeze Update"
              image={listings.nodes[1].childImageSharp.gatsbyImageData}
            />
            <div className="w-4/5 pl-4">
              <h3 className="text-2xl text-themeOrange-400 pb-5">Localeze</h3>

              <p className="text-lg">
                Neustar Localeze distributes data to more than 100 search
                platforms, mobile apps, and navigation systems. Data provided by
                Localeze allows Nokia to provide up-to-date business details to
                its in-car navigation system.
              </p>
            </div>
          </div>
          <hr className="border border-b-0 border-gray-400 w-1/3 mx-auto my-10" />
          <div className="w-11/12 mx-auto flex items-center">
            <GatsbyImage
              alt="Acxiom Update"
              image={listings.nodes[2].childImageSharp.gatsbyImageData}
            />
            <div className="w-4/5 pl-4">
              <h3 className="text-2xl text-themeOrange-400 pb-5">Acxiom</h3>

              <p className="text-lg">
                Overseeing more than 4000 databases and updating 10 billion data
                records every month, Acxiom is responsible for a significant
                amount of online data. A few of Acxiom’s partners include
                Facebook, eBay, Foursquare, IBM, and Microsoft.
              </p>
            </div>
          </div>
          <hr className="border border-b-0 border-gray-400 w-1/3 mx-auto my-10" />
          <div className="w-11/12 mx-auto flex items-center">
            <GatsbyImage
              alt="Factual Update"
              image={listings.nodes[3].childImageSharp.gatsbyImageData}
            />

            <div className="w-4/5 pl-4">
              <h3 className="text-2xl text-themeOrange-400 pb-5">Factual</h3>
              <p className="text-lg">
                Factual focus is on providing real-time data to mobile systems
                and platforms. In addition to feeding data to publishers like
                the Weather Channel and Yelp, Factual provides services to Apple
                products, Bing, Facebook, and Uber. Factual maintains data for
                more than 100 million businesses and points of interest in 50
                different countries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FreeQuoteSection />
      <ContactSection />
    </Layout>
  )
}

export default BusinessDirectoryPage

export const pageQuery = graphql`
  query BusinessDirectoryPageById(
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
    checkMarks: allFile(
      filter: {
        name: { regex: "/check-mark/" }
        relativeDirectory: { eq: "business-directory" }
      }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 107
            height: 107
            layout: FIXED
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP]
          )
        }
      }
    }
    dSubmission: file(
      name: { regex: "/directory-submission-program/" }
      relativeDirectory: { eq: "business-directory" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 590
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
    listings: allFile(
      filter: {
        name: { regex: "/-Listing/" }
        relativeDirectory: { eq: "business-directory" }
      }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 100
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP]
          )
        }
      }
    }
    yext: file(
      name: { regex: "/Certified-Yext-Partner/" }
      relativeDirectory: { eq: "business-directory" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 160
          height: 55
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
          layout: FIXED
        )
      }
    }
  }
`
