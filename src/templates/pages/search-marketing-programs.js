import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ContactForm from "../../components/ContactForm"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const SMPPage = ({ data: { page, smpIcons, checkMark, analytics } }) => {
  const checkMarkImage = checkMark.childImageSharp.gatsbyImageData

  const analyticsImage = analytics.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <section className="w-11/12 mx-auto py-10">
        <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center pt-10">
          Digital Marketing SEO Program
        </h1>
        <div className="py-10 text-themeGray-200 text-lg font-Lato grid grid-cols-1 lg:grid-cols-2 gap-x-3">
          <p className="col-start-1 col-end-2 row-start-1 row-end-2">
            A significant percentage of new business opportunities are generated
            based on your company’s Search Engine positioning. Improving your
            keyword rankings with a digital marketing SEO program is crucial to
            increasing your visibility, market share, and maintaining your
            current customer base against your competitors.
          </p>
          <p className="col-start-1 col-end-2 row-start-2 row-end-3 pt-3">
            Search Engines display websites in keyword searches based on the
            forward facing content of the site and page optimization.
            Additionally, Google, Yahoo and Bing deliver top rankings to
            companies who are active in their industry with{" "}
            <Link to="/social-media" className="text-lg underline">
              {" "}
              Social Media
            </Link>{" "}
            posts,{" "}
            <Link to="/optimized-press-release" className="text-lg underline">
              Press Releases
            </Link>
            , Blog articles, SEO Local marketing, Forum listings and keyword
            tagged images or videos.
          </p>
          <ul className="col-start-1 col-end-2 row-start-3 row-end-4 mt-5 lg:mt-0 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 grid grid-col-1 lg:grid-cols-2">
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Website Optimization</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Forums Posts</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">FAQ Pages</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Site Map (XML &amp; Static)</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Google+</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Pinterest/Instagram</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Facebook</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Tagged YouTube Videos</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">LinkedIn</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Optimized Press Releases</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Twitter</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Keyword Tagged Images</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Website Load Time</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Backlink Programs</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">New Content Pages</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMarkImage}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-2">Onsite Blog Articles</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-5 items-center py-5">
          <div className="w-full lg:w-2/5">
            <GatsbyImage
              image={analyticsImage}
              alt="Digital Marketing Search Program Best SEO"
            />
          </div>
          <div className="w-full lg:w-3/5">
            <h2 className="text-themeBlue-600 text-2xl tracking-wide text-center py-3">
              Successful Digital SEO Marketing Strategies
            </h2>
            <p className="py-3 text-xl">
              Of the many reasons our clients have such successful digital
              marketing SEO programs is our team’s commitment to developing
              strategic plans and applying proven,{" "}
              <Link
                to="/program-success-analytics"
                className="text-xl underline"
              >
                best SEO practices
              </Link>
              . With every campaign, we significantly increase keyword rankings,
              search position and generate new 'organic' Search Engine traffic.
            </p>
            <p className="py-3 text-xl">
              Our services are 100% comprehensive in aligning a website with the
              algorithms or calculators the Search Engines use to determine the
              behind-the-scene analysis into search results of competing
              businesses.
            </p>
            <p className="py-3 text-xl">
              With over a decade of providing online marketing services, Search
              Marketing Resource has delivered digital SEO marketing solutions
              to 1,000's of businesses nationwide. We can do the same for your
              company and substantially increase your online presence rapidly
              and at a competitive rate.
            </p>
          </div>
        </div>
        <div className="pnl_cont light_grey_bg nopad">
          <div className="text-xl">
            <h2 className="text-themeBlue-600 text-3xl font-black text-center py-3">
              EFFECTIVE SEO SERVICES
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
              <div className="wrapper py-5">
                <h3 className="flex items-end pb-3">
                  <GatsbyImage
                    alt="Increase Keyword Search Rankings"
                    image={smpIcons.nodes[0].childImageSharp.gatsbyImageData}
                  />
                  <span className="pl-3 text-2xl">SEO Keyword Research</span>
                </h3>
                <p className="pb-3">
                  Keyword research is the cornerstone to any successful Search
                  Marketing SEO program. Understanding the keyword phrases and
                  variations of each that your target audience uses in online
                  searches is crucial to receiving qualified visitor
                  click-throughs to your website.
                </p>
                <p className="pb-3">
                  Focusing on phrases that are more unique or descriptively
                  specific to your products and services will generate targeted
                  End-User traffic that increase conversions, such as making a
                  call or completing a Contact form.
                </p>
                <p className="pb-3">
                  For each digital SEO marketing program, we use a combination
                  of tools to create a comprehensive list of 3-5 word
                  ‘long-tail’ phrases that are used as the foundation for the
                  optimization of the website and incorporated into all Blog
                  articles, Press Releases and Social Media posts.
                </p>
              </div>
              <div className="wrapper py-5">
                <h3 className="flex items-end pb-3">
                  <GatsbyImage
                    alt="Inbound Marketing Content Writing Services"
                    image={smpIcons.nodes[1].childImageSharp.gatsbyImageData}
                  />
                  <span className="pl-3 text-2xl">
                    SEO Optimized Website Content
                  </span>
                </h3>
                <p className="pb-3">
                  There is no more important component to increasing your search
                  rankings than well-written, keyword rich forward-facing copy,
                  the content the site visitors read. This content is scanned by
                  the Search Engine crawlers every 30 days as Google and Bing
                  index your website against competing businesses who have
                  similar copy.
                </p>
                <p className="pb-3">
                  Additionally, the Search Engines also scan the SEO attributes
                  of each page, title tags, meta descriptions, image names and
                  header tags to further understand the exact products and
                  services your site represents.
                </p>
                <p className="pb-3">
                  Having individual pages written and search engine optimized
                  for each of your services or product lines adds keyword
                  ‘weight’ or ‘density’ to your website and increases your
                  market relevancy.
                </p>
              </div>
              <div className="wrapper py-5">
                <h3 className="flex items-end pb-3">
                  <GatsbyImage
                    alt="Search Backlink Programs"
                    image={smpIcons.nodes[2].childImageSharp.gatsbyImageData}
                  />
                  <span className="pl-3 text-2xl">Backlinks</span>
                </h3>
                <p className="pb-3">
                  A backlink is a link, or URL such as www.yourcompany.com, that
                  when clicked redirects the end-users to a different website.
                  The Search Engines credit websites with qualified backlinks
                  that are found and indexed from other media venues such as
                  Facebook, Twitter, Google+ or LinkedIn.
                </p>
                <p className="pb-3">
                  Backlinks are only counted and awarded credit by the Search
                  Engines if the content surrounding the link is like the copy
                  found on the referring website, or where the link redirects
                  to.
                </p>
                <p className="pb-3">
                  In our digital marketing SEO programs, all{" "}
                  <Link to="/social-media" className="text-xl underline">
                    Social Media
                  </Link>{" "}
                  posts have backlinks placed in the copy. Depending on the
                  platform, the links show up in search engines including the
                  keyword phrases targeted in the marketing plan. This tactic is
                  also utilized in all Press Release publications where up to 3
                  URL’s are embedded in the content.
                </p>
              </div>
              <div className="wrapper py-5">
                <h3 className="flex items-end pb-3">
                  <GatsbyImage
                    alt="SEO Press Releases Writing"
                    image={smpIcons.nodes[3].childImageSharp.gatsbyImageData}
                  />
                  <span className="pl-3 text-2xl">
                    Optimized Press Releases
                  </span>
                </h3>
                <p className="pb-3">
                  <Link
                    to="/optimized-press-release"
                    className="text-xl underline"
                  >
                    Press Releases
                  </Link>{" "}
                  provide an excellent opportunity to create backlinks, build
                  your brand, generate new website visitors, and promote your
                  company to the Search Engines.
                </p>
                <p className="pb-3">
                  In your digital marketing SEO plan with Search Marketing
                  Resource, your SEO Manager will frequently submit a topic and
                  article copy written in AP (Associated Press) format for
                  review. Once approved, the Press Release is submitted to
                  publication vendors such as PR Web, SB Wire and PR Log.
                </p>
                <p className="pb-3">
                  In the Press Release copy we include up to 3 embedded backlink
                  URL’s for Search Engine credit and track the performance of
                  the Release. A report is provided 10 days after the
                  publication with counts for the number of Reads, Impressions
                  and downloads.
                </p>
              </div>
              <div className="wrapper py-5">
                <h3 className="flex items-end pb-3">
                  <GatsbyImage
                    alt="Social Media Services"
                    image={smpIcons.nodes[4].childImageSharp.gatsbyImageData}
                  />
                  <span className="pl-3 text-2xl">Social Media Management</span>
                </h3>
                <p className="pb-3">
                  The Search Engines place merit on those business websites who
                  are active in their industry. New articles that are keyword
                  topical with backlinking URL’s routinely posted to various
                  online venues are indexed by Google, Yahoo and Bing.
                  Businesses who consistently promote their products and
                  services will achieve higher rankings in organic search
                  results ahead of companies that are ‘quiet’ in their online
                  marketplace.
                </p>
                <p className="pb-3">
                  Each month we write and post articles to your{" "}
                  <Link to="/social-media" className="text-xl underline">
                    Social Media
                  </Link>{" "}
                  accounts and Blog pages and also regularly create and upload
                  keyword tagged videos and images to YouTube, Pinterest and
                  Instagram.
                </p>
                <p className="pb-3">
                  This, added to the ongoing published Press Releases we create,
                  generates significant attention from Google, Yahoo and Bing
                  with regards to your online visibility.
                </p>
              </div>
              <div className="wrapper py-5">
                <h3 className="flex items-end pb-3">
                  <GatsbyImage
                    alt="Industry Forum Posting Services"
                    image={smpIcons.nodes[5].childImageSharp.gatsbyImageData}
                  />
                  <span className="pl-3 text-2xl">Industry Forums</span>
                </h3>
                <p className="pb-3">
                  Similar to Social Media posts, locating industry related
                  Forums and other venues that are topically relevant are
                  important to an effective online marketing program.
                </p>
                <p className="pb-3">
                  Beyond the traditional Social Media platforms such as Twitter,
                  Google+, Facebook and LinkedIn, your SEO Manager will explore
                  other opportunities for article posting to further increase
                  your company’s visibility.
                </p>
                <p className="pb-3">
                  As these other resources are located, and approved, we will
                  include them in your ongoing monthly posts. These writings
                  will be keyword specific and include backlink URL’s to your
                  website page(s) and will continue to grow your website’s
                  presence against your competitors.
                </p>
              </div>
              <div className="wrapper py-5">
                <h3 className="flex items-end pb-3">
                  <GatsbyImage
                    alt="SEO Program Keyword Tagged Images"
                    image={smpIcons.nodes[6].childImageSharp.gatsbyImageData}
                  />
                  <span className="pl-3 text-2xl">
                    Pinterest &amp; Instagram
                  </span>
                </h3>
                <p className="pb-3">
                  Having alternative forms of content created and maintained on
                  the most relevant Social Media venues is required to manage a
                  successful and balanced digital Search Engine Marketing
                  approach. In our digital marketing SEO programs, we include
                  not only article writing opportunities but platforms such as
                  Pinterest and Instagram.
                </p>
                <p className="pb-3">
                  Company photos or industry related images are selected and
                  added to your Social Media outlets of choice. The images have
                  engaging content with keyword descriptions, hashtags, and
                  backlink URL to your website.
                </p>
              </div>
              <div className="wrapper py-5">
                <h3 className="flex items-end pb-3">
                  <GatsbyImage
                    alt="Search Optimization YouTube Videos"
                    image={smpIcons.nodes[7].childImageSharp.gatsbyImageData}
                  />
                  <span className="pl-3 text-2xl">YouTube</span>
                </h3>
                <p className="pb-3">
                  End-Users search for products and services using varied
                  resources including YouTube videos. In performing due
                  diligence to select a new service provider or product vendor,
                  a business may search Google videos to see if there are files
                  showing a company’s facility, product presentations or
                  President’s Message.
                </p>
                <p className="pb-3">
                  During the digital marketing SEO program, our team creates
                  industry-related proprietary videos.
                </p>
              </div>
              <div className="wrapper py-5">
                <h3 className="flex items-end pb-3">
                  <GatsbyImage
                    alt="Blogging Programs"
                    image={smpIcons.nodes[8].childImageSharp.gatsbyImageData}
                  />
                  <span className="pl-3 text-2xl">Blogging</span>
                </h3>
                <p className="pb-3">
                  As you may have heard ‘Content is King’ in SEO. This is why
                  having an active Blog is so important to a successful Search
                  Engine Optimization program. Each month, your SEO Manager and
                  team create Blog articles with keywords and copy specific to
                  your products and services.
                </p>
                <p className="pb-3">
                  The posts are added to the main Blog landing page and then a
                  unique, individual page is added with anchor links to other
                  interior pages of the site. The page is also optimized with a
                  title tag, meta copy, header tags and other SEO attributes.
                </p>
                <p className="pb-3">
                  Typically, 2-4 Blog posts are uploaded every month increasing
                  the overall keyword ‘weight’ or density’ of the website
                  helping your search rankings.
                </p>
              </div>
              <div className="wrapper py-5">
                <h3 className="flex items-end pb-3">
                  <GatsbyImage
                    alt="SEO Program Reports"
                    image={smpIcons.nodes[9].childImageSharp.gatsbyImageData}
                  />
                  <span className="pl-3 text-2xl">
                    Google Analytics & Results Oriented Tracking
                  </span>
                </h3>
                <p className="pb-3">
                  We provide real-time analytics of the Search Marketing program
                  success available 24/7 via a password protected admin panel.
                  You may add other users, download reports and run comparable
                  studies of past activity counts.
                </p>
                <p className="pb-3">
                  The information provided includes keyword ranking positions
                  with Google and Bing for all the targeted phrases in your
                  program. The improvement for each phrase in search results as
                  compared to the launch of the program is also tracked and
                  measured.
                </p>
                <p className="pb-3">
                  Other statistics provided are website visitor traffic through
                  Google Analytics, backlinks created, Google Search Console
                  data, Google My Business, the Social Media activity for
                  accounts connected with the platform, and a full website audit
                  specific to any programming issues or duplicate content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FreeAuditForm />
      <FreeQuoteForm />
      <ContactForm />
    </Layout>
  )
}

export default SMPPage

export const pageQuery = graphql`
  query SMPPageById(
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
        relativeDirectory: { eq: "search-marketing-programs" }
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
      relativeDirectory: { eq: "search-marketing-programs" }
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
    analytics: file(
      name: { regex: "/search-marketing-analytics/" }
      relativeDirectory: { eq: "search-marketing-programs" }
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
