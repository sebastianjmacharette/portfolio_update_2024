import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactPhone from "../ContactPhone";
function Contacto() {
  const form = useRef();
  const [alert, setAlert] = useState({ type: "", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_og7yw3h", "template_wjff0nw", form.current, "WYFt7zNeN2mUseOO6")
      .then(
        () => {
          setAlert({ type: "success", message: "Mensaje enviado con éxito!" });
          form.current.reset(); // Limpiar el formulario después del envío
          setTimeout(() => {
            setAlert({ type: "", message: "" }); // Cerrar la alerta después de 2 segundos
          }, 2000);
        },
        (error) => {
          setAlert({
            type: "error",
            message: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
          });
          setTimeout(() => {
            setAlert({ type: "", message: "" }); // Cerrar la alerta después de 2 segundos
          }, 2000);
        }
      );
  };

  return (
    <div>
      <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">Contacto</div> {/* Ajusta el alignment del divider aquí */}

      <div className="flex flex-wrap w-full">
        {alert.type === "success" && (
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
            <span>{alert.message}</span>
          </div>
        )}

        {alert.type === "error" && (
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
            <span>{alert.message}</span>
          </div>
        )}

        <div className="w-full md:w-1/2 p-2 box-border flex justify-center">
          <form ref={form} onSubmit={sendEmail}>
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
        <div className="w-full md:w-1/2 p-2 box-border flex justify-center">
          {/* Contenido del segundo div */}
          <div className="flex flex-col w-full max-w-md space-y-4">
            <div
            className="w-42"
            >
                <ContactPhone/>
            </div>
          
            {/* Aquí puedes agregar el contenido del segundo div */}
          </div>
        </div>
      </div>
      <div className="divider divider-end px-4 divider-secondary ml-4 text-2xl text-white">Contacto</div> {/* Ajusta el alignment del divider aquí */}

    </div>
  );
}

export default Contacto;
