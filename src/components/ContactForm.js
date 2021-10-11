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
    createSubmission(
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
    <div className="w-full contact-wrapper mx-auto border border-gray-700 rounded-lg">
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
        <div className="font-Montserrat text-xs text-red pb-2">Required *</div>
        <div className="grid gap-3 grid-cols-2">
          <input
            className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-3 lg:col-start-1 lg:col-end-2"
            type="text"
            placeholder="Company"
            name="company"
            id="company"
            value={companyValue}
            onChange={event => {
              setCompanyValue(event.target.value)
            }}
          />
          <input
            className="w-full border border-gray-700 p-3  rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-3 lg:col-start-2 lg:col-end-3"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={emailValue}
            onChange={event => {
              setEmailValue(event.target.value)
            }}
          />
          <input
            className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-3 lg:col-start-1 lg:col-end-2"
            type="text"
            placeholder="First"
            name="firstname"
            id="firstname"
            value={fnameValue}
            onChange={event => {
              setFNameValue(event.target.value)
            }}
          />
          <input
            className="w-full border border-gray-700 p-3  rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-start-1 col-end-3 lg:col-start-2 lg:col-end-3"
            type="text"
            placeholder="Last"
            name="lastname"
            id="lastname"
            value={lnameValue}
            onChange={event => {
              setLNameValue(event.target.value)
            }}
          />
          <textarea
            className="w-full border border-gray-700 p-3 rounded-lg shadow-sm focus:border-themeBlue-200 focus:ring-themeBlue-200 col-span-2"
            type="textarea"
            placeholder="Message"
            rows="6"
            name="message"
            id="message"
            value={messageValue}
            onChange={event => {
              setMessageValue(event.target.value)
            }}
          />
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
          <p className="font-Lato text-green-500">
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
