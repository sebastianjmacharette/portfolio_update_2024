import React from 'react';
import Desing from '../../../../assets/img/desingOne.png';

function DesingOne() {
  return (
    <div className="flex p-10 justify-center">
      <img
        className="w-full animate-pulseCustom max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-[0_4px_15px_rgba(255,255,255,1)]"
        src={Desing}
        alt="Centered Image"
      />
    </div>
  );
}

export default DesingOne;
