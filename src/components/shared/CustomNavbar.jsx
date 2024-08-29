import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Firma from "../../assets/img/sm.png";
export default function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleDownload = () => {
    // URL relativa al archivo CV en la carpeta public
    const cvUrl = "/cv2024.pdf";

    // Crear un elemento <a> temporal para iniciar la descarga
    const downloadLink = document.createElement("a");
    downloadLink.href = cvUrl;
    downloadLink.download = "CV.pdf"; // Nombre que se utilizará para guardar el archivo
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-black"
    >
      {/* Toggle button for small screens aligned to the left */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Brand in the right for small screens */}
      <NavbarContent className="sm:hidden" justify="end">
        <NavbarBrand>
          <img className="w-40 mr-10" src={Firma} alt="" />
          <p className="font-bold text-inherit"> </p>
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar brand for large screens */}
      <NavbarContent className="hidden sm:flex" justify="start">
        <NavbarBrand>
          <img className="w-40 mr-10" src={Firma} alt="" />
          <p className="font-bold text-inherit"></p>
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar items for large screens aligned to the right */}
      <NavbarContent className="hidden text-white sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link className="text-white lg:mr-4" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" color="foreground" href="/sobre-mi">
            Sobre Mi
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button className="text-base" variant="">
                Estudios
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Estudios">
              <DropdownItem
                className="text-white"
                key="Egg"
                color="secondary"
                href="/estudios/egg-cooperation"
              >
                Egg Cooperation
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="CodoAcodo"
                color="secondary"
                href="/estudios/codo-a-codo"
              >
                Codo a Codo
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="Google"
                color="secondary"
                href="/estudios/google"
              >
                Google
              </DropdownItem>

              <DropdownItem
                className="text-white"
                key="OracleLatam"
                color="secondary"
                href="/estudios/oracle-latam"
              >
                Oracle Latam
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="CodigoFacilito"
                color="secondary"
                href="/estudios/codigo-facilito"
              >
                Codigo Facilito
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="DonWeb"
                color="secondary"
                href="/estudios/donweb"
              >
                DonWeb
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="TodoCode"
                color="secondary"
                href="/estudios/todo-code"
              >
                Todo Code
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="Telefonica"
                color="secondary"
                href="/estudios/telefonica"
              >
                Telefónica
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="Skills"
                color="secondary"
                href="/estudios/skills"
              >
                Skills
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button className="text-base" variant=" ">
                Proyectos
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Proyectos">
              <DropdownItem
                className="text-white"
                color="secondary"
                key="MolachinoViajes"
                href="/proyectos/molachino-viajes"
              >
                Molachino Viajes
              </DropdownItem>
              <DropdownItem
                className="text-white"
                color="secondary"
                key="GestionLem"
                href="/proyectos/gestion-lem"
              >
                Gestion Hotelera Lem
              </DropdownItem>
              <DropdownItem
                className="text-white"
                color="secondary"
                key="SistemaContable"
                href="/proyectos/sistema-contable"
              >
                Sistema Contable
              </DropdownItem>
              <DropdownItem
                className="text-white"
                color="secondary"
                key="SistemaMedico"
                href="/proyectos/sistema-medico"
              >
                Sistema Medico{" "}
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="AtuServicio"
                href="/proyectos/a-tu-servicio"
              >
                A tu Servicio{" "}
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="Meteo"
                href="/proyectos/meteo"
              >
               Meteorológico 
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="Diseno"
                href="/proyectos/desing"
              >
               Diseño UX/UI 
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="Wordpres"
                href="/proyectos/wordpress"
              >
               Trabajos Wordpress 
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="Wix"
                href="/proyectos/wix"
              >
               Trabajos Wix
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white" color="foreground" href="/clientes">
           Clientes
          </Link>
        </NavbarItem>
        
        
        <NavbarItem>
          <Link className="text-white" color="foreground" href="/contacto">
            Contacto
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            onClick={handleDownload}
            color="danger"
            href="#"
            variant="flat"
          >
            Descargar CV
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Collapsible menu content for small screens */}
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full font-bold text-white" href="/" size="lg">
            Home
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full font-bold text-white"
            href="/sobre-mi"
            size="lg"
          >
            Sobre Mi
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="" className=" text-xl font-bold text-white">
                Estudios
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Estudios">
              <DropdownItem
                className="text-white"
                key="Egg"
                href="/estudios/egg-cooperation"
                color="secondary"
              >
                Egg Cooperation
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="CodoAcodo"
                href="/estudios/codo-a-codo"
                color="secondary"
              >
                Codo a Codo
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="Google"
                href="/estudios/google"
                color="secondary"
              >
                Google
              </DropdownItem>

              <DropdownItem
                className="text-white"
                key="OracleLatam"
                href="/estudios/oracle-latam"
                color="secondary"
              >
                Oracle Latam
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="CodigoFacilito"
                href="/estudios/codigo-facilito"
                color="secondary"
              >
                Codigo Facilito
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="DonWeb"
                href="/estudios/donweb"
                color="secondary"
              >
                DonWeb
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="TodoCode"
                href="/estudios/todo-code"
                color="secondary"
              >
                Todo Code
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="Telefonica"
                href="/estudios/telefonica"
                color="secondary"
              >
                Telefónica
              </DropdownItem>
              <DropdownItem
                className="text-white"
                key="Skills"
                color="secondary"
                href="/estudios/skills"
              >
                Skills
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="" className=" text-xl font-bold text-white">
                Proyectos
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Proyectos">
              <DropdownItem
                color="secondary"
                className="text-white"
                key="MolachinoViajes"
                href="/proyectos/molachino-viajes"
              >
                Molachino Viajes
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="GestionLem"
                href="/proyectos/gestion-lem"
              >
                Gestion Hotelera Lem
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="SistemaContable"
                href="/proyectos/sistema-contable"
              >
                Sistema Contable
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="SistemaMedico"
                href="/proyectos/sistema-medico"
              >
                Sistema Medico{" "}
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="AtuServicio"
                href="/proyectos/a-tu-servicio"
              >
                A tu Servicio 
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="Meteo"
                href="/proyectos/meteo"
              >
               Meteorológico 
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="Diseno"
                href="/proyectos/desing"
              >
               Diseño UX/UI 
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="Wordpres"
                href="/proyectos/wordpress"
              >
               Trabajos Wordpress 
              </DropdownItem>
              <DropdownItem
                color="secondary"
                className="text-white"
                key="Wix"
                href="/proyectos/wix"
              >
               Trabajos Wix
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full font-bold text-white"
            href="/clientes"
            size="lg"
          >
            Clientes
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full font-bold text-white"
            href="/contacto"
            size="lg"
          >
            Contacto
          </Link>
        </NavbarMenuItem>
      <div>
        <Button
         
            onClick={handleDownload}
            color="danger"
            href="#"
            variant="flat"
          >
            Descargar CV
          </Button>
      </div>
          
         
      </NavbarMenu>
    </Navbar>
  );
}
