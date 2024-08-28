import React from "react";
import {    Image } from "@nextui-org/react";
import Timercover from "../../../../assets/img/desing/timetamer/timetamerpdf.png";
import Timercover1 from "../../../../assets/img/desing/timetamer/timetamer1.png";
import Timercover2 from "../../../../assets/img/desing/timetamer/timetamer2.png";
import Timercover3 from "../../../../assets/img/desing/timetamer/timetamer3.png";
import Timercover4 from "../../../../assets/img/desing/timetamer/timetamer4.png";


function TimeTamer() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 w-full px-4">
      {/* Texto en la parte superior */}
      <div className="flex justify-center md:justify-start">
     
        <p className="text-xl text-center md:text-left text-white lg:mt-20 lg:ml-10">
          <span className="text-white text-4xl">TimeTamer </span>es tu compañero ideal para conseguir mejor orden y control
          del tiempo dedicado a tus actividades diarias. Promete facilitarte la
          programación de momentos libres de tecnología y a mantenerte enfocado
          a la hora de realizar cada tarea agendada.
        </p>
      </div>

      {/* Card debajo del texto en pantallas pequeñas */}
      <div className="flex p-4 lg:justify-center  md:justify-start">
        <a href="/timetamer.pdf" target="_blank" rel="noopener noreferrer">
          
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={Timercover}
                width={270}
              />
          
        </a>
      </div>

      {/* Carrusel debajo del texto y la card */}
      <div className="w-full lg:px-20 col-span-2">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={Timercover1}
              className="w-full"
              alt="Slide 1"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src={Timercover2}
              className="w-full"
              alt="Slide 2"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src={Timercover3}
              className="w-full"
              alt="Slide 3"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src={Timercover4}
              className="w-full"
              alt="Slide 4"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeTamer;
