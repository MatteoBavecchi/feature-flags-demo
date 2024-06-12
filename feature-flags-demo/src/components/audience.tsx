import * as React from "react";

export const Audience: React.FC = () => {
  React.useEffect(() => {
    window.console.log("Rendering audience");
  }, []);

  return <h1>✅ Showing Audience</h1>;
};
