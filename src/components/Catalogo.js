import React, { useState, useEffect } from 'react';
import axios from 'axios';
import precios from './Precios'; // Importa el archivo de precios
import { Link } from 'react-router-dom';
import './Catalogo.css';

const capitalizeFirstLetter = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const Catalogo = ({ addToCart }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        const results = response.data.results;

        const pokemonDetails = await Promise.all(
          results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return res.data;
          })
        );

        setPokemonData(pokemonDetails);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemonData();
  }, []);

  const filteredPokemon = pokemonData.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.types.some((type) => type.type.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="main-container m-5 pt-5">
      <h1 className='ml-2 mb-3'>Catálogo</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search name, type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="pokemon-table">
        {filteredPokemon.map((pokemon, index) => (
          <div key={index} className="pokemon-item rounded-2">
            <Link className="nav-link" to={`/pokemon/${pokemon.id}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
            </Link>
            <p>Precio: ${precios[pokemon.name]}</p> {/* Utiliza el precio del archivo de precios */}
            <div className='mb-2'>
              <button className="btn btn-primary" onClick={() => addToCart(pokemon)}>Agregar al carrito</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
