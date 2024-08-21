import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Molachinoweb from "../../../assets/img/jobs/molachinoviajes.png";
function Molachino() {
  const openPDF = () => {
    window.open("/molachinoviajes.pdf", "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row  ">
      <div className="flex-1 sm:w-1/3 lg:px-4 lg:mt-14 md:mt-14">
        <h2 className="text-white text-2xl lg:mb-10 sm:mb-4 mt-10 text-center italic">
          <div className="divider lg:mb-20 sm:mb-10 divider-start">
            {" "}
            Molachino Viajes y Turismo
          </div>
        </h2>
        <div className="divider divider-secondary mt-10">Figma</div>
        <div className="lg:px-10 xl:px-20 2xl:px-20 lg:mt-14">
        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            className="w-full" // Asegura que la imagen ocupe todo el ancho
            height={200}
            src={Molachinoweb}
            width="100%" // Asegura que la imagen ocupe todo el ancho
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-base animate-pulseCustom tracking-widest text-white/100">
              Mira aquí la documentación.{" "}
            </p>
            <Button
              className="text-tiny text-white  bg-teal-500/40"
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
        <a
          className="text-white"
          target="_blanck"
          href="https://molachinoviajes.com/index"
        >
          {" "}
          <div className="divider divider-end lg:mt-10 ">Link Página</div>
        </a>
      </div>
      <div className="flex-1 px-2 sm:w-1/3">
        <p className="text-center text-sm mt-4 ">
          El sistema web "Molachino Viajes" está diseñado para proporcionar una
          experiencia segura y confiable tanto para los viajeros como para sus
          familias. Con un enfoque especial en el control parental, esta
          plataforma permite a los padres monitorear los viajes de sus hijos en
          tiempo real, ofreciendo tranquilidad y seguridad. A través de un
          acceso protegido por usuario y contraseña, los padres pueden
          asegurarse de que sus hijos están seguros durante todo el viaje.
          Además, la privacidad está garantizada, ya que las imágenes y datos
          del viaje se eliminan automáticamente al concluir el trayecto. Con
          funcionalidades adicionales como la descarga de documentación
          relevante, "Molachino Viajes" se posiciona como una herramienta
          esencial para las familias que buscan una experiencia de viaje segura
          y bien gestionada.
        </p>
        <p>
          <span className="text-white sm:text-center lg:text-left underline">
            Características Clave
          </span>
          <ul className="list-disc pl-5  text-white">
            <li>
            Acceso restringido con usuario y contraseña, que solo se activa cuando el pasajero está en viaje.
            </li>
            <li>
            Las imágenes y datos asociados al viaje se borran automáticamente al finalizar el trayecto, garantizando la privacidad.
            </li>
            <li>
            Un sector dedicado donde los padres pueden ver el servicio ofrecido y entender cómo funciona el control parental.
            </li>
            <li>
            Gestión de Documentación: Zona de descarga de documentos importantes para los padres y pasajeros.            </li>
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
            src="https://www.youtube.com/embed/zd66YwNzqIU?si=Sf6CUMFdVOj9a4hA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex justify-center sm:mb-10 items-center">
          <iframe
            className="w-full   h-96   px-4"
            src="https://www.youtube.com/embed/ChM6o8uTo7M?si=cbHpZSU8FSAM7ZFr"             title="YouTube video player"
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

export default Molachino;
