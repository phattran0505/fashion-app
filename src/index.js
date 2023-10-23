import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// import product provider
import ProductProvider from "./contexts/ProductContext";
// import cart provider
import CartProvider from "./contexts/CartContext";
import { BrowserRouter } from "react-router-dom";
// import sidebar provider
import SidebarProvider from "./contexts/SidebarContext";

import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
