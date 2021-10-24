import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Autoplay])

const HeroBanner = () => {
  const { bannerSlides } = useStaticQuery(graphql`
    query {
      bannerSlides: allMdx(
        filter: { fileAbsolutePath: { regex: "/home-banner/" } }
        sort: { fields: frontmatter___featuredImage___name, order: ASC }
      ) {
        nodes {
          id
          body
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
                  width: 1920
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div
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
            <SwiperSlide className="relative min-w-full" key={bannerSlide?.id}>
              <figure className="overflow-hidden min-w-full">
                <GatsbyImage
                  image={
                    bannerSlide?.frontmatter?.featuredImage?.childImageSharp
                      ?.gatsbyImageData
                  }
                  alt={bannerSlide?.frontmatter?.altTxt}
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
    </div>
  )
}

export default HeroBanner
