import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import precios from './Precios';
import { Link } from 'react-router-dom';

const PokemonDetalle = ({ addToCart }) => {  
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        setPokemon(null);
      }
    };

    fetchPokemon();
  }, [id]);

  const handleAddToCart = () => {
    if (pokemon) {
      addToCart({ ...pokemon, price: precios[pokemon.name] });
    }
  };

  if (!pokemon) {
    return <p>No se pudo cargar la información del Pokémon.</p>;
  }

  return (
    <div className='mt-5 mx-3 pt-5'>
      <h2 className='d-inline-block text-white p-3 mx-5 bg-warning rounded'>Información del producto</h2>
      <div className='mx-5 my-3'>
        <Link to="/Catalogo" className='nav-link d-flex align-items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-filled" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" stroke-width="0" fill="currentColor" />
          </svg>
          <h6 className="ms-2 mb-0">Volver al catálogo</h6>
        </Link>
      </div>
      <h1 className='text-center text-uppercase fw-bold'>{pokemon.name}</h1>
      <div className='row mt-2'>
        <div className='col-md-6 d-flex align-items-center justify-content-center'>
          <div>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className='img-fluid'
              style={{ maxWidth: '300px', height: '300px' }}
            />
            <h4 className='mt-3 text-center'>Precio: ${precios[pokemon.name]}</h4>
          </div>
        </div>
        <div className='col-md-6 d-flex align-items-center'>
          <div class="container text-center">
            <div class="row">
              <div class="col-md-6">
                <h5>Altura:</h5>
                <p>{pokemon.height*10} cm</p>
              </div>
              <div class="col-md-4">
                <h5>Peso:</h5>
                <p>{pokemon.weight/10} Kg</p>
              </div>
              <div class="col-md-6">
                <h5>Ataque:</h5>
                <p>{pokemon.stats.find((stat) => stat.stat.name === 'attack').base_stat}</p>
              </div>
              <div class="col-md-4">
                <h5>Puntos de salud:</h5>
                <p>{pokemon.stats.find((stat) => stat.stat.name === 'hp').base_stat}</p>
              </div>
              <div class="col-md-6">
                <h5>Defensa:</h5>
                <p>{pokemon.stats.find((stat) => stat.stat.name === 'defense').base_stat}</p>
              </div>
              <div class="col-md-4">
                <h5>Velocidad:</h5>
                <p>{pokemon.stats.find((stat) => stat.stat.name === 'speed').base_stat}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5 mb-4">
        <button className='btn btn-lg btn-primary' onClick={handleAddToCart}>Añadir al carrito</button>
      </div>
      <br/>
    </div>
  );
};

export default PokemonDetalle;
