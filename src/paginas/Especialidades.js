import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const especialidadesData = [
  {
    nombre: 'Anestesiología',
    descripcion: 'Resolver necesidades anestésicas para tratamientos médico-quirúrgicos.',
  },
  {
    nombre: 'Anatomía Patológica',
    descripcion: 'Manejar técnicas para establecer diagnósticos integrales.',
  },
  {
    nombre: 'Cardiología Clínica',
    descripcion: 'Atender patologías y procedimientos cardiológicos en pacientes adultos y pediátricos.',
  },
  {
    nombre: 'Cardiología Intervencionista',
    descripcion: 'Valorar y tratar integralmente problemas cardiológicos, incluyendo intervenciones.',
  },
  {
    nombre: 'Cirugía Pediátrica',
    descripcion: 'Manejar técnicas quirúrgicas para pacientes pediátricos.',
  },
  {
    nombre: 'Cirugía General',
    descripcion: 'Manejar técnicas quirúrgicas para pacientes adultos.',
  },
  {
    nombre: 'Cirugía Plástica y Reconstructiva',
    descripcion: 'Manejar técnicas para cirugía plástica y reconstructiva.',
  },
  {
    nombre: 'Angiología y Cirugía Vascular',
    descripcion: 'Manejar técnicas y procedimientos en patología vascular.',
  },
  {
    nombre: 'Dermatología',
    descripcion: 'Aplicar terapéutica y procedimientos para enfermedades de la piel.',
  },
  {
    nombre: 'Endoscopia del Aparato Digestivo',
    descripcion: 'Realizar procedimientos diagnósticos y terapéuticos mediante endoscopia.',
  },
  {
    nombre: 'Gastroenterología',
    descripcion: 'Tratar patologías del aparato digestivo.',
  },
  {
    nombre: 'Ginecología y Obstetricia',
    descripcion: 'Proporcionar atención gineco-obstétrica integral.',
  },
  {
    nombre: 'Hematología',
    descripcion: 'Valorar y tratar problemas hematológicos.',
  },
  {
    nombre: 'Infectología de Adulto',
    descripcion: 'Diagnosticar y tratar enfermedades infecciosas en adultos.',
  },
  {
    nombre: 'Medicina Aeroespacial',
    descripcion: 'Realizar procedimientos en medicina aeroespacial.',
  },
  {
    nombre: 'Medicina de Rehabilitación',
    descripcion: 'Manejar técnicas de rehabilitación física y mental.',
  },
  {
    nombre: 'Medicina Interna',
    descripcion: 'Evaluar integralmente pacientes adultos con problemas médicos.',
  },
  {
    nombre: 'Nefrología',
    descripcion: 'Aplicar procedimientos para enfermedades renales.',
  },
  {
    nombre: 'Neurología de Adultos',
    descripcion: 'Proporcionar atención a pacientes con problemas neurológicos.',
  },
  {
    nombre: 'Neumología',
    descripcion: 'Valorar y tratar problemas neumológicos en adultos.',
  },
  {
    nombre: 'Oftalmología',
    descripcion: 'Diagnosticar y tratar patologías oftalmológicas.',
  },
  {
    nombre: 'Ortopedia',
    descripcion: 'Proporcionar atención a pacientes con problemas ortopédicos.',
  },
  {
    nombre: 'Otorrinolaringología',
    descripcion: 'Manejar técnicas médico-quirúrgicas en otorrinolaringología.',
  },
  {
    nombre: 'Patología Clínica',
    descripcion: 'Manejar procedimientos en laboratorio clínico.',
  },
  {
    nombre: 'Pediatría',
    descripcion: 'Manejar técnicas y procedimientos para atención pediátrica.',
  },
  {
    nombre: 'Psiquiatría General',
    descripcion: 'Diagnosticar y tratar enfermedades mentales y del sistema nervioso central.',
  },
  {
    nombre: 'Radiología e Imagen',
    descripcion: 'Evaluar técnicas y procedimientos en estudios diagnósticos.',
  },
  {
    nombre: 'Medicina Crítica',
    descripcion: 'Aplicar medidas en diagnósticos y terapéuticas para enfermos en situaciones de alto riesgo.',
  },
  {
    nombre: 'Urología',
    descripcion: 'Identificar y resolver médica o quirúrgicamente problemas del tracto genitourinario.',
  },
  {
    nombre: 'Cirugía Oncológica',
    descripcion: 'Valorar y tratar integralmente pacientes con problemas oncológicos que requieran tratamiento quirúrgico.',
  },
  {
    nombre: 'Oncología Médica',
    descripcion: 'Valorar y tratar integralmente pacientes adultos con problemas oncológicos.',
  },
  {
    nombre: 'Oncología Pediátrica',
    descripcion: 'Valorar y tratar integralmente pacientes pediátricos con problemas oncológicos.',
  },
  {
    nombre: 'Radio-Oncología',
    descripcion: 'Aplicar eficientemente tratamientos con radiaciones ionizantes en pacientes con diagnóstico de neoplasias malignas.',
  },
  {
    nombre: 'Cirugía Neurológica',
    descripcion: 'Aplicar técnicas y procedimientos quirúrgicos para atender pacientes con padecimientos neuroquirúrgicos.',
  },
];

const Especialidades = () => {
  return (
    <Container className="mt-5">
      <h1 className="mb-4 text-center">Especialidades Médicas</h1>
      <h2 className='mb-4 text-center'> Comtamos con:</h2>
      <Row>
        {especialidadesData.map((especialidad, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{especialidad.nombre}</Card.Title>
                <Card.Text>{especialidad.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Especialidades;
