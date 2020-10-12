import React from "react";
import BasketItem from "./BasketItem";
import ShopItemList from "./ShopItemList";
import SuperMarketTemplate from "./SuperMarketTemplate";

function SuperMarket() {
  return (
    <SuperMarketTemplate items={<ShopItemList />} basket={<BasketItem />} />
  );
}

export default SuperMarket;
