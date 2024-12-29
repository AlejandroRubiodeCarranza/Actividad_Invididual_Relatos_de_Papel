import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, setCart }) {
  const removeFromCart = (bookId) => {
    setCart(cart.filter(book => book.id !== bookId));
  };

  return (
    <div className="cart">
      <h3>Carrito</h3>
      <ul>
        {cart.map(book => (
          <li key={book.id}>
            {book.title} - ${book.price}
            <button onClick={() => removeFromCart(book.id)}>Eliminar</button>
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
