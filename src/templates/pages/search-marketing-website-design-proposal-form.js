import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const WebDesignProposalPage = ({ data: { page, seoImages } }) => {
  const onChangeHandler = e => {
    const chosenPlan = e.target.value
    const targetElem = document.getElementById(`target${chosenPlan}`)
    targetElem.checked = true

    if (chosenPlan !== "webdesign") {
      const hideBox =
        e.target.parentElement.parentElement.previousSibling.firstChild
      hideBox.classList.remove("invisible")
      const resetElems = document.querySelectorAll(
        `input[name="services14N"]:not(:checked)`
      )
      for (let i = 0; i < resetElems.length; i++) {
        resetElems[
          i
        ].parentElement.parentElement.previousSibling.firstChild.classList.add(
          "invisible"
        )
      }
    }
  }

  return (
    <Layout>
      <Seo seoData={page?.seo} />
      <section className="w-11/12 mx-auto pt-20 pb-10">
        <div className="wrapper">
          <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center">
            Search Marketing Programs <br /> & <br /> Web Design Services
          </h1>
          <hr className="w-1/2 mx-auto my-5 border-2 border-gray-300" />
          <p className="px-4 py-5 text-themeGray-200 text-lg font-Lato text-center mx-auto">
            For the past 15 years, Search Marketing Resource has been providing
            online marketing services ranging from 100/% turn-key solutions to
            ala carte programs tailored to a client's specific needs and budget.
            As such, we have developed four uniquely effective Digital Marketing
            grouping of services that will fit your business needs well.
          </p>
          <p className="py-10 text-center text-themeBlue-600 text-lg italic font-semibold">
            - Select an individual marketing program and add website design
            services as well -
          </p>
        </div>
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
                Every page of your website is analyzed, reviewed and updated
                with SEO best practices to significally increase your keyword
                search rankings and visibility. 100% Turn-Key.{" "}
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
                  SEO Audit & Repairs
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
                  to="#contact"
                  className="invisible text-base underline text-themeBlue-600"
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
                    value="silver"
                    name="services14N"
                    onChange={onChangeHandler}
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
                Website Optimized, SEO Program & Social Media Management
              </p>
              <p className="font-Lato text-base text-center py-1 px-2 my-3">
                This is a full service offering that is ongoing, month to month.
                All efforts from Package #1 are included plus Blog Posts,
                Business Directory Listings and Social Media managed.{" "}
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
                    to="#contact"
                    className="invisible text-base underline text-themeBlue-600"
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
                      value="gold"
                      name="services14N"
                      onChange={onChangeHandler}
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
                Website Optimized, SEO Program, Social Media & Email Marketing
              </p>
              <p className="font-Lato text-base text-center py-1 px-2 my-3">
                This group of services is very effective to increase your
                keyword search rankings quickly but also includes the management
                of the monthly email marketing campaigns. All other SEO services
                are provided as well.{" "}
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
                *Includes Silver & Gold Services
              </div>
              <div className="inline-flex items-end">
                <div className="hide-box flex-1 pl-1">
                  <Link
                    to="#contact"
                    className="invisible text-base underline text-themeBlue-600"
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
                      value="platinum"
                      name="services14N"
                      onChange={onChangeHandler}
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
                Keyboard 'rich' industry related articles will be written,
                submitted for your approval and posted. Visitor activity and
                reviews posted will be traced.{" "}
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
                  to="#contact"
                  className="invisible text-base underline text-themeBlue-600"
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
                    value="social"
                    name="services14N"
                    onChange={onChangeHandler}
                  />
                </label>
              </div>
            </li>
          </ul>
        </form>
        <div className="comparision-table text-themeOrange-400 shadow-themeShadow">
          <table className="w-full table-fixed border-collapse font-Lato font-semibold text-sm text-center">
            <thead>
              <tr className="font-bold text-xs md:text-lg bg-gray-200">
                <th>Services</th>
                <th>Silver</th>
                <th>Gold</th>
                <th>Platinum</th>
                <th>Social</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Assigned SEO Manager</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>Keyword Research</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>Competitor Analysis</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>SEO Audit & Repairs</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>Website Copy Rewritten</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>SEO Attributes Added</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>Page Speed Increased</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>Website Audit Reports</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>Blog Post(Optional)</td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>SEO 24/7 Dashboard</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>Weekly Performance Reports</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>Business Directory Updates</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>Google My Business</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>Social Media Managed</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>Youtube Videos</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>Tagged Pinterest Images</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>Facebook Articles</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>LinkedIn Posts</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>Twitter Tweets Managed</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>Yelp Account Updated</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
              </tr>
              <tr>
                <td>Optimized Press Releases</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>Monthly Blog Articles</td>
                <td></td>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>Email List Uploaded</td>
                <td></td>
                <td></td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>Newsletter Template Designed</td>
                <td></td>
                <td></td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>Newsletter Written</td>
                <td></td>
                <td></td>
                <td>&#10003;</td>
                <td></td>
              </tr>
              <tr>
                <td>Email Published</td>
                <td></td>
                <td></td>
                <td>&#10003;</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-10 font-Lato text-center mx-auto">
          <div className="">
            <h3 className="text-3xl text-themeBlue-600 uppercase py-5">
              website design service
            </h3>
            <span className="text-xl italic text-themeOrange-400">
              - Include a Website Redesign Quote -
            </span>
            <p className="text-lg py-5 w-4/5 mx-auto">
              If you are considering a redesign of your current site, our
              website design and development services are industry recognized in
              delivering 'best in class' graphic designs and end-user
              experience. We have the experience and tenure to guide your team
              through the entire process of launching a new, dynamic online
              presentation of your products and services.
            </p>
          </div>
          <div className="w-4/5 border-2 border-gray-300 rounded mx-auto py-5">
            <form name="webdesignform">
              <div className="flex justify-self-end ml-5">
                <Link
                  to="/web-design-services"
                  target="_blank"
                  className="py-2 px-3 bg-themeBlue-600 text-white text-base rounded"
                >
                  Read More
                </Link>
              </div>
              <h3 className="text-3xl text-themeOrange-400 underline py-5">
                Website Design, Development & Maintenance
              </h3>
              <ul className="webdesign-form grid grid-cols-1 lg:grid-cols-3 text-lg text-themeBlue-600 text-left mx-8">
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Assigned Project Manager
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Senior Graphic Designer
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Development Team Lead
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Site Navigation Approval
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Design Mockups
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Mobile Friendly Design
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Fast Page Load Times
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  News & Events (Blog)
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Content Management (CMS)
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Email Opt-In Captures
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Request Quote Forms
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Ecommerce Solutions
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  SEO Page Attributes
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Customer Testimonials
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Site Traffic Analytics
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Landing Page Design
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Hi-Res Stock Photos
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Video Libraries & Stream
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Ongoing Website Maintenance{" "}
                </li>
                <li className="flex items-center">
                  <span className="font-bold text-2xl text-themeOrange-400 mr-2">
                    &#62;
                  </span>
                  Page Copy Writing (Optional)
                </li>
              </ul>
              <div className="justify-self-end mr-5 py-5 check-services text-right text-base font-semibold text-themeOrange-400">
                <label>
                  Select Services
                  <input
                    className="ml-2 checked:bg-themeBlue-600 text-themeBlue-600 border-themeBlue-600 focus:ring-themeBlue-600 text-lg"
                    type="radio"
                    id="webdesign"
                    value="webdesign"
                    name="webdesign"
                    onChange={onChangeHandler}
                  />
                </label>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-10">
          <form
            id="contact"
            className="text-gray-700 contact-form flex flex-col justify-center align-center m-10 font-Lato text-base"
          >
            <div className="font-Montserrat text-xs text-red pb-2">
              Required *
            </div>
            <div className="grid gap-3 grid-cols-2">
              <input
                className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-3 lg:col-start-1 lg:col-end-2"
                type="text"
                placeholder="First"
                name="firstname"
                id="firstname"
                aria-label="First name"
              />
              <input
                className="w-full border border-gray-700 p-3  rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-3 lg:col-start-2 lg:col-end-3"
                type="text"
                placeholder="Last"
                name="lastname"
                id="lastname"
                aria-label="Last name"
              />
              <input
                className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-3 lg:col-start-1 lg:col-end-2"
                type="tel"
                placeholder="Company"
                name="company"
                id="company"
                aria-label="Company Web address"
              />
              <input
                className="w-full border border-gray-700 p-3  rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-3 lg:col-start-2 lg:col-end-3"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                aria-label="email address"
              />
              <div className="program-section flex gap-x-10 py-5 col-start-1 col-end-3 text-xs md:text-base">
                <div className="program-section-heading">
                  *Services Selected - Request Proposal
                </div>
                <div className="program-section-content flex flex-col">
                  <label className="inline-flex md:items-center">
                    <input
                      type="radio"
                      id="targetsilver"
                      name="targetplan"
                      value="silver"
                    />
                    <span className="pl-2">
                      Silver - Website Search Optimization
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      id="targetgold"
                      name="targetplan"
                      value="gold"
                    />
                    <span className="pl-2">
                      Gold - Website Optimized, SEO Program & Social Media
                      Management
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      id="targetplatinum"
                      name="targetplan"
                      value="platinum"
                    />
                    <span className="pl-2">
                      Platinum - Website Optimized, SEO Program, Social Media &
                      Email Marketing
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      id="targetsocial"
                      name="targetplan"
                      value="social"
                    />
                    <span className="pl-2">
                      Social - Social Media Management
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      id="targetwebdesign"
                      name="webdesign"
                      value="webdesign"
                    />
                    <span className="pl-2">
                      Website Design, Development & Maintenance
                    </span>
                  </label>
                </div>
              </div>

              <textarea
                className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-span-2"
                type="textarea"
                placeholder="Message"
                rows="6"
                name="digi-message"
                id="digi-message"
              />
              <button className="w-full text-white uppercase bg-themeOrange-400 rounded font-MontserratSemiBold px-8 py-2 tracking-wider text-base shadow-2xl mt-5 col-span-2">
                Receive my free quote
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default WebDesignProposalPage

export const pageQuery = graphql`
  query WebDesignProposalPageById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    page: wpPage(id: { eq: $id }) {
      id
      content
      title
      slug
      seo {
        fullHead
        schema {
          raw
        }
      }
    }
    seoImages: allFile(
      filter: { relativeDirectory: { eq: "digital-marketing" } }
      sort: { fields: name, order: ASC }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            width: 66
            height: 66
            layout: FIXED
            placeholder: BLURRED
            quality: 90
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`
