import React from 'react'
import storeItems from "../data/storeItems.json";
import { Item } from './Item';

export const ItemList = () => {
  return (
    <div className="items-list">
    {storeItems.map((product, idx) => {
      return <Item key={product.id} {...product} />;
    })}
  </div>
  )
}
