import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ContactSection from "../../components/ContactSection"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const PressReleasePage = ({ data: { page, checkMarks, analytics } }) => {
  const checkMarkBlue = checkMarks.nodes[0].childImageSharp.gatsbyImageData
  const checkMarkOrange = checkMarks.nodes[1].childImageSharp.gatsbyImageData

  const analyticsImage = analytics.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <div className="w-full mx-auto text-center py-10">
        <h1 className="w-11/12 mx-auto text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center pt-10">
          Optimized Press Release Services
        </h1>
        <div className="w-11/12 mx-auto py-10 text-themeGray-200 text-left text-lg">
          <p className="pb-3">
            An optimized Press Release provides a great opportunity to create
            qualified 'backlinks', increase keyword visibility with Search
            Engines and build your online Brand. Although Press Release writing
            services are included in our SEO Marketing Programs, we also provide
            stand-alone Press Release editing and publishing services.
          </p>
          <p className="pb-3">
            The Press Release program includes the writing and optimization of
            Company news, events, product launches, employee promotions, and
            investor highlights. Once you approve the Press Release, it is
            submitted to the top online news posting websites, forums and eZines
            via online publication vendors such as PR Web, SB Wire, and PR Log.
          </p>
          <p className="pb-3">
            Publicizing news about your company allows hundreds of End-Users to
            find links to your website when looking at Forums, Blog posts and
            Releases specific to your industry. An additional benefit is the
            growing offline content associated with your Company’s domain which
            develops a cache of backlinks to your website. This generates higher
            keyword rankings with the Search Engines.{" "}
          </p>
        </div>
        <GatsbyImage
          image={analyticsImage}
          alt="Press Release Optimized SEO Services and Publishing"
        />
        <div className="w-full">
          <div className="w-11/12 mx-auto text-center flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full p-5">
              <h2 className="text-4xl text-themeBlue-600 font-semibold tracking-wide py-8">
                THE PRESS RELEASE WRITING PROCESS
              </h2>
              <div className="flex flex-col gap-y-5 lg:flex-row lg:gap-x-5">
                <p className="text-left text-lg">
                  The Press Release writing process is very straightforward. Our
                  technical writers review your industry and website to become
                  acquainted with your particular marketplace. We also discuss
                  if there are any current events in your industry or company to
                  determine a relevant topic. Each Press Release is SEO
                  optimized with keywords specific to your products or services
                  and embedded with backlinks to your website.
                </p>
                <p className="text-left text-lg">
                  The Press Release is written in AP format, and the initial
                  draft is submitted for your review and comment. This writing
                  process is repeated until the PR meets your expectations and
                  is approved. The Press Release is then pushed through various
                  news agencies and for the following 30 days we provide several
                  detailed tracking reports showing the activity of the PR -
                  impressions, reads and geographical coverage.
                </p>
              </div>
            </div>
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
                Press Release Topic
              </h3>
              <p className="pb-3">
                Prior to our writing a Press Release, we will conduct a brief
                call to discuss possible topics that are newsworthy. These may
                include the launch of a new product or service line, company
                expansion, management change, etc. We submit a preliminary Q&A
                form for your team to complete. These details provide the
                starting point or the Press Release content.
              </p>
            </div>
          </div>
          <div className="wrapper py-3 text-lg text-left flex gap-x-8 items-center ">
            <GatsbyImage
              image={checkMarkBlue}
              alt="check mark orange"
              width={107}
            />
            <div className="flex-1">
              <h3 className="flex items-center pb-3 text-3xl text-themeOrange-400">
                Incorporating Keyword Phrases
              </h3>
              <p className="pb-3">
                The Press Release copy will contain targeted keyword phrases and
                search terms that are relevant to the article. This promotes
                downloads and views from the preferred customer base. Although
                the PR content will be written specific to one, or several,
                search terms focused on in the SEO program, the release will
                maintain a balance between Search Engine attention and engaging
                copy for the end-user.
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
                Writing Press Release Copy
              </h3>
              <p className="pb-3">
                The Press Release is written in Associated Press (AP) newswire
                structure and will be penned in a ‘News Announcement’ format. It
                is then passed on for the editor’s review at SB Wire, PR Web or
                PR Newswire. The Press Release copy will include up to three
                imbedded links, or URL’s, which click back to the specific
                product or services page(s) associated with PR topic.
              </p>
            </div>
          </div>
          <div className="wrapper py-3 text-lg text-left flex gap-x-8 items-center ">
            <GatsbyImage
              image={checkMarkBlue}
              alt="check mark orange"
              width={107}
            />
            <div className="flex-1">
              <h3 className="flex items-center pb-3 text-3xl text-themeOrange-400">
                Press Release Review & Edits
              </h3>
              <p className="pb-3">
                Once the subject, or topic, of the Press Release is determined,
                an initial proof is written. It is typically five to six
                paragraphs in length and optimized with the keyword phrases
                targeted in the SEO program. The SEO Manager may include images
                or videos in the content as well. The draft is submitted to you
                for review and any indicated edits are completed before final
                approval.
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
                Press Release Submission
              </h3>
              <p className="pb-3">
                With the approved Press Release, the publication will be
                presented to one, or more, online news organizations. Included
                in the PR are company contact details, website, logo, phone
                number and address. The Release will be reviewed and evaluated
                against editorial guidelines. If edits are required, the SEO
                Manager will amend the copy and resubmit until it is accepted.
              </p>
            </div>
          </div>
          <div className="wrapper py-3 text-lg text-left flex gap-x-8 items-center ">
            <GatsbyImage
              image={checkMarkBlue}
              alt="check mark orange"
              width={107}
            />
            <div className="flex-1">
              <h3 className="flex items-center pb-3 text-3xl text-themeOrange-400">
                Syndications & Activity Reports
              </h3>
              <p className="pb-3">
                The published Release will generate two positive gains in your
                online visibility. The PR will be picked up and presented on up
                to 300+ eZines (online magazines), TV Station and radio
                websites, as well as forums and other content directory venues.
                Within 10 days of the publication, your SEO Manager will provide
                a detailed analysis of the PR’s performance, including how many
                reads, impressions and downloads it has generated.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FreeAuditForm />
      <FreeQuoteForm />
      <ContactSection />
    </Layout>
  )
}

export default PressReleasePage

export const pageQuery = graphql`
  query PressReleasePageById(
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
        relativeDirectory: { eq: "press-release" }
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
    analytics: file(
      name: { regex: "/seo-press-release-syndication/" }
      relativeDirectory: { eq: "press-release" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 1500
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
