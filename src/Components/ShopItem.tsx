import React from "react";

interface Iprops {
  name: string;
  price: number;
  onPut: (name: string, price: number) => void;
}

function ShopItem({ name, price, onPut }: Iprops) {
  return (
    <div className="ShopItem" onClick={() => onPut(name, price)}>
      <h4>{name}</h4>
      <div>{price}원</div>
    </div>
  );
}

export default ShopItem;
