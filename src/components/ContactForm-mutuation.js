import React, { useState } from "react"
import { gql, useMutation } from "@apollo/client"
import { navigate } from "gatsby"

const CONTACT_MUTATION = gql`
  mutation CreateSubmissionMutation(
    $clientMutationId: String!
    $company: String!
    $email: String!
    $fname: String!
    $lname: String!
    $message: String!
  ) {
    createContactSubmission(
      input: {
        clientMutationId: $clientMutationId
        company: $company
        email: $email
        fname: $fname
        lname: $lname
        message: $message
      }
    ) {
      success
      data
    }
  }
`

const ContactForm = () => {
  const [companyValue, setCompanyValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [fnameValue, setFNameValue] = useState("")
  const [lnameValue, setLNameValue] = useState("")
  const [messageValue, setMessageValue] = useState("")

  const [submitForm, { data, loading, error }] = useMutation(CONTACT_MUTATION)

  return (
    <div className="w-full contact-wrapper mx-auto border border-gray-700 rounded">
      <form
        className="text-gray-700 contact-form flex flex-col justify-center align-center m-10 font-Lato text-base"
        onSubmit={async event => {
          event.preventDefault()

          submitForm({
            variables: {
              clientMutationId: "SMRContactForm",
              company: companyValue,
              email: emailValue,
              fname: fnameValue,
              lname: lnameValue,
              message: messageValue,
            },
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
              placeholder="Company"
              name="company"
              id="company"
              value={companyValue}
              onChange={event => {
                setCompanyValue(event.target.value)
              }}
              required
            />
            <label
              htmlFor="company"
              className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Company
            </label>
            <span className="absolute right-2 top-1 text-red-600">*</span>
          </div>
          <div className="relative w-full col-start-1 col-end-2 row-start-2 row-end-3 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
            <input
              className="peer h-10 w-full text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded"
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={emailValue}
              onChange={event => {
                setEmailValue(event.target.value)
              }}
              required
            />
            <label
              htmlFor="email"
              className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Email
            </label>
            <span className="absolute right-2 top-1 text-red-600">*</span>
          </div>
          <div className="relative w-full col-start-1 col-end-2 row-start-3 row-end-4 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
            <input
              className="peer h-10 w-full text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded"
              type="text"
              placeholder="First Name"
              name="firstname"
              id="firstname"
              value={fnameValue}
              onChange={event => {
                setFNameValue(event.target.value)
              }}
              required
            />
            <label
              htmlFor="firstname"
              className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              First Name
            </label>
            <span className="absolute right-2 top-1 text-red-600">*</span>
          </div>
          <div className="relative w-full col-start-1 col-end-2 row-start-4 row-end-5 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
            <input
              className="peer h-10 w-full text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded"
              type="text"
              placeholder="Last"
              name="lastname"
              id="lastname"
              value={lnameValue}
              onChange={event => {
                setLNameValue(event.target.value)
              }}
              required
            />
            <label
              htmlFor="lastname"
              className="absolute left-2 -top-5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Last Name
            </label>
            <span className="absolute right-2 top-1 text-red-600">*</span>
          </div>
          <div className="relative w-full col-start-1 col-end-2 row-start-5 row-end-6 lg:col-span-2 lg:row-start-3 lg:row-end-4">
            <textarea
              className="peer w-full text-gray-900 placeholder-transparent focus:outline-none focus:border-themeBlue-200 rounded"
              type="textarea"
              placeholder="Message"
              rows="6"
              name="message"
              id="message"
              value={messageValue}
              onChange={event => {
                setMessageValue(event.target.value)
              }}
              required
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
            Submit
          </button>
        </div>
      </form>
      <div style={{ padding: "20px" }}>
        {loading && <p className="font-Lato text-black">Sending....</p>}
        {error && (
          <p className="font-Lato text-red-600">
            An unknown error has occured, please try again later...
          </p>
        )}
        {data && (
          <p className="font-Lato text-green-600">
            Your form has been submitted successfully, thank you.
          </p>
        )}
        <p className="text-white">
          {data &&
            setTimeout(() => {
              navigate("/")
            }, 3000)}
        </p>
      </div>
    </div>
  )
}

export default ContactForm
