import React from "react"
import { graphql } from "gatsby"
import ContactForm from "../../components/ContactForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"

const WebOptPage = ({ data: { page, webImage } }) => {
  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <section className="w-11/12 mx-auto py-10">
        <div className="top_padding_page top_padding page_content_website faq-page top-space">
          <div className="wrapper">
            <div className="top_content">
              <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center">
                WEBSITE SEARCH OPTIMIZATION
              </h1>
              <h2 className="text-themeBlue-600 text-2xl font-MontserratSemiBold tracking-wide text-center pt-5">
                Digital Marketing Program #1
              </h2>
            </div>
            <div className="py-5 text-themeGray-200 text-lg font-Lato">
              <p>
                With this program, the focus is to search optimize every page of
                your website to bring current with the algorithms, or
                calculators Google, Yahoo and Bing use to determine keyword
                rankings positioning. All pages are analyzed, reviewed and
                updated with SEO best practices to significantly increase your
                keyword search visibility.
              </p>
              <p className="pt-3">
                A senior level SEO Manager is assigned to your program and works
                directly with you and your weekly. The process includes keyword
                research, competitor site study, webpage forward facing copy
                rewrites, SEO attribute updates, keyword ranking performance
                tracking and weekly program reports.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <GatsbyImage
                image={webImage.childImageSharp.gatsbyImageData}
                alt="Digital Marketing Program #1"
                layout="intrinsic"
              />
            </div>
            <p className="pt-3 text-center text-lg">
              Does the page content have good keyword ‘weight or density’, are
              anchor links used, is the page mobile device ‘friendly’, are
              images described with alt tags, have meta descriptions and title
              tags been written correctly, and so on….. the number of
              optimization concerns are fairly extensive, but all need addressed
              to align a website with the algorithms, or calculators Google,
              Yahoo and Bing use to determine top keyword search ranking
              positions.
            </p>
            <hr className="w-1/2  mx-auto border-t-2 border-themeOrange-400 my-8" />
          </div>
        </div>
        <div>
          <h2 className="text-themeBlue-600 text-3xl font-MontserratBold tracking-wide text-center py-10">
            SEARCH MARKETING PROGRAM OVERVIEW
          </h2>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              SEO Manager &amp; Team
            </h3>
            <p className="pt-3 text-lg">
              Managing the entire website optimization process is a tenured
              Search Marketing Manager (SMM) and their team. Prior to the start
              of the services, your manager will present a 6-month projection of
              the program and the action items to be completed each month and
              the recommended keyword phrases targeted.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              Website Technical Review
            </h3>
            <p className="pt-3 text-lg">
              At the program launch, all technical attributes of the site are
              reviewed from a SEO opportunities perspective. The site audit
              overview provides a snapshot of SEO page attributes that should be
              reviewed and corrected. During the SEO campaign, your program
              manager will review and discuss all updates and corrections
              needed.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              Keyword Selection Process
            </h3>
            <p className="pt-3 text-lg">
              The SMM will schedule a SEO interview to better understand your
              business model, competition, niche in the marketplace and keyword
              phrases that are most actively used in search queries of your
              products and services. The phrase list is presented for review and
              approval to launch the program.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              SEO Performance Dashboard
            </h3>
            <p className="pt-3 text-lg">
              You will be provided online access to a password protected SEO
              dashboard where your keyword search rankings are tracked in
              ‘real-time’. Included are stats associated with site visitor’s
              behavior, number of pages viewed, how long on the website and exit
              pages. Also, each page of the site is monitored for backlinks
              created, keyword ranking positions and Social Media venue
              activity.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              SEO Monthly Planner
            </h3>
            <p className="pt-3 text-lg">
              At the beginning of each month, the Search Marketing Manager will
              submit an action plan detailing the recommended page changes to be
              performed. Again, this will include rewriting page copy, updating
              the SEO attributes of each page and any site errors needing
              addressed. Typically, 10-15 site pages will be optimized each
              month.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              Page Content Rewrites
            </h3>
            <p className="pt-3 text-lg">
              The text of each page will be reviewed for opportunities to
              rewrite the copy to insert keyword phrases where appropriate. As
              the content is updated, the rewrites will be submitted for
              approval before uploading to the website. Included with the new
              copy, anchor links to interior pages will be added to the text as
              well.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              Website Page Optimization - SEO Attributes
            </h3>
            <p className="pt-3 text-lg">
              The SEO page review is an analysis of the individual pages of your
              website and the initial edits and changes we recommend be made to
              better align your site with the search engine algorithms. Once our
              recommendations are approved, the dev team will make the content
              changes and edits listed to the actual site pages.
            </p>
            <ul className="w-1/2 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-around py-5 text-lg text-themeBlue-600">
              <li className="flex items-center">
                <span className="pr-3 text-3xl font-bold text-themeOrange-400">
                  &#8250;
                </span>
                Page Copy &amp; Content
              </li>
              <li className="flex items-center">
                <span className="pr-3 text-3xl font-bold text-themeOrange-400">
                  &#8250;
                </span>
                Image Names
              </li>
              <li className="flex items-center">
                <span className="pr-3 text-3xl font-bold text-themeOrange-400">
                  &#8250;
                </span>
                Title Tags
              </li>
              <li className="flex items-center">
                <span className="pr-3 text-3xl font-bold text-themeOrange-400">
                  &#8250;
                </span>
                Image Alt Tags
              </li>
              <li className="flex items-center">
                <span className="pr-3 text-3xl font-bold text-themeOrange-400">
                  &#8250;
                </span>
                Meta Description
              </li>
              <li className="flex items-center">
                <span className="pr-3 text-3xl font-bold text-themeOrange-400">
                  &#8250;
                </span>
                Page URL’s Names
              </li>
              <li className="flex items-center">
                <span className="pr-3 text-3xl font-bold text-themeOrange-400">
                  &#8250;
                </span>
                Header Tags
              </li>
              <li className="flex items-center">
                <span className="pr-3 text-3xl font-bold text-themeOrange-400">
                  &#8250;
                </span>
                Anchor Links
              </li>
            </ul>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              Digital Marketing Program
            </h3>
            <p className="pt-3 text-lg">
              Once the entire website has been search engine optimized, you may
              want to consider continuing services with a turn-key Digital
              Marketing program. This would include writing blog posts, managing
              all Social Media venues and the ongoing study of keyword phrase
              ranking performance.
            </p>
          </div>
          <hr className="w-1/2  mx-auto border-t-2 border-themeOrange-400 my-8" />
        </div>
        <div>
          <p className="pt-3 text-lg text-center">
            All of the services listed are included in the ongoing marketing
            program. Each month your SEO Manager submits an action plan of the
            recommended tactics to be performed. Once approved, the manager and
            his team complete the services as detailed and provide a month end
            recap.
          </p>
          <p className="pt-3 text-lg text-center">
            We would be glad to discuss your marketing goals and objectives. Let
            us know when it would be convenient to have an introduction call to
            our team and we can discuss all options of our different programs.
          </p>
          <p className="pt-3 text-lg text-center">
            <a href="tel:888-842-9033">
              <u className="text-themeOrange-400">888-842-9033 x 11</u>
            </a>
          </p>
        </div>
      </section>
      <FreeQuoteForm />
      <ContactForm />
    </Layout>
  )
}

export default WebOptPage

export const pageQuery = graphql`
  query WebOptPageById(
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
    webImage: file(
      name: { regex: "/plan-1/" } # relativeDirectory: { eq: "seo-plans" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 685
          placeholder: TRACED_SVG
          quality: 90
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
