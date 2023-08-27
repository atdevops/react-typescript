import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const app = document.getElementById("root") as Element | null;
let root = null;
// create a root
if (app) {
  root = createRoot(app);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
// Perform the operation with a non-null element
