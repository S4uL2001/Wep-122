import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Centros de salud</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lapaz">La Paz</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Cochabamba">Cochabamba</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/santacruz">Santa Cruz</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/ubicacion">Ubicaion</Link>
              </li>

              
              <li className="nav-item">
                <Link className="nav-link" to="/Especialidades">Especialidades</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/programa">Programas</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/creditos">Creditos</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Contactanos
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" to="/Registrate">Registrate</Link></li>
                  <li><Link className="dropdown-item" to="/Informacion">Informacion</Link></li>
                  
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;