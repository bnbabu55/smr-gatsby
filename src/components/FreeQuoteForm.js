import React, { useState } from "react"
import { useBetween } from "use-between"
import { navigate } from "gatsby"
import axios from "axios"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const FreeQuoteForm = ({ useShareableState, OnlySEO }) => {
  const {
    setSelectedProgram,
    formProgram,
    setFormProgram,
    setWebDesign,
    formWeb,
    setFormWeb,
  } = useBetween(useShareableState)

  const [companyValue, setCompanyValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [fnameValue, setFNameValue] = useState("")
  const [lnameValue, setLNameValue] = useState("")
  const [messageValue, setMessageValue] = useState("")
  const [formResp, setFormResp] = useState("")
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [token, setToken] = useState("")

  return (
    <div className="pt-10">
      <form
        id="free-quote"
        className="text-gray-700 free-quote-form flex flex-col justify-center align-center m-10 font-Lato text-base"
        onSubmit={async event => {
          event.preventDefault()

          // ReCaptcha verification
          if (!executeRecaptcha) {
            return
          }
          // This is the same as grecaptcha.execute on traditional html script tags
          const result = await executeRecaptcha("smr_quote_form")
          setToken(result)
          console.log("received token: " + result)

          if (token.length > 0) {
            console.log("recaptcha failed, form not submitted")
            return
          }

          const myForm = event.target
          const formData = new FormData(myForm)
          formData.append("recaptcha-token", token)
          setFormResp("loading")
          axios
            .post(
              "https://smr-sandbox.com/wp-json/contact-form-7/v1/contact-forms/11706/feedback",
              formData
            )
            .then(function (response) {
              if (response.data.status === "mail_sent") {
                setFormResp("success")
                console.log(response)
              } else {
                setFormResp("error")
                console.log(response.data.message)
              }
            })
            .catch(function (error) {
              setFormResp("error")
              console.log(error)
            })
        }}
      >
        <div className="font-Montserrat font-semibold text-xs text-red-600 pb-4">
          Required *
        </div>
        <div className="grid gap-y-6 lg:gap-y-6 lg:gap-x-6 grid-cols-1 lg:grid-cols-2">
          <div className="relative w-full col-start-1 col-end-2">
            <input
              className="peer h-10 w-full text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded"
              type="text"
              placeholder="First"
              name="firstname"
              id="firstname"
              aria-label="First name"
              value={fnameValue}
              onChange={event => {
                setFNameValue(event.target.value)
              }}
            />
            <label
              htmlFor="firstname"
              className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              First Name
            </label>
            <span className="absolute right-2 top-1 text-red-600">*</span>
          </div>
          <div className="relative w-full col-start-1 col-end-2 row-start-2 row-end-3 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
            <input
              className="peer h-10 w-full text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded"
              type="text"
              placeholder="Last"
              name="lastname"
              id="lastname"
              aria-label="Last name"
              value={lnameValue}
              onChange={event => {
                setLNameValue(event.target.value)
              }}
            />
            <label
              htmlFor="lastname"
              className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Last Name
            </label>
            <span className="absolute right-2 top-1 text-red-600">*</span>
          </div>
          <div className="relative w-full col-start-1 col-end-2 row-start-3 row-end-4 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
            <input
              className="peer h-10 w-full text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded"
              type="tel"
              placeholder="Company"
              name="company"
              id="company"
              aria-label="Company Web address"
              value={companyValue}
              onChange={event => {
                setCompanyValue(event.target.value)
              }}
            />
            <label
              htmlFor="company"
              className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Company
            </label>
            <span className="absolute right-2 top-1 text-red-600">*</span>
          </div>
          <div className="relative w-full col-start-1 col-end-2 row-start-4 row-end-5 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
            <input
              className="peer h-10 w-full text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded"
              type="email"
              placeholder="Email"
              name="your-email"
              id="your-email"
              aria-label="email address"
              value={emailValue}
              onChange={event => {
                setEmailValue(event.target.value)
              }}
            />
            <label
              htmlFor="your-email"
              className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email
            </label>
            <span className="absolute right-2 top-1 text-red-600">*</span>
          </div>
          <div className="program-section flex gap-x-10 py-5 col-start-1 col-end-2 row-start-5 row-end-6 lg:col-span-2 lg:row-start-3 lg:row-end-4 text-xs md:text-base">
            <div className="program-section-heading">
              *Services Selected - Request Quote
            </div>
            <div className="program-section-content flex flex-col">
              <label className="inline-flex md:items-center">
                <input
                  type="radio"
                  id="targetsilver"
                  name="targetplan"
                  value={formProgram}
                  checked={formProgram === "silver"}
                  onChange={() => {
                    setSelectedProgram("silver")
                    setFormProgram("silver")
                  }}
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
                  value={formProgram}
                  checked={formProgram === "gold"}
                  onChange={() => {
                    setSelectedProgram("gold")
                    setFormProgram("gold")
                  }}
                />
                <span className="pl-2">
                  Gold - Website Optimized, SEO Program &amp; Social Media
                  Management
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="targetplatinum"
                  name="targetplan"
                  value={formProgram}
                  checked={formProgram === "platinum"}
                  onChange={() => {
                    setSelectedProgram("platinum")
                    setFormProgram("platinum")
                  }}
                />
                <span className="pl-2">
                  Platinum - Website Optimized, SEO Program, Social Media &amp;
                  Email Marketing
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="targetsocial"
                  name="targetplan"
                  value={formProgram}
                  checked={formProgram === "social"}
                  onChange={() => {
                    setSelectedProgram("social")
                    setFormProgram("social")
                  }}
                />
                <span className="pl-2">Social - Social Media Management</span>
              </label>
              {OnlySEO === false && (
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    id="targetwebdesign"
                    name="targetwebdesign"
                    value={formWeb}
                    checked={formWeb === "webDesign"}
                    onChange={() => {
                      setWebDesign("webDesign")
                      setFormWeb("webDesign")
                    }}
                  />
                  <span className="pl-2">
                    Website Design, Development &amp; Maintenance
                  </span>
                </label>
              )}
            </div>
          </div>
          <div className="relative w-full col-start-1 col-end-2 row-start-6 row-end-7 lg:col-span-2 lg:row-start-4 lg:row-end-5">
            <textarea
              className="peer w-full text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded"
              type="textarea"
              placeholder="Message"
              rows="6"
              name="your-message"
              id="your-message"
              value={messageValue}
              onChange={event => {
                setMessageValue(event.target.value)
              }}
            />
            <label
              htmlFor="message"
              className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Message
            </label>
            <span className="absolute right-2 top-1 text-red-600">*</span>
          </div>
          <button
            type="submit"
            className="w-full text-white uppercase bg-themeOrange-400 rounded font-MontserratSemiBold px-8 py-2 tracking-wider text-base shadow-2xl mt-5 col-span-2"
          >
            Receive my free quote
          </button>
        </div>
      </form>
      <div id="response-message" style={{ padding: "20px" }}>
        {formResp === "loading" && (
          <p className="font-Lato text-black">Sending....</p>
        )}
        {formResp === "error" && (
          <p className="font-Lato text-red-600">
            An unknown error has occured, please try again later...
          </p>
        )}
        {formResp === "success" && (
          <p className="font-Lato text-green-500">
            Your form has been submitted successfully, thank you.
          </p>
        )}
        <p className="text-white">
          {formResp === "success" &&
            setTimeout(() => {
              navigate("/")
            }, 3000)}
        </p>
      </div>
    </div>
  )
}

export default FreeQuoteForm
