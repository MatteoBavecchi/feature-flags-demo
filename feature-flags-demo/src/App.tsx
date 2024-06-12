import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flags } from "./feature-flag/flag";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <header>
          <h1>Feature Flag Demo</h1>
        </header>

        <img src={logo} className="App-logo" alt="logo" />

        <Flags
          currentPage="audience"
          renderOn={() => <h1>✅ Showing Audience</h1>}
          renderOff={() => <h1>🚫 Not showing audience</h1>}
        />
        <br></br>
        <Flags currentPage="reports/create_dashboard">
          <h1>✅ Create dashboards</h1>
        </Flags>

        <Flags currentPage="reports/existing_dashboard">
          <h1>✅ Existing dashboards</h1>
        </Flags>

        <Flags currentPage="overview">
          <h1>✅ Overview</h1>
        </Flags>
      </div>
    </div>
  );
}

export default App;
