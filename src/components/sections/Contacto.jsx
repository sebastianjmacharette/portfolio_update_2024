import React, { useState } from "react";
import ContactPhone from "../ContactPhone";
import ContactNet from "../ContactNet";

function Contacto() {
  const [result, setResult] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Leer la clave de acceso desde las variables de entorno
    const accessKey = import.meta.env.VITE_ACCESS_KEY;
    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">Contacto</div>

      <div className="flex flex-wrap w-full">
        {result === "Sending...." && (
          <div role="alert" className="alert bg-pink-700 mt-4 text-white font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>enviando...</span>
          </div>
        )}

        {result === "Form Submitted Successfully" && (
          <div role="alert" className="alert bg-pink-700 mt-4 text-white font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Su formulario Fue enviado!</span>
          </div>
        )}

        {result && result !== "Sending...." && result !== "Form Submitted Successfully" && (
          <div role="alert" className="alert alert-error mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{result}</span>
          </div>
        )}

        <div className="w-full md:w-1/2 p-2 box-border flex justify-center">
          <div className="w-full lg:ml-28">
            <form onSubmit={onSubmit}>
              <div className="flex flex-col w-full max-w-md lg:mt-10 sm:mt-2 space-y-4">
                <input
                  required
                  type="email"
                  name="user_email"
                  placeholder="Correo Electrónico"
                  className="input input-bordered input-secondary text-white w-full max-w-xs"
                />
                <input
                  required
                  type="text"
                  name="user_name"
                  placeholder="Nombre y Apellido"
                  className="input input-bordered input-secondary text-white w-full max-w-xs"
                />
                <textarea
                  required
                  name="message"
                  className="textarea text-base text-white font-semibold textarea-secondary w-full h-[300px]"
                  placeholder="Su Mensaje"
                ></textarea>
                <div>
                  <button type="submit" className="btn btn-outline btn-secondary">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2 box-border flex justify-center">
          <div className="flex flex-col w-full max-w-md space-y-4">
            <div>
              <div className="divider divider-end px-2 divider-secondary ml-4 text-2xl text-white">Medios</div>
              <p className="sm:text-center lg:text-end text-white">
                Estoy disponible para consultas y colaboraciones a través de diversos canales. Puedes contactarme directamente por teléfono, WhatsApp, o Telegram para una respuesta rápida y personal. Si prefieres un enfoque más formal o detallado, también puedes enviarme un correo electrónico. Estoy aquí para ayudarte y responder a cualquier pregunta que puedas tener
              </p>
            </div>
            <div className="w-full flex lg:justify-start justify-center lg:items-start items-center">
              <ContactPhone />
            </div>
            <div>
              <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">Redes</div>
              <p className="sm:text-center lg:text-start text-white">
                Conéctate conmigo en redes sociales para estar al tanto de mis últimos proyectos y colaboraciones. Puedes encontrarme en GitHub, donde comparto mi trabajo en desarrollo, y en LinkedIn, donde actualizo mi experiencia profesional. También estoy presente en X, Facebook, e Instagram, donde comparto ideas, noticias y momentos clave de mi carrera. ¡Sígueme y mantente al tanto de lo que hago!
              </p>
            </div>
            <div className="w-full flex lg:justify-end justify-center lg:items-start items-center">
              <ContactNet />
            </div>
          </div>
        </div>
      </div>
      <div className="divider divider-end px-4 divider-secondary ml-4 text-2xl text-white">Contacto</div>
    </div>
  );
}

export default Contacto;
