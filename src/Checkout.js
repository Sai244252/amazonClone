import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

function Checkout(value) {
  const [{ basket, user }] = useStateValue();
  const email = user && user._delegate.email;
  const username = email && email.slice(0, email.indexOf("@"));

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />

        <div>
          {basket.length > 0 && (
            <p className="checkout__title">
              <p>
                Hey <strong>{username}</strong>, Here is your{" "}
              </p>
              <>Shopping Cart</>
            </p>
          )}
          {basket.length !== 0 &&
            basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                rating={item.rating}
                image={item.image}
                price={item.price}
              />
            ))}
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
