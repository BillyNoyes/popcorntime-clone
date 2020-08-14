import React from "react";
import "./App.css";
import Nav from "./Nav";
import Body from "./Body";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Nav />
      <Body fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
