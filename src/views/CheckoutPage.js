import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import useClearCart from "../hooks/useClearCart";

function CheckoutPage({ cart, setCart }) {

  
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert('Pedido realizado con éxito');
    setCart([]);
    navigate('/');
  };

  const total = cart.reduce((acc, book) => acc + book.price, 0);

  return (
    <div>
    <Header/>
    <div className="checkout-page">
      <h2>Resumen de tu compra</h2>
      <ul>
        {cart.map(book => (
          <li key={book.id}>{book.title} - ${book.price}</li>
        ))}
      </ul>
      <p>Total: ${total}</p>

    </div>
      <button onClick={handleCheckout}>Pagar</button>
      
      <button onClick={() => useClearCart(setCart)}>Vaciar Carro</button>

      <Link to={`/home`}>
        <button>Seguir Comprando</button>
      </Link>
      <Footer/>

    </div>
  );
}

export default CheckoutPage;
