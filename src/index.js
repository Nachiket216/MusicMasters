import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ApiContext, ApiProvider } from "./contexts/ApiContext";
import { CartContext, CartProvider } from "./contexts/CartContext";
import {
  ProductContext,
  ProductProvider,
} from "./contexts/ProductListingContext";
import { AuthContext, AuthProvider } from "./contexts/AuthContext";
import {
  ProductCategoryProvider,
  ProductCategoryContext,
} from "./contexts/ProductCategoryContext";

// Call make Server
makeServer();

export { ApiContext, CartContext, AuthContext, ProductCategoryContext };

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider>
        <AuthProvider>
          <ProductCategoryProvider>
            <ProductProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </ProductProvider>
          </ProductCategoryProvider>
        </AuthProvider>
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
