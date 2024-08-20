import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Hotel from '../../../assets/img/jobs/hotel-lem.png'
function GestionLem() {
  const openPDF = () => {
    window.open("/Hotellem.pdf", "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row  ">
      <div className="flex-1 sm:w-1/3 lg:px-4 lg:mt-14 md:mt-14">
        <h2 className="text-white text-2xl lg:mb-10 sm:mb-4 mt-10 text-center italic">
        <div className="divider lg:mb-20 sm:mb-10 divider-start">  Sistema para el Manejo <br /> de Reservas de Hoteles</div>

        </h2>
        <div className="divider divider-secondary mt-10">Figma</div>

        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            className="w-full" // Asegura que la imagen ocupe todo el ancho
            height={200}
            src={Hotel}
            width="100%" // Asegura que la imagen ocupe todo el ancho
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-base animate-pulseCustom tracking-widest text-white/100">
            Mira aquí la documentación.            </p>
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
      <div className="flex-1 px-2 sm:w-1/3">
        <p className="text-center text-sm mt-4 ">
        El sistema contable para el manejo de reservas de hoteles es una solución integral diseñada para optimizar la gestión financiera y administrativa de establecimientos hoteleros. Este sistema no solo facilita la administración de reservas y la facturación, sino que también asegura un control preciso sobre los ingresos, gastos y el flujo de caja del hotel.

Con un enfoque en la eficiencia y la precisión, el sistema está equipado para manejar todas las transacciones financieras relacionadas con las reservas, desde la generación automática de facturas hasta la integración con sistemas de pago. Además, proporciona herramientas avanzadas para la elaboración de reportes financieros, permitiendo a los gerentes obtener una visión clara del estado financiero del hotel en cualquier momento.
        </p>
        <p>
          <span className="text-white sm:text-center lg:text-left underline">Características Clave</span>
          <ul className="list-disc pl-5  text-white">
            <li>
            Aplicación web responsive diseñada para optimizar la gestión operativa y administrativa de hoteles.
            </li>
            <li>
            Frontend: React con Vite, estilizado con Tailwind CSS para una interfaz moderna y coherente.
            </li>
            <li>
            Backend: Java Spring Boot, montado en contenedores Docker y desplegado en dos servidores.
            </li>
          </ul>
          <span className="text-white underline">Funcionalidades Principales</span>
          <ul className="list-disc pl-5 text-white">
            <li>
            Gestión de Reservas: Validación de habitaciones y fechas para evitar duplicados.
            </li>
            <li>Historial Detallado: Acceso al historial de reservas, pagos, ingresos, y movimientos del hotel con opciones de búsqueda personalizadas.</li>
            <li>Interfaz Intuitiva: Facilidad de uso para la gestión de inventarios, personal y finanzas.</li>
           </ul>
        </p>
        <div className="divider  divider-secondary">Descripcíon</div>
      </div>
      <div className="flex-1 justify-center sm:w-1/3  ">
        <div className=" px-4 divider lg:mt-10 lg:mb-10  divider-secondary">Video</div>
        <div className="flex justify-center sm:mb-10 items-center">
  <iframe
    className="w-full   h-96   px-4"
    src="https://www.youtube.com/embed/Mm30gMp39TM?si=dyCRwdMFVng9REy_" 
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

export default GestionLem;
