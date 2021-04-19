import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Autoplay])

const HeroBanner = () => {
  const { bgImages } = useStaticQuery(graphql`
    query {
      bgImages: allFile(
        filter: {
          name: { regex: "/home-slide/" }
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
    <section
      id="hero-banner"
      className="bg-white border-b-4 border-themeGray-100 shadow-themeShadow"
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide className="relative">
          <figure className="overflow-hidden w-full">
            <GatsbyImage
              image={bgImages.nodes[0].childImageSharp.gatsbyImageData}
              alt="Home slider 1"
            />
          </figure>
          <div className="title absolute top-2 left-36 lg:top-28 lg:left-1/3 text-themeBlue-100 text-base lg:text-7xl font-LatoBold text-center">
            Effective Search <br />
            Marketing Strategies
          </div>
          <div className="subtitle absolute top-16 left-28 lg:top-72 lg:left-2/4 text-themeOrange text-sm lg:text-4xl font-LatoLight text-center">
            Increase Your Online Visibility <br />
            Create New Business Leads 24/7
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <figure className="overflow-hidden w-full">
            <GatsbyImage
              image={bgImages.nodes[1].childImageSharp.gatsbyImageData}
              alt="Home slider 2"
            />
          </figure>

          <div className="title absolute top-5 left-5 lg:top-1/4 lg:left-40 text-themeBlue-100 text-base lg:text-7xl font-LatoBold text-center">
            Award Winning <br />
            Website Design
          </div>
          <div className="subtitle absolute top-20 left-5 lg:top-80 lg:left-40 text-themeOrange text-sm lg:text-4xl font-LatoLight text-center">
            Industry Recognized Designers <br />
            Engage Your Customers
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <figure className="overflow-hidden w-full">
            <GatsbyImage
              image={bgImages.nodes[2].childImageSharp.gatsbyImageData}
              alt="Home slider 3"
            />
          </figure>
          <div className="title absolute top-3 left-36 lg:top-1/4 lg:left-1/2 text-themeBlue-100 text-base lg:text-7xl font-LatoBold text-center">
            Turn-key
            <br />
            Marketing Solutions
          </div>
          <div className="subtitle absolute top-16 left-24 lg:top-2/3 lg:left-2/4 text-themeOrange text-sm lg:text-4xl font-LatoLight text-center">
            Web Design • SEO • Social Media <br />
            Hands-On Project Managers
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <figure className="overflow-hidden w-full">
            <GatsbyImage
              image={bgImages.nodes[3].childImageSharp.gatsbyImageData}
              alt="Home slider 4"
            />
          </figure>

          <div className="title absolute top-3 left-5 lg:top-1/4 lg:left-40 text-themeBlue-100 text-base lg:text-7xl font-LatoBold text-center">
            Best Reviews <br />& Testimonials
          </div>
          <div className="subtitle absolute top-14 left-3 lg:top-80 lg:left-40 text-themeOrange text-sm lg:text-4xl font-LatoLight text-center">
            Industry Leading Client Retention <br />
            Competitive Pricing – Professional <br /> Results
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HeroBanner
