import React, { useState } from "react"
import axios from "axios"

const SubscriptionForm = () => {
  const [emailValue, setEmailValue] = useState("")
  const [formResp, setFormResp] = useState("")

  return (
    <form
      onSubmit={async event => {
        event.preventDefault()

        const myForm = event.target
        const formData = new FormData(myForm)
        setFormResp("loading")
        axios
          .post(
            "https://smr-sandbox.com/wp-json/contact-form-7/v1/contact-forms/11738/feedback",
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
      <label
        htmlFor="subemail"
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
        className="w-full text-white text-xs uppercase font-RalewayBold tracking-widest bg-themeBlue-200 hover:bg-themeBlue-600 rounded py-2 mt-3 shadow-md"
        aria-label="submit"
        disabled={formResp === "success" ? true : false}
      >
        {formResp === "success" ? "Subscribed" : "Subscribe"}
      </button>
    </form>
  )
}

export default SubscriptionForm