import React, { useState } from 'react';
import oracle1 from '../../../assets/img/oracle/1.png';
import oracle2 from '../../../assets/img/oracle/2.png';
import oracle3 from '../../../assets/img/oracle/3.png';
import oracle4 from '../../../assets/img/oracle/4.png';
import oracle5 from '../../../assets/img/oracle/5.png';
import oracle6 from '../../../assets/img/oracle/6.png';
import oracle7 from '../../../assets/img/oracle/7.png';
import oracle8 from '../../../assets/img/oracle/8.png';
import oracle9 from '../../../assets/img/oracle/9.png';
import oracle10 from '../../../assets/img/oracle/10.png';
import oracle11 from '../../../assets/img/oracle/11.png';
import oracle12 from '../../../assets/img/oracle/12.png';
import oracle13 from '../../../assets/img/oracle/13.png';
import oracle14 from '../../../assets/img/oracle/14.png';
import oracle15 from '../../../assets/img/oracle/15.png';
import oracle16 from '../../../assets/img/oracle/16.png';
import oracle17 from '../../../assets/img/oracle/17.png';
import oracle18 from '../../../assets/img/oracle/18.png';
import oracle19 from '../../../assets/img/oracle/19.png';
import oracle20 from '../../../assets/img/oracle/20.png';
import oracle21 from '../../../assets/img/oracle/21.png';
import oracle22 from '../../../assets/img/oracle/22.png';
import oracle23 from '../../../assets/img/oracle/23.png';
import oracle24 from '../../../assets/img/oracle/24.png';
import oracle25 from '../../../assets/img/oracle/25.png';
import oracle26 from '../../../assets/img/oracle/26.png';
import oracle27 from '../../../assets/img/oracle/27.png';
import oracle28 from '../../../assets/img/oracle/28.png';
import oracle29 from '../../../assets/img/oracle/29.png';
import oracle30 from '../../../assets/img/oracle/30.png';




function Oracle() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    oracle1, oracle2, oracle3, oracle4, oracle5, oracle6, oracle7, oracle8, oracle9, oracle10,
    oracle11, oracle12, oracle13, oracle14, oracle15, oracle16, oracle17, oracle18, oracle19, oracle20,
    oracle21, oracle22, oracle23, oracle24, oracle25, oracle26, oracle27, oracle28, oracle29, oracle30
  ];
  
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
              <h2 className="  text-white text-2xl text-center">Oracle + Alura Latam {index + 1}</h2>
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

export default Oracle;
