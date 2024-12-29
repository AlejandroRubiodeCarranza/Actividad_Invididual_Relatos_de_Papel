import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAddtoCart from "../hooks/useAddtoCart";
import { books } from '../data/data'; // Importar los libros desde data.js

function Home_list({ setCart }) {

    const [searchQuery, setSearchQuery] = useState(''); // Estado para la barra de búsqueda
    const [filteredBooks, setFilteredBooks] = useState(books); // Estado para los libros filtrados

    // Filtrar libros cuando cambia la búsqueda. Enlaza el array de books 
    useEffect(() => {
      if (searchQuery === '') {
        setFilteredBooks(books); // Si no hay búsqueda, mostrar todos los libros
      } else {
        setFilteredBooks(
          books.filter((book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) // Muestra el libro buscado si lo hubiese por titulo.
          )
        );
      }
    }, [searchQuery]);

  return (
    <div>

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
              <button onClick={() => useAddtoCart(book,setCart)}>Añadir al carrito</button>
            </div>
          ))
        ) : (
          <p>No se encontraron libros.</p>
        )}
      </div>
    </div>
    
    </div>
  );
}

export default Home_list;