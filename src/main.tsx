import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { WidgetProvider } from "./constexts/WidgetContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WidgetProvider
      agent_id={"2223dc70-68c1-4706-93b0-c69a00c71097"}
      schema={"6af30ad4-a50c-4acc-8996-d5f562b6987f"}
    >
      <App />
    </WidgetProvider>
  </StrictMode>
);
