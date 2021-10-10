import React from "react"
import { graphql } from "gatsby"
import ContactSection from "../../components/ContactSection"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"

const DigiMktPage = ({ data: { page, webImage } }) => {
  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <div className="w-11/12 mx-auto py-10">
        <div className="top_padding_page top_padding page_content_website faq-page top-space">
          <div className="wrapper">
            <div className="top_content">
              <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center">
                DIGITAL MARKETING &amp; SOCIAL MEDIA MANAGEMENT
              </h1>
              <h2 className="text-themeBlue-600 text-2xl font-MontserratSemiBold tracking-wide text-center pt-5">
                Digital Marketing Program #2
              </h2>
            </div>
            <div className="py-5 text-themeGray-200 text-lg font-Lato text-center">
              <p>
                Effective Search Marketing programs start with the webpage
                updates needed to align the website with the different Search
                Engine algorithms, or calculators Google, Yahoo and Bing use to
                determine top keyword search ranking positions.
              </p>
              <p className="pt-3">
                However, beyond page optimization, there are many other SEO
                concerns that need managed to gain top keyword search rankings.
                This includes keyword performance tracking, monthly Blog
                articles, Backlinks created, Business Directory placement,
                Optimized Press Releases and Social Media accounts managed.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <GatsbyImage
                image={webImage.childImageSharp.gatsbyImageData}
                alt="Digital Marketing Program #2"
                layout="intrinsic"
              />
            </div>
            <hr className="w-1/2  mx-auto border-t-2 border-themeOrange-400 my-8" />
          </div>
        </div>
        <div>
          <h2 className="text-themeBlue-600 text-3xl font-MontserratBold tracking-wide text-center py-10">
            SEARCH MARKETING PROGRAM OVERVIEW
          </h2>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              Website Technical Review
            </h3>
            <p className="pt-3 text-lg">
              At the launch of the Search Marketing program, a full website
              audit is completed from a SEO perspective to determine all the
              site opportunities that exist but need updating for current SEO
              ‘best practices. Once the study is finished and discussed with our
              team, a 6-month projection plan is presented for your review and
              approval.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              Keyword Selection Process
            </h3>
            <p className="pt-3 text-lg">
              By reviewing your competition, website traffic analytics and
              understanding your target audience, the assigned SEO Manager will
              assemble a comprehensive list of ‘long-tail’ phrases for the
              optimization of your website and will be incorporated into all
              Blog articles, Press Releases and Social Media posts.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              SEO Performance Dashboard
            </h3>
            <p className="pt-3 text-lg">
              You will be provided 24/7 access to an admin panel tracking all
              aspects of the SEO program, including site visits, backlinks
              created, keyword rankings and Social Media activity. A password
              protected account ‘portal’ will be created to provide access to
              all ‘real-time’ reports. The dashboard tracks all aspects of the
              Digital Marketing program in real-time.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              Website Page Optimization - SEO Attributes
            </h3>
            <p className="pt-3 text-lg">
              The SEO Manager completes an analysis of each page of your website
              to determine the optimization updates we recommend be made. These
              will include Page Names, Title Tags, Meta Descriptions, Image Alt
              Tags, Anchor Links, etc., all SEO attributes to better align your
              site with the Search Engine algorithms.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              Social Media Management
            </h3>
            <p className="pt-3 text-lg">
              Having an active Social Media campaign is an important element to
              increasing and maintaining your online visibility. Social Media
              offers a platform to engage end users, share company events,
              industry news and build relationships with current customers and
              future business opportunities.
            </p>
            <p className="pt-3 text-lg">
              The different venues provide an opportunity to build specific
              keyword phrase content offsite with backlinks directing traffic to
              the pages of your website associated with each Social Media
              article, post, video or image.
            </p>
            <p className="pt-3 text-lg">
              For each account, we write and upload several in-depth articles
              that are industry-related and specific to your products and
              services. All posts contain URL’s (backlinks) to your site and
              have a mix of targeted keywords and phrases. This maximizes your
              website’s Search Optimization and keyword search rankings.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              News (Blog) Writing Services
            </h3>
            <p className="pt-3 text-lg">
              Maintaining an active Blog is a required action item to any
              effective online marketing plan. Blogging serves two important
              strategies, providing industry related news and events about your
              company and the ongoing addition of keyword search phrase content
              pages to your site, which increases the keyword ‘weight’ or
              ‘density’ of your site.
            </p>
            <p className="pt-3 text-lg">
              Your SEO Manager’s team posts two to four in-depth articles per
              month related to your industry and newsworthy to your target
              audience. Once the articles are approved, the posts are uploaded
              to your Blog (News) page.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              Optimized Press Releases
            </h3>
            <p className="pt-3 text-lg">
              An optimized Press Release provides a great opportunity to create
              qualified 'backlinks', increase keyword visibility with Search
              Engines and build your online Brand. Each Press Release is written
              in AP format and published to hundreds of online eZines, local
              news vendors, Radio Stations and online Broadcast outlets.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              Business Directory Submissions
            </h3>
            <p className="pt-3 text-lg">
              Submitting and correcting your business listing to both Local and
              National reputable directories is very effective to increasing
              your rankings, procuring a top position in the Search Engine
              ‘maps’ display and having end users find your company on other
              venues.
            </p>
            <p className="pt-3 text-lg">
              Beyond your business website information being indexed by Google,
              Yahoo and Bing, these same Search Engines routinely compare data
              from directory sources to compare information. If the comparative
              data (NAP details) do not match properly, or is nonexistent, the
              Search Engines may determine to minimize or not present your
              company in search rankings.
            </p>
            <p className="pt-3 text-lg">
              In your Digital Marketing program, the SEO Manager will identify
              which directories need updating or created by submitting your
              company details including a unique description for each posting.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              Backlink Programs
            </h3>
            <p className="pt-3 text-lg">
              A backlink is a link, or URL www.yourcompany.com, that when
              clicked redirects the end-users to a different website. The Search
              Engines credit websites with ‘qualified’ backlinks that are found
              and indexed from other media venues such as Facebook, Twitter,
              Google My Business or LinkedIn.
            </p>
            <p className="pt-3 text-lg">
              Backlinks are only counted or awarded credit by the Search Engines
              if the content surrounding the link is similar to the copy found
              on the referring website, or where the link redirects to.
            </p>
            <p className="pt-3 text-lg">
              In your SEO programs, all Social Media posts have backlinks placed
              in the copy, which has been written to include the keyword phrases
              targeted in the marketing plan. This tactic is also utilized in
              all Press Release publications where up to 3 URL’s are embedded in
              the content.
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
      </div>
      <FreeQuoteForm />
      <ContactSection />
    </Layout>
  )
}

export default DigiMktPage

export const pageQuery = graphql`
  query DigiMktPageById(
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
      name: { regex: "/plan-2/" } # relativeDirectory: { eq: "seo-plans" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 685
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
