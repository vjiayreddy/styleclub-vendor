import React from "react";
import { sampleCartItems } from "../../data";
import UiCartItem from "./UiCartItem";

const UiShoppingCart = () => {
  return (
    <>
      {sampleCartItems.map((item, index) => (
        <UiCartItem
          imgUrl={item.imgUrl}
          key={index}
          productName={item.productName}
          quantity={item.quantity}
          price={item.price}
          onIncrease={() => {
            return;
          }}
          onDecrease={() => {
            return;
          }}
          onRemove={() => {
            return;
          }}
        />
      ))}
    </>
  );
};

export default UiShoppingCart;
