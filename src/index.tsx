import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import App from "./App";

const GRAPHQL_API_URL = "http://localhost:4000/graphql";

const client = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client as any}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
