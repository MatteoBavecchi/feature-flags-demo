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
          authorizedFlags={["vipOnly"]}
          renderOn={(flag) => <h1>VIP (renderProps)</h1>}
          renderOff={() => <h1>NO VIP (renderProps)</h1>}
        />

        <Flags authorizedFlags={["vipOnly"]}>
          <h1>VIP (children props)</h1>
        </Flags>

        <Flags
          authorizedFlags={["adminOnly", "vipOnly"]}
          exactFlags
          renderOn={() => <h1>Admin and VIP (renderProps)</h1>}
        />
      </div>
    </div>
  );
}

export default App;
