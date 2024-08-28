import React from 'react';
import { useNavigate } from 'react-router-dom';
import Timetamers from '../../../../assets/img/desing/titetamer.png'
function DesingTree() {
  const navigate = useNavigate();

  const handleViewDesign = () => {
    navigate('/proyectos/desing/time-tamer'); // Cambia '/ruta-de-mi-proyecto' por la ruta que desees
  };

  return (
    <div className="flex justify-center p-4">
      <div className="card bg-base-100 image-full w-full max-w-sm shadow-xl">
        <figure>
          <img
            src={Timetamers}
            alt="Shoes"
            className="object-cover w-full h-48"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white font-bold text-2xl ">TimeTamer</h2>
          <p className="text-sm text-white font-bold">Agenda de eventos y tareas que prioriza la organización de los tiempos de descanso y libre de pantallas.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary" onClick={handleViewDesign}>
              Ver Diseño
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesingTree;
