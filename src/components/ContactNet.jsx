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

export default function ContactNet() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/seba-macha/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleInstagramClick = () => {
    window.open(
      "https://www.instagram.com/sebastianmacharette1984/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleFacebookClick = () => {
    window.open(
      "https://www.facebook.com/sebastianmacharette01",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleXClick = () => {
    window.open("https://x.com/SMacharette", "_blank", "noopener,noreferrer");
  };

  const handleGitHubClick = () => {
    window.open(
      "https://github.com/sebastianjmacharette",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Button
        className="btn bg-pink-700 text-white font-semibold"
        onPress={onOpen}
      >
        Redes
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-slate-800">
          {(onClose) => (
            <>
              <ModalHeader className="flex  flex-col gap-1">
                <div className="divider divider-start px-2 divider-secondary ml-4   text-white">
                  Redes Sociales
                </div>{" "}
                {/* Ajusta el alignment del divider aquí */}
              </ModalHeader>
              <ModalBody>
                <p className="text-white">
                  Conéctate conmigo en LinkedIn, Facebook, X, Instagram, y
                  GitHub para seguir mi trabajo, estar al tanto de mis últimos
                  proyectos, y compartir ideas. ¡Estoy siempre abierto a nuevas
                  conexiones!
                </p>
                <div>
                  <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">
                  Linkedin
                  </div>

                  <Button onClick={handleLinkedinClick} color="primary">
                  Linkedin
                  </Button>
                </div>
                <div>
                  <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">
                  Instagram
                  </div>

                  <Button onClick={handleInstagramClick} color="danger">
                  Instagram
                  </Button>
                </div>
                <div>
                  <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">
                  Facebook
                  </div>

                  <Button onClick={handleFacebookClick} color="primary">
                  Facebook
                  </Button>
                </div>
                <div>
                  <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">
                    X
                  </div>

                  <Button onClick={handleXClick} color="default">
                    X
                  </Button>
                </div>
                <div>
                  <div className="divider divider-start px-2 divider-secondary ml-4 text-2xl text-white">
                  GitHub
                  </div>

                  <Button onClick={handleGitHubClick } color="default">
                  GitHub
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
