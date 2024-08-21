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
                className="  text-black font-bold bg-white/60"
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
         Plataforma diseñada para
          revolucionar la forma en que encontramos y contratamos servicios
          domésticos. Imagina un lugar donde carpinteros, plomeros y otros
          profesionales puedan ofrecer sus servicios directamente a clientes, y
          donde los clientes puedan encontrar fácilmente a los profesionales
          adecuados para sus necesidades.
        </p>
        <p>
          <span className="text-white sm:text-center lg:text-left underline">
            Características Clave
          </span>
          <ul className="list-disc pl-5  text-white">
            <li>
            Registro sencillo y rápido para profesionales y clientes.
            </li>
            <li>
            Búsqueda avanzada por categoría, ubicación y calificaciones.
            </li>
            <li>
            Sistema de mensajería integrado para comunicación directa.
            </li>
            <li>Gestión transparente de presupuestos y cobros.</li>
            <li>Seguridad garantizada con Spring Security y JWT.</li>
            <li>Base de datos: MySQL para almacenar la información de forma segura y escalable.</li>
            <li>Profesionales: Amplía tu cartera de clientes y aumenta tus ingresos.</li>
                <li>Clientes: Encuentra los mejores profesionales para tus proyectos.
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
            src="https://www.youtube.com/embed/j5lJeh8xp9w?si=zniTdDquz-J7bmI7"             title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Meteorologico;
