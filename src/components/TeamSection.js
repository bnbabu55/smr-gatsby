import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

export const TeamSection = () => {
  const { bgImages, teamMembers } = useStaticQuery(
    graphql`
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
        teamMembers: allWpTeamMember {
          nodes {
            id
            title
            content
            memberRole
          }
        }
      }
    `
  )

  return (
    <>
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
          <div className="title absolute top-5 left-40 lg:top-1/4 lg:left-1/3 text-themeBlue-100 text-2xl lg:text-7xl font-LatoBold text-center">
            Industry Recognized <br />
            Team Leadership
          </div>
          <div className="subtitle absolute top-2/3 right-5 lg:right-20 text-themeOrange text-sm lg:text-4xl font-LatoLight text-center">
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
          {teamMembers.nodes.map(teamMember => {
            return (
              <div
                className="mdl_cont_section bgnone ab-bg mb-5"
                key={teamMember.id}
                id={teamMember.id}
              >
                <div className="conts_wrapper">
                  <div className="content_pnl">
                    <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-left">
                      {teamMember.title}
                    </h2>
                    <span className="text-themeGray-200 text-lg font-Lato">
                      <i>{teamMember.memberRole}</i>
                    </span>
                    <div className="text-themeGray-200 text-lg font-Lato pt-5">
                      {parse(teamMember.content)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default TeamSection
