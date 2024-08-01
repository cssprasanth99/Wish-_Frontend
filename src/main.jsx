import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ShopContextProvider>
);
