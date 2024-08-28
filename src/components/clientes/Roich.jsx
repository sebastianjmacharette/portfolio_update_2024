import React from "react";
import RoichPic from "../../assets/img/clients/Roichh.png";

export default function Roich() {
  const openModal = () => {
    const modal = document.getElementById("my_modal_4");
    if (modal) modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_4");
    if (modal) modal.close();
  };

  return (
    <div
    className="flex flex-wrap"
    >
      {/* Card Component */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className=" ">
          <img src={RoichPic} alt="Shoes" className="rounded-xl w-44 mt-4" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">Yanina Roich</h2>
          <p>Contadora Pública Nacional</p>
          <div className="card-actions">
            <button onClick={openModal} className="btn mb-1 bg-pink-700">
              Ver Experiencia
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <div className="divider divider-secondary font-bold text-white text-lg">
            Yanina Roich
          </div>

          <p className="py-4 text-center">
            La combinación de audacia, persistencia y responsabilidad que
            Sebastián aporta a su trabajo es increíble. Siempre está dispuesto a
            ir más allá para garantizar el éxito del proyecto.
          </p>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              checked
            />
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* Button to close the modal */}
              <button type="button" className="btn bg-pink-700" onClick={closeModal}>
                Cerrar
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
