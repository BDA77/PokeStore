import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
    <br/>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Contáctanos:</h4>
            <ul>
              <li>Teléfono: +56 2 1234 5678</li>
              <li>Correo: info@example.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Nuestras Redes:</h4>
            <div className="row p-2">
              <div className="col-lg-2">
                <a href="https://www.instagram.com/"> 
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </a>
              </div> 
              <div className="col-lg-2">
                <a href="https://web.facebook.com/"> 
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
              </div>  
              <div className="col-lg-2">
                <a href="https://twitter.com/?lang=es"> 
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>
              </div>               
            </div>
          </div>
          <div className="col-md-4">
            <h4>Nuestras Sucursales:</h4>
            <div className="col p-2">
              <div className="row-sm pb-1">
                <div className="row">
                  <div className="col-md-1">
                    <a href="https://www.google.com/maps">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                      </svg>
                    </a>
                  </div>
                  <div className="col-md-4 pt-1">
                    <a href="https://www.google.com/maps" className="text-decoration-none text-white">
                      <p> Dirección 1 </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row-sm pb-2">
                <div className="row">
                  <div className="col-md-1">
                    <a href="https://www.google.com/maps">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                      </svg>
                    </a>
                  </div>
                  <div className="col-md-4 pt-1">
                    <a href="https://www.google.com/maps" className="text-decoration-none text-white">
                      <p>Dirección 2</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </div>
    </footer>
  );
};

export default Footer;
