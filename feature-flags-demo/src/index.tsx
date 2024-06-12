import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DOMAIN_1, DOMAIN_2, DOMAIN_3 } from "./current-domain";
import { Rule } from "./types/rule";
import { FlagsProvider } from "./feature-flag/flags-provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const currentDomain = DOMAIN_1;

const flags: Rule[] = [
  {
    domain: DOMAIN_1,
    pages: {
      values: ["reports/create_dashboard", "reports/existing_dashboard"],
      isActivated: true,
    },
  },
  {
    domain: DOMAIN_2,
    pages: {
      values: ["overview", "audience"],
      isActivated: true,
    },
  },
];

root.render(
  <React.StrictMode>
    <FlagsProvider domain={currentDomain} rules={flags}>
      <App />
    </FlagsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
