import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CartItem from "./CartItem";
import cartItems from "./data";
import Navbar from "./Navbar";

const CartContainer = (props) => {
  const location = useLocation();
  const data = location.state?.data;

  const [cartArray, setcartArray] = useState([]);

  console.log(cartArray);
  useEffect(() => {
    setcartArray(data);
  }, []);

  //remove function for removing item from cart
  const removeItem = (id) => {
    const updatedCartArray = cartArray.filter((item) => item.id !== id);
    setcartArray(updatedCartArray);

    const totalItemsCount = updatedCartArray.reduce(
      (total, item) => total + item.amount,
      0
    );
  };
  //show cart is empty if there is no items in cart
  if (cartArray.length === 0) {
    return (
      <>
        <Navbar />
        <section className="cart">
          {/* cart header */}
          <header>
            <h2>your bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
          </header>
        </section>
      </>
    );
  }

  const calculateTotal = () => {
    // Calculate the total by summing up the prices of all items in the cart
    return cartArray.reduce(
      (total, item) => total + item.price * item.amount,
      0
    );
  };

  const clearCart = () => {
    setcartArray([]);
  };

  return (
    <>
      <Navbar />
      <section className="cart">
        <div>
          {cartArray.map((item) => {
            // passing item id adn copy of item itself to the cartitem
            //remove item will invoke function and remove item onclick that inside cartitem
            return <CartItem key={item.id} {...item} removeItem={removeItem} />;
          })}
        </div>
        {/* cart footer */}
        <footer>
          <hr />
          <div>
            <h5 className="cart-total">
              total <span>${calculateTotal()}</span>
            </h5>
          </div>
          <button className="btn btn-hipster" onClick={clearCart}>
            clear cart
          </button>
        </footer>
      </section>
    </>
  );
};

export default CartContainer;
