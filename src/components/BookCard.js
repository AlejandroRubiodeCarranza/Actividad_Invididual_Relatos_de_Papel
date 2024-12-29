import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book, setCart }) {
  const addToCart = () => {
    setCart(prevCart => [...prevCart, book]);
  };

  return (
    <div className="book-card">
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>${book.price}</p>
      <button onClick={addToCart}>Añadir al carrito</button>
      <Link to={`/book/${book.id}`}>Ver detalles</Link>
    </div>
  );
}

export default BookCard;
