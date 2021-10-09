import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ContactForm from "../../components/ContactForm"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const ContentPage = ({ data: { page, checkMarks, content } }) => {
  const checkMarkBlue = checkMarks.nodes[0].childImageSharp.gatsbyImageData
  const checkMarkOrange = checkMarks.nodes[1].childImageSharp.gatsbyImageData

  const contentImage = content.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <section className="w-full mx-auto text-center py-10">
        <h1 className="w-11/12 mx-auto text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center pt-10">
          Content Management Systems Maintenance and Installation
        </h1>
        <div className="w-11/12 mx-auto py-10 text-themeGray-200 text-left text-lg">
          <p className="pb-3">
            A CMS, or Content Management System, is a User-Friendly admin
            interface that allows you to manage the content of your web site
            where you can easily add, delete and modify images, videos, text and
            even create new pages.
          </p>
          <p className="pb-3">
            Maintaining your News and Blog pages is as simple as logging in to
            the admin panel, selecting the page to be edited, paste your copy,
            upload an image or video and click publish. The CMS performs the
            rest and the new content is live on the site. You can also preview
            the edits before publishing .
          </p>
          <p className="pb-3">
            The CMS functionality provides the option of updating your website
            as preferred, keeping page content relevant and images current
            specific to changes in your products, services, locations or staff
            members without the need of your web design team.
          </p>
          <p className="">
            All our website projects are developed on industry recognized
            open-source CMS platforms where you own the software and no
            licensing fees are incurred. We provide full training and back up
            documentation for your future reference.
          </p>
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 text-left text-xl">
          <div className="wrapper py-5">
            <GatsbyImage
              alt="check mark"
              image={checkMarkOrange}
              className="float-left mr-3"
            />
            <h3 className="pl-3 text-2xl pb-3 text-themeOrange-400">
              SECURE ADMIN ACCESS...
            </h3>
            <p className="pb-3">
              The access to the back-end admin panel is a secure password
              protected login. The Search Marketing Resource team developer will
              create the CMS database and functionality within your current host
              environment and setup the secure access credentials.
            </p>
          </div>
          <div className="wrapper py-5">
            <GatsbyImage
              alt="check mark"
              image={checkMarkOrange}
              className="float-left mr-3"
            />
            <h3 className="pl-3 text-2xl pb-3 text-themeOrange-400">
              OPEN SOURCE SOLUTIONS...
            </h3>
            <p className="pb-3">
              Based on your hosting environment, our developers determine the
              most appropriate Content Management solution to support your
              website. We can apply a new CMS to an existing site as well as a
              redesign project.
            </p>
          </div>
          <div className="wrapper py-5">
            <GatsbyImage
              alt="check mark"
              image={checkMarkBlue}
              className="float-left mr-3"
            />
            <h3 className="pl-3 text-2xl pb-3 text-themeBlue-600">
              CMS UPDATES &amp; SCALABILITY...
            </h3>
            <p className="pb-3">
              Whichever Content Management System application is installed such
              as Joomla, WordPress, Drupal, the software is 100% scalable in the
              event you continue to expand your website’s content and
              functionality. Added, the CMS platform applied delivers a
              perpetual auto security update.
            </p>
          </div>
          <div className="wrapper py-5">
            <GatsbyImage
              alt="check mark"
              image={checkMarkBlue}
              className="float-left mr-3"
            />
            <h3 className="pl-3 text-2xl pb-3 text-themeBlue-600">
              USER FRIENDLY ADMIN...
            </h3>
            <p className="pb-3">
              The admin access interface is intuitive and user friendly. Select
              the page to be edited, make your edits and publish, it is that
              easy. No need to programing, HTML code or call your webmaster.
              However, if there are edits you prefer we complete, glad to do so.
            </p>
          </div>
        </div>
        <div className="w-full">
          <GatsbyImage
            image={contentImage}
            alt="CMS Website Installation &amp; Maintenance Programs"
          />
        </div>
      </section>
      <FreeAuditForm />
      <FreeQuoteForm />
      <ContactForm />
    </Layout>
  )
}

export default ContentPage

export const pageQuery = graphql`
  query ContentPageById(
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
    content: file(
      name: { regex: "/content-management-system-websites/" }
      relativeDirectory: { eq: "content-management" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 825
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
