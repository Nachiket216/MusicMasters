import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ApiContext, ApiProvider } from "./contexts/ApiContext/ApiContext";
import { CartContext, CartProvider } from "./contexts/CartContext/CartContext";
import {
  ProductContext,
  ProductProvider,
} from "./contexts/ProductListingContext/ProductListingContext";

// Call make Server
makeServer();

export { ApiContext, CartContext };

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
