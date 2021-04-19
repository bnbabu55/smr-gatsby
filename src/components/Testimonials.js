import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

SwiperCore.use([Navigation, Pagination, Autoplay])

const Testimonials = () => {
  const { logoImages } = useStaticQuery(graphql`
    query {
      logoImages: allFile(
        filter: {
          name: { regex: "/logo/" }
          relativeDirectory: { eq: "testimonials" }
        }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          name
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
  `)

  return (
    <section id="Testimonials" className="bg-white py-10 mx-auto">
      <div className="container">
        <h2 className="pb-5 text-center">
          <Link
            key="testi-link"
            to="#"
            className="font-BebasNeue text-themeBlue-text text-5xl lg:text-7xl"
          >
            Testimonials
            <span
              key="testi-span"
              className="font-Lato text-themeOrange text-base lg:text-2xl pl-5 py-0"
            >
              read more...
            </span>
          </Link>
        </h2>
      </div>
      <Swiper
        // spaceBetween={50}
        // slidesPerView={3}
        autoplay
        loop
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 640px
          240: {
            width: 240,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 20,
          },
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={swiper => console.log(swiper)}
        className="mx-auto"
      >
        <div className="swiper-button-prev"></div>
        <SwiperSlide className="relative">
          <div className="flex flex-col justify-center items-center border-themeGray-500 border-4 p-5">
            <div
              style={{
                border: "solid 5px #a63f00",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="mb-12 shadow-themeShadow"
            >
              <GatsbyImage
                alt="northmill logo"
                image={logoImages.nodes[0].childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="font-Lato text-base text-themeGray-400 text-center line-clamp-4">
              “I’m no easy customer to please but Search Marketing Resource
              knocked the ball out of the park. They created a site that
              exceeded my expectations and is without a doubt, the finest in our
              space. I couldn’t be happier.”
            </div>
            <div className="font-NothingYouCouldDo font-bold text-2xl text-themeDarkBrown pt-8">
              Donald S. Cosenza
            </div>
            <div className="font-Montserrat text-xl text-themeOrange">
              Sr. Vice President
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="flex flex-col justify-center items-center border-themeGray-500 border-4 p-5">
            <div
              style={{
                border: "solid 5px #a63f00",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="mb-12 shadow-themeShadow"
            >
              <GatsbyImage
                alt="SBEMP logo"
                image={logoImages.nodes[1].childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="font-Lato text-base text-themeGray-400 text-center line-clamp-4">
              "Search Marketing Resource has been a tremendous help to our
              inbound marketing and branding efforts. Its staff is professional
              and very responsive to our SEO requests and design needs"
            </div>
            <div className="font-NothingYouCouldDo font-bold text-2xl text-themeDarkBrown pt-8">
              Shaun Murphy
            </div>
            <div className="font-Montserrat text-xl text-themeOrange">
              Managing Partner
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="flex flex-col justify-center items-center border-themeGray-500 border-4 p-5">
            <div
              style={{
                border: "solid 5px #a63f00",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="mb-12 shadow-themeShadow"
            >
              <GatsbyImage
                alt="MFAS logo"
                image={logoImages.nodes[2].childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="font-Lato text-base text-themeGray-400 text-center line-clamp-4">
              “Our experience with Search Marketing Resource has been
              exceptional. Their pricing is very competitive and their work is
              first rate. The staff listened to us and met our needs, and
              continues to be helpful”
            </div>
            <div className="font-NothingYouCouldDo font-bold text-2xl text-themeDarkBrown pt-8">
              Rena Fruchter
            </div>
            <div className="font-Montserrat text-xl text-themeOrange">
              Artistic Director
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="flex flex-col justify-center items-center border-themeGray-500 border-4 p-5">
            <div
              style={{
                border: "solid 5px #a63f00",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="mb-12 shadow-themeShadow"
            >
              <GatsbyImage
                alt="CBS logo"
                image={logoImages.nodes[3].childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="font-Lato text-base text-themeGray-400 text-center line-clamp-4">
              “We needed to make a lot of hard decisions but the easy one was
              contracting with Search Marketing Resource. Response time to our
              needs was unmatched and we are thrilled with the finished product”
            </div>
            <div className="font-NothingYouCouldDo font-bold text-2xl text-themeDarkBrown pt-8">
              Angela Storms
            </div>
            <div className="font-Montserrat text-xl text-themeOrange">
              IT Manager
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="flex flex-col justify-center items-center border-themeGray-500 border-4 p-5">
            <div
              style={{
                border: "solid 5px #a63f00",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="mb-12 shadow-themeShadow"
            >
              <GatsbyImage
                alt="Tekwell logo"
                image={logoImages.nodes[4].childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="font-Lato text-base text-themeGray-400 text-center line-clamp-4">
              “Creating a web strategy in today's marketplace is unbelievably
              complex. The experts at Search Marketing Resource was the best
              decision we made. They helped us focus on the right goals and
              delivered in record time”
            </div>
            <div className="font-NothingYouCouldDo font-bold text-2xl text-themeDarkBrown pt-8">
              Jamey Steffner
            </div>
            <div className="font-Montserrat text-xl text-themeOrange">CEO</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="flex flex-col justify-center items-center border-themeGray-500 border-4 p-5">
            <div
              style={{
                border: "solid 5px #a63f00",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="mb-12 shadow-themeShadow"
            >
              <GatsbyImage
                alt="Adhesa Plates logo"
                image={logoImages.nodes[5].childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="font-Lato text-base text-themeGray-400 text-center line-clamp-4">
              “We have been very happy with the SEO work Search Marketing
              Resource has done. Our organic rankings improved tremendously.
              What’s most exciting is the large increase in quoting. And not
              just local, but national!”
            </div>
            <div className="font-NothingYouCouldDo font-bold text-2xl text-themeDarkBrown pt-8">
              Craig Mitchell
            </div>
            <div className="font-Montserrat text-xl text-themeOrange">
              President
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="flex flex-col justify-center items-center border-themeGray-500 border-4 p-5">
            <div
              style={{
                border: "solid 5px #a63f00",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="mb-12 shadow-themeShadow"
            >
              <GatsbyImage
                alt="Adhesa Plates logo"
                image={logoImages.nodes[6].childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="font-Lato text-base text-themeGray-400 text-center line-clamp-4">
              “Everyone! – I am on a plane heading to the big show. Thank you so
              much for the great team effort this week. It is refreshing to work
              with a group that reacts so quickly and efficiently”
            </div>
            <div className="font-NothingYouCouldDo font-bold text-2xl text-themeDarkBrown pt-8">
              Christopher Blum
            </div>
            <div className="font-Montserrat text-xl text-themeOrange">
              President
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="flex flex-col justify-center items-center border-themeGray-500 border-4 p-5">
            <div
              style={{
                border: "solid 5px #a63f00",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              className="mb-12 shadow-themeShadow"
            >
              <GatsbyImage
                alt="Converged Communications logo"
                image={logoImages.nodes[7].childImageSharp.gatsbyImageData}
              />
            </div>
            <div className="font-Lato text-base text-themeGray-400 text-center line-clamp-4">
              “I wanted to provide your team with some positive feedback. We
              have already noticed more people reaching out to us via our web
              form and customers compliment the website as being very
              informative”
            </div>
            <div className="font-NothingYouCouldDo font-bold text-2xl text-themeDarkBrown pt-8">
              Steve Stephens
            </div>
            <div className="font-Montserrat text-xl text-themeOrange">
              General Manager
            </div>
          </div>
        </SwiperSlide>
        <span className="swiper-button-next"></span>
      </Swiper>
    </section>
  )
}

export default Testimonials