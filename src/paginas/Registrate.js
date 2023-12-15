import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TuFormulario = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    zip: '',
  });

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Realiza operaciones asíncronas aquí
      alert('Formulario enviado con éxito!');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      // Manejar el error, mostrar un mensaje al usuario, etc.
    }
  };

  const renderFormGroup = (label, id, name, value, onChange, required = true, type = 'text') => (
    <div className="col-md-6 mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className={`form-control ${formData[name] ? 'is-valid' : 'is-invalid'}`}
        id={id}
        name={name}
        value={formData[name]}
        onChange={onChange}
        required={required}
      />
      <div id={`${id}Feedback`} className={`invalid-feedback ${formData[name] ? 'd-none' : ''}`}>
        Este campo es obligatorio.
      </div>
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form
            className="row g-3 p-4 bg-light rounded"
            style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            onSubmit={handleSubmit}
          >
            <h1 className="mb-4">Regístrate</h1>
            {renderFormGroup('Nombres', 'validationServer01', 'firstName', formData.firstName, handleChange)}
            {renderFormGroup('Apellidos', 'validationServer02', 'lastName', formData.lastName, handleChange)}
            {renderFormGroup(
              'Correo Electrónico',
              'validationServerUsername',
              'username',
              formData.username,
              handleChange
            )}
            {renderFormGroup('Departamento', 'validationServer03', 'city', formData.city, handleChange)}
            {renderFormGroup('Edad', 'validationServer05', 'zip', formData.zip, handleChange, true, 'number')}

            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TuFormulario;
