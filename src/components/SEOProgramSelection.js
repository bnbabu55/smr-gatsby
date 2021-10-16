import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useBetween } from "use-between"

const SEOProgramSelection = ({ seoImages, useShareableState }) => {
  const { selectedProgram, setSelectedProgram, setFormProgram } =
    useBetween(useShareableState)

  // const onChangeHandler = e => {
  //   const chosenPlan = e.target.value
  //   const hideBox =
  //     e.target.parentElement.parentElement.previousSibling.firstChild
  //   hideBox.classList.remove("invisible")
  //   const targetElem = document.getElementById(`target${chosenPlan}`)
  //   const resetElems = document.querySelectorAll(
  //     `input[name="services14N"]:not(:checked)`
  //   )
  //   for (let i = 0; i < resetElems.length; i++) {
  //     resetElems[
  //       i
  //     ].parentElement.parentElement.previousSibling.firstChild.classList.add(
  //       "invisible"
  //     )
  //   }
  //   targetElem.checked = true
  // }
  return (
    <form
      name="pricingform"
      className="pricing-item flex flex-col lg:flex-row my-20 gap-x-5"
    >
      <ul
        className="w-full lg:w-1/4 bg-white flex flex-col"
        style={{ filter: "drop-shadow(0 0px 20px rgba(0, 0, 0, 0.72))" }}
      >
        <li className="icon">
          <div className="w-28 h-28 overflow-hidden mx-auto rounded-full p-3 -mt-14 bg-white">
            <GatsbyImage
              image={seoImages?.nodes[0]?.childImageSharp?.gatsbyImageData}
              alt="SEO program 1 features"
              className="mx-auto"
            />
          </div>
          <p className="font-MontserratSemiBold text-lg text-themeOrange-400 text-center py-4">
            Silver
          </p>
          <p className="font-Montserrat text-base bg-themeBlue-600 text-white text-center py-1 px-2 my-3 mx-4">
            Website Search Optimization
          </p>
          <p className="font-Lato text-base text-center py-1 px-2 my-3">
            Every page of your website is analyzed, reviewed and updated with
            SEO best practices to significally increase your keyword search
            rankings and visibility. 100% Turn-Key.{" "}
            <Link
              className="font-Lato text-base text-themeOrange-400"
              to="website-optimization-program.php"
            >
              Read more...
            </Link>
          </p>
        </li>
        <li className="text-base text-themeBlue-600 ml-8 flex-1">
          <ul>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Assigned SEO Manager
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Keyword Research
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Competitor Analysis
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              SEO Audit &amp; Repairs
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Website Copy Rewritten
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              SEO Attributes Added
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Page Speed Increased
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Website Audit Reports
            </li>
          </ul>
        </li>
        <li className="mr-2 pt-5 pb-5 inline-flex items-end">
          <div className="hide-box flex-1 pl-1">
            <Link
              to="#free-quote"
              className={`${
                selectedProgram === "silver" ? "visible" : "invisible"
              } text-base underline text-themeBlue-600`}
            >
              Scroll Down To Complete Form
            </Link>
          </div>
          <div className="flex-1 justify-self-end check-services text-right text-base font-semibold text-themeOrange-400">
            <label>
              Select Services
              <input
                className="topradio ml-2 checked:bg-themeBlue-600 text-themeBlue-600 border-themeBlue-600 focus:ring-themeBlue-600 text-lg"
                type="radio"
                id="silver"
                name="services14N"
                value={selectedProgram}
                checked={selectedProgram === "silver"}
                onChange={() => {
                  setSelectedProgram("silver")
                  setFormProgram("silver")
                }}
              />
            </label>
          </div>
        </li>
      </ul>
      <ul
        className="w-full lg:w-1/4 mt-20 lg:mt-0 bg-white flex flex-col"
        style={{ filter: "drop-shadow(0 0px 20px rgba(0, 0, 0, 0.72))" }}
      >
        <li className="icon">
          <div className="w-28 h-28 overflow-hidden mx-auto rounded-full p-3 -mt-14 bg-white">
            <GatsbyImage
              image={seoImages?.nodes[1]?.childImageSharp?.gatsbyImageData}
              alt="SEO program 2 features"
              className="mx-auto mt-1.5"
            />
          </div>
          <p className="font-MontserratSemiBold text-lg text-themeOrange-400 text-center py-3">
            Gold
          </p>
          <p className="font-Montserrat text-sm bg-themeBlue-600 text-white text-center py-1 px-2 my-3 mx-4">
            Website Optimized, SEO Program &amp; Social Media Management
          </p>
          <p className="font-Lato text-base text-center py-1 px-2 my-3">
            This is a full service offering that is ongoing, month to month. All
            efforts from Package #1 are included plus Blog Posts, Business
            Directory Listings and Social Media managed.{" "}
            <Link
              className="font-Lato text-base text-themeOrange-400"
              to="website-optimization-program.php"
            >
              Read more...
            </Link>
          </p>
        </li>
        <li className="text-base text-themeBlue-600 text-left ml-8 flex-1">
          <ul>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              SEO 24/7 Dashboard
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Weekly Performance Reports
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Business Directory Updates
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Google My Business
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Social Media Managed
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Youtube Videos
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Tagged Pinterest Images
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Facebook Articles
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              LinkedIn Posts
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Twitter Tweets Managed
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Yelp Account Updated
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Optimized Press Releases
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Monthly Blog Articles
            </li>
          </ul>
        </li>
        <li className="mr-2 pt-5 pb-5 flex flex-col">
          <div className="text-base text-center py-3">
            *Includes Silver Services
          </div>
          <div className="inline-flex items-end">
            <div className="hide-box flex-1 pl-1">
              <Link
                to="#free-quote"
                className={`${
                  selectedProgram === "gold" ? "visible" : "invisible"
                } text-base underline text-themeBlue-600`}
              >
                Scroll Down To Complete Form
              </Link>
            </div>
            <div className="flex-1 justify-self-end check-services text-right text-base font-semibold text-themeOrange-400">
              <label>
                Select Services
                <input
                  className="topradio ml-2 checked:bg-themeBlue-600 text-themeBlue-600 border-themeBlue-600 focus:ring-themeBlue-600 text-lg"
                  type="radio"
                  id="gold"
                  name="services14N"
                  value={selectedProgram}
                  checked={selectedProgram === "gold"}
                  onChange={() => {
                    setSelectedProgram("gold")
                    setFormProgram("gold")
                  }}
                />
              </label>
            </div>
          </div>
        </li>
      </ul>
      <ul
        className="w-full lg:w-1/4 mt-20 lg:mt-0 bg-white flex flex-col"
        style={{ filter: "drop-shadow(0 0px 20px rgba(0, 0, 0, 0.72))" }}
      >
        <li className="icon">
          <div className="w-28 h-28 overflow-hidden mx-auto rounded-full p-3 -mt-14 bg-white">
            <GatsbyImage
              image={seoImages?.nodes[2]?.childImageSharp?.gatsbyImageData}
              alt="SEO program 3 features"
              className="mx-auto"
            />
          </div>
          <p className="font-MontserratSemiBold text-lg text-themeOrange-400 text-center py-3">
            Platinum
          </p>
          <p className="font-Montserrat text-sm bg-themeBlue-600 text-white text-center py-1 px-2 my-3 mx-4">
            Website Optimized, SEO Program, Social Media &amp; Email Marketing
          </p>
          <p className="font-Lato text-base text-center py-1 px-2 my-3">
            This group of services is very effective to increase your keyword
            search rankings quickly but also includes the management of the
            monthly email marketing campaigns. All other SEO services are
            provided as well.{" "}
            <Link
              className="font-Lato text-base text-themeOrange-400"
              to="website-optimization-program.php"
            >
              Read more...
            </Link>
          </p>
        </li>
        <li className="text-base text-themeBlue-600 text-left ml-8 flex-1">
          <ul>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              SEO 24/7 Dashboard
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Weekly Performance Reports
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Business Directory Updates
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Google My Business
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Social Media Managed
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Youtube Videos
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Tagged Pinterest Images
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Facebook Articles
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Email List Uploaded
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Newsletter Template Designed
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Newsletter Written
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Email Published
            </li>
          </ul>
        </li>
        <li className="mr-2 pt-5 pb-5 flex flex-col">
          <div className="text-base text-center py-3">
            *Includes Silver &amp; Gold Services
          </div>
          <div className="inline-flex items-end">
            <div className="hide-box flex-1 pl-1">
              <Link
                to="#free-quote"
                className={`${
                  selectedProgram === "platinum" ? "visible" : "invisible"
                } text-base underline text-themeBlue-600`}
              >
                Scroll Down To Complete Form
              </Link>
            </div>
            <div className="flex-1 justify-self-end check-services text-right text-base font-semibold text-themeOrange-400">
              <label>
                Select Services
                <input
                  className="topradio ml-2 checked:bg-themeBlue-600 text-themeBlue-600 border-themeBlue-600 focus:ring-themeBlue-600 text-lg"
                  type="radio"
                  id="platinum"
                  name="services14N"
                  value={selectedProgram}
                  checked={selectedProgram === "platinum"}
                  onChange={() => {
                    setSelectedProgram("platinum")
                    setFormProgram("platinum")
                  }}
                />
              </label>
            </div>
          </div>
        </li>
      </ul>
      <ul
        className="w-full lg:w-1/4 mt-20 lg:mt-0 bg-white flex flex-col"
        style={{ filter: "drop-shadow(0 0px 20px rgba(0, 0, 0, 0.72))" }}
      >
        <li className="icon">
          <div className="w-28 h-28 overflow-hidden mx-auto rounded-full p-3 -mt-14 bg-white">
            <GatsbyImage
              image={seoImages?.nodes[3]?.childImageSharp?.gatsbyImageData}
              alt="SEO program 4 features"
              className="mx-auto"
            />
          </div>
          <p className="font-MontserratSemiBold text-lg text-themeOrange-400 text-center py-3">
            Social
          </p>
          <p className="font-Montserrat text-base bg-themeBlue-600 text-white text-center py-1 px-2 my-3 mx-4">
            Social Media Management
          </p>
          <p className="font-Lato text-base text-center py-1 px-2 my-3">
            All of your social media accounts will be reviewed and updated.
            Keyboard 'rich' industry related articles will be written, submitted
            for your approval and posted. Visitor activity and reviews posted
            will be traced.{" "}
            <Link
              className="font-Lato text-base text-themeOrange-400"
              to="website-optimization-program.php"
            >
              Read more...
            </Link>
          </p>
        </li>
        <li className="text-base text-themeBlue-600 text-left ml-8 flex-1">
          <ul>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Blog Post(Optional)
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              SEO 24/7 Dashboard
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Weekly Performance Reports
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Business Directory Updates
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Google My Business
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Social Media Managed
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Youtube Videos
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Tagged Pinterest Images
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Facebook Articles
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              LinkedIn Posts
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Twitter Tweets Managed
            </li>
            <li className="text-base text-themeBlue-600 text-left">
              <span className="text-themeOrange-400 font-bold text-lg mr-3">
                &#10003;
              </span>
              Yelp Account Updated
            </li>
          </ul>
        </li>
        <li className="mr-2 pt-5 pb-5 inline-flex items-end">
          <div className="hide-box flex-1 pl-1">
            <Link
              to="#free-quote"
              className={`${
                selectedProgram === "social" ? "visible" : "invisible"
              } text-base underline text-themeBlue-600`}
            >
              Scroll Down To Complete Form
            </Link>
          </div>
          <div className="flex-1 justify-self-end check-services text-right text-base font-semibold text-themeOrange-400">
            <label>
              Select Services
              <input
                className="topradio ml-2 checked:bg-themeBlue-600 text-themeBlue-600 border-themeBlue-600 focus:ring-themeBlue-600 text-lg"
                type="radio"
                id="social"
                name="services14N"
                value={selectedProgram}
                checked={selectedProgram === "social"}
                onChange={() => {
                  setSelectedProgram("social")
                  setFormProgram("social")
                }}
              />
            </label>
          </div>
        </li>
      </ul>
    </form>
  )
}

export default SEOProgramSelection
