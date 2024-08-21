import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Contable from '../../../assets/img/jobs/sistema-contable.png'
function SistemaContable() {
  const openPDF = () => {
    window.open("/contebleLem.pdf", "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row  ">
      <div className="flex-1 sm:w-1/3 lg:px-4 lg:mt-14 md:mt-14">
        <h2 className="text-white text-2xl lg:mb-10 sm:mb-4  text-center italic">
        <div className="divider lg:mb-20 sm:mb-4 divider-start">  Sistema Contable</div>

        </h2>
        <div className="divider divider-secondary">Figma</div>
        <div className="lg:px-10 xl:px-20 2xl:px-20 lg:mt-14">
  

        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            className="w-full" // Asegura que la imagen ocupe todo el ancho
            height={200}
            src={Contable}
            width="100%" // Asegura que la imagen ocupe todo el ancho
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-base animate-pulseCustom tracking-widest text-white/100">
            Mira aquí la documentación.            </p>
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
          Este sistema web está diseñado para gestionar la contabilidad diaria
          de una empresa. Permite registrar ingresos y gastos en efectivo,
          tarjeta o depósito, y adjuntar comprobantes digitales. También incluye
          funcionalidades avanzadas para el manejo de cheques, con la capacidad
          de registrar el estado del cheque (cobrado o entregado) y mantener un
          libro de cheques actualizado. Además, genera recibos provisorios para
          las transacciones.
        </p>
        <p>
          <span className="text-white sm:text-center lg:text-left underline">Características Clave</span>
          <ul className="list-disc pl-5  text-white">
            <li>
              Registro de Ingresos y Gastos: Clasificación de transacciones y
              carga de comprobantes.
            </li>
            <li>
              Gestión de Cheques: Registro, actualización de estado y libro de
              cheques.
            </li>
            <li>
              Generación de Recibos Provisorios: Creación de recibos temporales.
            </li>
          </ul>
          <span className="text-white underline">Tecnologías Utilizadas</span>
          <ul className="list-disc pl-5 text-white">
            <li>
              Frontend: React, Vite, Tailwind CSS, Material UI, Redux Toolkit
            </li>
            <li>Backend: Java 21, Spring Boot, Spring Security, JWT</li>
            <li>Base de Datos: MySQL</li>
            <li>Infraestructura: Docker, Nginx, Let's Encrypt</li>
          </ul>
        </p>
        <div className="divider  divider-secondary">Descripcíon</div>
      </div>
      <div className="flex-1 justify-center sm:w-1/3  ">
        <div className=" px-4 divider lg:mt-10 lg:mb-10  divider-secondary">Video</div>
        <div className="flex justify-center sm:mb-10 items-center">
  <iframe
    className="w-full   h-96   px-4"
    src="https://www.youtube.com/embed/RDliW_mDhkQ?si=XCaHp9AfKUHX5-nt"
    title="YouTube video player"
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

export default SistemaContable;
