import React from "react";
import News from './News';
import { Link } from 'react-router-dom';

function Inicio() {
    return (
        <>
        <div className="container-fluid">
        <News />
        <section className="text-center mt-3 mb-3">
            <h4>Pokestore es el mejor servicio de venta de pokemons!</h4>
            <br/>
            <h5>Con nosotros, siempre tendrás tu Pokedex actualizada!</h5>
            <br/>
        </section>
        <div className="text-center mb-3">
            <Link className="nav-link" to="/Catalogo">
                <button type="button" className="btn btn-lg text-white btn-warning py-3 px-5">Accede AQUÍ a nuestro Catálogo</button>
            </Link>
        </div>
        <br/>
        </div>
        </>
    );
};

export default Inicio;