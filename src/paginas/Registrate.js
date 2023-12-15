import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TuFormulario = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    zip: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado con éxito!');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
            
          <form
            className="row g-3 p-4"
            style={{ border: '1px solid #ddd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            onSubmit={handleSubmit}
          >
            <h1>Registrate</h1>
      <div className="col-md-4">
        <label htmlFor="validationServer01" className="form-label">
          Nombres
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer01"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        
      </div>
      <div className="col-md-4">
        <label htmlFor="validationServer02" className="form-label">
          Apellidos
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer02"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        
      </div>
      <div className="col-md-4">
        <label htmlFor="validationServerUsername" className="form-label">
          Correo Electronico
        </label>
        <div className="input-group has-validation">
          <span className="input-group-text" id="inputGroupPrepend3">
            @
          </span>
          <input
            type="text"
            className="form-control is-invalid"
            id="validationServerUsername"
            name="username"
            value={formData.username}
            onChange={handleChange}
            aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
            required
          />
          
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationServer03" className="form-label">
          Departamento
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          id="validationServer03"
          name="city"
          value={formData.city}
          onChange={handleChange}
          aria-describedby="validationServer03Feedback"
          required
        />
       
      </div>
      
      <div className="col-md-3">
        <label htmlFor="validationServer05" className="form-label">
          Edad
        </label>
        <input
          type="text"
          className="form-control is-invalid"
          id="validationServer05"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          aria-describedby="validationServer05Feedback"
          required
        />
       
      </div>
     
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Emviar
        </button>
      </div>
      </form>
        </div>
      </div>
    </div>
  );
};

export default TuFormulario;
