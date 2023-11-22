import React from "react";
import News from './News';
import { Link } from 'react-router-dom';

function Inicio() {
    return (
        <>
        <div className="container-fluid">
        <News />
        <section className="text-center">
            <h5>Pokestore es el mejor servicio de venta de pokemons</h5>
            <h5>Siempre tendrás tu Pokedex actualizada!</h5>
            <br/>
        </section>
        <div className="text-center">
            <Link className="nav-link" to="/Catalogo">
                <button type="button" className="btn btn-lg text-white btn-warning">Accede AQUÍ a nuestro Catálogo</button>
            </Link>
        </div>
        <br/>
        </div>
        </>
    );
};

export default Inicio;