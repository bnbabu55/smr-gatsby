import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client"
import fetch from "isomorphic-fetch"

const httpLink = createHttpLink({
  uri: process.env.WPGRAPHQL_URL || `https://smr-sandbox.com/graphql`,
  fetch,
})

const link = ApolloLink.from([httpLink])

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})
