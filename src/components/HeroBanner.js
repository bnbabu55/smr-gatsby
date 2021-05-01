import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Autoplay])

const HeroBanner = () => {
  const { bannerSlides } = useStaticQuery(graphql`
    query {
      bannerSlides: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/home-banner/" } }
        sort: { fields: fileAbsolutePath, order: ASC }
      ) {
        nodes {
          id
          html
          frontmatter {
            title1
            title2
            titleStyles
            subTitle1
            subTitle2
            subTitleStyles
            altTxt
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  width: 1400
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section
      id="hero-banner"
      className="bg-white border-b-4 border-themeGray-50 shadow-themeShadow"
    >
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={swiper => console.log(swiper)}
      >
        {bannerSlides?.nodes.map((bannerSlide, index) => {
          return (
            <SwiperSlide className="relative" key={bannerSlide?.id}>
              <figure className="overflow-hidden w-full">
                <GatsbyImage
                  image={
                    bannerSlide?.frontmatter?.featuredImage?.childImageSharp
                      ?.gatsbyImageData
                  }
                  alt="Home slider 1"
                />
              </figure>
              <div className={`${bannerSlide?.frontmatter?.titleStyles}`}>
                {bannerSlide?.frontmatter?.title1} <br />
                {bannerSlide?.frontmatter?.title2}
              </div>
              <div className={`${bannerSlide?.frontmatter?.subTitleStyles}`}>
                {bannerSlide?.frontmatter?.subTitle1} <br />
                {bannerSlide?.frontmatter?.subTitle2}
                {bannerSlide?.frontmatter?.subTitle3}
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default HeroBanner
