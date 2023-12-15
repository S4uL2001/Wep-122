
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Navbar } from './componentes/Navbar';
import Inicio from './paginas/Inicio';
import Cochabamba from './paginas/Cochabamba';
import LaPaz from './paginas/LaPaz';
import Registrate from './paginas/Registrate';
import SantaCruz from './paginas/santacruz';
import Ubicacion from './paginas/Ubicacion'; 
import Especialidades from './paginas/Especialidades';
import Programa from './paginas/Programa';
import Creditos from './paginas/Creditos';
import Informacion from './paginas/Informacion';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/lapaz' element={<LaPaz />} />
          <Route path='/cochabamba' element={<Cochabamba />} />
          <Route path='/registrate' element={<Registrate />} />
          <Route path='/Informacion' element={<Informacion />} />
          <Route path="/santacruz" element={<SantaCruz />} />
          <Route path='/ubicacion' element={<Ubicacion />} />
          <Route path='/especialidades' element={<Especialidades />} />
          <Route path='/programa' element={<Programa />} />
          <Route path='/creditos' element={<Creditos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
