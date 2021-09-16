import React from "react"
import ReactDOM from "react-dom"
import {App} from "./components/app/App"
import "./styles/null-styles.scss"
import "./styles/fonts.scss"
import {BrowserRouter} from "react-router-dom"
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"



const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
})


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById("root"))