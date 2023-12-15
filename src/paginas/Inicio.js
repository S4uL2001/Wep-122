import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Inicio = () => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-start align-items-center bg-dark text-white">
      <div>
        <h2 style={{ textAlign: 'center' }}>Bienvenido al Centro de salud Integral</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/05.avif"
              alt="First slide"
            />
            <Carousel.Caption style={{ color: 'black', textShadow: '2px 2px 4px white' }}>
              <h3>Conose nuetro personal</h3>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/02.jpg"
              alt="Second slide"
            />
            <Carousel.Caption style={{ color: 'black', textShadow: '2px 2px 4px white' }} >
              <h3>Informate Sobre Nosotros</h3>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./img/09.avif"
              alt="First slide"
            />
            <Carousel.Caption style={{ color: 'black', textShadow: '2px 2px 4px white' }}>
              <h3>Conose nuetros programas</h3>

            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="p-4 border border-2 rounded shadow bg-white">
                <p className="text-center text-dark">
                  Ofrecemos atención médica completa y personalizada para tu salud y bienestar. Nuestro equipo altamente calificado se centra en la prevención, diagnóstico y tratamiento, utilizando tecnologías avanzadas. Valoramos la relación médico-paciente, brindando servicios desde consultas generales hasta programas preventivos. Tu bienestar es nuestra prioridad. ¡Visítanos para una experiencia de salud de calidad!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;