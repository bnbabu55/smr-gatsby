import "./src/styles/global.css"
import "swiper/css/bundle"

import React from "react"
import { ApolloProvider } from "@apollo/client"
import { client } from "./src/context/ApolloContext"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

const reCaptchaKey = process.env.GATSBY_CPU_RECAPTCHA_SITE_KEY

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      {element}
    </GoogleReCaptchaProvider>
  </ApolloProvider>
)
