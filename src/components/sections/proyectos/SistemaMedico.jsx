import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Medico from '../../../assets/img/jobs/sistema-medico.png'
function SistemaMedico() {
  const openPDF = () => {
    window.open("/contebleLem.pdf", "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row  ">
      <div className="flex-1 sm:w-1/3 lg:px-4 lg:mt-14 md:mt-14">
        <h2 className="text-white text-2xl lg:mb-10 sm:mb-4  text-center italic">
        <div className="divider  divider-start">  Sistema Medico</div>
        <div className="divider divider-end ">Version AutoInstalable</div>
        <div className="divider  divider-start lg:mb-20 sm:mb-4">Sistema Operativo: Windows</div>


        </h2>
        <div className="divider divider-secondary">Figma</div>
        <div className="lg:px-10 xl:px-20 2xl:px-20 lg:mt-14">
  

        <Card isFooterBlurred radius="lg" className="border-none">
          <Image
            alt="Woman listing to music"
            className="w-full" // Asegura que la imagen ocupe todo el ancho
            height={200}
            src={Medico}
            width="100%" // Asegura que la imagen ocupe todo el ancho
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-base animate-pulseCustom tracking-widest text-white/100">
            Mira aquí la documentación.            </p>
            <Button
              className="text-tiny text-white bg-purple-500/40"
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
        El Sistema Médico para Windows es una solución completa diseñada para facilitar la gestión diaria de pacientes en clínicas y consultorios. Desarrollado en Java Swing, este sistema se destaca por su facilidad de instalación y su interfaz intuitiva, lo que lo convierte en una herramienta accesible para los profesionales de la salud.

Compilado como un archivo ejecutable (.exe) y convertido en un autoejecutable, el sistema elimina la necesidad de configuraciones técnicas complejas, permitiendo a los médicos concentrarse en lo que realmente importa: la atención al paciente. Con funcionalidades como el registro de pacientes y el acceso al historial médico organizado cronológicamente, el Sistema Médico ofrece una forma eficiente y confiable de gestionar la información clínica, optimizando la práctica médica diaria.
        </p>
        <p>
          <span className="text-white sm:text-center lg:text-left underline">Características Clave</span>
          <ul className="list-disc pl-5  text-white">
            <li>
            La conversión a archivo autoejecutable permite una instalación ágil, permitiendo a los médicos acceder rápidamente al sistema sin la necesidad de configuraciones técnicas avanzadas.
            </li>
            <li>
            Interfaz Intuitiva: Diseñada para reducir la curva de aprendizaje, la interfaz es amigable y permite a los usuarios familiarizarse rápidamente con todas las funciones disponibles.
            </li>
            <li>
            Los médicos pueden registrar y acceder fácilmente al historial médico de los pacientes, organizando las consultas de manera cronológica para un seguimiento detallado y preciso.            </li>
          <li>Registro de Pacientes: Permite la entrada y almacenamiento de datos clave sobre los pacientes.
          </li>
          <li>Acceso al Historial Clínico: Consultas y registros médicos organizados cronológicamente para un seguimiento eficiente.</li>
          </ul>
          
        </p>
        <div className="divider  divider-secondary">Descripcíon</div>
      </div>
      <div className="flex-1 justify-center sm:w-1/3  ">
        <div className=" px-4 divider lg:mt-10 lg:mb-10  divider-secondary">Video</div>
        <div className="flex justify-center sm:mb-10 items-center">
  <iframe
    className="w-full   h-96   px-4"
    src="https://www.youtube.com/embed/Y1KhVB1JanU?si=mt7T64eQCwCLQkrT"     title="YouTube video player"
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

export default SistemaMedico;
