import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/POKESTORE-7-11-2023.png";

function Navbar({ cartItems }) {
  const cartItemsCount = cartItems.length;

  return (
    <div className="Navbar mb-5">
      <nav className="navbar fixed-top bg-primary">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="col">
              <Link to="/" className="nav-link">
                <img src={Logo} style={{ height: '50px', width: 'auto' }} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="mx-5 my-2">
            <Link to="/carrito" className="nav-link">
              <button type="button" className="btn btn-light position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItemsCount}
                  <span className="visually-hidden">Elementos en el carrito</span>
                </span>
              </button>
            </Link>
          </div>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link to="/catalogo" className="nav-link">Catálogo</Link>
                </li>
                <li className="nav-item">
                  <Link to="/nosotros" className="nav-link">Sobre nosotros</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
