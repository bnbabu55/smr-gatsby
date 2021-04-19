import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import parse from "html-react-parser"

SwiperCore.use([Autoplay])

const SolutionSlider = () => {
  const { solutionSlides } = useStaticQuery(graphql`
    query {
      solutionSlides: allMarkdownRemark(
        filter: {
          frontmatter: {
            featuredImage: { relativeDirectory: { eq: "solutions" } }
          }
        }
        sort: { fields: frontmatter___featuredImage___name, order: ASC }
      ) {
        nodes {
          id
          html
          frontmatter {
            linkedPage
            altTxt
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(width: 210, placeholder: BLURRED, quality: 90)
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section id="SolutionSlider" className="bg-white py-10 w-full mx-auto">
      <Swiper
        className="mx-auto w-full"
        autoplay
        loop
        breakpoints={{
          // when window width is >= 640px
          240: {
            width: 240,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            width: 1024,
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}

        // onSlideChange={() => console.log("slide change")}
        // onSwiper={swiper => console.log(swiper)}
      >
        {solutionSlides.nodes.map(solutionSlide => {
          return (
            <SwiperSlide className="w-full" key={solutionSlide.id}>
              <div
                key={solutionSlide.id + "slide-wrapper"}
                className="w-full flex flex-col lg:flex-row p-5 lg:border-l lg:border-gray-400"
              >
                <div
                  key={solutionSlide.id + "image-wrapper"}
                  className="w-full"
                >
                  <GatsbyImage
                    alt={solutionSlide.frontmatter.altTxt}
                    image={
                      solutionSlide.frontmatter.featuredImage.childImageSharp
                        .gatsbyImageData
                    }
                  />
                </div>
                <div className="w-full lg:pl-3">
                  <div className="font-Montserrat text-xl text-left uppercase text-themeBlue-text pb-5">
                    {solutionSlide.frontmatter.title}
                  </div>
                  <div key={solutionSlide.id + "content"} className="mb-5 text-lg">
                    {parse(solutionSlide.html)}
                  </div>
                  <Link
                    to={`/${solutionSlide.linkedPage}`}
                    className="bg-themeOrange text-white py-2 px-3 lg:px-8 font-Lato text-sm lg:text-xl"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default SolutionSlider