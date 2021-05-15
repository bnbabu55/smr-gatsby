import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

export const TestimonialSection = () => {
  const { bgImages, testimonials } = useStaticQuery(
    graphql`
      query {
        bgImages: allFile(
          filter: {
            name: { regex: "/testimonials-slide/" }
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
        testimonials: allMarkdownRemark(
          filter: {
            frontmatter: {
              featuredImage: { relativeDirectory: { eq: "testimonials" } }
            }
          }
          sort: { fields: frontmatter___featuredImage___name, order: ASC }
        ) {
          nodes {
            id
            html
            frontmatter {
              title
              memberRole
              companyName
              websiteUrl
            }
          }
        }
      }
    `
  )

  return (
    <>
      <section
        id="hero-banner"
        className="bg-white border-b-4 border-themeGray-50 shadow-themeShadow"
      >
        <div className="relative">
          <figure className="overflow-hidden w-full">
            <GatsbyImage
              image={bgImages.nodes[0].childImageSharp.gatsbyImageData}
              alt="Testimonial slider 1"
            />
          </figure>
          <div className="title absolute top-5 left-10 lg:top-1/4 lg:left-32 text-themeBlue-600 text-2xl lg:text-7xl font-LatoBold text-center">
            Hear What Our <br />
            Clients Say!
          </div>
          <div className="subtitle absolute top-2/3 left-5 lg:left-32 text-themeOrange-400 text-sm lg:text-4xl font-LatoLight text-center">
            Best Customer Service & Highest <br />
            Client Testimonials
          </div>
        </div>
      </section>

      <section className="w-11/12 mx-auto py-10">
        <div className="top_padding_page top_padding page_content_website faq-page top-space">
          <div className="wrapper">
            <div className="top_content">
              <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center">
                CUSTOMER TESTIMONIALS
              </h1>
            </div>
            <div className="py-5">
              <h2 className="text-themeBlue-600 text-2xl font-MontserratSemiBold uppercase pb-5">
                DIGITAL MARKETING & WEBSITE DESIGN CLIENT TESTIMONIALS
              </h2>
              <p className="text-themeGray-200 text-lg font-Lato">
                We have provided a compilation of remarks our customers have
                submitted with regards to the various services the Search
                Marketing Resource team has provided over the years. The
                different requirements performed included Content Writing,{" "}
                <Link
                  to="/search-marketing-programs.php"
                  className="text-themeGray-200 text-lg font-Lato underline"
                >
                  SEO Programs
                </Link>
                {", "}
                optimized{" "}
                <Link
                  to="/press-release-writing-services.php"
                  className="text-themeGray-200 text-lg font-Lato underline"
                >
                  Press Releases
                </Link>
                {", "}
                <Link
                  to="/email-marketing-services.php"
                  className="text-themeGray-200 text-lg font-Lato underline"
                >
                  Email Marketing campaigns
                </Link>
                {", "}
                <Link
                  to="/adwords-management.php"
                  className="text-themeGray-200 text-lg font-Lato underline"
                >
                  Google Adwords management
                </Link>
                {", "}
                <Link
                  to="/social-media-management.php"
                  className="text-themeGray-200 text-lg font-Lato underline"
                >
                  Social Media posts
                </Link>
                {", "}
                <Link
                  to="/web-design-services.php"
                  className="text-themeGray-200 text-lg font-Lato underline"
                >
                  Website Development
                </Link>
                .... all marketing needs requested.
              </p>
            </div>
          </div>
        </div>
        <div className="about py-10">
          {testimonials.nodes.map(testimonial => {
            return (
              <div
                className="mdl_cont_section bgnone ab-bg py-5"
                key={testimonial.id}
                id={testimonial.id}
              >
                <h3 className="text-themeOrange-400 text-2xl font-MontserratSemiBold uppercase text-left">
                  {testimonial.frontmatter.companyName} {" - "}
                  <a
                    href={testimonial.frontmatter.websiteUrl}
                    className="text-themeBlue-600 text-xl font-Montserrat lowercase"
                  >
                    {testimonial.frontmatter.websiteUrl
                      .replace(/^\/\/|^.*?:(\/\/)?/g, "")
                      .replace(/\/$/, "")}
                  </a>
                </h3>
                <div className="text-themeGray-200 text-lg font-Lato py-5">
                  {parse(testimonial.html)}
                </div>
                <h3 className="text-themeBlue-600 text-2xl font-NothingYouCouldDo font-bold uppercase text-left">
                  {testimonial.frontmatter.title}
                </h3>
                <span className="text-themeGray-200 text-lg font-Lato">
                  {testimonial.frontmatter.memberRole}
                </span>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default TestimonialSection
