import { useEffect, useState } from "react";
import Navbar from "./Navbar";
const CartItem = ({ img, title, id, price, removeItem }) => {
  return (
    <>
      <article className="cart-item">
        <img src={img} alt={title} />
        <div>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
          {/* remove button */}
          <button className="remove-btn" onClick={() => removeItem(id)}>
            remove
          </button>
        </div>
      </article>
    </>
  );
};

export default CartItem;
