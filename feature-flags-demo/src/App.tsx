import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Flags } from "./feature-flag/flag";
import { Audience } from "./components/audience";
import { Dashboards } from "./components/dashboards";
import { Container } from "./components/container";

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
          renderOn={() => <Audience />}
          renderOff={() => <h1>🚫 Not showing audience</h1>}
        />
        <br></br>

        <Flags currentPage="reports/create_dashboard">
          <Dashboards />
        </Flags>

        <Container />

        <Flags currentPage="overview">
          <h1>✅ Overview</h1>
        </Flags>
      </div>
    </div>
  );
}

export default App;
