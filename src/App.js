import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalogo from './components/Catalogo';
import Carrito from './components/Carrito';
import PokemonDetalle from './components/PokemonDetalle';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Footer from './components/Footer';
import precios from './components/Precios';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (pokemon) => {
    const updatedCart = [...cartItems, { ...pokemon, price: precios[pokemon.name] }];
    setCartItems(updatedCart);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={<Inicio />}
        />
        <Route
          path="/catalogo"
          element={<Catalogo addToCart={addToCart} />}
        />
        <Route
          path="/nosotros"
          element={<Nosotros />}
        />
        <Route
          path="/carrito"
          element={<Carrito cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/pokemon/:id"
          element={<PokemonDetalle addToCart={addToCart} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
