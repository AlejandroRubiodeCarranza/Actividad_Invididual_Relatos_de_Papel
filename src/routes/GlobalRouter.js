import React, { useState,useEffect  } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import BookPage from '../views/BookPage';
import CheckoutPage from '../views/CheckoutPage';
import Landing from '../views/Landing';
import Cart from '../components/Cart';
import About_us from '../views/About_us';

function App() {

  //Inicializa el array de Carro
  const [cart, setCart] = useState([]);

  // Inicializamos las variables para la detectar si estamos en la vista Landing
  const [isLanding, setIsLanding] = useState(true);

  // Comprobar si nos encontramos el la vista Landing
  useEffect(() => {

    // Detectar si estamos en la vista 'Landing'
    if (window.location.pathname === '/') {
      setIsLanding(true);
    } else {
      setIsLanding(false);
    }
  }, [window.location.pathname]); // Vuelve a ejecutarse cada vez que cambia la ruta

  return (
    <Router>
          {/* El carrito solo se muestra si no estamos en la vista 'Landing' */}
      {!isLanding && <Cart cart={cart} setCart={setCart} />}

        <Routes>
        <Route path="/home" element={<Home setCart={setCart} />} />
        <Route path="/book/:id" element={<BookPage setCart={setCart} />} /> {/* Asegúrate de que la ruta sea correcta */}
        <Route path="/home/checkout" element={<CheckoutPage cart={cart} setCart={setCart} />} />
        <Route path="/home/Sobre_Nosotros" element={<About_us />} />

        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;


    