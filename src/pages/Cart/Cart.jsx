import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
  removeFromCart,
} from "../../reducers/cart-reducer/action";

export const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className="wrap">
      {state.mycart.length > 0 ? (
        state.mycart.map((data) => {
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

              <button onClick={() => dispatch(removeFromCart(data, _id))}>
                Remove Item
              </button>
            </div>
          );
        })
      ) : (
        <p>Cart is emtpy</p>
      )}
    </div>
  );
};
