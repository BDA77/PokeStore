import React from 'react';
import './Nosotros.css';

const PersonalInfo = [{
  name: "Boreas Duchens",
  info: 'Santiaguino y estudiante de Ingeniería Civil Industrial e Informática de la Universidad Adolfo Ibáñez.',
  actual: 'Actualmente, encargado de suministar la tienda con nuevos pokemons cada temporada.',
  imgSrc: "/Foto Boreas.jpeg"
},
{
  name: "Javiera Marín",
  info: 'Penquista y estudiante de Ingeniería Civil Industrial e Informática de la Universidad Adolfo Ibáñez.',
  actual: 'Actualmente, jefe en operaciones de PokeStore y diseñadora gráfica.',
  imgSrc: "/Foto Javi.jpeg"
},
{
  name: "Emilio Suazo",
  info: 'Penquista y estudiante de Ingeniería Civil Industrial e Informática de la Universidad Adolfo Ibáñez.',
  actual: 'Actualmente, administrador de ventas de PokeStore y desarrollador de software.',
  imgSrc: "/Foto Suazo.jpeg"
},
];

function Nosotros() {
  return (
    <main className="container-fluid">
      <br/>
      <h1 className="mb-5 mt-4 text-center"> ¿Quiénes somos? </h1>
      <div class="container text-center mb-3">
        <div class="row">
            <div class="col-4">
              <Integrante props = {PersonalInfo[0]}/>
            </div>
            <div class="col-4">
              <Integrante props = {PersonalInfo[1]}/>
            </div>
            <div class="col-4">
              <Integrante props = {PersonalInfo[2]}/>
            </div>
        </div>
      </div>
      <br/>
      <div className='container-fluid mb-3'>
        <h2 className='mb-3'>Nuestro propósito</h2>
        <p className='px-2'>Queremos encontrar el hogar ideal para cualquier tipo de Pokemon, ayudando a encontrar a los entrenadores con los pokemons que más deseen. Nuestro prinicpal objetivo es que los entrenadores de todo el mundo puedan tener un acceso seguro y confiable a los distintos pokemons de nuestro catálogo.</p>
      </div>
      <br/>
      <div className='container-fluid mb-4'>
        <h2 className='mb-3'>Conoce nuestra historia</h2>
        <p className='px-2'>Somos un grupo de estudiantes que han desarrollado este proyecto desde Noviembre de 2023. En primera instancia pudimos conseguir y rescatar pokemons con el objetivo de que encuentren un hogar a un precio justo.</p>
        <p className='px-2'>Actualmente trabajamos para que cada vez exista una mayor variedad de pokemons en nuestra tienda y para que las funcionalidades y accesibilidad de este sitio web sea cada vez mejor, para que nuestros clientes y los pokemons tengan la mejor experiencia.</p>
      </div>
      <br/>
    </main>
  );
}

const Integrante = (props) => {
  console.log(PersonalInfo[0])
  return (
    <div className="nosotros-section subject p-4 mx-4 bg-info rounded-4 mb-4">
        <img className="img-fluid rounded-4 mb-3" src={props.props.imgSrc}/>
        <h4>{props.props.name}</h4>
        <p className="nosotros-info">{props.props.info}</p>
        <p className="nosotros-actual">{props.props.actual}</p>
    </div>
  );
}

export default Nosotros;