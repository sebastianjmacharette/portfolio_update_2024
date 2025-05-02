import React, { useState } from 'react';
import Ranq from '../../assets/img/clients/ranwhite.png';

export default function Ranqueles() {
  const [rating, setRating] = useState(5); // Estado inicial del rating

  const openModal = () => {
    const modal = document.getElementById('my_modal_5');
    if (modal) modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById('my_modal_5');
    if (modal) modal.close();
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  return (
    <div className="flex flex-wrap">
      {/* Card Component */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={Ranq}
            alt="Hotel Ranqueles"
            className="rounded-xl h-16"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">Hotel Ranqueles</h2>
          <p>Villa Carlos Paz</p>
          <div className="card-actions">
            <button onClick={openModal} className="mb-4 mt-1 btn bg-pink-700">Ver Experiencia</button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <div className="divider divider-secondary font-bold text-white text-lg">Hotel Ranqueles</div>
          <p className="py-4 text-center">
            El compromiso de Sebastián con su trabajo es admirable. Aunque ocasionalmente necesita ajustar su enfoque, su persistencia y confiabilidad lo convierten en un recurso valioso.
          </p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="1"
              checked={rating === 1}
              onChange={handleRatingChange}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="2"
              checked={rating === 2}
              onChange={handleRatingChange}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="3"
              checked={rating === 3}
              onChange={handleRatingChange}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="4"
              checked={rating === 4}
              onChange={handleRatingChange}
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              value="5"
              checked={rating === 5}
              onChange={handleRatingChange}
            />
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
