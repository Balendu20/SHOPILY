import React, { useState } from "react";
import cartItems from "./data";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { Link } from "react-router-dom";
import Details from "./Details";

const HomePage = () => {
  const [data, setdata] = useState([]);
  const [items, setitems] = useState([]);
  const [newitem, setnewitem] = useState(cartItems);
  const [count, setcount] = useState(0);

  //to show item in its category that is given in the data
  const filteritem = (categored) => {
    if (categored === "all") {
      setnewitem(cartItems);
      return;
    }
    {
      const filterone = cartItems.filter(
        (catogorys) => catogorys.catogory === categored
      );
      setnewitem(filterone);
    }
  };

  //Getting item details by getting its id and if the id is matching then give it to the function
  //and function return matchingItem and copy of items to cart component .
  const givecart = (id) => {
    const matchingItem = cartItems.find((cart) => cart.id === id);
    setitems([...items, matchingItem]);
    setcount(count + 1);
  };

  return (
    <>
      {/* count give the count of the items that are going in to the cart,
      filteritem allows category */}
      <Navbar itemlist={items} count={count} filteritem={filteritem} />
      <div className="homepage">
        <div className="cart-container">
          {/* using map displaying each item in the homepage */}
          {newitem.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.img} alt={item.title} />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>

                {/* here all data in the items pass to details component throug routing */}
                <Link
                  to="/details"
                  state={{
                    itemId: item.id,
                    img: item.img,
                    title: item.title,
                    price: item.price,
                    detail: item.detail,
                  }}
                >
                  <button className="btn">Details</button>
                </Link>

                {/* here i am geting the id on Click and giving it to the function */}
                <button className="btn" onClick={() => givecart(item.id)}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
