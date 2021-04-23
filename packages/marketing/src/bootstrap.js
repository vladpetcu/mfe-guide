import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount func to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If we are in dev and in isolation call mount
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container so we should export the mount func
export { mount };
