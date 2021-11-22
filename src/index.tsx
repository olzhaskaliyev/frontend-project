import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <img
          src={require("./assets/logo.svg")}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link btn btn-primary"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
