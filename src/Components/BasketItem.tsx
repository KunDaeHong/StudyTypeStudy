import React from "react";
import "../CSS/Supermarket.css";
import { observer } from "mobx-react";

interface IBasketItem {
  name: string;
  price: number;
  onTake: (name: string) => void;
}

function BasketItem({ name, price, onTake }: IBasketItem) {
  return (
    <div className="BasketItem">
      <div className="name">{name}</div>
      <div className="price">{price}원</div>
      <div className="return" onClick={() => onTake(name)}>
        갖다놓기
      </div>
    </div>
  );
}

export default observer(BasketItem);
