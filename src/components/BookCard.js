import React from 'react';
import { Link } from 'react-router-dom';
import useAddtoCart from "../hooks/useAddtoCart";

function BookCard({ book, setCart }) {
  return (
    <div className="book-card">
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>${book.price}</p>
      <button onClick={() => useAddtoCart(book,setCart)}>Añadir al carrito</button>
      <Link to={`/book/${book.id}`}>Ver detalles</Link>
    </div>
  );
}

export default BookCard;
