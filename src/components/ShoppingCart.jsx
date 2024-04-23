import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className="cart-container">
    <div>
      <div>Objetos en carrito: {quantity}</div>
      <div>Total: ${totalPrice}</div>
      {/* Display details of each item in the cart */}
      <div className="items-checkout">
        {cart.map((item, index) => (
          <div className="item-box-checkout" key={index}>
             <img src={item.imgUrl} width="80" height="55" alt='Imagen del producto'/>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <h4>Cantidad: {item.quantity}</h4>
          </div>
        ))}
      </div>
      <button onClick={() => console.log(cart)}>Checkout</button>
    </div>
  </div>
  );
};
