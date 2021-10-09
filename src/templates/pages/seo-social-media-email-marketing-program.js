import React from "react"
import { graphql } from "gatsby"
import ContactForm from "../../components/ContactForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"

const SEOPage = ({ data: { page, webImage } }) => {
  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <section className="w-11/12 mx-auto py-10">
        <div className="top_padding_page top_padding page_content_website faq-page top-space">
          <div className="wrapper">
            <div className="top_content">
              <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center">
                SEO PROGRAM, SOCIAL MEDIA &amp; EMAIL MARKETING
              </h1>
              <h2 className="text-themeBlue-600 text-2xl font-MontserratSemiBold tracking-wide text-center pt-5">
                Digital Marketing Program #3
              </h2>
            </div>
            <div className="py-5 text-themeGray-200 text-lg font-Lato text-center">
              <p>
                This group of Digital Marketing services is very effective to
                increasing your keyword search rankings quickly, managing your
                Social Media accounts but also the added benefit of lead
                generating by reaching out to prospects and existing customers
                with email offers. Understanding how the different Search Engine
                algorithms for Google, Yahoo and Bing determine the top keyword
                searches is critical for an effective Search Marketing program.
              </p>
              <p className="pt-3">
                This begins by optimizing the SEO attributes for each of the
                individual webpages, creating keyword rich blog/news posts,
                generating Social Media activity and connecting with your client
                and customer base with monthly email campaigns.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <GatsbyImage
                image={webImage.childImageSharp.gatsbyImageData}
                alt="Digital Marketing Program #3"
                layout="intrinsic"
              />
            </div>
            <hr className="w-1/2  mx-auto border-t-2 border-themeOrange-400 my-8" />
          </div>
        </div>
        <div>
          <h2 className="text-themeBlue-600 text-3xl font-MontserratBold tracking-wide text-center py-10">
            SEO PROGRAM &amp; SOCIAL MEDIA CAMPAIGN (H2)
          </h2>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              Website Technical Review
            </h3>
            <p className="pt-3 text-lg">
              The first step of every Search Marketing program is delivering a
              complete website review to identify any SEO issues that need to be
              addressed, as well as opportunities for improving SEO using the
              current best practices. When the website review has been
              completed, we present the results to you and provide you with a
              six-month action plan containing the steps necessary to improve
              your program for you to consider.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              Keyword Selection Process
            </h3>
            <p className="pt-3 text-lg">
              Your dedicated SEO Manager assembles a comprehensive list of
              targeted “long-tail” keyword phrases based on an in-depth review
              of your current web content, target audience, detailed web traffic
              analytics and the web sites of your competitors. These targeted
              keyword phrases–once approved by you–are incorporated into the
              overall optimization of your website and will be part of all new
              Blog post content, Press Releases, Social Media posts, and any
              other content created for your site going forward.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              SEO Performance Dashboard
            </h3>
            <p className="pt-3 text-lg">
              You receive password-protected access to an online portal that
              provides you with comprehensive information about the program
              including ranking information about your selected keyword phrases,
              website traffic, social media account data, and much more. This
              portal allows you to track all aspects of your digital marketing
              program in real-time and allows you to generate custom reports on
              whatever aspects of the program that interest you the most–or have
              your SEO Manager create these reports for you–and deliver them to
              you on a weekly, monthly or quarterly basis.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              Website Page Optimization - SEO Attributes
            </h3>
            <p className="pt-3 text-lg">
              Your dedicated SEO Manager goes through each page of your website
              identifying which SEO optimization updates need to be completed.
              These may include the following changes -
            </p>
            <ul className="w-1/2 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-around py-5 text-lg text-themeBlue-600">
              <li className="flex items-center">
                <span className="pr-3 text-3xl font-bold text-themeOrange-400">
                  &#8250;
                </span>
                Page Names
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
                Keyword Image Names
              </li>
              <li className="flex items-center">
                <span className="pr-3 text-3xl font-bold text-themeOrange-400">
                  &#8250;
                </span>
                Meta Descriptions
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
                Anchor Links
              </li>
            </ul>
            <p className="pt-3 text-lg">
              Updating these SEO attributes with targeted keyword phrases help
              align your site with the current Search Engine algorithms.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              Social Media Management
            </h3>
            <p className="pt-3 text-lg">
              Social Media is a critical aspect for the online visibility for
              your business, and in order to take advantage of this powerful
              marketing tool, you need to have an active Social Media campaign.
              Social Media allows you to share important company news, engage
              your customers, announce new products and services, provide the
              latest industry info, build relationships with your customers, and
              create future business opportunities.
            </p>
            <p className="pt-3 text-lg">
              Different Social Media platforms provide unique opportunities to
              create product and services-specific offsite content with targeted
              keyword phrases. This offsite content provides reputable backlinks
              which direct traffic back to the pages of your website.
            </p>
            <p className="pt-3 text-lg">
              We do this by creating unique Social Media content based on the
              latest blog posts for your website which then are scheduled and
              are posted throughout each month of your Search Marketing program.
              This content helps maximize the SEO and targeted keyword rankings
              for your site through these backlinks (URL’s) from each of the
              most popular Social Media platforms.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              News (Blog) Writing Services
            </h3>
            <p className="pt-3 text-lg">
              A key ingredient of every effective online marketing plan includes
              maintaining an active Blog. Providing new Blog content each month
              allows you to provide the latest news and events about your
              company, as well as your industry. This helps identify your
              company as a “thought-leader” as well as provides additional
              opportunities to insert the targeted keyword phrases into your
              site’s content which increases the keyword “weight” or “density”
              and will help increase the ranking of that phrase in the popular
              Search Engine results.
            </p>
            <p className="pt-3 text-lg">
              Your assigned SEO Manager’s team delivers two to four in-depth
              Blog posts each month for your review and approval. These articles
              contain content relevant to your business and industry to help
              attract your target audience to your website. Once the posts have
              been approved, we upload them to your Blog (News) page.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              Optimized Press Releases
            </h3>
            <p className="pt-3 text-lg">
              An optimized Press Release is not only a great way to communicate
              important news about your business, products and services, but
              also a tremendous opportunity to create qualified “backlinks” to
              increase keyword visibility with Search Engines and build your
              online Brand. SMR transforms your news into a Press Release
              written in AP format and published to hundreds of online eZines,
              local news sites, newswire services, Radio Stations and online
              Broadcast outlets.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              Business Directory Submissions
            </h3>
            <p className="pt-3 text-lg">
              Having your business listed in reputable Local and National
              business directories helps increase your rankings and landing a
              top position in the Search Engine “maps” display.
            </p>
            <p className="pt-3 text-lg">
              It is critical that your business Name, Address and Phone (NAP
              details) are consistent across all directories and other sources
              on the web. Because this information is routinely indexed by
              search engines such as Google, Yahoo and Bing, it compares this
              information to that within other directory sources to confirm that
              your business does exist. If it does not appear, or the
              information is not identical to the NAP information everywhere
              else, the Search Engines might minimize or decide not to display
              your business in the search results.
            </p>
            <p className="pt-3 text-lg">
              For your Digital Marketing program, your dedicated SEO Manager
              identifies the business directories where your company should be
              listed and either adds or updates (if the entry is incorrect) your
              company details and includes a unique description for each
              directory listing.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeOrange-400 underline">
              Backlink Programs
            </h3>
            <p className="pt-3 text-lg">
              A backlink is a link, (a URL such as www.yourcompany.com) that
              directs the end-user who clicks on it to a different
              website–preferably your business website. Search Engines rank
              websites that have a lot of ‘qualified’ backlinks that are indexed
              from other media venues such as Facebook, Twitter, Google My
              Business or LinkedIn higher, but only if the content surrounding
              that link is similar to the content of the destination where the
              link sends the end-user. The credibility of these backlinks is an
              important factor evaluated by the Search Engine algorithms.
            </p>
            <p className="pt-3 text-lg">
              Generating reputable backlinks is central to all of our Search
              Marketing programs. All of the Social Media posts we create target
              the identified keyword phrases and include backlinks within the
              copy. All of our optimized Press Release publications include at
              least three backlink URLs within the content.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="font-Lato text-2xl text-themeBlue-600 underline">
              Effective Email Marketing Management
            </h3>
            <p className="pt-3 text-lg">
              Maintaining contact with your customer base and website visitors
              is significant to creating repeat business and developing new
              opportunities. An effective approach is publishing a monthly
              newsletter with information about your company's service lines,
              expansion, price reductions, special offers or management changes.
            </p>
            <p className="pt-3 text-lg">
              Just submit your email target list, and each month, or when
              preferred, your SEO team will prepare the campaign for
              distribution. Search Marketing Resource manages the newsletter
              ‘push’ by designing the newsletter template, writing the
              publication copy, adding imagery and tracking code to measure the
              overall activity of the emails sent.
            </p>
            <p className="pt-3 text-lg">
              The newsletter offer is published on the date and time requested
              with an overall activity report provided indicating the number of
              emails opened, reads and unsubscribes.
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

export default SEOPage

export const pageQuery = graphql`
  query SEOPageById(
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
