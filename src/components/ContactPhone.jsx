import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function ContactPhone() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/+543464573869?text=Hola%20Sebastian,%20me%20gustaría%20obtener%20más%20información%20sobre:",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/@sebamacha", "_blank", "noopener,noreferrer");
  };

  const handleTelClick = () => {
    window.open("tel:+543464573869", "_blank", "noopener,noreferrer");
  };
  const handleMailClick = () => {
    window.open("mailto:sebastian.j.macharette@gmail.com", "_blank", "noopener,noreferrer");
  };
  

  return (
    <>
      <Button
        className="btn bg-pink-700 text-white font-semibold"
        onPress={onOpen}
      >
        Medios
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-slate-800">
          {(onClose) => (
            <>
              <ModalHeader className="flex  flex-col gap-1">
                <div className="divider divider-start px-2 divider-secondary ml-4   text-white">
                  Medios de Comunicación
                </div>{" "}
                {/* Ajusta el alignment del divider aquí */}
              </ModalHeader>
              <ModalBody>
                <p
                className="text-white"
                >
                  Puedes comunicarte conmigo a través de WhatsApp, Telegram,
                  llamándome directamente, o enviándome un correo electrónico.
                  ¡Estoy disponible para cualquier consulta o colaboración!
                </p>
                <div>
                <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">WhatsApp</div>  

                  <Button onClick={handleWhatsAppClick} color="success">
                    WhatsApp
                  </Button>
                </div>
                <div>
                <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">Telegram</div>  

                  <Button onClick={handleTelegramClick } color="primary">
                    Telegram
                  </Button>
                </div>
                <div>
                <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">Teléfono</div>  

                  <Button onClick={handleTelClick} color="secondary">
                    Teléfono
                  </Button>
                </div>
                <div>
                <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">Correo</div>  

                  <Button onClick={handleMailClick} color="danger">
                    Correo
                  </Button>
                </div>
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
