import React, { useState } from "react"
import { navigate } from "gatsby"
import axios from "axios"

const PaymentForm = () => {
  const states = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "DC", label: "District Of Columbia" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" },
  ]

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    amount: "",
    invoice: "",
    payType: "onetime",
    frequency: "",
    comments: "",
    ccnumber: "",
    doe: "",
    firstname: "",
    lastname: "",
    addr1: "",
    addr2: "",
    city: "",
    state: "",
    zip: "",
  })
  const [errors, setErrors] = useState({})
  const [formResp, setFormResp] = useState("")

  const updateForm = e => {
    const value = e.target.value === "radio" ? e.target.checked : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
  }

  const submitHandler = e => {
    e.preventDefault()

    const submitForm = new FormData()
    submitForm.append("amount", formData.amount)
    submitForm.append("invoice", formData.invoice)
    submitForm.append("payType", formData.payType)
    submitForm.append("frequency", formData.frequency)
    submitForm.append("comments", formData.comments)
    submitForm.append("ccnumber", formData.ccnumber)
    submitForm.append("doe", formData.doe)
    submitForm.append("firstname", formData.firstname)
    submitForm.append("lastname", formData.lastname)
    submitForm.append("addr1", formData.addr1)
    submitForm.append("addr2", formData.addr2)
    submitForm.append("city", formData.city)
    submitForm.append("state", formData.state)
    submitForm.append("zip", formData.zip)

    setFormResp("loading")
    axios
      .post(
        "https://smr-sandbox.com/wp-json/contact-form-7/v1/contact-forms/2536/feedback",
        submitForm
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
  }

  return (
    <div className="w-full contact-wrapper mx-auto border border-gray-700 rounded">
      <form
        className="text-gray-700 contact-form flex flex-col justify-center align-center m-10 font-Lato text-base"
        onSubmit={submitHandler}
      >
        {step === 1 && (
          <>
            <div className="font-Montserrat text-lg font-bold pb-5">
              Step 1 of 2
            </div>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
              <div className="relative col-start-1 col-end-2 row-start-1 row-end-2">
                <input
                  id="amount"
                  name="amount"
                  type="text"
                  className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                  placeholder="Amount"
                  onChange={updateForm}
                  value={formData.amount}
                  autoComplete="off"
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
                  className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                  placeholder="Invoice number"
                  onChange={updateForm}
                  value={formData.invoice}
                  autoComplete="off"
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
                  className="peer w-full border border-gray-700 text-gray-600 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                  placeholder="Your comments here"
                  onChange={updateForm}
                  value={formData.comments}
                  autoComplete="off"
                />
                <label
                  htmlFor="comments"
                  className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                >
                  Comments
                </label>
              </div>
              <fieldset className="border border-solid border-gray-700 rounded p-3 col-start-1 col-end-2 row-start-4 row-end-5 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
                <legend className="text-base text-gray-600">
                  Payment Type
                </legend>
                <div className="flex justify-start items-center">
                  <label
                    htmlFor="payType"
                    className="text-gray-600 text-base pr-3 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-gray-600 peer-focus:text-base"
                  >
                    One Time
                  </label>
                  <input
                    name="payType"
                    type="radio"
                    className="peer border border-gray-700 text-blue-600 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    onChange={updateForm}
                    value={"onetime"}
                    checked={formData.payType === "onetime" ? true : false}
                  />
                </div>
                <div className="flex justify-start items-center mt-3">
                  <label
                    htmlFor="payType"
                    className="text-gray-600 text-base pr-3 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:text-gray-600 peer-focus:text-base"
                  >
                    Recurring
                  </label>
                  <input
                    name="payType"
                    type="radio"
                    className="peer border border-gray-700 text-blue-600 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded-lg shadow-sm"
                    onChange={updateForm}
                    value={"recurring"}
                    checked={formData.payType === "recurring" ? true : false}
                  />
                </div>
              </fieldset>
              <div
                className={`flex flex-col ${
                  formData.payType === "recurring" ? "visible" : "hidden"
                } col-start-1 col-end-2 row-start-5 row-end-6 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3`}
              >
                <label htmlFor="frequency" className="text-gray-600 text-base">
                  Frequency
                </label>
                <select
                  id="frequency"
                  name="frequency"
                  className="w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                  onChange={updateForm}
                  value={formData.frequency}
                >
                  <option value="1">Monthly</option>
                  <option value="2">Yearly</option>
                </select>
              </div>
              <input
                type="button"
                value="NEXT"
                className="mt-10 px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer  col-start-1 col-end-2 row-start-6 row-end-7 lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
                onClick={() => {
                  setStep(2)
                }}
              />
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="font-Montserrat text-lg font-bold pb-5">
              Step 2 of 2
            </div>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col gap-y-6">
                <div className="relative">
                  <input
                    id="invoice2"
                    name="invoice2"
                    type="text"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                    placeholder="Invoice number"
                    value={formData.invoice}
                    readOnly={"readonly"}
                  />
                  <label
                    htmlFor="invoice2"
                    className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Invoice
                  </label>
                </div>

                <div className="relative">
                  <input
                    id="amount2"
                    name="amount2"
                    type="text"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                    placeholder="Amount"
                    value={formData.amount}
                    readOnly={"readonly"}
                  />
                  <label
                    htmlFor="amount2"
                    className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Amount
                  </label>
                </div>
                <div className="relative lg:mb-6">
                  <input
                    id="ccnumber"
                    name="ccnumber"
                    type="text"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                    placeholder="Credit Card Number"
                    onChange={updateForm}
                    value={formData.ccnumber}
                    autoComplete="off"
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
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                    placeholder="YYYY-MM"
                    onChange={updateForm}
                    value={formData.doe}
                    autoComplete="off"
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
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                    placeholder="First Name"
                    onChange={updateForm}
                    value={formData.firstname}
                    autoComplete="off"
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
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                    placeholder="Last Name"
                    onChange={updateForm}
                    value={formData.lastname}
                    autoComplete="off"
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
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                    placeholder="Address Line 1"
                    onChange={updateForm}
                    value={formData.addr1}
                    autoComplete="off"
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
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                    placeholder="Address Line 2"
                    onChange={updateForm}
                    value={formData.addr2}
                    autoComplete="off"
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
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                    onChange={updateForm}
                    value={formData.city}
                    placeholder="City"
                    autoComplete="off"
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
                    className="w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                    onChange={updateForm}
                    value={formData.state}
                  >
                    <option value="">Please Select</option>
                    {states.map(item => {
                      return (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <div className="relative">
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    className="peer h-10 w-full border border-gray-700 text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded shadow-sm"
                    placeholder="Zip Code"
                    onChange={updateForm}
                    value={formData.zip}
                    autoComplete="off"
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
                value="Go Back"
                className="mt-10 px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer"
                onClick={() => {
                  setStep(1)
                }}
              />
              <input
                type="submit"
                value="Submit"
                className="mt-10 px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer"
              />
            </div>
          </>
        )}
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
          {/* {formResp === "success" &&
            setTimeout(() => {
              navigate("/")
            }, 3000)} */}
        </p>
      </div>
    </div>
  )
}

export default PaymentForm
