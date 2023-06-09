import React, { useContext } from "react";
import { ApiContext, CartContext } from "../../";
// import { ApiContext } from '../../contexts/ApiContext/ApiContext'
import "./ProductList.css";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../reducers/cart-reducer/action";
import { Filter } from "./Filter";

export const ProductList = () => {
  const { products } = useContext(ApiContext);
  const { state, dispatch } = useContext(CartContext);

  return (
    <>
      <Filter></Filter>
      <div className="wrap">
        {products.map((data) => {
          const {
            _id,
            image,
            category,
            rating,
            description,
            title,
            original_price,
            price,
            delivery_time,
            reviews,
            in_stock,
          } = data;

          return (
            <div key={_id} className="card">
              <img src={image} alt="book" width="200px" height="200px" />
              <p>{category}</p>
              <p>
                <span className="bold">Title: </span> {title}
              </p>

              <p>
                <span className="bold">Price: </span> {price}{" "}
                <span style={{ textDecoration: "line-through" }}>
                  {original_price}
                </span>
              </p>

              <button>Buy Now</button>

              <button onClick={() => dispatch(addToWishlist(data))}>
                Wishlist
              </button>

              <button onClick={() => dispatch(addToCart(data))}>Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
