import React from "react";
import Mola from "../../assets/img/clients/Ponssss.png";

export default function Giachetta() {
  const openModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) modal.showModal();
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) modal.close();
  };
  

  return (
    <div
    className="flex flex-wrap"
    >
      {/* Card Component */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="mt-4">
          <img src={Mola} alt="Shoes" className=" h-28 rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title   text-white" style={{ marginTop: '0' }}>Transporte Giachetta</h2>
          <p>Transporte de Cargas en general</p>
          <div className="card-actions">
            <button onClick={openModal} className="btn mt-1 bg-pink-700">
              Ver Experiencia
            </button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
        <div className="divider divider-secondary font-bold text-white text-lg">Transporte Giachetta</div>

          <p className="py-4 text-center">
            La habilidad de Sebastián para manejar proyectos complejos y cumplir
            con los plazos es excelente. Su confiabilidad y compromiso lo hacen
            destacar en su rol como programador
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
