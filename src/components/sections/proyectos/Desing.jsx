import React from 'react';
import DesingOne from './desing/DesingOne';
import Desingtwo from './desing/desingtwo';
import DesingTree from './desing/desingTree';

function Desing() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4">
      {/* Div 1 - Esquina superior izquierda */}
      <div className="flex justify-center items-center">
        <DesingOne />
      </div>
      
      {/* Div 2 - Esquina superior derecha */}
      <div className="flex justify-center items-center">
        <Desingtwo />
      </div>
      
      {/* Div 3, 4, y 5 - En una fila horizontal en pantallas grandes */}
      <div className="md:col-span-2 flex flex-wrap gap-4s">
        <div className="flex justify-center items-center flex-grow">
          <DesingTree />
        </div>
        <div className="flex justify-center items-center flex-grow">
         
        </div>
        <div className="flex justify-center items-center flex-grow">
           
        </div>
      </div>
    </div>
  );
}

export default Desing;
