import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import meteo from "../../../assets/img/jobs/meteorologico.png";
function Meteorologico() {
  const openPDF = () => {
    window.open("/meteorologico-react.pdf", "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row  ">
      <div className="flex-1 sm:w-1/3 lg:px-4 lg:mt-14 md:mt-14">
        <h2 className="text-white text-2xl lg:mb-10 sm:mb-4  text-center italic">
          <div className="divider lg:mb-20 sm:mb-4 divider-start">
            Proyecto Meteorológico
          </div>
        </h2>
        <div className="divider divider-secondary">Figma</div>
        <div className="lg:px-10 xl:px-20 2xl:px-20 lg:mt-14">
          <Card isFooterBlurred radius="lg" className="border-none">
            <Image
              alt="Woman listing to music"
              className="w-full" // Asegura que la imagen ocupe todo el ancho
              height={200}
              src={meteo}
              width="100%" // Asegura que la imagen ocupe todo el ancho
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-base animate-pulseCustom tracking-widest text-white/100">
                Mira aquí la documentación.{" "}
              </p>
              <Button
              className="text-tiny text-white  bg-pink-700 "
              variant="flat"
                color="default"
                radius="lg"
                size="sm"
                onClick={openPDF}
              >
                Ver PDF
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="flex-1 px-2 sm:w-1/3">
        <p className="text-center text-sm mt-4 ">
          Proyecto, desarrollado en React
          para mostrar el clima en tiempo real y la ubicación del usuario en un
          mapa interactivo. La aplicación se adapta a cualquier dispositivo
        </p>
        <p>
          <span className="text-white bg-secondary sm:text-center lg:text-left underline">
            Características Clave
          </span>
          <ul className="list-disc pl-5  text-white">
            <li>Ubicación del usuario: La aplicación obtiene la ubicación del usuario mediante las coordenadas del navegador</li>
            <li>
            Clima en tiempo real: Se muestran las condiciones climáticas actuales para la ubicación del usuario, incluyendo temperatura, humedad, presión atmosférica y viento.
            </li>
            <li>Pronóstico del tiempo: Se muestra un pronóstico del tiempo para los próximos días.</li>
            <li>Mapa interactivo: Se muestra un mapa con la ubicación del usuario marcada. El mapa es totalmente responsive y permite controlar el zoom.</li>
            <li>Diseño atractivo: La aplicación tiene un diseño atractivo y fácil de usar.</li>
            <li>
            Este proyecto es un ejemplo de cómo se puede utilizar React para crear aplicaciones web interactivas y útiles. La aplicación es fácil de usar y tiene un gran potencial para ser ampliada y mejorada.
            </li>
             
          </ul>
        </p>
        <div className="divider  divider-secondary">Descripcíon</div>
      </div>
      <div className="flex-1 justify-center sm:w-1/3  ">
        <div className=" px-4 divider lg:mt-10 lg:mb-10  divider-secondary">
          Video
        </div>
        <div className="flex justify-center sm:mb-10 items-center">
          <iframe
            className="w-full   h-96   px-4"
            src="https://www.youtube.com/embed/j5lJeh8xp9w?si=zniTdDquz-J7bmI7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Meteorologico;
