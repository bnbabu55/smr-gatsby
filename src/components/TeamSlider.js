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
    <section id="TeamSlider" className="bg-white py-10 w-11/12 mx-auto">
      <div className="mx-auto text-center">
        <h2>
          <Link
            to={`/about-search-marketing-resource.php`}
            className="text-themeOrange font-BebasNeue text-5xl hover:underline"
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
          // when window width is >= 640px
          240: {
            width: 240,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}

        // onSlideChange={() => console.log("slide change")}
        // onSwiper={swiper => console.log(swiper)}
      >
        {teamMembers.nodes.map(teamMember => {
          return (
            <SwiperSlide className="w-full text-center" key={teamMember.id}>
              <div
                key={teamMember.id + "slide-wrapper"}
                className="w-full flex flex-col p-5"
              >
                <div className="font-Raleway text-2xl text-themeOrange pb-1">
                  {teamMember.title}
                </div>
                <div className="font-Raleway text-base pb-5">
                  {teamMember.memberRole}
                </div>
                <div
                  key={teamMember.id + "content"}
                  className="mb-5 text-base italic line-clamp-3"
                >
                  {parse(teamMember.content)}
                </div>
                <Link
                  to={`/about`}
                  className="text-themeOrange py-2 px-3 lg:px-8 font-Lato text-sm text-right lg:text-xl"
                >
                  Read
                </Link>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default TeamSlider
