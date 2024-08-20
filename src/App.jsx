import React from 'react';
import CustomNavbar from './components/shared/CustomNavbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/sections/Home';
import SobreMi from './components/sections/SobreMi';
import Contacto from './components/sections/Contacto';
import Footer from './components/shared/Footer';
import Egg from './components/sections/estudios/Egg';
import CodoAcodo from './components/sections/estudios/CodoAcodo';
import Oracle from './components/sections/estudios/Oracle';
import Google from './components/sections/estudios/Google';
import CodigoFacilito from './components/sections/estudios/CodigoFacilito';
import DonWeb from './components/sections/estudios/DonWeb';
import Telefonica from './components/sections/estudios/Telefonica';
import TodoCode from './components/sections/estudios/TodoCode';
import Skills from './components/sections/estudios/Skills';
import SistemaContable from './components/sections/proyectos/SistemaContable';
import GestionLem from './components/sections/proyectos/GestionLem';
import Molachino from './components/sections/proyectos/Molachino';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <CustomNavbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/estudios/egg-cooperation" element={<Egg />} />
            <Route path="/estudios/codo-a-codo" element={<CodoAcodo />} />
            <Route path="/estudios/oracle-latam" element={<Oracle />} />
            <Route path="/estudios/google" element={<Google />} />
            <Route path="/estudios/codigo-facilito" element={<CodigoFacilito />} />
            <Route path="/estudios/donweb" element={<DonWeb />} />
            <Route path="/estudios/telefonica" element={<Telefonica />} />
            <Route path="/estudios/todo-code" element={<TodoCode />} />
            <Route path="/estudios/skills" element={<Skills />} />
            <Route path="/proyectos/sistema-contable" element={<SistemaContable />} />
            <Route path="/proyectos/gestion-lem" element={<GestionLem />} />
            <Route path="/proyectos/molachino-viajes" element={<Molachino />} />



          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
