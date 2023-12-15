import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cochabamba = () => {
  return (
    <div className="container mt-5 border border-3 rounded p-4 shadow">
      <h1 className="text-center mb-4">Cochabamba</h1>

      <div className="row">
        <div className="col-md-6">
          <img
            src="./img/06.avif"
            alt="Descripción de la imagen"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h3>Centro de Salud "Vida Saludable" en Cochabamba</h3>
          <p>
            Bienvenido a nuestro Centro de Salud "Vida Saludable", ubicado en el corazón de la ciudad de Cochabamba. Nos enorgullece ser un oasis de bienestar, comprometidos a proporcionar atención médica integral y accesible para toda la comunidad cochabambina.
          </p>
          <h3>Nuestra Misión:</h3>
          <p>
            En el Centro de Salud "Vida Saludable", nos dedicamos a mejorar la calidad de vida de nuestros pacientes mediante servicios médicos de excelencia, promoviendo la prevención y el cuidado integral de la salud.
          </p>
          <h3>Compromiso con la Comunidad:</h3>
          <p>
            Nos esforzamos por ser un pilar en la comunidad cochabambina, colaborando con organizaciones locales, participando en eventos comunitarios y trabajando juntos para construir un entorno más saludable.
          </p>
        </div>
      </div>
      <div className="container mt-5 border border-5 rounded p-4 shadow">
      <h2 className="text-center mb-4">Encuéntranos</h2>

      <div>
        <p><strong>Dirección:</strong> CALLE JUAN INRO #380, ZONA SAN LUIS</p>
        <p><strong>Teléfono:</strong> (591) 2 2443885</p>
        <p><strong>Fax:</strong> (591) 2 2441749</p>
        <p><strong>Email:</strong> <a href="mailto:central@sedeslapaz.gob.bo">central@sedeslapaz.gob.bo</a></p>
      </div>

      <h3 className="mt-4">Horas</h3>
      <p>Lunes a viernes: de 8:30 a 14:30 h.</p>
    </div>
    </div>
  );
};

export default Cochabamba;



