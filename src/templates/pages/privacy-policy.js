import React from "react"
import { graphql } from "gatsby"
import ContactSection from "../../components/ContactSection"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteSection from "../../components/FreeQuoteSection"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const PrivacyPage = ({ data: { page, plxImage } }) => {
  const sectionImage = getImage(plxImage.childImageSharp.gatsbyImageData)

  const image2 = convertToBgImage(sectionImage)

  return (
    <Layout className="overflow-x-hidden break-all">
      <Seo seoData={page?.seo} />
      <div className="w-11/12 mx-auto">
        <h1 className="font-BebasNeue font-bold text-5xl text-themeOrange-400 text-center py-8">
          SEARCH MARKETING REOSURCE LLC - PRIVACY POLICY
        </h1>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Your privacy is very important to us. This privacy policy of Search
          Marketing Resource describes the information we gather, how we share
          that information and what we do to protect your information. Use of
          the site indicates agreement with this privacy policy.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          What Information We Gather
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Information we automatically collect via industry standard web log
          files includes the URL from which you visited, the page you are
          visiting, your computer browser information and your IP address. As a
          prospective buyer using offerings on our site (such as our Request for
          Quotes service) to receive information from or about sellers, you are
          required to provide additional information so Search Marketing
          Resource can deliver these services to you.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          This includes contact information, basic demographic information, and
          your purchasing requirements. The information collected varies per the
          different purchasing categories and can be viewed by visiting the
          different forms located throughout our site. We may also ask you for
          feedback about our service, which is collected and stored to allow us
          to continually improve our offerings.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Some of the materials included on this site, including advertising,
          may be served by third parties. These third parties, in the course of
          serving such materials, may collect information regarding your use of
          this site and how you respond to e-mail communications, using methods
          that may include automatic data collection, and may use this
          information in order to present advertisements or other content that
          may be of interest to you on both this site and other web sites.
          Collection, use, disclosure and security of information collected by
          third parties are subject to the privacy policies of those third
          parties.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          How Do We Use Your Information
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Search Marketing Resource uses the information we gather to put buyers
          and sellers into contact with one another, to provide other features
          and functionality of this site, to improve your experience on our site
          through analysis and communication, for other purposes described in
          this policy, and for purposes disclosed to you when you provide
          information.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          <strong>To Facilitate Transactions.</strong> Buyers or vendors will
          receive emails and other communications from us to fulfill or
          facilitate the purpose for which the information was provided or a
          request to use a service on this site. You cannot opt out of emails
          that are necessary to provide our services. By using Search Marketing
          Resource's services offered on this site, you agree that we may use
          your personal information to contact you and deliver information to
          you related to those services.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          <strong>Analysis.</strong> In our ongoing effort to improve the
          content and services we offer, we continually analyze the information
          we receive to identify trends and patterns in user behavior. Your
          personal information, when used in such a manner, is aggregated with
          others to amass enough data for such analysis and is not personally
          identifiable.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          <strong>Testimonials and Feedback.</strong> We sincerely appreciate
          the feedback we receive from our users. Your feedback, both positive
          and negative, is forwarded to the appropriate departments at Search
          Marketing Resource as necessary so we can continue to monitor and
          improve the service we provide. We may also share testimonials in our
          marketing literature but will do so without including personally
          identifiable information unless we have expressly received your
          permission to do so.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          <strong>Newsletters.</strong> Search Marketing Resource offers
          valuable content through email newsletters for both buyers and
          vendors. If you no longer wish to receive any newsletter, we encourage
          you to opt out of these communications as provided in the email.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          <strong>Email Services.</strong> Search Marketing Resource may offer
          services such as "Tell a Friend" that allow visitors to notify other
          people via e-mail about its services. When an email address is
          provided for these communications, it is not used by us for any
          purpose other than to forward the requested information.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          How We Share Your Information With Others
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Our customer information is an important part of our business. As a
          result, we only disclose this information as described in this
          section. Our sharing of information to outside parties is described
          below.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          <strong>Prospective Buyers.</strong> To facilitate our business of
          matching buyers and vendors, prospective buyers using our services
          will be provided information about vendors relevant to the buyer's
          request or inquiry using such services. This includes supplier contact
          information, company background information and, where appropriate,
          ratings or reviews.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          <strong>Vendors.</strong> Similarly, vendors whose products or
          services are relevant to a prospective buyer's request, and/or
          marketers, resellers and other service providers performing marketing,
          fulfillment and/or similar services on behalf of such vendors with
          respect to the prospective buyer's request, may be provided with that
          prospective buyer's information. We contractually limit use of the
          buyer's information (including all forms of contact information
          submitted) by the seller to communicating with the buyer, or
          permitting its marketers, resellers or other service providers to
          communicate with the buyer, about their desired purchase. In addition,
          vendors may receive information about buyers in a manner that does not
          disclose personally identifiable information. Examples include data
          that are aggregated across a group of buyers or feedback that is
          provided without attribution to a specific person or company.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          <strong>Agents.</strong> From time to time, we may use the services of
          third-party companies to help facilitate our business activities.
          These include bill collection services, affiliate or incentive program
          providers, customer service organizations, e-mail and postal mail
          brokers, and marketing service providers. These companies are subject
          to confidentiality agreements with us and are prohibited from using
          the information we provide for any reason except to perform the
          functions that Search Marketing Resource has outlined for them.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          <strong>Legal Requests.</strong> Search Marketing Resource is
          interested in protecting its members and the community at large. We
          will release account and other personal information to legal
          authorities when we believe it is appropriate to comply with the law,
          rules or regulations or to protect persons or property. In addition,
          Search Marketing Resource may choose to release information about you
          to relevant parties in relation to investigations of fraud, piracy or
          other unlawful activity.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Information Security
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Your information is stored on servers that are protected against
          unauthorized access through the use of safeguards such as "firewalls,"
          encryption and Secure Socket Layers. We utilize many security
          techniques to protect your personal information. However, it is
          impossible to guarantee a perfect security system.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Legal Disclaimer
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Although we have attempted to address the various privacy-related
          issues you are likely to encounter, we cannot ensure that all of your
          private communications and other personal information will never be
          disclosed in ways not otherwise described in this privacy policy.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Therefore, although we use industry standard practices to protect your
          privacy, we do not promise, and you should not expect, that your
          personal information or private communications will always remain
          private from unauthorized access.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Also, Search Marketing Resource contains links to other sites. Please
          be aware that we are not responsible for the privacy practices of
          these other sites. We encourage you to read the privacy statements of
          each and every Web site that collects personally identifiable
          information. This privacy policy applies to information collected by
          Search Marketing Resource alone.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Notification of Change
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          We may amend this privacy policy for minor changes at any time by
          posting the amended terms on the Site. All minor amended terms shall
          be effective upon posting. If we make material changes to this policy,
          we will notify you by email or by posting a prominent notice for 30
          days prior to the change taking effect.
        </p>
      </div>
      <FreeAuditForm />
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...image2}
        preserveStackingContext
        id="parallax-section"
        className="w-full bg-fixed bg-blend-darken text-white text-center font-LatoBlack flex flex-col gap-y-8 justify-center items-start"
      >
        <div className="mx-auto flex flex-col justify-center items-center gap-y-8 my-8">
          <div className="font-BebasNeue font-bold text-5xl text-white py-5">
            ABOUT SEARCH MARKETING RESOURCE, LLC
          </div>
          <div className="text-sm lg:text-2xl font-Lato text-white italic">
            TEAM EXPERIENCE - PROJECT LEADERSHIP - INDUSTRY RECOGNIZED
          </div>
          <p className="w-9/12 mx-auto text-white text-xl pb-3">
            Search Marketing Resource is a national provider of online marketing
            solutions driving increased traffic through SEO programs and website
            graphic design for business-to-business, industrial, consumer and
            ecommerce focused vertical markets.
          </p>
          <p className="w-9/12 mx-auto text-white text-xl pb-3">
            Our website development team leaders, Search Marketing managers,
            senior programmers and graphic artists are well tenured having
            provided services to 1,000’s of companies nationwide.
          </p>
        </div>
      </BackgroundImage>

      <FreeQuoteSection />
      <ContactSection />
    </Layout>
  )
}

export default PrivacyPage

export const pageQuery = graphql`
  query PrivacyPageById(
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
    plxImage: file(
      name: { regex: "/-parallax/" }
      relativeDirectory: { eq: "about" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 1400
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
