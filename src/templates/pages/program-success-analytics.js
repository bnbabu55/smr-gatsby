import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ContactForm from "../../components/ContactForm"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const ProgSuccessPage = ({ data: { page, checkMark, analytics } }) => {
  const checkMarkImage = checkMark.childImageSharp.gatsbyImageData

  const analyticsImage = analytics.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <section className="w-full mx-auto text-center py-10">
        <h1 className="w-11/12 mx-auto text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center pt-10">
          Digital Marketing SEO Program Results
        </h1>
        <div className="w-11/12 mx-auto py-10 text-themeGray-200 text-left text-lg">
          <p className="pb-3">
            Measuring the success of a digital marketing SEO program requires
            consistent monitoring of our SEO efforts. Using proprietary tools
            and analytics, prior to the launch of our clients' programs, our
            team runs baseline reports and metric studies to determine the level
            of the website’s visibility with the Search Engines, Google, Yahoo
            and Bing.
          </p>
          <p className="">
            These reports are then used as comparison data along with the
            monthly Search Engine Optimization program account overview.
            Presented are the ranking position changes of each keyword phrase
            targeted in the campaign, the level of increased organic search
            traffic, Social Media account activity, the number of new backlinks
            added, and Press Release syndication pick-ups, including reads,
            impressions and downloads.
          </p>
        </div>
        <div className="w-full bg-themeBlue-600">
          <div className="w-11/12 mx-auto text-center text-white flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full lg:w-3/5 p-5">
              <h2 className="text-2xl font-semibold tracking-wide py-5">
                SEO PERFORMANCE REPORTS 24/7
              </h2>
              <p className="text-left text-lg">
                Search Marketing Resource provides a comprehensive set of
                analytics that are available 24/7 in real-time. In addition, we
                email regular results weekly and monthly. The SEO Performance
                Portal is password protected and accessible by your entire team.
                Below are some of the results we include in your dashboard and
                reports.
              </p>
              <ul className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-around py-5">
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Keyword Search Traffic</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">SEO Attributes Check</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Website Page Audits</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Social Media Activity</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Backlinks Created</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Competitor Rankings</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Adwords Performance</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Press Release Reads</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Keyword Rankings</span>
                </li>
                <li className="flex items-center">
                  <GatsbyImage
                    image={checkMarkImage}
                    alt="checkmark icon"
                    width="20"
                  />
                  <span className="pl-2">Multimedia Traffic</span>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-2/5">
              <GatsbyImage
                image={analyticsImage}
                alt="Search Marketing Program Reports"
              />
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-auto pt-10">
          <div className="wrapper py-3 text-lg text-left">
            <h3 className="flex items-center pb-3 text-2xl">
              <span className="text-themeOrange-400 -mt-3 pr-3 text-6xl">
                &#10033;
              </span>
              SEO Traffic Analytics
            </h3>
            <p className="pb-3">
              Tracking the performance and success of the{" "}
              <Link
                to="/search-marketing-programs"
                className="text-lg underline"
              >
                digital marketing SEO program
              </Link>{" "}
              requires unique tools to measure progress specific to increased
              search traffic and end user activity on your website. Tracking
              software such as Google Analytics is an important resource for the
              ongoing comparison of website visits measured from the launch of
              the Search Marketing campaign to the present day.
            </p>
            <p className="pb-3">
              The tracking code provides metrics specific to organic traffic
              counts, bounce rates, GEO location of visitors, duration spent on
              the site, pages viewed and exit pages. We provide a weekly recap
              of all website activity and traffic totals with monthly
              recommendations for improvement.
            </p>
          </div>
          <div className="wrapper py-3 text-lg text-left">
            <h3 className="flex items-center pb-3 text-2xl">
              <span className="text-themeBlue-600 -mt-3 pr-3 text-6xl">
                &#10033;
              </span>
              Keyword Rankings
            </h3>
            <p className="pb-3">
              The backbone of any successful digital marketing SEO program is
              the proper selection of keyword phrases to be targeted, and then
              the continued monitoring of their change in ranking position.
              Routinely checking for changes in the market where new or
              different search terms are being used in search queries is also
              critical. Ranking reports are provided each week and the
              performance of each keyword phrase is reviewed for any necessary
              action to increase its ranking position.
            </p>
            <p className="pb-3">
              An easy solution to bolster rankings is an optimized{" "}
              <Link to="/optimized-press-release" className="text-lg underline">
                Press Release
              </Link>{" "}
              for a set of keyword terms. Also effective is a targeted Blog or{" "}
              <Link to="/social-media" className="text-lg underline">
                Social Media
              </Link>{" "}
              posts to associate more keyword weight or density associated with
              the company domain by the Search Engines.
            </p>
          </div>
          <div className="wrapper py-3 text-lg text-left">
            <h3 className="flex items-center pb-3 text-2xl">
              <span className="text-themeOrange-400 -mt-3 pr-3 text-6xl">
                &#10033;
              </span>
              Qualified Backlinks Created
            </h3>
            <p className="pb-3">
              Today, Search Engines tend to promote websites with search results
              not only based on the optimization of the site pages, but equally
              important, offsite visibility as well. Creating qualified
              backlinks, or site URLs contained in the copy published on other
              venues, such as Facebook, LinkedIn, Twitter, Google+ pages and
              Press Releases must be part of an effective Search Engine
              Optimization campaign.
            </p>
            <p className="pb-3">
              The Search Engines award bonus points to companies who are active
              online with routine posts to Social Media accounts, forums and
              News Releases specific to the products and services offered. All
              posts and articles written by your SEO team contain 2-3 links
              pointing back to the website's targeted pages.
            </p>
          </div>
          <div className="wrapper py-3 text-lg text-left">
            <h3 className="flex items-center pb-3 text-2xl">
              <span className="text-themeBlue-600 -mt-3 pr-3 text-6xl">
                &#10033;
              </span>
              Social Media Marketing
            </h3>
            <p className="pb-3">
              There is a growing audience demographic that relies on Social
              Media venues when researching service providers and product
              vendors. Facebook likes and reviews are a key part of your
              potential customer’s due diligence before contacting your
              business. Your SEO team will write monthly articles and post to
              all media accounts, Twitter, Facebook, LinkedIn, Google+ and
              industry forums
            </p>
            <p className="pb-3">
              We ensure that backlinks are contained in all posts and can track
              all ‘referred’ traffic generated by the Social Media accounts, as
              well as likes and followers added. An active{" "}
              <Link to="/social-media" className="text-lg underline">
                Social Media
              </Link>{" "}
              program will continue to increase your backlink credits with the
              Search Engines as well as providing a path for new web traffic
              click-throughs.
            </p>
          </div>
          <div className="wrapper py-3 text-lg text-left">
            <h3 className="flex items-center pb-3 text-2xl">
              <span className="text-themeOrange-400 -mt-3 pr-3 text-6xl">
                &#10033;
              </span>
              Online Sales Conversions
            </h3>
            <p className="pb-3">
              The goal of every digital marketing SEO program is to measurably
              increase organic keyword search traffic and ‘referred’
              click-throughs. These are site visits generated by end-users
              clicking on a link that leads to your site from a different
              website, Social Media page or an optimized Press Release. However,
              while increasing traffic to a website is the cause and effect of a
              successful Search Marketing campaign, turning the visit into a
              sales conversion is the truly desired result.{" "}
            </p>
            <p className="pb-3">
              Your own website has many ways to track its sales conversion
              success. For example, activities like how often site visitors
              complete your Contact Us form, makes a purchase or calls in to
              your offices is a click-through conversion. Additionally, all
              emails from any contact form submissions should be aggregated into
              a database that can be used in your email marketing program.
            </p>
          </div>
          <div className="wrapper py-3 text-lg text-left">
            <h3 className="flex items-center pb-3 text-2xl">
              <span className="text-themeBlue-600 -mt-3 pr-3 text-6xl">
                &#10033;
              </span>
              Search Engine Optimization Audit
            </h3>
            <p className="pb-3">
              Beyond the forward-facing copy of a website and the offsite Social
              Media and Press Release SEO efforts, there are many page and
              coding attributes the Search Engines look at in determining search
              ranking hierarchy. This includes the meta content, title tags and
              image-naming convention. We also monitor for duplicate content
              while comparing page to page copy and whether there are any page
              URL links broken.
            </p>
            <p className="pb-3">
              Another key marker we evaluate is whether the Search Engines are
              grading it as a{" "}
              <Link
                to="/mobile-responsive-website-design"
                className="text-lg underline"
              >
                mobile friendly website
              </Link>{" "}
              for cell phones and tablets. With your digital marketing SEO
              program, we provide 24/7 access to a site audit exam that tests
              each page of your site and alerts you to any errors detected. The
              report provides up to 15 detailed analytics and the issues for
              each page listed.
            </p>
          </div>
        </div>
      </section>
      <FreeAuditForm />
      <FreeQuoteForm />
      <ContactForm />
    </Layout>
  )
}

export default ProgSuccessPage

export const pageQuery = graphql`
  query ProgSuccessPageById(
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
    checkMark: file(
      name: { regex: "/check-mark/" }
      relativeDirectory: { eq: "program-results" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 20
          height: 20
          layout: FIXED
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
    analytics: file(
      name: { regex: "/seo-program-reports/" }
      relativeDirectory: { eq: "program-results" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 500
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
