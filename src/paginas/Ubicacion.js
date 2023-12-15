import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Ubicacion = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Ubicación</h1>
      <h2 className="mb-4 text-center">Ubicación de La Paz</h2>
      <Row>
        <Col md={6}>
          <img
            src="./img/10.jpg"
            alt="Imagen 1"
            className="img-fluid rounded"
          />
          <p className="mt-2 text-center">Fachada del Centro de Salud</p>
        </Col>
        <Col md={6}>
          <div className="embed-responsive embed-responsive-16by9">
          <iframe
              title="Ubicación del Centro de Salud Cochabamba"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1912.2563579337407!2d-68.21238648197422!3d-16.550680304118817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edec72766ae9b%3A0xddd24834b4c47d00!2sCentro%20de%20Salud%203%20de%20Mayo!5e0!3m2!1ses!2sbo!4v1702428159209!5m2!1ses!2sbo"
              width="100%"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>

      <h2 className="mb-4 text-center">Ubicación de Cochabamba</h2>
      <Row>
        <Col md={6}>
          <img
            src="./img/11.jpg"
            alt="Imagen 1"
            className="img-fluid rounded"
          />
          <p className="mt-2 text-center">Fachada del Centro de Salud</p>
        </Col>
        <Col md={6}>
          <div className="embed-responsive embed-responsive-16by9">
          <iframe
              title="Ubicación del Centro de Salud Cochabamba"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7615.369270044306!2d-66.19427847513144!3d-17.378901666153165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e374620fc48fa5%3A0xa9eb21e0f1a78efd!2sCentro%20De%20Salud%20Sarcobamba!5e0!3m2!1ses!2sbo!4v1702428739340!5m2!1ses!2sbo"
              width="100%"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>

      <h2 className="mb-4 text-center">Subicacion de Santa Cruz</h2>
      <Row>
        <Col md={6}>
          <img
            src="./img/12.jpg"
            alt="Imagen 1"
            className="img-fluid rounded"
          />
          <p className="mt-2 text-center">Fachada del Centro de Salud</p>
        </Col>
        <Col md={6}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Ubicación de Centros de Salud de Segundo Nivel"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30393.67456783937!2d-63.222804665565455!3d-17.781856876085286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e80f46d9b8c1%3A0x893221956b5020d!2sCentros%20De%20Salud%20De%20Segundo%20Nivel!5e0!3m2!1ses!2sbo!4v1702429521728!5m2!1ses!2sbo"
              width="100%"
              height="450"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Ubicacion;

