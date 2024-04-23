import React, { useContext, useState } from 'react'
import { CartContext } from '../contexts/ShoppingCartContext'

export const Item = ({name, price, id, imgUrl}) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart();
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 1000);
  };

    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
      setCart((current) => {
        const isItemFound = current.find((item) => item.id === id)
        if(isItemFound) {
          return current.map((item) => {
            if(item.id === id) {
              return {
                ...item,
                quantity: item.quantity + 1
              }
            }
              else {
                return item;
              }
            });
        } else {
          return [...current, {id, quantity: 1, price, name, imgUrl}]
        }   
      })
    }

    const removeItem = (id) => {
      setCart((currItems) => {
        if (currItems.find((item) => item.id === id)?.quantity === 1) {
          return currItems.filter((item) => item.id !== id);
        } else {
          return currItems.map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return item;
            }
          });
        }
      });
    };

    const getQuantityById = (id) => {
      return cart.find((item) => item.id === id)?.quantity || 0;
    }

    const quantityPerItem = getQuantityById(id);

  return (
    <div className='item-box'>
        {
          quantityPerItem > 0 && (
            <div className='item-quantity'>{quantityPerItem}</div>
          )
        }
        <img src={imgUrl} width="80" height="55" alt='Imagen del producto'/>
        <h3>{name}</h3>
        <div className='item-price'>${price}</div>
        {
          quantityPerItem === 0 ? (
            <button className='item-add-button' onClick={() => handleAddToCart()}>+ Añadir al carrito</button>
          ) : (
            <button className='item-add-button' onClick={() => addToCart()}>+ Añadir</button>
          )
        }
        {
          quantityPerItem > 0 && (
            <button className='item-minus-button' onClick={() => removeItem(id)}>- Eliminar</button>
          )
        }

        {addedToCart && (
          <div className="zoom">
            <img src={imgUrl} width="80" height="55" alt='Imagen del producto' />
          </div>
        )}
    </div>
  )
}
