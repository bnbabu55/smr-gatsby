import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ContactForm from "../../components/ContactForm"
import FreeAuditForm from "../../components/FreeAuditForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const EmailMktPage = ({ data: { page, emIcons } }) => {
  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <section className="w-11/12 mx-auto py-10">
        <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center pt-10">
          Email Marketing Services
        </h1>
        <div className="py-10 text-themeGray-200 text-lg font-Lato">
          <h3 className="font-semibold text-2xl text-themeBlue-600 text-left pb-3">
            EFFECTIVE EMAIL MARKETING MANAGEMENT
          </h3>
          <p className="pb-3">
            Maintaining contact with your customer base and website visitors is
            significant to creating repeat business and developing new
            opportunities. An effective approach is publishing a monthly
            newsletter with information about your company's new service lines,
            expansion, price reductions, special offers or management changes.
          </p>
          <p>
            Search Marketing Resource manages the newsletter campaigns for many
            of its clients. We design the newsletter template, write the
            publication copy, add imagery and tracking code to measure the
            overall activity of the emails sent.
          </p>
        </div>
        <div className="text-lg">
          <div className="wrapper py-5">
            <h3 className="flex text-2xl items-start pb-3 text-themeBlue-600 font-semibold underline">
              Message Leads with Email Marketing Services
            </h3>
            <GatsbyImage
              alt="Email Marketing Management Services and Solutions"
              image={emIcons.nodes[0].childImageSharp.gatsbyImageData}
              className="mr-3"
              style={{ float: "left" }}
            />
            <p className="pb-3 text-justify">
              The first step of an Email Marketing campaign is to assemble the
              contact list. The names and emails can be obtained from various
              sources, such as opt-ins from your website, a confirmed opt-in
              list from a reliable resource, Social Media contacts, prospective
              inquiries and your current customer base. If not already active,
              adding opt-in name and email fields is very effective for adding
              new subscribers.
            </p>
            <p className="pb-3">
              The list should be created as an excel file with columns including
              first name, last name, company name and email address. You can add
              other attributes to target specific groups with different
              newsletter topics. Additional demographics may be targeted such as
              the revenue volume of the business, the position title of the
              contact person, geographic area or SIC industry. A unique
              newsletter created with a message tailored to the target audience
              is a powerful tool.
            </p>
          </div>
          <div className="wrapper py-5">
            <h3 className="flex text-2xl items-start pb-3 text-themeBlue-600 font-semibold underline">
              Newsletter Content Writing
            </h3>
            <GatsbyImage
              alt="Email Newsletter Design and Content Writing"
              image={emIcons.nodes[1].childImageSharp.gatsbyImageData}
              className="mr-3"
              style={{ float: "left" }}
            />
            <p className="pb-3 text-justify">
              Our content editors will assist in writing the email newsletter
              copy partially or entirely, whichever is your preference.
              Typically, we have a messaging discussion to determine the
              newsletter topic and the editor will complete the body of the copy
              for your review. The content will be written to prompt the reader
              to click through on any of the links contained within the
              newsletter. These click-throughs are tracked in our reporting
              details. Topics should be of interest to the recipients.
            </p>
            <p className="pb-3">
              Not just discounted product or services alerts, but information
              the reader would find useful for their business or in their due
              diligence in selecting a provider. Also included in the copy will
              be industry-related imagery the editor will either select from a
              hi-res vendor such as Shutterstock or the images you have
              provided. Once the content has been completed, we will submit the
              content for your approval.
            </p>
          </div>
          <div className="wrapper py-5">
            <h3 className="flex text-2xl items-start pb-3 text-themeBlue-600 font-semibold underline">
              Newsletter Design Template
            </h3>
            <GatsbyImage
              alt="Email Marketing Newsletter Design and Marketing Solutions"
              image={emIcons.nodes[2].childImageSharp.gatsbyImageData}
              className="mr-3"
              style={{ float: "left" }}
            />
            <p className="pb-3 text-justify">
              The design and content layout of the Newsletter template is
              managed by our graphic artists who work directly with your team to
              develop the branded look of the HTML email. The design will
              incorporate your logo and the 'look and feel' of your current
              website - colors, font style, etc. As the template is intended to
              support ongoing Newsletter submissions, sections of the design
              will contain static content and website page navigation links.
            </p>
            <p className="pb-3">
              The graphic designer will submit a proof(s) of the Newsletter
              graphical attributes and overall layout of the content sections
              for review. When approved, the content and images will be added
              for final comment. The Newsletter is then converted to an HTML
              format with the tracking codes to count how many of the Newsletter
              emails were delivered, those that bounced or invalid addresses and
              how many were read or opened.
            </p>
          </div>
          <div className="wrapper py-5">
            <h3 className="flex text-2xl items-start pb-3 text-themeBlue-600 font-semibold underline">
              Email List Upload & Sending
            </h3>
            <GatsbyImage
              alt="Email Marketing List Management and Sending Services"
              image={emIcons.nodes[3].childImageSharp.gatsbyImageData}
              className="mr-3"
              style={{ float: "left" }}
            />
            <p className="pb-3 text-justify">
              Through our mail servers, we setup an account unique to your email
              contact list and Newsletter design template(s). Each email
              marketing campaign is designated with the subject line header.
              This is the introduction the recipient will view in their inbox
              and should be eye catching in phrasing. The email list is uploaded
              and the appropriate Newsletter is added with the sender’s return
              address. If the list is already on file, then the emails are
              selected in total or a segmented group selected.
            </p>
            <p className="pb-3">
              The Newsletter is formatted in both HTML and Text formats because
              some email servers will not accept mail that has HTML code in the
              content. We complete a series of test-sends to your team for final
              approval before releasing the campaign to the entire list.
              Depending on your target audience, different times or days of the
              week might be preferable. Tuesdays and Thursdays are generally the
              best days to send a Newsletter for business to business services,
              while a consumer-focused audience might be best sent at night or
              on weekends.
            </p>
          </div>
          <div className="wrapper py-5">
            <h3 className="flex text-2xl items-start pb-3 text-themeBlue-600 font-semibold underline">
              Email Tracking & Activity Reports
            </h3>
            <GatsbyImage
              alt="Email Marketing Activity Tracking and Reporting"
              image={emIcons.nodes[4].childImageSharp.gatsbyImageData}
              className="mr-3"
              style={{ float: "left" }}
            />
            <p className="pb-3 text-justify">
              The Search Marketing Resource team sends millions of Newsletters
              marketing emails each month. Each individual email is tracked to
              determine if the email address was correct, the email was received
              and if the message was read (opened). In addition, the copy or
              images may have URL links that, if clicked, refer the End-Users to
              specific pages of your website. In viewing your Google Analytics,
              or other website traffic activity software, you will be able to
              monitor a significant increase in ‘Referred’ visits to your site.
            </p>
            <p className="pb-3">
              This is generated from End-Users clicking on the active links in
              the Newsletter and being redirected to your site. Also, within a
              few days after the publishing of the Newsletter, your campaign
              manager will generate a statistical accounting of all activity
              recorded, based on the number of actual recipients and emails
              opened.
            </p>
          </div>
          <div className="wrapper py-5">
            <h3 className="flex text-2xl items-start pb-3 text-themeBlue-600 font-semibold underline">
              Building Brand Recognition
            </h3>
            <GatsbyImage
              alt="Email Marketing Newsletter Campaigns and Repurposing"
              image={emIcons.nodes[5].childImageSharp.gatsbyImageData}
              className="mr-3"
              style={{ float: "left" }}
            />
            <p className="pb-3 text-justify">
              Routinely publishing news and activity about your company not only
              maintains a connection with your customer base, it helps cultivate
              new business opportunities. From these email campaigns, our
              clients often comment that a new account was created with a
              company that had been receiving their Newsletter for over 6 months
              and now the need was there. You will also be updated to changes in
              the company if an email is no longer active but a new contact name
              is provided.
            </p>
            <p className="pb-3">
              Repurposing the Newsletter copy and images is effective for a Blog
              article and Social Media post to Google My Business, Facebook,
              LinkedIn and Twitter. The images can even be uploaded to Pinterest
              with the keywords tagged. As your email marketing campaigns
              progress, you will note which topics resonate the strongest with
              your audience and generate the most response. An active SEO
              program, including optimized Press Releases and Email Marketing,
              is always successful in generating higher keyword search rankings
              and building your Brand.
            </p>
          </div>
          <div className="clear-both"></div>
        </div>
      </section>
      <FreeAuditForm />
      <ContactForm />
    </Layout>
  )
}

export default EmailMktPage

export const pageQuery = graphql`
  query EmailMktPageById(
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
    emIcons: allFile(
      filter: { relativeDirectory: { eq: "email-marketing" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 250
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`
