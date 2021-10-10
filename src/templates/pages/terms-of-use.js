import React from "react"
import { graphql } from "gatsby"
import ContactSection from "../../components/ContactSection"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const TermsPage = ({ data: { page, plxImage } }) => {
  const sectionImage = getImage(plxImage.childImageSharp.gatsbyImageData)

  const image2 = convertToBgImage(sectionImage)

  return (
    <Layout className="overflow-x-hidden break-all">
      <Seo seoData={page?.seo} />
      <div className="w-11/12 mx-auto">
        <h1 className="font-BebasNeue font-bold text-5xl text-themeOrange-400 text-center py-8">
          SEARCH MARKETING REOSURCE LLC - TERMS
        </h1>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          This page states the Terms and Conditions under which you may utilize
          this Web site. Please read this page carefully. If you do not accept
          the Terms and Conditions stated here, do not use this site. The Search
          Marketing Resource and its subsidiaries and affiliates (the "Company")
          reserve the right to revise these Terms and Conditions at any time by
          updating this posting. You should visit this page periodically to
          review the Terms and Conditions, because they are binding on you.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Section 1. Use of Content.
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          The Company authorizes you to view and download the materials on this
          Web site (the "Web site") solely for your personal, non-commercial
          use. All names, logos and marks appearing in this site, except as
          otherwise noted, are trademarks owned or used under license by the
          Company or its affiliates in the geographies where the Company markets
          products bearing such trademarks. The use or misuse of these
          trademarks or any other content on this site, except as provided in
          these terms and conditions or in the site content, is strictly
          prohibited.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          You may not sell or modify the content of this Web site or reproduce,
          display, publicly perform, distribute, or otherwise use the materials
          in any way for any public or commercial purpose without the Company's
          written permission. The use of this content on any other Web site or
          in a networked computer environment for any purpose is prohibited. You
          may not copy or adapt the code in any programming language that the
          Company creates to generate its pages or content. It is also protected
          by the Company's copyright.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Section 2. Acceptable Site Use.
        </h2>
        <ul className="w-11/12 mx-auto text-lg list-roman pb-3">
          <li>
            <strong>Security Rules.</strong> Users are prohibited from violating
            or attempting to violate the security of the Web site, including,
            without limitation,
            <ul className="w-11/12 mx-auto text-lg list-decimal">
              <li>
                accessing data not intended for such user or logging into a
                server or account which user is not authorized to access,
              </li>
              <li>
                attempting to probe, scan or test the vulnerability of a system
                or network or to breach security or authentication measures
                without proper authorization,
              </li>
              <li>
                attempting to interfere with service to any user, host or
                network, including, without limitation, via means of submitting
                a virus or "trojan horse" to the Web site, overloading,
                "flooding", "mail bombing" or "crashing", or
              </li>
              <li>
                sending unsolicited electronic mail, including promotions and/or
                advertising of products or services. Violations of system or
                network security may result in civil or criminal liability. The
                Company will investigate occurrences that may involve such
                violations and may involve, and cooperate with, law enforcement
                authorities in prosecuting users who are involved in such
                violations.
              </li>
            </ul>
          </li>
          <li>
            <strong>General Rules.</strong> Users may not use the Web site in
            order to transmit, distribute, store or destroy material
            <ul className="w-11/12 mx-auto text-lg list-decimal">
              <li>
                that could constitute or encourage conduct that would be
                considered a criminal offense or violate any applicable law or
                regulation,
              </li>
              <li>
                in a manner that will infringe the copyright, trademark, trade
                secret or other intellectual property rights of others or
                violate the privacy or publicity of other personal rights of
                others, or
              </li>
              <li>
                that is libelous, defamatory, pornographic, profane, obscene,
                threatening, abusive or hateful.
              </li>
            </ul>
          </li>
        </ul>

        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Section 3. Liability.
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          The material in this Web site may contain inaccuracies or
          typographical errors. The Company makes no representations about the
          accuracy, reliability, completeness, or timeliness of the Web site or
          its content. The use of the Web site is at your own risk. Changes are
          periodically made to the Web site and may be made at any time.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto uppercase">
          THE COMPANY DOES NOT WARRANT THAT THE WEB SITE WILL OPERATE ERROR-FREE
          OR THAT THIS WEB SITE AND ITS SERVER ARE FREE OF COMPUTER VIRUSES OR
          OTHER HARMFUL MECHANISMS. IF YOUR USE OF THE WEB SITE RESULTS IN THE
          NEED FOR SERVICING OR REPLACING EQUIPMENT OR DATA, THE COMPANY IS NOT
          RESPONSIBLE FOR THOSE COSTS. THE WEB SITE IS PROVIDED ON AN 'AS IS'
          BASIS WITHOUT ANY WARRANTIES WHATSOEVER. THE COMPANY, TO THE FULLEST
          EXTENT PERMITTED BY LAW, DISCLAIMS ALL WARRANTIES, INCLUDING THE
          WARRANTY OF MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES RIGHTS,
          AND THE WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE. THE COMPANY
          MAKES NO WARRANTIES ABOUT THE ACCURACY, RELIABILITY, COMPLETENESS, OR
          TIMELINESS OF THE CONTENT, SERVICES, SOFTWARE, TEXT, GRAPHICS, AND
          LINKS.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Section 4. Disclaimer of Consequential Damages.
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto uppercase">
          IN NO EVENT SHALL THE COMPANY, ITS SUPPLIERS, OR ANY THIRD PARTIES
          MENTIONED AT THIS WEB SITE BE LIABLE FOR ANY DAMAGES WHATSOEVER
          (INCLUDING, WITHOUT LIMITATIONS, INCIDENTAL AND CONSEQUENTIAL DAMAGES,
          LOST PROFITS, OR DAMAGES RESULTING FROM LOST DATA OR BUSINESS
          INTERRUPTION) RESULTING FROM THE USE OR INABILITY TO USE THE WEB SITE
          AND THE MATERIAL, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY
          OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE
          POSSIBILITY OF SUCH DAMAGES.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Section 5. User Submissions.
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Any communication or other material you transmit to the Company via
          electronic mail or otherwise is unsolicited by the Company and is
          deemed non-confidential. The Company does not screen communications in
          advance and is not responsible for screening or monitoring material
          posted by users. If notified by a user of communications which
          allegedly do not conform to this Agreement, the Company may
          investigate the allegation and determine in good faith and its sole
          discretion whether to remove or request the removal of the
          communication. The Company has no liability or responsibility to users
          for performance or nonperformance of such activities.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          The Company reserves the right to expel users and prevent their
          further access to the Web site for violating this Agreement or the law
          and the right to remove, at its sole discretion, communications which
          are abusive, illegal, obscene, pornographic, threatening, or
          disruptive. By transmitting or posting any communication or material
          to this Web site, you agree that the Company or any of its affiliates
          may use your communication as material for any purpose, including
          reproduction, transmission, publication, broadcast and posting.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Section 6. Links to Outside Web Sites.
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          The Web site contains links to third party Web sites. These links are
          provided solely as a convenience to you and not as an endorsement by
          the Company of the contents on such third party Web sites. The Company
          is not responsible for the content of linked third party sites and
          does not make any representations regarding the content or accuracy of
          content on such third party Web sites. If you decide to access linked
          third party Web sites, you do so at your own risk.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Section 7. Limitation of Liability.
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          The aggregate liability for the Company to you for all claims arising
          from the use of the materials in this Web site will not be greater
          than the amount you paid to access this Web site.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Section 8. Indemnity
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          You agree to defend, indemnify, and hold harmless the Company, it's
          officers, directors, employees and agents, from and against any
          claims, actions or demands, including without limitation reasonable
          legal and accounting fees, alleging or resulting from your use of the
          material or your breach of the terms of this Agreement. The Company
          shall provide notice to you promptly of any such claim, suit, or
          proceeding and shall assist you, at your expense, in defending any
          such claim, suit or proceeding.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Section 9. Other.
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          The Company makes no claims the content is appropriate or may be
          downloaded outside of the United States. Access to this Web site may
          not be legal by certain persons or in certain countries. If you access
          the Web site from outside of the United States, you do so at your own
          risk and are responsible for compliance with the laws of your
          jurisdiction. This Agreement is governed by the internal substantive
          laws of the State of California, without respect to its conflict of
          laws principles.
        </p>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Jurisdiction for any claims arising under this agreement shall lie
          exclusively with the state or federal courts. If any provision of this
          Agreement is found to be invalid by any court having competent
          jurisdiction, the invalidity of such provision shall not affect the
          validity of the remaining provisions of this Agreement, which shall
          remain in full force and effect. No waiver of any term of this
          Agreement shall be deemed a further or continuing waiver of such term
          or any other term. This Agreement constitutes the entire Agreement
          between you and the Company with respect to the use of the Web site.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Section 10. Refund Policy
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Refunds aren't applicable to this business type. We work with clients
          one-on-one to satisfy the work requirements.
        </p>
        <h2 className="text-xl text-themeBlue-600 font-bold pb-3">
          Section 11. Shipping Policy
        </h2>
        <p className="pb-3 text-themeGray-200 text-lg font-Lato mx-auto">
          Shipping isn't applicable to this business type. We deliver the
          services to the client via a cloud-based delivery portal and updates
          through email.
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

      <FreeQuoteForm />
      <ContactSection />
    </Layout>
  )
}

export default TermsPage

export const pageQuery = graphql`
  query TermsPageById(
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
