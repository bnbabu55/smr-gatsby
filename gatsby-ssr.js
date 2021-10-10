import "./src/styles/global.css"
import "swiper/css/bundle"

import React from "react"
import { ApolloProvider } from "@apollo/client"
import { client } from "./src/context/ApolloContext"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
