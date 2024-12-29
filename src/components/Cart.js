import React from 'react';
import { Link } from 'react-router-dom';
import useRemoveFromCart from "../hooks/useRemoveFromCart";

function Cart({ cart, setCart }) {

  return (
    <div className="cart">
      <h3>Carrito</h3>
      <ul>
        {cart.map(book => (
          <li key={book.id}>
            {book.title} - ${book.price}
            <button onClick={() => useRemoveFromCart(book.id,cart,setCart)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <Link to="/home/checkout">
        <button>Ir al Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;
