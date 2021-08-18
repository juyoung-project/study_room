import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import PageLoading from "./components/pageLoading";

// ReactDOM.render(<PageLoading />, document.querySelector("body"));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);

reportWebVitals();
