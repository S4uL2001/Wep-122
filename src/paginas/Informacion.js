import React from 'react';
import { Card } from 'react-bootstrap';
const Informacion = () => {
  return (
    
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h1 className="mt-4 mb-4">Informate</h1>
      <Card style={{ maxWidth: '800px' }} className="d-flex flex-column align-items-center">
        <Card.Body className="d-flex flex-column align-items-center">
          <div className="embed-responsive embed-responsive-16by9 mb-4">
            <iframe
              title="Video de Salud"
              className="embed-responsive-item"
              src="./Videos/video1.mp4" 
              allowFullScreen
            ></iframe>
          </div>
          <Card.Title className="mt-3">Que es un Centro de salud?</Card.Title>
          <Card.Text>
            Un centro de salud es una instalación que proporciona una variedad de servicios de atención médica, incluyendo consultas médicas, vacunación, atención materna, control de enfermedades crónicas, salud mental, servicios dentales, educación para la salud, pruebas diagnósticas y más. Estos centros desempeñan un papel fundamental en la prestación de atención médica a nivel comunitario, abordando las necesidades de salud de la población local. Los servicios pueden variar según la ubicación y el tipo de centro de salud, pero su objetivo principal es promover, prevenir, diagnosticar y tratar problemas de salud para mejorar el bienestar de la comunidad.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Informacion;
