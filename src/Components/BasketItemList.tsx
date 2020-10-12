import React from "react";
import BasketItem from "./BasketItem";
import { inject, observer } from "mobx-react";

interface IBasketItemList {
  items: object[];
  total: any;
  onTake: () => void;
}

function BasketItemList({ items, total, onTake }: IBasketItemList) {
  const itemList = items.map((item) => (
    <BasketItem
      name={item.name}
      price={item.price}
      key={item.name}
      onTake={onTake}
    />
  ));
  return (
    <div>
      {itemList}
      <hr />
      <p>
        <b>총합: </b> {total}원
      </p>
    </div>
  );
}

export default inject(({ market }) => ({
  items: market.selectedItem,
  total: market.total,
  onTake: market.take,
}))(observer(BasketItemList));
