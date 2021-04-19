import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const SMServices = () => {
  const { smIcons, smSlides } = useStaticQuery(graphql`
    query {
      smIcons: allFile(
        filter: {
          name: { regex: "/-icon/" }
          relativeDirectory: { eq: "smservices" }
        }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 152
              placeholder: TRACED_SVG
              quality: 90
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      smSlides: allFile(
        filter: {
          name: { regex: "/-slider/" }
          relativeDirectory: { eq: "smservices" }
        }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 640
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
    <section id="sm-services" className="pt-5 pb-10 border-b border-gray-300">
      <div className="wrapper">
        <div className="top_content flex flex-col justify-center items-center text-center">
          <h1 className="pt-8">
            <a
              href="search-marketing-services.php"
              className="text-themeOrange text-5xl font-BebasNeue"
            >
              Search Marketing SERVICES
            </a>
          </h1>
          <div className="service_top_text py-5">
            <h2 className="text-themeBlue-text text-2xl font-Montserrat uppercase text-center">
              Industry Leading Digital Marketing Services
            </h2>
          </div>
        </div>
      </div>
      <div className="service_pnl md:ml-12 flex flex-col md:flex-row items-center">
        <div className="service_content w-8/12">
          <div className="service_content_inner grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
            <div className="left flex">
              <div className="img_pnl">
                <figure className="overflow-hidden">
                  <GatsbyImage
                    image={smIcons.nodes[0].childImageSharp.gatsbyImageData}
                    alt="Best Practice Search Marketing Programs"
                    data-image={
                      smSlides.nodes[0].childImageSharp.gatsbyImageData
                    }
                  />
                </figure>
              </div>
              <div className="text pl-5">
                <h3>
                  <a
                    className="text-themeOrange text-xl font-Raleway"
                    href="search-marketing-programs.php"
                    data-image={
                      smSlides.nodes[0].childImageSharp.gatsbyImageData
                    }
                  >
                    Search Marketing Program
                  </a>
                </h3>
                <p className="text-themeGray-200 text-lg font-Lato">
                  SEO marketing solutions and all-inclusive Search Marketing
                  programs that significantly increase keyword search rankings,
                  ‘organic’ website visits, email inquiries and phone calls
                </p>
              </div>
            </div>
            <div className="left flex">
              <div className="img_pnl">
                <figure className="overflow-hidden">
                  <GatsbyImage
                    alt="Search Marketing Press Release Writing Icon"
                    image={smIcons.nodes[1].childImageSharp.gatsbyImageData}
                    data-image={
                      smSlides.nodes[1].childImageSharp.gatsbyImageData
                    }
                  />
                </figure>
              </div>
              <div className="text pl-5">
                <h3>
                  <a
                    href="press-release-writing-services.php"
                    data-image={
                      smSlides.nodes[1].childImageSharp.gatsbyImageData
                    }
                    className="text-themeOrange text-xl font-Raleway"
                  >
                    Optimized Press Release
                  </a>
                </h3>
                <p className="text-themeGray-200 text-lg font-Lato">
                  SEO ‘backlink’ building Press Releases are ‘optimized’ with
                  keyword phrases and written in AP format with imbedded links
                  generating traffic back to the corporate website
                </p>
              </div>
            </div>
            <div className="right flex">
              <div className="img_pnl">
                <figure className="overflow-hidden">
                  <GatsbyImage
                    alt="SEO Program Success Icon"
                    image={smIcons.nodes[2].childImageSharp.gatsbyImageData}
                    data-image={
                      smSlides.nodes[2].childImageSharp.gatsbyImageData
                    }
                  />
                </figure>
              </div>
              <div className="text pl-5">
                <h3>
                  <a
                    href="search-marketing-success.php"
                    data-image={
                      smSlides.nodes[2].childImageSharp.gatsbyImageData
                    }
                    className="text-themeOrange text-xl font-Raleway"
                  >
                    SEO Program Analytics
                  </a>
                </h3>
                <p className="text-themeGray-200 text-lg font-Lato">
                  Real-time access to SEO marketing analytics for 24/7 program
                  success tracking including website traffic generated,
                  backlinks created, ranking position increases and Social Media
                  activity
                </p>
              </div>
            </div>
            <div className="right flex">
              <div className="img_pnl">
                <figure className="overflow-hidden">
                  <GatsbyImage
                    alt="Social Media Management Icon"
                    image={smIcons.nodes[3].childImageSharp.gatsbyImageData}
                    data-image={
                      smSlides.nodes[3].childImageSharp.gatsbyImageData
                    }
                  />
                </figure>
              </div>
              <div className="text pl-5">
                <h3>
                  <a
                    href="social-media-management.php"
                    data-image={
                      smSlides.nodes[3].childImageSharp.gatsbyImageData
                    }
                    className="text-themeOrange text-xl font-Raleway"
                  >
                    Social Media Management
                  </a>
                </h3>
                <p className="text-themeGray-200 text-lg font-Lato">
                  Ongoing Social Media articles (Facebook, LinkedIn, Twitter,
                  Google+) and Blog posts are written targeting the keyword
                  phrases being promoted in the Search Marketing program
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-48 w-4/12">
          <GatsbyImage
            className="mobile_img"
            alt="Best Practice Search Marketing Programs"
            image={smSlides.nodes[0].childImageSharp.gatsbyImageData}
          />
        </div>
      </div>
    </section>
  )
}

export default SMServices
