import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import parse from "html-react-parser"

SwiperCore.use([Autoplay])

const TeamSlider = () => {
  const { teamMembers } = useStaticQuery(graphql`
    query {
      teamMembers: allWpTeamMember {
        nodes {
          id
          title
          content
          memberRole
        }
      }
    }
  `)

  return (
    <section
      id="TeamSlider"
      className="bg-white text-themeGray-300 py-10 w-11/12 mx-auto"
    >
      <div className="mx-auto text-center">
        <h2>
          <Link
            to={`/about`}
            className="text-themeOrange-400 font-BebasNeue text-5xl hover:underline"
          >
            The Team
          </Link>
        </h2>

        <h3 className="text-themeBlue-text font-Montserrat text-2xl uppercase my-5">
          Knowledgeable, Experienced, Professional &amp; Dedicated
        </h3>

        <p className="font-Lato text-lg text-center">
          The Search Marketing Resource team members are the most seasoned and
          highly trained group of graphic designers, programmers and inbound
          marketers’ in the industry
        </p>
      </div>

      <Swiper
        className="mx-auto w-full"
        autoplay
        loop
        breakpoints={{
          // when window width is >= 240px
          240: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}

        // onSlideChange={() => console.log("slide change")}
        // onSwiper={swiper => console.log(swiper)}
      >
        <div className="swiper-button-prev"></div>
        <div className="w-3/4">
          {teamMembers.nodes.map(teamMember => {
            return (
              <SwiperSlide
                className="w-full text-center flex flex-col p-5"
                key={teamMember.id}
              >
                <Link
                  to={`/about`}
                  className="font-Raleway text-2xl uppercase text-themeOrange-400 pb-1"
                >
                  {teamMember.title}
                </Link>
                <div className="font-Raleway text-base pb-5">
                  {teamMember.memberRole}
                </div>
                <div
                  key={teamMember.id + "content"}
                  className="mb-5 text-base italic line-clamp-3"
                >
                  {parse(teamMember.content)}
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

export default TeamSlider
