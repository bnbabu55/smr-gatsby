import React, { useState } from "react"
import axios from "axios"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const SubscriptionForm = () => {
  const [emailValue, setEmailValue] = useState("")
  const [formResp, setFormResp] = useState({
    status: "",
    response: "",
    body_response: "",
  })
  const { executeRecaptcha } = useGoogleReCaptcha()
  const [token, setToken] = useState("")

  return (
    <>
      <form
        onSubmit={async event => {
          event.preventDefault()

          // ReCaptcha verification
          if (!executeRecaptcha) {
            return
          }
          // This is the same as grecaptcha.execute on traditional html script tags
          const result = await executeRecaptcha("smr_subscribe_form")
          setToken(result)
          console.log("received token: " + result)

          if (result.length <= 0) {
            console.log("recaptcha failed, form not submitted")
            return
          }

          const myForm = event.target
          const formData = new FormData(myForm)
          formData.append("_wpcf7_recaptcha_response", result)

          setFormResp({ ...formResp, status: "loading" })

          axios
            .post(
              "https://smr-sandbox.com/wp-json/contact-form-7/v1/contact-forms/11738/feedback",
              formData
            )
            .then(function (response) {
              if (response.data.status === "mail_sent") {
                setFormResp({
                  ...formResp,
                  status: "success",
                  response: response.data.response,
                  body_response: response.data.body_response,
                })
                console.log(response)
              } else {
                setFormResp({
                  ...formResp,
                  status: "error",
                  response: response.data.response,
                  body_response: response.data.body_response,
                })
                console.log(response)
              }
            })
            .catch(function (error) {
              setFormResp({
                ...formResp,
                status: "error",
                response: "",
                body_response: "Unknown error, please try again later.",
              })
              console.log(error)
            })
        }}
      >
        <label
          htmlFor="your-email"
          className="block text-sm font-medium text-gray-700"
        >
          Email *
        </label>
        <div className="mt-1">
          <input
            type="email"
            id="your-email"
            name="your-email"
            placeholder="Your Email Address:"
            required
            className="w-full text-sm border-gray-300 rounded shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200"
            value={emailValue}
            onChange={event => {
              setEmailValue(event.target.value)
            }}
          />
        </div>
        <input
          type="checkbox"
          name="_mc4wp_subscribe_contact-form-7"
          value="1"
          defaultChecked={true}
          className="hidden"
        />
        <button
          type="submit"
          className="w-full text-white text-sm uppercase font-RalewayBold tracking-wider bg-themeBlue-200 hover:bg-themeBlue-600 rounded py-2 mt-3 shadow-md"
          aria-label="submit"
          disabled={formResp === "success" ? true : false}
        >
          {formResp === "success" ? "Subscribed" : "Subscribe"}
        </button>
      </form>
      <div id="response-message" className="p-5">
        {formResp.status === "loading" && (
          <p className="font-Lato text-black text-sm">Sending....</p>
        )}
        {formResp.status === "error" && (
          <p className="font-Lato text-red-600 text-sm">
            {formResp.body_response}
          </p>
        )}
        {formResp.status === "success" && (
          <p className="font-Lato text-green-600 text-sm">
            Your form has been submitted successfully, thank you.
          </p>
        )}
        <p className="text-white">
          {formResp.status === "success" &&
            setTimeout(() => {
              setEmailValue("")
            }, 3000)}
        </p>
      </div>
    </>
  )
}

export default SubscriptionForm
