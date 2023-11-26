import React from "react";
import News1 from "../img/pokenews1.jpeg";
import News2 from "../img/pokenews2.jpeg";
import News3 from "../img/pokenews3.jpeg";
import { Link } from "react-router-dom";

function News() {
    return (
        <>
        <section className="container-xl">
            <br/>
            <br/>
            <div id="carouselExampleIndicators" className="carousel slide container-xl">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner rounded-4">
                    <div className="carousel-item active">
                        <a href="https://www.pokemon.com/el/noticias-pokemon">
                            <img src={News1} className="img-fluid rounded-4" alt="..." /> 
                        </a>
                    </div>
                    <div className="carousel-item">
                        <Link className="nav-link" to="/Catalogo">
                            <img src={News3} className="img-fluid rounded-4" alt="..." />
                        </Link>
                    </div>
                    <div className="carousel-item">
                        <a href="https://pokemongolive.com/post/rising-shadows?hl=es#:~:text=El%20debut%20de%20las%20incursiones,ten%C3%A9is%20un%20poco%20de%20suerte!">
                            <img src={News2} className="img-fluid rounded-4" alt="..." />
                        </a>
                    </div>
                </div>
                <button className="carousel-control-prev btn-lg mx-4" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next btn-lg mx-4" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br/>
        </section>
        </>
    );
};

export default News;