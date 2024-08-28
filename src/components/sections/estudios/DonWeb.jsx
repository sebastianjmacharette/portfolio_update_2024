import React, { useState } from 'react';
import DonWeb1 from '../../../assets/img/donweb/Donweb1.png';
import DonWeb2 from '../../../assets/img/donweb/Donweb2.png';
import DonWeb3 from '../../../assets/img/donweb/Donweb3.png';
import DonWeb4 from '../../../assets/img/donweb/Donweb4.png';
import DonWeb5 from '../../../assets/img/donweb/Donweb5.png';






function DonWeb() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [DonWeb1, DonWeb2, DonWeb3, DonWeb4, DonWeb5]; // Imágenes importadas

  const openModal = (image) => {
    setSelectedImage(image);
    document.getElementById('image_modal').showModal();
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="card w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={image}
                alt={`Egg ${index + 1}`}
                className="rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="  text-white text-2xl text-center">DonWeb {index + 1}</h2>
               <div className="card-actions justify-end">
                <button className="btn bg-pink-700" onClick={() => openModal(image)}>
                  Ver Certificado
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <dialog id="image_modal" className="modal">
        <div className="modal-box lg:max-w-3xl">
          {selectedImage && (
            <>
              <figure>
                <img src={selectedImage} alt="Selected" className="rounded-lg w-full lg:h-auto" />
              </figure>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-secondary">Cerrar</button>
                </form>
              </div>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}

export default DonWeb;
