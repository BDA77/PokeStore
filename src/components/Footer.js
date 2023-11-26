import React from "react";

const Footer = () => {
  return (
    <footer className="bg-info text-white">
    <br/>
      <div className="container pb-3">
        <div className="row">
          <div className="col-md-4 px-5">
            <h4>Contáctanos:</h4>
            <div className="col p-1">
              <div className="row-sm">
                <div className="row">
                  <div className="col-sm-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <div className="col-sm-8 pt-1 mx-1">
                    <p>+56 2 1234 5678</p> 
                  </div>
                </div>
              </div>
              <div className="row-sm pb-1">
                <div className="row">
                  <div className="col-sm-1 pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                      <path d="M3 7l9 6l9 -6" />
                    </svg>
                  </div>
                  <div className="col-sm-8 pt-1 mx-2">
                    <p>support@pokestore.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 px-5">
            <h4 className="mx-2">Nuestras Redes:</h4>
            <div className="row p-2">
              <div className="col-sm-2 mx-2 pt-1">
                <a href="https://www.instagram.com/"> 
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                  </svg>
                </a>
              </div> 
              <div className="col-sm-2 mx-2 pt-1">
                <a href="https://web.facebook.com/"> 
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </a>
              </div>  
              <div className="col-sm-2 mx-2 pt-1">
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
          <div className="col-md-4 px-5">
            <h4>Nuestras Sucursales:</h4>
            <div className="col p-1">
              <div className="row-sm">
                <div className="row">
                  <div className="col-md-1">
                    <a href="https://www.google.com/maps?q=santiago&sca_esv=585150181&sxsrf=AM9HkKkr-zinJJuv5LyDfQ4wPZ3vuiDX_A:1700871661995&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHNhbnRpYWdvMg0QLhixAxiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgsQABiABBixAxiDATIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIKEC4YgAQYigUYQzIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIcEC4YsQMYgAQYigUYQxiXBRjcBBjeBBjgBNgBAUjeElAAWJMQcAJ4AJABAZgB1AGgAa8GqgEFOS4wLjG4AQPIAQD4AQHCAgoQIxiABBiKBRgnwgIREC4YgAQYsQMYgwEYxwEY0QPCAgQQIxgnwgIWEC4YgAQYigUYsQMYgwEYxwEY0QMYQ8ICEBAuGIAEGIoFGMcBGK8BGEPCAhYQLhiDARjHARixAxjRAxiABBiKBRhDwgIQEC4YgAQYigUYxwEY0QMYQ8ICDRAuGIAEGIoFGLEDGEPCAgUQABiABMICCxAuGIAEGMcBGK8BwgIHEAAYgAQYCsICEBAAGIAEGLEDGIMBGLEDGArCAgoQLhixAxiABBgKwgIKEC4YgAQYsQMYCuIDBBgAIEGIBgG6BgYIARABGBQ&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj34PLn8N2CAxVap5UCHbC1DDcQ_AUoAnoECAIQBA">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                      </svg>
                    </a>
                  </div>
                  <div className="col-md-8 pt-1 px-3">
                    <a href="https://www.google.com/maps?q=santiago&sca_esv=585150181&sxsrf=AM9HkKkr-zinJJuv5LyDfQ4wPZ3vuiDX_A:1700871661995&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHNhbnRpYWdvMg0QLhixAxiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgoQABiABBiKBRhDMgsQABiABBixAxiDATIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIKEC4YgAQYigUYQzIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIcEC4YsQMYgAQYigUYQxiXBRjcBBjeBBjgBNgBAUjeElAAWJMQcAJ4AJABAZgB1AGgAa8GqgEFOS4wLjG4AQPIAQD4AQHCAgoQIxiABBiKBRgnwgIREC4YgAQYsQMYgwEYxwEY0QPCAgQQIxgnwgIWEC4YgAQYigUYsQMYgwEYxwEY0QMYQ8ICEBAuGIAEGIoFGMcBGK8BGEPCAhYQLhiDARjHARixAxjRAxiABBiKBRhDwgIQEC4YgAQYigUYxwEY0QMYQ8ICDRAuGIAEGIoFGLEDGEPCAgUQABiABMICCxAuGIAEGMcBGK8BwgIHEAAYgAQYCsICEBAAGIAEGLEDGIMBGLEDGArCAgoQLhixAxiABBgKwgIKEC4YgAQYsQMYCuIDBBgAIEGIBgG6BgYIARABGBQ&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj34PLn8N2CAxVap5UCHbC1DDcQ_AUoAnoECAIQBA" className="text-decoration-none text-white">
                      <p> Santiago, Chile </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row-sm pb-1">
                <div className="row">
                  <div className="col-md-1">
                    <a href="https://www.google.com/maps?q=rio+de+janeiro&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyDQgBEC4YgwEYsQMYgAQyBggCEEUYOTIHCAMQABiABDINCAQQABiDARixAxiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDINCAkQLhivARjHARiABKgCALACAA&um=1&ie=UTF-8&sa=X&sqi=2&ved=2ahUKEwizyeLZ8N2CAxX2lJUCHRnNBnYQ_AUoAnoECAIQBA">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                      </svg>
                    </a>
                  </div>
                  <div className="col-md-8 pt-1 px-3">
                    <a href="https://www.google.com/maps?q=rio+de+janeiro&gs_lcrp=EgZjaHJvbWUqEAgAEAAYgwEY4wIYsQMYgAQyEAgAEAAYgwEY4wIYsQMYgAQyDQgBEC4YgwEYsQMYgAQyBggCEEUYOTIHCAMQABiABDINCAQQABiDARixAxiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDINCAkQLhivARjHARiABKgCALACAA&um=1&ie=UTF-8&sa=X&sqi=2&ved=2ahUKEwizyeLZ8N2CAxX2lJUCHRnNBnYQ_AUoAnoECAIQBA" className="text-decoration-none text-white">
                      <p> Río de Janeiro, Brasil</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
      </div>
    </footer>
  );
};

export default Footer;
