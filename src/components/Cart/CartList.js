import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  //We bring in all state props via value.
  const { cart } = value; //We destructured the state so cart is a property that is included in the destructured state inside value in context.js.
  //console.log(value, cart);

  return (
    <div className="container-fluid">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={value} />;
        //We pass down item and value to the CartItem.js component.
      })}
    </div>
  );
}
