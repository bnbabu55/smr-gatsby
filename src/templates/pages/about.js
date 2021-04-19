import React from "react"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const AboutPage = () => {
  const { bgImages } = useStaticQuery(graphql`
    query {
      bgImages: allFile(
        filter: {
          name: { regex: "/about-slide/" }
          relativeDirectory: { eq: "background" }
        }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 1400
              placeholder: TRACED_SVG
              quality: 90
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <section
        id="hero-banner"
        className="bg-white border-b-4 border-themeGray-100 shadow-themeShadow"
      >
        <div className="relative">
          <figure className="overflow-hidden w-full">
            <GatsbyImage
              image={bgImages.nodes[0].childImageSharp.gatsbyImageData}
              alt="About slider 1"
            />
          </figure>
          <div className="title absolute top-5 left-40 lg:top-1/4 md:left-1/3 text-themeBlue-100 text-2xl lg:text-7xl font-LatoBold text-center">
            Industry Recognized <br />
            Team Leadership
          </div>
          <div className="subtitle absolute top-2/3 left-1/3 text-themeOrange text-sm lg:text-4xl font-LatoLight text-center">
            Experienced & Professional Project Leaders, <br />
            Website Developers & SEO Managers
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto py-10">
        <div className="top_padding_page top_padding page_content_website faq-page top-space">
          <div className="wrapper">
            <div className="top_content">
              <h1 className="text-themeOrange text-5xl font-BebasNeue text-center">
                ABOUT SEARCH MARKETING RESOURCE
              </h1>
            </div>
            <div className="py-5">
              <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase pb-5">
                SEARCH MARKETING RESOURCE'S MISSION
              </h2>
              <p className="text-themeGray-200 text-lg font-Lato">
                Our team’s mission is to significantly promote our client’s web
                presence above the competition and gain a measurable increased
                level of online visibility in their vertical market. Every day,
                we work diligently to better understand the opportunities
                available for improving our customer’s websites, cultivating
                better communication with their target audience and obtaining
                top keyword rankings with the Search Engines.
              </p>
              <p className="text-themeGray-200 text-lg font-Lato pt-3">
                Our goal and objective is to generate ongoing revenue growth for
                every business we represent and deliver a return on investment
                for all services provided.
              </p>
            </div>
          </div>
        </div>
        <div className="team_design light_grey_bg extra-work">
          <div className="wrapper">
            <div className="top_content team_lead">
              <h2 className="text-themeOrange text-5xl font-BebasNeue text-left py-5">
                TEAM LEADERSHIP
              </h2>
              <h3 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-left pb-5">
                MEET OUR PROJECT MANAGERS
              </h3>
              <p className="text-themeGray-200 text-lg font-Lato pb-10">
                Our team leaders have significant tenure in their chosen career
                disciplines. This experience is augmented by the 100’s of
                projects each has completed while here at Search Marketing
                Resource. We actively pursue cutting-edge levels of continued
                education, much of it ‘hands on’, while achieving certification
                and accreditation specific to the technologies studied.
              </p>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="mdl_cont_section bgnone ab-bg" id="team-Gabrielle">
            <div className="conts_wrapper">
              <div className="content_pnl">
                <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-left">
                  GABRIELLE TALLEY
                </h2>
                <span className="text-themeGray-200 text-lg font-Lato">
                  <i>Senior Search Marketing Manager</i>
                </span>
                <p className="text-themeGray-200 text-lg font-Lato pt-5">
                  Gabrielle is a professional marketing consultant with
                  experience in copywriting, SEO, advertising and content
                  marketing for B2B and B2C companies since 2006. She enjoys
                  strategizing effective marketing efforts for SEO and product
                  launches, using analytics to increase results for clients. She
                  graduated with a BFA in Visual Communication.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8" id="team-Puneet">
            <div className="conts_wrapper">
              <div className="content_pnl">
                <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-left">
                  PUNEET JAIN
                </h2>
                <span className="text-themeGray-200 text-lg font-Lato">
                  <i>Technical Director</i>
                </span>
                <p className="text-themeGray-200 text-lg font-Lato pt-5">
                  Puneet has over 17 years’ experience in managing development
                  teams and project management. His knowledge of software
                  application, website design practices, ecommerce platform
                  solutions and hosting environments has been significant to our
                  company’s success. Puneet oversees all development projects
                  and interacts with our customers in the maintenance of their
                  websites.
                </p>
              </div>
            </div>
          </div>
          <div className="mdl_cont_section bgnone ab-bg" id="team-Chris">
            <div className="conts_wrapper">
              <div className="pt-8">
                <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-left">
                  KATRINA GELINO
                </h2>
                <span className="text-themeGray-200 text-lg font-Lato">
                  <i>Senior Graphic Designer</i>
                </span>
                <p className="text-themeGray-200 text-lg font-Lato pt-5">
                  As a graphic designer nearing two decades in the industry,
                  Katrina has a depth of experience in graphic design that
                  covers various mediums beyond website design including logos,
                  company brochures, email newsletters and catalogues. Her
                  exposure in working with businesses in so many vertical
                  markets provides the skillset to create industry leading
                  designs and brand identity. From the initial client interview,
                  design mockups and working alongside the development team,
                  this greatly adds to the cohesiveness of the entire project
                  and finished product.
                </p>
              </div>
            </div>
          </div>
          <div className="mdl_cont_section bgnone ab-bg" id="team-Michael">
            <div className="conts_wrapper">
              <div className="pt-8">
                <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-left">
                  Michael Wilson
                </h2>
                <span className="text-themeGray-200 text-lg font-Lato">
                  <i>Search Marketing Manager</i>
                </span>
                <p className="text-themeGray-200 text-lg font-Lato pt-5">
                  Michael has over 20 years of technical, B2B, and B2C writing
                  and marketing experience in a variety of industries including
                  information technology, computer programming,
                  telecommunications, utilities, insurance, manufacturing,
                  non-profit, government, and retail. He earned a degree from
                  Ohio University in English, has presented at many conferences
                  on writing-related topics, and is Hubspot Certified for
                  Inbound Marketing.
                </p>
              </div>
              <div className="clear"></div>
            </div>
          </div>
          <div className="mdl_cont_section bgnone ab-bg" id="team-Scott">
            <div className="conts_wrapper">
              <div className="pt-8">
                <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-left">
                  Scott Robbins
                </h2>
                <span className="text-themeGray-200 text-lg font-Lato">
                  <i>Print Manager</i>
                </span>
                <p className="text-themeGray-200 text-lg font-Lato pt-5">
                  Scott has 20 years of professional print layout and design
                  experience specific to logo and corporate ‘brand’ development.
                  He has significant experience in planning advertising creative
                  (print and digital), marketing collateral and developing
                  marketing strategies for companies in emerging markets and
                  guiding businesses who are looking to revitalize their
                  commercial message.
                </p>
              </div>
              <div className="clear"></div>
            </div>
          </div>
          <div className="mdl_cont_section bgnone ab-bg" id="team-Kelly">
            <div className="conts_wrapper">
              <div className="pt-8">
                <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-left">
                  KELLY BOYER SAGERT
                </h2>
                <span className="text-themeGray-200 text-lg font-Lato">
                  <i>Copy Writing Manager</i>
                </span>
                <p className="text-themeGray-200 text-lg font-Lato pt-5">
                  Kelly is a professional writer with 26 years of experience,
                  including 22 years of writing online copy. Her copywriting
                  experience encompasses B2B and B2C websites, from small
                  businesses to Fortune 500. She is HubSpot Certified for
                  Inbound Marketing and a member of the prestigious American
                  Society for Journalists and Authors, with 11 years of SEO
                  experience.
                </p>
              </div>
              <div className="clear"></div>
            </div>
          </div>
          <div className="mdl_cont_section bgnone ab-bg" id="team-Robert">
            <div className="conts_wrapper">
              <div className="pt-8">
                <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-left">
                  Robert MacNeil
                </h2>
                <span className="text-themeGray-200 text-lg font-Lato">
                  <i>Consultant</i>
                </span>
                <p className="text-themeGray-200 text-lg font-Lato pt-5">
                  Robert joined the technology industry in the late 90's. In
                  that role, he grew his knowledge base while overseeing
                  business development teams deliver enterprise-level services
                  including network connectivity, hosting solutions and software
                  design. This tenured experience and exposure to the various
                  Dot Com organizations he helped develop, motivated the
                  management team to launch Search Marketing Resource in 2008.{" "}
                </p>
              </div>
              <div className="clear"></div>
            </div>
          </div>
          <div className="mdl_cont_section bgnone ab-bg" id="team-Robert">
            <div className="conts_wrapper">
              <div className="pt-8">
                <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-left">
                  KSri RangaNarayanan
                </h2>
                <span className="text-themeGray-200 text-lg font-Lato">
                  <i>President</i>
                </span>
                <p className="text-themeGray-200 text-lg font-Lato pt-5">
                  Accomplished Leader with Customer focus for Technology
                  Solutions Delivery and IT Operations. Oversee multiple global
                  enterprise projects prioritizing consistent delivery using
                  Agile and continuous improvements. Strong leadership and
                  proven ability to lead initiatives from ideation through
                  delivery while adding clear business values. Nurtured
                  effective Communication and Relationships with 'C' level
                  Executives, key Project Business and IT stakeholders.
                  Currently entrepreneur, leading small business in Digital
                  Marketing Space. Responsible for all Customer Success, IT
                  setup, Project Management and delivering Digital Marketing
                  solutions our small-business clients.
                </p>
              </div>
              <div className="clear"></div>
            </div>
          </div>
          <div className="mdl_cont_section bgnone ab-bg" id="team-Robert">
            <div className="conts_wrapper">
              <div className="pt-8">
                <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-left">
                  Arul Venkatachalam
                </h2>
                <span className="text-themeGray-200 text-lg font-Lato">
                  <i>President - Business Development</i>
                </span>
                <p className="text-themeGray-200 text-lg font-Lato pt-5">
                  Expertise – IT Strategy and business alignment; Enterprise
                  Architecture Roadmap; Product Management; Product Lifecycle
                  Mgmt; Notable work experience – Lead programs with
                  multi-million dollar budgets; high volume 24x7 applications;
                  Micro-service based Future State Architecture; Architecture
                  Reference Models; Enterprise TLM. Recent tech exposure – Pega
                  PCS, Pivotal Cloud Foundry, Azure, AWS, API Gateway,
                  Salesforce,etc.. Recent work has been in Retail Health
                  Insurance, Health Care Management, Member Self Service, and
                  payment solutions. Experience in Healthcare, Pharmaceuticals,
                  Financial and Telecom industries.
                </p>
              </div>
              <div className="clear"></div>
            </div>
          </div>
          <div className="mdl_cont_section bgnone ab-bg" id="team-Robert">
            <div className="conts_wrapper">
              <div className="pt-8">
                <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-left">
                  Narendra Babu Bhaskar
                </h2>
                <span className="text-themeGray-200 text-lg font-Lato">
                  <i>President - Technology</i>
                </span>
                <p className="text-themeGray-200 text-lg font-Lato pt-5">
                  A dynamic global IT leader with progressive career record of
                  over 30 years across Program Management, Delivery Management,
                  Solution Architecture, and People Management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex">
        <hr className="border-4 border-themeBlue-100 w-1/2" />
        <hr className="border-4 border-themeOrange w-1/2" />
      </div>
      <FreeAuditForm />
      <FreeQuoteForm />
    </Layout>
  )
}

export default AboutPage
