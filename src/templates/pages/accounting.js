import React from "react"
import { graphql } from "gatsby"
import ContactForm from "../../components/ContactForm"
import FreeQuoteForm from "../../components/FreeQuoteForm"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"

const AccountingPage = ({ data: { page } }) => {
  return (
    <Layout className="overflow-x-hidden break-all">
      <Seo seoData={page?.seo} />
      <section>
        <h1 className="w-11/12 mx-auto font-BebasNeue font-bold text-5xl text-themeOrange-400 text-center py-5">
          SEARCH MARKETING RESOURCE ACCOUNTING
        </h1>
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 py-8">
          <div>
            <h2 className="font-Montserrat text-2xl text-themeBlue-600 pb-5">
              SERVICES PAYMENT
            </h2>
          </div>
        </div>
        <div className="w-11/12 contact-wrapper mx-auto border border-gray-700 rounded-lg">
          <form className="text-gray-700 contact-form flex flex-col justify-center align-center m-10 font-Lato text-base">
            <p className="pb-3 text-themeGray-200 text-lg font-Lato text-left">
              We offer online payment for your convenience. Please include the
              invoice number(s) for which the payment is to be applied. You may
              add more than one invoice number, separate by commas.
            </p>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato text-left">
              For continued monthly billings, you may opt in and click the
              'Recurring' icon.
            </p>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato text-left">
              If have any questions, please contact{" "}
              <a href="mailto:accounting@searchmarketingresource.com">
                <u>accounting@searchmarketingresource.com</u>
              </a>
              .
            </p>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato text-left">
              Thank you.
            </p>
            <hr className="w-full mx-auto border-4 border-gray-300 my-8" />
            <div className="font-Montserrat text-lg font-bold pb-5">
              Step 1 of 2
            </div>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-4">
              <div className="relative col-start-1 col-end-2 row-start-1 row-end-2">
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                  placeholder="Amount"
                />
                <label
                  htmlFor="amount"
                  className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Amount
                </label>
              </div>

              <div className="relative col-start-1 col-end-2 row-start-2 row-end-3 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
                <input
                  id="invoice"
                  name="invoice"
                  type="text"
                  className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                  placeholder="Invoice number"
                />
                <label
                  htmlFor="invoice"
                  className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Invoice
                </label>
              </div>

              <div className="relative col-start-1 col-end-2 row-start-3 row-end-4 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3">
                <textarea
                  id="comments"
                  name="comments"
                  type="textarea"
                  rows="6"
                  className="peer w-full border border-gray-700 text-gray-600 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                  placeholder="Your comments here"
                />
                <label
                  htmlFor="comments"
                  className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Comments
                </label>
              </div>
              <div>
                <fieldset className="border border-solid border-gray-700 rounded-lg p-3">
                  <legend className="text-base text-gray-600">
                    Payment Type
                  </legend>
                  <div className="flex justify-start items-center">
                    <label
                      htmlFor="pay_type"
                      className="text-gray-600 text-base pr-3 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-gray-600 peer-focus:text-base"
                    >
                      One Time
                    </label>
                    <input
                      id="pay_type"
                      name="pay_type"
                      type="radio"
                      className="peer border border-gray-700 text-blue-600 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    />
                  </div>
                  <div className="flex justify-start items-center mt-3">
                    <label
                      htmlFor="pay_type"
                      className="text-gray-600 text-base pr-3 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-gray-600 peer-focus:text-base"
                    >
                      Recurring
                    </label>
                    <input
                      id="pay_type"
                      name="pay_type"
                      type="radio"
                      className="peer border border-gray-700 text-blue-600 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    />
                  </div>
                </fieldset>
              </div>
              <div className="flex flex-col">
                <label htmlFor="frequency" className="text-gray-600 text-base">
                  Frequency
                </label>
                <select
                  id="frequency"
                  name="frequency"
                  className="w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                >
                  <option value="1">Monthly</option>
                  <option value="2">Yearly</option>
                </select>
              </div>
              <input
                type="button"
                value="NEXT"
                className="mt-20 px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer"
              />
            </div>
            <h3 className="pb-3 text-themeGray-200 text-xl font-LatoBold text-left">
              Payment Successful
            </h3>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato text-left">
              We offer online payment for your convenience. For continued
              monthly billings, you may opt in and click the 'Recurring' icon.
              If have any questions, please contact{" "}
              <a href="accounting@searchmarketingresource.com">
                <u>accounting@searchmarketingresource.com</u>
              </a>
              .
            </p>
            <p className="pb-3 text-themeGray-200 text-lg font-Lato text-left">
              Thank you.
            </p>
            <h3 className="pb-3 text-themeGray-200 text-xl font-LatoBold text-left">
              Search Marketing Resource LLC
            </h3>

            <hr className="w-full mx-auto border-4 border-gray-300 my-8" />
            <div className="font-Montserrat text-lg font-bold pb-5">
              Step 2 of 2
            </div>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col gap-y-6">
                <div className="relative">
                  <input
                    id="invoice"
                    name="invoice"
                    type="text"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    placeholder="Invoice number"
                  />
                  <label
                    htmlFor="invoice"
                    className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Invoice
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    placeholder="Amount"
                  />
                  <label
                    htmlFor="amount"
                    className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Amount
                  </label>
                </div>
                <div className="relative lg:mb-6">
                  <input
                    id="ccnumber"
                    name="ccnumber"
                    type="number"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    placeholder="Credit Card Number"
                  />
                  <label
                    htmlFor="ccnumber"
                    className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Credit Card Number
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="expiry"
                    name="expiry"
                    type="text"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    placeholder="YYYY-MM"
                  />
                  <label
                    htmlFor="expiry"
                    className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Expiration Date (YYYY-MM)
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="fname"
                    name="fname"
                    type="text"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    placeholder="First Name"
                  />
                  <label
                    htmlFor="fname"
                    className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="lname"
                    name="lname"
                    type="text"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    placeholder="Last Name"
                  />
                  <label
                    htmlFor="lname"
                    className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-y-6">
                <div className="relative">
                  <input
                    id="addr1"
                    name="addr1"
                    type="text"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    placeholder="Address Line 1"
                  />
                  <label
                    htmlFor="addr1"
                    className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Address Line 1
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="addr2"
                    name="addr2"
                    type="text"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    placeholder="Address Line 2"
                  />
                  <label
                    htmlFor="addr2"
                    className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Address Line 2
                  </label>
                </div>
                <div className="relative">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    placeholder="City"
                  />
                  <label
                    htmlFor="city"
                    className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    City
                  </label>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="state" className="text-gray-600 text-base">
                    State
                  </label>
                  <select
                    id="state"
                    name="state"
                    className="w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                  >
                    <option value="">Please Select</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
                <div className="relative">
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    placeholder="Zip Code"
                  />
                  <label
                    htmlFor="zip"
                    className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Zip Code
                  </label>
                </div>
              </div>

              <input
                type="button"
                value="NEXT"
                className="mt-20 px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer"
              />
            </div>
          </form>
        </div>
      </section>
      <FreeQuoteForm />
      <ContactForm />
    </Layout>
  )
}

export default AccountingPage

export const pageQuery = graphql`
  query AccountingPageById(
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
      name: { regex: "/-banner/" }
      relativeDirectory: { eq: "about" }
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
    plxImage: file(
      name: { regex: "/-parallax/" }
      relativeDirectory: { eq: "about" }
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
  }
`
