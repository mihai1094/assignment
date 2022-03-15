import * as React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ReactMarkdown from "react-markdown";

import Continents from "./Continents";

import "./styles.css";

// This function loads README.md file to react, it is a little bit hacky,
// because codesandbox makes loading MD files complicated.
// This function is not a part of exercise.
const loadMarkdownReadme = () => {
  const str = require("js-base64").decode(require("../README.md"));
  return "#" + str.substring(str.indexOf("#") + 1);
};

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <ReactMarkdown>{loadMarkdownReadme()}</ReactMarkdown>
    <Continents />
  </ApolloProvider>
);

export default App;
