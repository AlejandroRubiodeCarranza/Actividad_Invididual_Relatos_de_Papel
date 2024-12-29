import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Option_Menu from '../components/Option_Menu';

import { books } from '../data/data'; // Importar los libros desde data.js

function Home({ setCart }) {


// Hooks necesarios para el correcto funcionamiento de la aplicacion.

    const [searchQuery, setSearchQuery] = useState(''); // Estado para la barra de búsqueda
    const [filteredBooks, setFilteredBooks] = useState(books); // Estado para los libros filtrados

    // Filtrar libros cuando cambia la búsqueda. Enlaza el array de books 
    useEffect(() => {
      if (searchQuery === '') {
        setFilteredBooks(books); // Si no hay búsqueda, mostrar todos los libros
      } else {
        setFilteredBooks(
          books.filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) // Muestra el libro buscado si lo hubiese.
          )
        );
      }
    }, [searchQuery]);

    // Función para agregar un libro al carrito. 
    const addToCart = (book) => {
      setCart((prevCart) => [...prevCart, book]);
    };

  return (
    <div>
    <Header/>
    <Option_Menu/>

    <div className="home_container">
      {/* Barra de búsqueda */}
      <input
        type="text"
        className="search-bar"
        placeholder="Buscar por título de libro..."
        value={searchQuery}

        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Mostrar libros filtrados */}
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h4>{book.title}</h4>
              <p>Autor: {book.author}</p>
              <p>Precio: ${book.price.toFixed(2)}</p>
              <Link to={`/book/${book.id}`}>
                <button>Ver detalles</button>
              </Link>
              <button onClick={() => addToCart(book)}>Añadir al carrito</button>
            </div>
          ))
        ) : (
          <p>No se encontraron libros.</p>
        )}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Home;
