import React from 'react';
import precios from './Precios';
import { Link } from 'react-router-dom';

const capitalizeFirstLetter = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

const Carrito = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + precios[item.name], 0);

  return (
    <div className="cart mt-5 p-5">
      <h2 className='d-inline-block text-white p-3 mx-5 bg-warning rounded'>Carrito de compras</h2>
      <div className='mx-5 my-3'>
        <Link to="/catalogo" className='nav-link d-flex align-items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-big-left-filled" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" stroke-width="0" fill="currentColor" />
          </svg>
          <h6 className="ms-2 mb-0">Volver al catálogo</h6>
        </Link>
      </div>
      {cartItems.length === 0 ? (
      <>
      <div className='my-5 h-100'>
        <br/><br/>
        <h4 className='text-center'>El carrito está vacío.</h4>
        <br/><br/>
      </div>
      </>
      ) : ( 
      <div className="container my-4 text-center">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cartItems.map((item, index) => (
            <div key={index} className="col mb-1">
              <div className="card">
                <img src={item.sprites.front_default} alt={item.name} className="card-img-top mx-5 mt-1" style={{width: '120px', maxHeight: '120px', marginRight: '20px'}} />
                <div className="card-body">
                  <div className='row'>
                    <div className='col mx-5'>
                      <h6 className="card-title">{capitalizeFirstLetter(item.name)}</h6>
                    </div>
                    <div className='col'>
                      <p className="card-text fw-bold">${precios[item.name]}</p>
                    </div>
                    <div className='col'>
                      <button className="btn btn-danger" onClick={() => removeFromCart(index)}>X</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h5 className='my-4'>Total: ${totalPrice}</h5>
        <Link to="https://www.webpay.cl/" className="btn btn-primary">Ir a pagar</Link>
      </div>
      )}
    </div>
  );
};

export default Carrito;
