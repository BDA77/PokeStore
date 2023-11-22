import React from "react";
/* import News1 from "https://picsum.photos/id/238/300/500";
import News2 from "https://picsum.photos/id/239/300/500";
import News3 from "https://picsum.photos/id/237/300/500"; */

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
                        <button className="btn p-0 rounded-4" data-bs-toggle="modal" data-bs-target="#descriptionModal1">
                            <img src="https://picsum.photos/id/1/1400/500" className="img-fluid rounded-4" alt="..." />
                        </button>
                    </div>
                    <div className="carousel-item">
                        <button className="btn p-0 rounded-4" data-bs-toggle="modal" data-bs-target="#descriptionModal2">
                            <img src="https://picsum.photos/id/2/1400/500" className="img-fluid rounded-4" alt="..." />
                        </button>
                    </div>
                    <div className="carousel-item">
                        <button className="btn p-0 rounded-4" data-bs-toggle="modal" data-bs-target="#descriptionModal3">
                            <img src="https://picsum.photos/id/3/1400/500" className="img-fluid rounded-4" alt="..." />
                        </button>
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