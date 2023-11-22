// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalogo from './components/Catalogo';
import Carrito from './components/Carrito';
import PokemonDetalle from './components/PokemonDetalle';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Footer from './components/Footer';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pokemon) => {
    const updatedCart = [...cartItems, { ...pokemon, price: generateRandomPrice() }];
    setCartItems(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const generateRandomPrice = () => {
    return Math.floor(Math.random() * 100) + 1; // Genera un precio aleatorio entre 1 y 100
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Inicio/>}
        />
        <Route
          path="/catalogo"
          element={<Catalogo addToCart={addToCart} />} // Pasando addToCart como prop al componente Catalogo
        />
        <Route
          path="/nosotros"
          element={<Nosotros/>}
        />
        <Route
          path="/carrito"
          element={<Carrito cartItems={cartItems} removeFromCart={removeFromCart} />} // Pasando cartItems y removeFromCart como props al componente Carrito
        />
        <Route
          path="/pokemon/:id"
          element={<PokemonDetalle />} // Ruta para el detalle de cada Pokémon
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
