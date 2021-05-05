import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import parse from "html-react-parser"

SwiperCore.use([Navigation, Pagination, Autoplay])

const Testimonials = () => {
  const { testimonialSlides } = useStaticQuery(graphql`
    query {
      testimonialSlides: allMarkdownRemark(
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
            altTxt
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  width: 200
                  placeholder: BLURRED
                  quality: 90
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
    <section id="Testimonials" className="bg-white py-10 mx-auto w-11/12">
      <div className="container">
        <h2 className="pb-8 text-center">
          <Link
            key="testi-link"
            to="#"
            className="font-BebasNeue text-themeBlue-text text-5xl"
          >
            Testimonials
            <span
              key="testi-span"
              className="font-Lato text-themeOrange text-base lg:text-xl pl-5 py-0 lowercase"
            >
              read more...
            </span>
          </Link>
        </h2>
      </div>
      <Swiper
        autoplay
        loop
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={false}
        breakpoints={{
          // when window width is >= 640px
          240: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={swiper => console.log(swiper)}
        className="mx-auto"
      >
        <div className="swiper-button-prev"></div>
        <div className="w-3/4">
          {testimonialSlides?.nodes?.map(testimonialSlide => {
            return (
              <SwiperSlide className="w-full" key={testimonialSlide.id}>
                <div className="flex flex-col justify-center items-center border-themeGray-50 border-4 p-5">
                  <div
                    style={{
                      border: "solid 5px #a63f00",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                    className="mb-12 shadow-themeShadow"
                  >
                    <GatsbyImage
                      alt={testimonialSlide?.frontmatter?.altTxt}
                      image={
                        testimonialSlide?.frontmatter?.featuredImage
                          ?.childImageSharp?.gatsbyImageData
                      }
                    />
                  </div>
                  <div className="font-Lato text-base text-themeGray-400 text-center line-clamp-4">
                    {parse(testimonialSlide?.html)}
                  </div>
                  <div className="font-NothingYouCouldDo font-bold text-2xl text-themeDarkBrown pt-8">
                    {testimonialSlide?.frontmatter?.title}
                  </div>
                  <div className="font-Montserrat text-xl text-themeOrange">
                    {testimonialSlide?.frontmatter?.memberRole}
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  )
}

export default Testimonials
