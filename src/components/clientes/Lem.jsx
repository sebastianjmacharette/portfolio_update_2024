import React from 'react';
import LemPic from '../../assets/img/clients/lem.png';

export default function Lem() {
  const openModal = () => {
    const modal = document.getElementById('my_modal_6');
    if (modal) modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById('my_modal_6');
    if (modal) modal.close();
  };

  return (
    <div
    className="flex flex-wrap"
    >
      {/* Card Component */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="mt-4 ">
          <img
            src={LemPic}
            alt="Shoes"
            className=" h-28 p-0 rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">Grupo Lem</h2>
          <p>Gestion Hotelera</p>
          <div className="card-actions">
            <button onClick={openModal} className="btn bg-pink-700">Ver Experiencia</button>
          </div>
        </div>
      </div>
      
      {/* Modal Component */}
      <dialog id="my_modal_6" className="modal">
        <div className="modal-box">
        <div className="divider divider-secondary font-bold text-white text-lg">Grupo Lem</div>

          <p className="py-4 text-center">Sebastián se destaca por su responsabilidad y por cumplir con sus tareas de manera consistente. Su audacia para proponer nuevas soluciones es siempre bienvenida</p>
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
