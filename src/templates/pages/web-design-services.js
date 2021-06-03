import React from "react"
import { graphql, Link } from "gatsby"
import FreeAuditForm from "../../components/FreeAuditForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ContactForm from "../../components/ContactForm"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import SwiperCore, { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import parse from "html-react-parser"

SwiperCore.use([Autoplay, Pagination])

const WebDesignPage = ({
  data: { page, bgImage, checkMark, sbClient, slides, clientSlides },
}) => {
  const pluginImage = getImage(bgImage.childImageSharp.gatsbyImageData)

  const image = convertToBgImage(pluginImage)

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...image}
        preserveStackingContext
        id="WebDesignPage"
        className="w-full text-gray-800 font-LatoBlack py-20 flex flex-col gap-y-8 justify-center items-start border-b-4 border-themeGray-50 shadow-themeShadow mb-8"
      >
        <div className="text-themeBlue-600 mt-20 text-2xl lg:text-7xl pl-12 lg:pl-32 font-LatoBold text-center">
          Award Winning <br />
          Website Design !
        </div>
        <div className="text-themeOrange-400 text-sm lg:text-4xl pl-12 lg:pl-32 font-LatoLight text-center">
          Let Our Team Guide You Through <br />
          Your Website Project
        </div>
      </BackgroundImage>
      <section className="w-11/12 mx-auto">
        <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center">
          WEBSITE GRAPHIC DESIGN & DEVELOPMENT
        </h1>

        <div className="py-5">
          <p className="text-themeGray-200 text-lg font-Lato">
            Our industry recognized website development services deliver leading{" "}
            <Link
              to="/website-development-process/"
              className="text-lg underline text-themeBlue-600"
            >
              graphic design
            </Link>{" "}
            and functionality. With a client base representing all industries
            and serving a national audience, we have the experience to lead your
            team through the exciting process of creating your online brand and
            launching a new, dynamic presentation of your products and services.{" "}
          </p>
          <ul className="w-10/12 mx-auto py-5 grid grid-cols-1 lg:grid-cols-3 text-themeGray-200 text-lg font-Lato">
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Graphic Design</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Navigation Schema</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Mobile Friendly Design</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">HTML Product PDF’s</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">News &amp; Events</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">End-User Forms</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Content Management</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">White Paper Downloads</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Request Quote Forms</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Employee Intranets</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Ecommerce Solutions</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Search Engine Optimization</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Customer Testimonials</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Site Traffic Analytics</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Landing Page Design</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Hi-Res Stock Photos</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Secure Login</span>
            </li>
            <li className="flex items-center">
              <GatsbyImage
                image={checkMark.childImageSharp.gatsbyImageData}
                alt="checkmark icon"
                width="20"
              />
              <span className="pl-3">Video Libraries</span>
            </li>
          </ul>
          <p className="text-themeGray-200 text-lg font-Lato pt-3">
            Our{" "}
            <Link
              to="/website-development-process/"
              className="text-lg underline text-themeBlue-600"
            >
              website design process
            </Link>{" "}
            guides you through all phases of the project providing graphic
            design mock-ups until we obtain the online presentation that meets
            your requirements.{" "}
          </p>
          <p className="text-themeGray-200 text-lg font-Lato pt-3">
            Additionally, our project management guarantees your new site will
            present your business in a professional manner, carrying your
            ‘brand’ and corporate identity while staying within the project
            scope and launching your new website on time.
          </p>
        </div>
      </section>
      <GatsbyImage
        image={sbClient.childImageSharp.gatsbyImageData}
        alt="Website design for small business client banner"
        className="my-5"
      />
      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="border-2 border-themeBlue-600 px-3 py-8 flex flex-col lg:flex-row lg:gap-x-5">
          <div className="w-full lg:w-2/3">
            <Link
              to="/website-development-process/"
              className="font-semibold text-base lg:text-lg uppercase bg-themeBlue-600 text-white px-3 py-2"
            >
              WEBSITE DESIGN & DEVELOPMENT
            </Link>{" "}
            <p className="text-base lg:text-lg pt-4">
              Every website design engagement is unique and proprietary to your
              company and target audience. The graphical ‘look and feel’ of the
              design and the overall site functionality will be tailored to your
              vertical industry and business model.
            </p>
          </div>
          <GatsbyImage
            image={slides.nodes[0].childImageSharp.gatsbyImageData}
            alt="Responsive Website Design and Development"
            className="my-5 w-full lg:w-1/3"
          />
        </div>
        <div className="border-2 border-themeBlue-600 px-3 py-8 flex flex-col lg:flex-row lg:gap-x-5">
          <div className="w-full lg:w-2/3">
            <Link
              to="/ecommerce-website-design/"
              className="font-semibold text-base lg:text-lg uppercase bg-themeBlue-600 text-white px-3 py-2"
            >
              ECOMMERCE STOREFRONT SOLUTIONS
            </Link>{" "}
            <p className="text-base lg:text-lg pt-4">
              Ecommerce website development provides unique challenges beyond
              typical graphic design as consideration must be given to product
              inventory, bulk pricing, shipping calculations, payment processing
              and order processing.
            </p>
          </div>
          <GatsbyImage
            image={slides.nodes[1].childImageSharp.gatsbyImageData}
            alt="Ecommerce Website Company"
            className="my-5 w-full lg:w-1/3"
          />
        </div>
        <div className="border-2 border-themeBlue-600 px-3 py-8 flex flex-col lg:flex-row lg:gap-x-5">
          <div className="w-full lg:w-2/3">
            <Link
              to="/content-management-2/"
              className="font-semibold text-base lg:text-lg uppercase bg-themeBlue-600 text-white px-3 py-2"
            >
              CONTENT MANAGEMENT SYSTEM
            </Link>{" "}
            <p className="text-base lg:text-lg pt-4">
              Having the ability to easily add, edit or delete the content of
              your website is preferred over learning HTML code. We will develop
              your site on a CMS platform and provide full training on how to
              use the password protected admin panel.
            </p>
          </div>
          <GatsbyImage
            image={slides.nodes[2].childImageSharp.gatsbyImageData}
            alt="Website Content Management Systems Development"
            className="my-5 w-full lg:w-1/3"
          />
        </div>
        <div className="border-2 border-themeBlue-600 px-3 py-8 flex flex-col lg:flex-row lg:gap-x-5">
          <div className="w-full lg:w-2/3">
            <Link
              to="/mobile-responsive-website-design/"
              className="font-semibold text-base lg:text-lg uppercase bg-themeBlue-600 text-white px-3 py-2"
            >
              MOBILE DEVICE 'FRIENDLY' DESIGN
            </Link>{" "}
            <p className="text-base lg:text-lg pt-4">
              Having a Responsive Theme website is now a requirement by Google,
              Yahoo and Edge to be competitive in keyword search results. All
              our design projects are 100% mobile device friendly or we can
              easily convert your current site.
            </p>
          </div>
          <GatsbyImage
            image={slides.nodes[3].childImageSharp.gatsbyImageData}
            alt="Responsive Website Design Slider"
            className="my-5 w-full lg:w-1/3"
          />
        </div>
      </section>
      <section>
        <div className="w-full mx-auto bg-themeBlue-600 text-white my-5 py-10">
          <h3 className="w-11/12 mx-auto text-center flex justify-center items-center gap-x-5 pb-5">
            <Link
              to="/portfolio/"
              className="font-BebasNeue text-5xl text-white"
            >
              RECENT PROJECTS
            </Link>

            <Link to="/portfolio/" className="text-xl text-white">
              view more...
            </Link>
          </h3>
          <p className="w-11/12 mx-auto text-lg text-center">
            From our Project Managers, Programmers and Design team, Search
            Marketing Resource has the technical abilities and graphic arts
            ‘vision' to exceed your online marketing needs. Here are few of our
            recent SEO marketing and website design efforts as examples of our
            diversity in meeting the varied requirements of our Clients.
          </p>
        </div>
        <Swiper
          className="w-11/12 mx-auto my-10"
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay
          pagination={{ clickable: true }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={swiper => console.log(swiper)}
        >
          {clientSlides?.nodes.map((clientSlide, index) => {
            return (
              <SwiperSlide key={clientSlide?.id} className="p-5">
                <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-5">
                  <div className="w-full lg:w-2/3 mx-auto flex flex-col">
                    <Link
                      to={clientSlide?.frontmatter?.linkedPage}
                      className="text-3xl text-themeOrange-400 hover:underline mb-5"
                    >
                      {clientSlide?.frontmatter?.title}
                    </Link>
                    <span className="text-xl text-themeBlue-600 font-semibold italic tracking-wide">
                      {clientSlide?.frontmatter?.subTitle1}
                    </span>
                    <p className="text-lg pt-5">{parse(clientSlide?.html)}</p>
                  </div>

                  <GatsbyImage
                    className="w-full lg:w-1/3 border-4 border-themeOrange-700"
                    image={
                      clientSlide?.frontmatter?.featuredImage?.childImageSharp
                        ?.gatsbyImageData
                    }
                    alt={clientSlide?.frontmatter?.altTxt}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>

      <div className="flex">
        <hr className="border-4 border-themeBlue-600 w-1/2" />
        <hr className="border-4 border-themeOrange-100 w-1/2" />
      </div>
      <FreeAuditForm />
      <p className="w-11/12 mx-auto text-lg py-5">
        Pricing starts at $125 and up, depending upon each client's
        requirements. We're glad to provide a proposal with the exact costs for
        website design and development.
      </p>
      <FreeQuoteForm />
      <ContactForm />
    </Layout>
  )
}

export default WebDesignPage

export const pageQuery = graphql`
  query WebDesignPageById(
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
    bgImage: file(
      name: { regex: "/-banner/" }
      relativeDirectory: { eq: "webdesign-page" }
    ) {
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
    checkMark: file(
      name: { regex: "/check-mark/" }
      relativeDirectory: { eq: "google-ads" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 20
          height: 20
          layout: FIXED
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    sbClient: file(
      name: { regex: "/small-business-client/" }
      relativeDirectory: { eq: "webdesign-page" }
    ) {
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
    slides: allFile(
      filter: {
        name: { regex: "/-slider/" }
        relativeDirectory: { eq: "webdesign-page" }
      }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 170
            placeholder: TRACED_SVG
            quality: 90
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
    clientSlides: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/webdesign-page/" } }
      sort: { fields: frontmatter___featuredImage___name, order: ASC }
    ) {
      nodes {
        id
        html
        frontmatter {
          title
          subTitle1
          altTxt
          linkedPage
          featuredImage {
            childImageSharp {
              gatsbyImageData(
                quality: 90
                width: 415
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`
