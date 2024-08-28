import React from "react";
import Perfil from "../../assets/img/perfil.webp";
import Tiantech from "../../assets/img/logo tiantech.png";
function SobreMi() {
  return (
    <div>
            <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">Sobre Mi</div> {/* Ajusta el alignment del divider aquí */}

      <div className="  flex flex-wrap">
        <div className="h-full  lg:w-1/3">
          <div className="   px-8 lg:pt-20 sm:pt-6 lg:pb-16 sm:pb-2 relative">
            <div className="flex justify-center items-center">
              <img
                className="mask mask-squircle w-32 sm:w-40 p-4"
                src={Perfil}
                alt="Perfil"
              />
            </div>

            <p className=" sm:text-center lg:text-right    mb-3">
              <span className="text-2xl text-white">M</span>i viaje al mundo de
              la programación comenzó a la tierna edad de 11 años, mientras
              exploraba las vastas posibilidades de mi primera computadora con
              Windows 95. Desde ese momento transformador, mi trayectoria ha
              sido moldeada por spanuna pasión inquebrantable por la tecnología
              y su potencial ilimitado.
            </p>
            <div className="divider lg:hidden sm:block"></div>
          </div>
        </div>
        <div className="h-full  lg:w-1/3">
          <div className=" px-8 lg:pt-10 sm:pt-4 lg:pb-16 sm:pb-4  relative">
            <h2 className=" lg:text-left sm:text-center  mb-1">
              <span className="text-2xl text-white">E</span>ste ardor por la
              tecnología se ha visto aún más influenciado por el sereno telón de
              fondo de mi entorno actual, ubicado en el corazón de la vida
              rural. Aceptar el papel de programador independiente a tiempo
              completo dentro de este entorno tranquilo ha sido fundamental para
              cultivar mi espíritu creativo.
            </h2>

            <p className="underline lg:mt-10  text-white text-xl font-semibold mb-3">
              <span className="bg-secondary">Co-fundador de:</span>
            </p>
            <div className="flex justify-center items-center">
              <a
                className=""
                href="https://tiantech.com.ar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className=" animate-pulseCustom"
                  src={Tiantech}
                  alt="tiantech"
                />
              </a>
            </div>
            <div className="divider lg:hidden sm:block"></div>
          </div>
        </div>
        <div className="h-full   lg:w-1/3">
          <div className=" px-8 lg:pt-28 sm:pt-4 lg:pb-16 sm:pb-4  relative">
            <div className="flex lg:mt-10s justify-center items-center">
              <div className="relative w-full max-w-[90%] pb-[56.25%] rounded-2xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-2xl before:bg-gradient-radial from-slate-700 via-transparent to-transparent z-10"></div>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/gep4ZEmpFvo?si=iOFKf4bUAzW2AK10"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="divider lg:mb-8 lg:mt-8  text-white divider-end">
              {" "}
              <span className="bg-secondary">Mi frase favorita</span>
            </div>

            <p className="mb-3 text-center">
              “Los analfabetos del siglo XXI no serán aquellos que no saben leer
              y escribir, sino aquellos que no puedan aprender, desaprender y re
              aprender”
            </p>
            <a className="text-indigo-500  mb-6 inline-flex items-center">
              Alvin Toffler (escritor de La tercera ola, icono de la revolución
              digital).
            </a>
          </div>
        </div>
      </div>
      <div className="divider divider-end px-2 divider-secondary ml-4 text-2xl text-white">Sobre Mi</div> {/* Ajusta el alignment del divider aquí */}

    </div>
  );
}

export default SobreMi;
