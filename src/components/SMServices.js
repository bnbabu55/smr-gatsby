import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
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
              placeholder: BLURRED
              quality: 90
              formats: [AUTO, WEBP]
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
              height: 380
              placeholder: BLURRED
              quality: 90
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
  `)

  function changeImage(e) {
    const newImageSrc = e.target.getAttribute("data-imagesrc")
    const imageCaption = e.target.getAttribute("alt")
    const imagetitle = e.target.getAttribute("title")

    const targetWrapper = document.querySelector("#myimg")
    const targetImg = document.querySelector("#myimg img")

    if (window.innerWidth > 767) {
      targetWrapper.setAttribute(
        "style",
        "background: url(" + newImageSrc + ") no-repeat left center"
      )
    } else {
      targetImg.setAttribute("src", newImageSrc)
    }
    targetImg.setAttribute("alt", imageCaption)
    targetImg.setAttribute("title", imagetitle)
  }

  return (
    <div id="sm-services" className="py-10 border-b border-gray-300">
      <div className="wrapper grid gap-3 grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto">
        <div className="text-center col-start-1 col-end-2 lg:col-end-4 row-start-1 row-end-2">
          <Link
            to={`/search-marketing-programs`}
            className="text-themeOrange-400 text-5xl font-BebasNeue pt-8"
          >
            Search Marketing SERVICES
          </Link>
          <div className="service_top_text py-5 text-themeBlue-600 text-2xl font-Montserrat font-semibold uppercase text-center">
            Industry Leading Digital Marketing Services
          </div>
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex gap-x-2">
          <div className="w-1/4 overflow-hidden">
            <GatsbyImage
              image={smIcons.nodes[0].childImageSharp.gatsbyImageData}
              alt="Best Practice Search Marketing Programs"
              data-imagesrc={
                smSlides.nodes[0].childImageSharp.gatsbyImageData.images
                  .fallback.src
              }
              onMouseOver={changeImage}
              onFocus={changeImage}
            />
          </div>
          <div className="w-3/4">
            <Link
              className="text-themeOrange-400 text-xl font-RalewaySemiBold"
              to={`/search-marketing-programs`}
              data-imagesrc={
                smSlides.nodes[0].childImageSharp.gatsbyImageData.images
                  .fallback.src
              }
              onMouseOver={changeImage}
              onFocus={changeImage}
            >
              Search Marketing Program
            </Link>
            <p className="text-themeGray-200 text-lg font-Lato">
              SEO marketing solutions and all-inclusive Search Marketing
              programs that significantly increase keyword search rankings,
              ???organic??? website visits, email inquiries and phone calls
            </p>
          </div>
        </div>
        <div className="col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 row-start-3 row-end-4 lg:row-start-2 lg:row-end-3 flex gap-x-2">
          <div className="w-1/4 overflow-hidden">
            <GatsbyImage
              alt="Search Marketing Press Release Writing Icon"
              image={smIcons.nodes[1].childImageSharp.gatsbyImageData}
              data-imagesrc={
                smSlides.nodes[1].childImageSharp.gatsbyImageData.images
                  .fallback.src
              }
              onMouseOver={changeImage}
              onFocus={changeImage}
            />
          </div>
          <div className="w-3/4">
            <Link
              to={`/optimized-press-release`}
              data-imagesrc={
                smSlides.nodes[1].childImageSharp.gatsbyImageData.images
                  .fallback.src
              }
              className="text-themeOrange-400 text-xl font-RalewaySemiBold"
              onMouseOver={changeImage}
              onFocus={changeImage}
            >
              Optimized Press Release
            </Link>
            <p className="text-themeGray-200 text-lg font-Lato">
              SEO ???backlink??? building Press Releases are ???optimized??? with
              keyword phrases and written in AP format with imbedded links
              generating traffic back to the corporate website
            </p>
          </div>
        </div>
        <div className="col-start-1 col-end-2 row-start-4 row-end-5 lg:row-start-3 lg:row-end-4 flex gap-x-2">
          <div className="w-1/4 overflow-hidden">
            <GatsbyImage
              alt="SEO Program Success Icon"
              image={smIcons.nodes[2].childImageSharp.gatsbyImageData}
              data-imagesrc={
                smSlides.nodes[2].childImageSharp.gatsbyImageData.images
                  .fallback.src
              }
              onMouseOver={changeImage}
              onFocus={changeImage}
            />
          </div>
          <div className="w-3/4">
            <Link
              to={`/program-success-analytics`}
              data-imagesrc={
                smSlides.nodes[2].childImageSharp.gatsbyImageData.images
                  .fallback.src
              }
              className="text-themeOrange-400 text-xl font-RalewaySemiBold"
              onMouseOver={changeImage}
              onFocus={changeImage}
            >
              SEO Program Analytics
            </Link>
            <p className="text-themeGray-200 text-lg font-Lato">
              Real-time access to SEO marketing analytics for 24/7 program
              success tracking including website traffic generated, backlinks
              created, ranking position increases and Social Media activity
            </p>
          </div>
        </div>
        <div className="col-start-1 col-end-2 row-start-5 row-end-6 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4 flex gap-x-2">
          <div className="w-1/4 overflow-hidden">
            <GatsbyImage
              alt="Social Media Management Icon"
              image={smIcons.nodes[3].childImageSharp.gatsbyImageData}
              data-imagesrc={
                smSlides.nodes[3].childImageSharp.gatsbyImageData.images
                  .fallback.src
              }
              onMouseOver={changeImage}
              onFocus={changeImage}
            />
          </div>
          <div className="w-3/4">
            <Link
              to={`/social-media`}
              data-imagesrc={
                smSlides.nodes[3].childImageSharp.gatsbyImageData.images
                  .fallback.src
              }
              className="text-themeOrange-400 text-xl font-RalewaySemiBold"
              onMouseOver={changeImage}
              onFocus={changeImage}
            >
              Social Media Management
            </Link>
            <p className="text-themeGray-200 text-lg font-Lato">
              Ongoing Social Media articles (Facebook, LinkedIn, Twitter,
              Google+) and Blog posts are written targeting the keyword phrases
              being promoted in the Search Marketing program
            </p>
          </div>
        </div>
        <div
          id="myimg"
          className="service_img w-full min-h-full col-start-1 col-end-2 row-start-6 row-end-7 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4 self-center lg:-right-40"
          style={{
            background: `url(${smSlides.nodes[0].childImageSharp.gatsbyImageData.images.fallback.src}) no-repeat left center`,
          }}
        >
          <img
            className="mobile_img min-h-full hidden"
            alt="Website SEO Services Company for Optimization"
            src={
              smSlides.nodes[0].childImageSharp.gatsbyImageData.images.fallback
                .src
            }
          />
        </div>
      </div>
    </div>
  )
}

export default SMServices
