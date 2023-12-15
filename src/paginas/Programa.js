import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener esta importación

const EnlaceProgramasSalud = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Programas de Salud</h1>

      <div className="d-grid gap-2">
        <a href="https://www.bja.gob.bo/" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Bono Juana Azurduy
        </a>

        <a href="https://www.minsalud.gob.bo/programas-de-salud/sistema-unico-de-salud" className="btn btn-primary mt-2" target="_blank" rel="noopener noreferrer">
          Sistema Único de Salud
        </a>

        <a href="https://seguros.minsalud.gob.bo/" className="btn btn-primary mt-2" target="_blank" rel="noopener noreferrer">
          Unidad de Seguros Médicos
        </a>

        <a href="https://www.minsalud.gob.bo/programas-de-salud/coordinacion-nacional-de-laboratorios" className="btn btn-primary mt-2" target="_blank" rel="noopener noreferrer">
          Coordinación Nacional de Laboratorio
        </a>
      </div>
      <div className="animate__animated animate__fadeIn" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }}>
        <img
          src="./img/04.jpg"
          alt="Programas de salud"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

    </div>
  );
};

export default EnlaceProgramasSalud;



