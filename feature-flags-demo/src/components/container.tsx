import * as React from "react";
import { Flags } from "../feature-flag/flag";

export const Container: React.FC = () => {
  React.useEffect(() => {
    window.console.log("Rendering container");
  }, []);

  return (
    <Flags currentPage="reports/existing_dashboard">
      <h1>✅ Existing dashboards</h1>
    </Flags>
  );
};
