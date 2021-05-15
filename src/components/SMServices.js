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
              placeholder: BLURRED
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
              height: 380
              placeholder: BLURRED
              quality: 90
              formats: [AUTO, WEBP, AVIF]
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
    <section id="sm-services" className="pt-5 pb-10 border-b border-gray-300">
      <div className="wrapper grid gap-3 grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto">
        <div className="text-center col-start-1 col-end-2 lg:col-end-4 row-start-1 row-end-2">
          <h2 className="pt-8">
            <a
              href="search-marketing-services.php"
              className="text-themeOrange-400 text-5xl font-BebasNeue"
            >
              Search Marketing SERVICES
            </a>
          </h2>
          <div className="service_top_text py-5">
            <h2 className="text-themeBlue-600 text-2xl font-Montserrat uppercase text-center">
              Industry Leading Digital Marketing Services
            </h2>
          </div>
        </div>
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex gap-x-2">
          <div className="w-1/4">
            <figure className="overflow-hidden">
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
            </figure>
          </div>
          <div className="w-3/4">
            <h3>
              <a
                className="text-themeOrange-400 text-xl font-RalewaySemiBold"
                href="search-marketing-programs.php"
                data-imagesrc={
                  smSlides.nodes[0].childImageSharp.gatsbyImageData.images
                    .fallback.src
                }
                onMouseOver={changeImage}
                onFocus={changeImage}
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
        <div className="col-start-1 col-end-2 lg:col-start-2 lg:col-end-3 row-start-3 row-end-4 lg:row-start-2 lg:row-end-3 flex gap-x-2">
          <div className="w-1/4">
            <figure className="overflow-hidden">
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
            </figure>
          </div>
          <div className="w-3/4">
            <h3>
              <a
                href="press-release-writing-services.php"
                data-imagesrc={
                  smSlides.nodes[1].childImageSharp.gatsbyImageData.images
                    .fallback.src
                }
                className="text-themeOrange-400 text-xl font-RalewaySemiBold"
                onMouseOver={changeImage}
                onFocus={changeImage}
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
        <div className="col-start-1 col-end-2 row-start-4 row-end-5 lg:row-start-3 lg:row-end-4 flex gap-x-2">
          <div className="w-1/4">
            <figure className="overflow-hidden">
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
            </figure>
          </div>
          <div className="w-3/4">
            <h3>
              <a
                href="search-marketing-success.php"
                data-imagesrc={
                  smSlides.nodes[2].childImageSharp.gatsbyImageData.images
                    .fallback.src
                }
                className="text-themeOrange-400 text-xl font-RalewaySemiBold"
                onMouseOver={changeImage}
                onFocus={changeImage}
              >
                SEO Program Analytics
              </a>
            </h3>
            <p className="text-themeGray-200 text-lg font-Lato">
              Real-time access to SEO marketing analytics for 24/7 program
              success tracking including website traffic generated, backlinks
              created, ranking position increases and Social Media activity
            </p>
          </div>
        </div>
        <div className="col-start-1 col-end-2 row-start-5 row-end-6 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4 flex gap-x-2">
          <div className="w-1/4">
            <figure className="overflow-hidden">
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
            </figure>
          </div>
          <div className="w-3/4">
            <h3>
              <a
                href="social-media-management.php"
                data-imagesrc={
                  smSlides.nodes[3].childImageSharp.gatsbyImageData.images
                    .fallback.src
                }
                className="text-themeOrange-400 text-xl font-RalewaySemiBold"
                onMouseOver={changeImage}
                onFocus={changeImage}
              >
                Social Media Management
              </a>
            </h3>
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
    </section>
  )
}

export default SMServices
