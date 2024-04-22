import React, { useContext } from 'react'

export const Item = ({name, price, id, imageUrl}) => {

    const addToCart = () => {
        
    }
  return (
    <div className='item-box'>Item
        <div>{name}</div>
        <img src={imageUrl} width="80" height="55" alt='Imagen del producto'/>
        <div className='item-price'>${price}</div>
        <button className='item-add-button' onClick={() => addToCart()}>+ Añadir</button>
    </div>
  )
}
