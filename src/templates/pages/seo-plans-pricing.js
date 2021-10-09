import React from "react"
import { graphql, Link } from "gatsby"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import ContactForm from "../../components/ContactForm"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import SwiperCore, { Autoplay, Pagination } from "swiper"

SwiperCore.use([Autoplay, Pagination])

const SEOPlansPage = ({ data: { page, bgImage, googleImage, seoImages } }) => {
  const pluginImage = getImage(bgImage.childImageSharp.gatsbyImageData)

  const image = convertToBgImage(pluginImage)

  const onChangeHandler = e => {
    const chosenPlan = e.target.value

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
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...image}
        preserveStackingContext
        id="SEOPlansPage"
        className="w-full text-gray-800 font-LatoBlack py-16 flex flex-col gap-y-8 justify-center items-start border-b-4 border-themeGray-50 shadow-themeShadow mb-8"
      >
        <div className="text-themeBlue-600 text-2xl lg:text-7xl pl-12 lg:pl-28 font-LatoBold text-center">
          We Place Your <br />
          Business In Front Of
        </div>
        <GatsbyImage
          image={googleImage.childImageSharp.gatsbyImageData}
          alt="Website design for small business client banner"
          className="lg:ml-60 ml-6"
          layout="intrinsic"
        />
        <div className="text-themeOrange-400 text-sm lg:text-4xl pl-12 lg:pl-28 font-LatoLight text-center">
          Digital Marketing Programs &amp; <br />
          Social Media Management Solutions
        </div>
      </BackgroundImage>
      <section className="w-11/12 mx-auto">
        <h1 className="text-themeOrange-400 text-5xl font-BebasNeue font-bold tracking-wide text-center">
          DIGITAL MARKETING SERVICE PLANS
        </h1>

        <div className="py-5 text-center">
          <p className="text-themeGray-200 text-lg font-Lato pb-3">
            Every business has its own individual approach to marketing - the
            goals, budget and expectations. And for online marketing, your SEO
            opportunities may differ from your competition for your website
            updates, keyword phrase selection and Social Media management.
          </p>
          <p className="text-themeGray-200 text-lg font-Lato">
            Many companies are looking to fully optimize their website with top
            search marketing practices while other businesses require an ongoing
            SEO program to better align their website with Google, Yahoo and
            Bing. This includes monthly Blog articles written, Social Media
            posts, Business Directory placement and weekly monitoring of their
            Digital Marketing campaign results.
          </p>
          <p className="text-lg text-themeBlue-600 font-Lato font-bold italic py-10">
            &lt;&lt; Select A SEO Program That Best Meets Your Online Marketing
            Objectives &amp; Strategies &gt;&gt;
          </p>
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
                    image={
                      seoImages?.nodes[0]?.childImageSharp?.gatsbyImageData
                    }
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
                    to="/search-marketing-website-design-proposal-form/"
                    className="invisible text-base underline text-themeBlue-600"
                  >
                    Click To Complete Form
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
                    image={
                      seoImages?.nodes[1]?.childImageSharp?.gatsbyImageData
                    }
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
                  This is a full service offering that is ongoing, month to
                  month. All efforts from Package #1 are included plus Blog
                  Posts, Business Directory Listings and Social Media managed.{" "}
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
                      to="/search-marketing-website-design-proposal-form/"
                      className="invisible text-base underline text-themeBlue-600"
                    >
                      Click To Complete Form
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
                    image={
                      seoImages?.nodes[2]?.childImageSharp?.gatsbyImageData
                    }
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
                  keyword search rankings quickly but also includes the
                  management of the monthly email marketing campaigns. All other
                  SEO services are provided as well.{" "}
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
                      to="/search-marketing-website-design-proposal-form/"
                      className="invisible text-base underline text-themeBlue-600"
                    >
                      Click To Complete Form
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
                    image={
                      seoImages?.nodes[3]?.childImageSharp?.gatsbyImageData
                    }
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
                  All of your social media accounts will be reviewed and
                  updated. Keyboard 'rich' industry related articles will be
                  written, submitted for your approval and posted. Visitor
                  activity and reviews posted will be traced.{" "}
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
                    to="/search-marketing-website-design-proposal-form/"
                    className="invisible text-base underline text-themeBlue-600"
                  >
                    Click To Complete Form
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

          <p className="text-themeGray-200 text-lg font-Lato py-10">
            The above programs are very effective in generating top position
            keyword rankings and driving organic search traffic to your website.
            For the past 15 years, Search Marketing Resource has been providing
            online marketing services ranging from 100% turn-key solutions to
            ala carte programs tailored to a client’s specific needs and budget.
          </p>
        </div>
      </section>

      <FreeQuoteForm />
      <ContactForm />
    </Layout>
  )
}

export default SEOPlansPage

export const pageQuery = graphql`
  query SEOPlansPageById(
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
    bgImage: file(
      name: { regex: "/digital-marketing-packages/" }
      relativeDirectory: { eq: "seo-plans" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 1400
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
      }
    }
    googleImage: file(
      name: { regex: "/google-image/" }
      relativeDirectory: { eq: "seo-plans" }
    ) {
      name
      childImageSharp {
        gatsbyImageData(
          width: 260
          placeholder: BLURRED
          quality: 90
          formats: [AUTO, WEBP]
        )
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
