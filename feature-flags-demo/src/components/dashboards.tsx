import * as React from "react";

export const Dashboards: React.FC = () => {
  React.useEffect(() => {
    window.console.log("Rendering dashboards");
  }, []);

  return <h1>✅ Showing Dashboards</h1>;
};
