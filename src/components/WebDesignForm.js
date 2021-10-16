import React from "react"
import { Link } from "gatsby"
import { useBetween } from "use-between"

const WebDesignForm = ({ useShareableState }) => {
  const { webDesign, setWebDesign, setFormWeb } = useBetween(useShareableState)

  return (
    <div className="w-4/5 border-2 border-gray-300 rounded mx-auto py-5 my-5">
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
        <h3 className="text-3xl text-themeOrange-400 underline py-5 text-center">
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
        <div className="mr-2 py-5 mx-10 flex justify-between">
          <div className="hide-box pl-1">
            <Link
              to="#free-quote"
              className="invisible text-base underline text-themeBlue-600"
            >
              Scroll Down To Complete Form
            </Link>
          </div>
          <div className="check-services text-right text-base font-semibold text-themeOrange-400">
            <label>
              Select Services
              <input
                className="topradio ml-2 checked:bg-themeBlue-600 text-themeBlue-600 border-themeBlue-600 focus:ring-themeBlue-600 text-lg"
                type="radio"
                id="webdesign"
                name="webdesign"
                value={webDesign}
                checked={webDesign === "webDesign"}
                onChange={() => {
                  setWebDesign("webDesign")
                  setFormWeb("webDesign")
                }}
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default WebDesignForm
