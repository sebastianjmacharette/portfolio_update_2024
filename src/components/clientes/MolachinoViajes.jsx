import React from 'react';
import Mola from '../../assets/img/clients/molachino.png';

export default function MolachinoViajes() {
  const openModal = () => {
    const modal = document.getElementById('my_modal_1');
    if (modal) modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById('my_modal_1');
    if (modal) modal.close();
  };

  return (
<div
    className="flex flex-wrap"
    >      {/* Card Component */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={Mola}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">Molachino Viajes</h2>
          <p className=''>Empresa de Viajes y Turismo</p>
          <div className="card-actions">
            <button onClick={openModal} className="btn mb-4 bg-pink-700">Ver Experiencia</button>
          </div>
        </div>
      </div>
      
      {/* Modal Component */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
        <div className="divider divider-secondary font-bold text-white text-lg">Molachino Viajes</div>

          <p className="py-4 text-center">Sebastián es un programador front-end excepcional. 
            Su compromiso y confiabilidad son inigualables. Siempre cumple con los plazos
             y entrega resultados de alta calidad.</p>
          <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>

          <div className="modal-action">
            <form method="dialog">
              {/* Button to close the modal */}
              <button type="button" className="btn bg-pink-700" onClick={closeModal}>Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
