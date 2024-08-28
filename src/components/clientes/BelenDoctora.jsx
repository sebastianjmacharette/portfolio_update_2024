import React from 'react';
import Belu from '../../assets/img/clients/belene.png';

export default function BelenDoctora() {
  const openModal = () => {
    const modal = document.getElementById('my_modal_2');
    if (modal) modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById('my_modal_2');
    if (modal) modal.close();
  };

  return (
    <div
    className='flex flex-wrap"'
    >
      {/* Card Component */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className=" mt-4 p-0 ">
          <img
            src={Belu}
            alt="Shoes"
            className="rounded-xl h-28"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">María Belén Contigiani</h2>
          <p>Medica de Familia y Generalista</p>
          <div className="card-actions">
            <button onClick={openModal} className=" mb-1 btn bg-pink-700">Ver Experiencia</button>
          </div>
        </div>
      </div>
      
      {/* Modal Component */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
        <div className="divider divider-secondary font-bold text-white text-lg">María Belén Contigiani</div>

          <p className="py-4 text-center">Sebastián es persistente y nunca se rinde ante un desafío. Su capacidad para mantenerse enfocado y cumplir con los objetivos es una gran ventaja para el equipo.</p>
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
              <button type="button" className=" btn  bg-pink-700" onClick={closeModal}>Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
