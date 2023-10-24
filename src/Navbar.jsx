import React, { useState } from "react";
import { Link } from "react-router-dom";

import cartItems from "./data";
import { FaCartPlus } from "react-icons/fa";

const Navbar = ({ count, itemlist, filteritem }) => {
  // In navebar we can see the unique catogory no repeat of the same catogorie
  const newCatogory = [
    "all",
    ...new Set(cartItems.map((items) => items.catogory)),
  ];

  // useState for the catogorie
  const [catogorie, setcatogorie] = useState(newCatogory);

  return (
    <nav>
      <div className="nav-center">
        <div>
          {/* using link we go to the homepage as the path is set to "/" . this is the logo*/}
          <Link to="/">
            <h3
              style={{
                fontFamily: "Arial, sans-serif",
                color: "#4833d1",
                textTransform: "uppercase",
                letterSpacing: "2px",
                fontweight: "900",
              }}
            >
              Shopily
            </h3>
          </Link>
        </div>
        <div>
          <ul className="links">
            {catogorie.map((cat) => {
              return (
                // Here we give filter items that are unique catogory
                <li key={cat}>
                  <button type="button" onClick={() => filteritem(cat)}>
                    {cat}
                  </button>
                </li>
              );
            })}

            {/* using Link onclick it will go to the loginpage as path is set to /login */}
            <li>
              <Link to="/login">
                <button type="button">LOGIN</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-container">
          {/* using state giving itemlist to the CartContainer so then it will use props to give it to cart to display 
          what all items we added to cart */}
          <Link to="/cart" state={{ data: itemlist }}>
            <FaCartPlus className="cart-icon" />
          </Link>
          <div className="amount-container">
            {/* from homepage we get the count through caount={count} and we show it on top of icon */}
            <p className="total-amount">{count}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
