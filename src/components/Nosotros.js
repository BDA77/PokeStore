import React from 'react';

const PersonalInfo = [{
  name: "Boreas Duchens",
  mail: 'bduchens@alumnos.uai.cl',
  imgSrc: "/Foto Boreas.jpeg"
},
{
  name: "Javiera Marín",
  mail: 'javiemarin@alumnos.uai.cl',
  imgSrc: "/Foto Javi.jpeg"
},
{
  name: "Emilio Suazo",
  mail: 'emsuazo@alumnos.uai.cl',
  imgSrc: "/Foto Suazo.jpeg"
},
];

function Nosotros() {
  return (
    <main className="container-fluid">
        <br/>
        <h2 className="m-3"> ¿Quiénes somos? </h2>
        <div class="container text-center">
            <div class="row">
                <div class="col">
                <Integrante props = {PersonalInfo[0]}/>
                </div>
                <div class="col">
                <Integrante props = {PersonalInfo[1]}/>
                </div>
                <div class="col">
                <Integrante props = {PersonalInfo[2]}/>
                </div>
            </div>
        </div>
        <br/>
        <div className='container-fluid'>
            <h2>Nuestro propósito</h2>
            <p>Queremos encontrar el hogar ideal para cualquier tipo de Pokemon, ayudando a encontrar a los entrenadores con los pokemons que más deseen</p>
        </div>
        <br/>
        <div className='container-fluid'>
            <h2>Conoce nuestra historia</h2>
            <p>Somos un grupo de estudiantes que han desarrollado este proyecto desde el Noviembre de 2023. En primera instancia pudimos conseguir y rescatar pokemons con el objetivo de que encuentren un hogar a un precio justo.</p>
            <p>Actualmente trabajamos para que cada vez exista una mayor variedad de pokemons en nuestra tienda y para que las funcionalidades y accesibilidad de este sitio web sea cada vez mejor</p>
        </div>
        <br/>
    </main>
  );
}

const Integrante = (props) => {
    console.log(PersonalInfo[0])
    return (
        <div className="subject">
            <img className="img-fluid rounded-4 mb-2" src={props.props.imgSrc}/>
            <h4>{props.props.name}</h4>
            <p className="mail">{props.props.mail}</p>
        </div>
    );
}

export default Nosotros;