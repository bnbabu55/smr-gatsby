import React, { useState } from "react"
import axios from "axios"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const FreeAuditForm = ({ home }) => {
  const [webUrlValue, setWebUrlValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [fnameValue, setFNameValue] = useState("")
  const [lnameValue, setLNameValue] = useState("")
  const [phoneValue, setPhoneValue] = useState("")
  const [formResp, setFormResp] = useState("")
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [token, setToken] = useState("")

  return (
    <div
      id="freeauditform"
      className={`pt-5 my-10 border-b pb-5 ${
        home ? "bg-themeOrange-700" : "bg-themeBlue-600"
      } border-gray-300`}
    >
      <div className="top_content flex flex-col justify-center items-center">
        <div className="pt-8 text-white text-2xl text-center font-MontserratBold pb-5">
          Is Your Website Search Engine Optimized? Get a Free Website SEO Audit!
        </div>
        <div
          className={`w-11/12 ${
            home ? "bg-themeOrange-400" : "bg-themeBlue-200"
          } mx-auto`}
        >
          <form
            className="audit-form m-10 font-Lato text-base"
            onSubmit={async event => {
              event.preventDefault()

              // ReCaptcha verification
              if (!executeRecaptcha) {
                return
              }
              // This is the same as grecaptcha.execute on traditional html script tags
              const result = await executeRecaptcha("smr_audit_form")
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
                  "https://smr-sandbox.com/wp-json/contact-form-7/v1/contact-forms/10521/feedback",
                  formData
                )
                .then(function (response) {
                  if (response.data.status === "mail_sent") {
                    setFormResp("success")
                    console.log(response)
                  } else {
                    setFormResp("error")
                    console.log(response)
                  }
                })
                .catch(function (error) {
                  setFormResp("error")
                  console.log(error)
                })
            }}
          >
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
              <div className="order-1 font-MontserratBold text-2xl uppercase text-white md:col-span-2 lg:col-span-1">
                Free Site Audit!
              </div>
              <input
                className="order-1 w-full border border-black p-3 rounded"
                type="text"
                placeholder="First Name"
                name="first-name"
                id="first-name"
                value={fnameValue}
                onChange={event => {
                  setFNameValue(event.target.value)
                }}
              />
              <input
                className="w-full order-1 border border-black p-3 rounded"
                type="text"
                placeholder="Last Name"
                name="last-name"
                id="last-name"
                value={lnameValue}
                onChange={event => {
                  setLNameValue(event.target.value)
                }}
              />
              <input
                className="w-full order-1 border border-black p-3 rounded"
                type="text"
                placeholder="e.g http(s)://example.com"
                name="your-website"
                id="your-website"
                value={webUrlValue}
                onChange={event => {
                  setWebUrlValue(event.target.value)
                }}
              />
              <div className="order-2 lg:order-1 text-white">Recaptcha</div>
              <input
                className="w-full order-1 border border-black p-3 rounded"
                type="email"
                placeholder="Email"
                name="your-email"
                id="your-email"
                value={emailValue}
                onChange={event => {
                  setEmailValue(event.target.value)
                }}
              />
              <input
                className="w-full order-1 border border-black p-3 rounded"
                type="tel"
                placeholder="Phone"
                name="your-phone"
                id="your-phone"
                value={phoneValue}
                onChange={event => {
                  setPhoneValue(event.target.value)
                }}
              />
              <button
                id="freeaudit-submit"
                type="submit"
                className={`w-full order-3 text-white uppercase 
                ${
                  home ? "bg-themeBlue-200" : "bg-themeOrange-400"
                }                 
                font-MontserratSemiBold px-16 py-3 tracking-wider text-base shadow-2xl rounded`}
                disabled={formResp === "success" ? true : false}
              >
                {formResp === "success" ? "Submitted" : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <p className="text-white text-lg font-Lato text-center py-5 mx-5">
          The Search Marketing Resource team will review your website and
          deliver a report that provides both a graded review on how well your
          site has been Search Engine optimized for the keywords or phrases you
          are targeting but also direct action items that if followed will help
          to increase our keyword search rankings.
        </p>
      </div>
    </div>
  )
}

export default FreeAuditForm
