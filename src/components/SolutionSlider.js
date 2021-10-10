import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

SwiperCore.use([Autoplay])

const SolutionSlider = () => {
  const { solutionSlides } = useStaticQuery(graphql`
    query {
      solutionSlides: allMdx(
        filter: {
          frontmatter: {
            featuredImage: { relativeDirectory: { eq: "solutions" } }
          }
        }
        sort: { fields: frontmatter___featuredImage___name, order: ASC }
      ) {
        nodes {
          id
          body
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
    <div
      id="SolutionSlider"
      className="bg-white text-themeGray-300 py-10 w-full mx-auto"
    >
      <Swiper
        className="mx-auto w-full"
        autoplay
        loop
        breakpoints={{
          // when window width is >= 640px
          240: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}

        // onSlideChange={() => console.log("slide change")}
        // onSwiper={swiper => console.log(swiper)}
      >
        {solutionSlides.nodes.map(solutionSlide => {
          return (
            <SwiperSlide
              className="w-full flex flex-col lg:flex-row p-5 lg:border-l lg:border-gray-400"
              key={solutionSlide.id}
            >
              <div
                key={solutionSlide.id + "image-wrapper"}
                className="w-full lg:w-2/5"
              >
                <GatsbyImage
                  alt={solutionSlide.frontmatter.altTxt}
                  image={
                    solutionSlide.frontmatter.featuredImage.childImageSharp
                      .gatsbyImageData
                  }
                />
              </div>
              <div className="w-full lg:w-3/5">
                <Link
                  to={`/${solutionSlide.frontmatter.linkedPage}`}
                  className="font-Montserrat font-bold text-xl text-left uppercase text-themeBlue-600 pb-5"
                >
                  {solutionSlide.frontmatter.title}
                </Link>
                <div
                  key={solutionSlide.id + "content"}
                  className="mb-5 text-xl"
                >
                  <MDXRenderer className="text-lg text-justify prose">
                    {solutionSlide.body}
                  </MDXRenderer>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SolutionSlider
