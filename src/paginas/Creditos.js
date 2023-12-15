import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Creditos = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="container mt-5">
      <h1 className="display-4 text-center mb-4">Créditos</h1>
      <h3>Has clik</h3>
      <div className="card animate__animated animate__slideInUp">
        <div className="card-body">
          <h5 className="card-title" onClick={toggleDetails} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            Desarrollado por:
          </h5>
          {showDetails && (
            <div>
              <p className="card-text">Adheamar Saul Gutierrez Zabaleta</p>
              <p className="card-text">CI: 12830758 | INF-122 | Paralelo A</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Creditos;

