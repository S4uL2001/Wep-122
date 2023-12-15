

import React from 'react';

const SantaCruz = () => {
  return (
    <div className="container mt-5 border border-5 rounded p-4 shadow">
      <h1 className="text-center mb-4">Centro de Salud "Bienestar Total"</h1>

      <div className="row">
        <div className="col-md-6">
          <img
            src="./img/01.jpg"
            alt="Imagen del Centro de Salud"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h3>Bienvenido a "Bienestar Total"</h3>
          <p>
            En nuestro Centro de Salud, nos dedicamos a proporcionar atención médica de calidad con un enfoque integral en la salud y el bienestar de nuestros pacientes.
          </p>
          <p>
            Nuestro equipo de profesionales altamente capacitados y comprometidos está aquí para cuidar de ti y tu familia. Ofrecemos una amplia gama de servicios médicos, desde consultas generales hasta programas de salud preventiva.
          </p>
          <p>
            En "Bienestar Total", nos esforzamos por crear un ambiente acogedor y seguro para todos. Valoramos la relación médico-paciente y trabajamos juntos para mantener y mejorar tu salud.
          </p>
          <p>
            Ven y únete a nosotros en el camino hacia una vida más saludable y feliz. Estamos aquí para apoyarte en cada paso del camino.
          </p>
        </div>
      </div>
      <div className="container mt-5 border border-5 rounded p-4 shadow">
      <h2 className="text-center mb-4">Encuéntranos</h2>

      <div>
        <p><strong>Dirección:</strong> CALLE CAPITÁN RAVELO #2180, ZONA SOPOCACHI</p>
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

export default SantaCruz;
