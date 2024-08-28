import React from 'react';
import MolachinoViajes from '../clientes/MolachinoViajes';
import BelenDoctora from '../clientes/BelenDoctora';
import Giachetta from '../clientes/Giachetta';
import Roich from '../clientes/Roich';
import Ranqueles from '../clientes/Ranqueles';
import Lem from '../clientes/Lem';

function Clientes() {
  return (
    <div
    className='bg-slate-700 overflow-auto'
    >
         <div className="divider divider-secondary text-white text-2xl">Clientes satisfechos</div>

    <div className='bg-slate-700 overflow-auto'>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 p-4">
          <div className="w-full">
            <MolachinoViajes />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="w-full">
            <BelenDoctora />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="w-full">
            <Giachetta />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="w-full">
            <Roich />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="w-full">
            <Ranqueles />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="w-full">
            <Lem />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="w-full"></div>
        </div>
      </div>
    </div>
    <div className="divider px-4 divider-end divider-secondary text-white text-2xl">Clientes </div>
    </div>
  );
}

export default Clientes;
