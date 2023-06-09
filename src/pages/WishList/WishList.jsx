import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext/CartContext'
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../reducers/cart-reducer/action";

export const WishList = () => {
  const {state,dispatch}  = useContext(CartContext)
  console.log(state)

  return (
    <div className="wrap">
    
    {state.wishlist.map((data)=>
{    
  const {_id,image,category,rating,description,title,original_price,price,delivery_time,reviews,in_stock} = data
    return(

      <div key={_id} className="card" >
      <img src={image} alt="book" width="200px" height="200px" />
      <p>
        {category}
      </p>
      <p>
        <span className="bold">Title: </span> {title}
      </p>


      <p>
        <span className="bold">Price: </span> {price}{" "}
         <span style={{textDecoration: "line-through"}}>
          {original_price}
          </span>
      </p>

      <button onClick={() => dispatch(removeFromWishlist(data))}>
        Remove Item
      </button>

    </div>
    )}
    )
    }
    </div>
  )
}
