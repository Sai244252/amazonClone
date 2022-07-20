import React from "react";
import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

function SubTotal(props) {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  // console.log(basket === undefined ? 0 : basket);
  let price = 0;
  price = basket.map((element) => {
    return element.price + price;
  });
  //pv : previous val, cv : current val
  price = price.reduce((pv, cv) => pv + cv, 0);
  // console.log(price);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />

      <div className="subtotal__checkout">
        <button onClick={(e) => navigate("/payment")}>
          Proceed to Checkout
        </button>
        <button onClick={(e) => navigate("/")}>Cancel</button>
      </div>
    </div>
  );
}

export default SubTotal;
