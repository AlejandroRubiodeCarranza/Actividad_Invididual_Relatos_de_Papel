import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { books } from '../data/data'; // Asegúrate de importar tus datos o usar una API
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function BookPage({ setCart }) {
  const { id } = useParams(); // Obtener el ID del libro desde la URL
  const [book, setBook] = useState(null);

  // Buscar el libro correspondiente al ID
  useEffect(() => {
    const selectedBook = books.find((book) => book.id === id);
    setBook(selectedBook);
  }, [id]); // Solo volver a ejecutar si cambia el ID del libro

  // Agregar al carrito
  const addToCart = (book) => {
    setCart((prevCart) => [...prevCart, book]);
  };

  if (!book) {
    return <div>Cargando...</div>; // Mientras se cargan los detalles del libro
  }

  return (
    <div>
      <Header/>

      <div className="book-page container">
        <div className="book-page">
          <h2>{book.title}</h2>
          <h3>Autor: {book.author}</h3>
          <p>{book.description}</p>
          <p><strong>Precio: ${book.price.toFixed(2)}</strong></p>
          <div>
  
            <button onClick={() => addToCart(book)}>Añadir al carrito</button>
          </div>
          <br/>
                  <Link to={`/home`}>
          <button>Seguir Comprando</button>
        </Link>
        </div>
        <br/>

      </div>
    <Footer/>

    </div>
  );
}

export default BookPage;
