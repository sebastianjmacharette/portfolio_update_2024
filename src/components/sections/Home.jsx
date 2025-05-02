import React from 'react';
import Hero from '../../assets/img/hero.webp';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUser, FiYoutube } from "react-icons/fi";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sobre-mi');
  };
  const handleClickCanal = () => {
    window.open('https://youtube.com/@laboratoriodecodigoydiseno?si=qTekkooLEoRnXiwt', '_blank');
  };
  return (
    <div
      className="relative min-h-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Capa de opacidad */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-content flex flex-col lg:flex-row p-10 rounded-lg shadow-lg"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[35%] pb-[112.5%] sm:pb-[44.45%] rounded-lg shadow-2xl mx-auto"
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/bL58jnbN7yE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:ml-10 mt-6 lg:mt-0 flex flex-col lg:items-end w-full"
          >
            <h1 className="text-5xl font-bold sm:text-center text-white lg:text-end">Portfolio Digital</h1>
            <h2 className="text-2xl font-bold text-white">Programador Full Stack</h2>
            <h2 className="text-2xl font-bold text-white">Especializado en Frontend</h2>
            <h2 className="text-2xl font-bold text-white">Diseñador UX/UI</h2>

            <p className="p-10 font-semibold text-xl hidden lg:block text-white text-end">
              "Portfolio Digital de <span className='bg-secondary'>Sebastián Macharette</span>. Gracias por conocer más
              sobre mí, mis <span className='bg-secondary'>estudios y proyectos</span>."
            </p>
            <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="mt-4 flex flex-col md:flex-row w-full justify-end gap-4 sm:mb-40"
>
  <button 
    onClick={handleClick} 
    className="btn bg-secondary text-white flex items-center gap-2"
  >
    <FiUser /> Conóceme!
  </button>

  <button 
    onClick={() => window.open('https://youtube.com/@laboratoriodecodigoydiseno?si=qTekkooLEoRnXiwt', '_blank')}
    className="btn bg-secondary text-white flex items-center gap-2"
  >
    <FiYoutube /> Mi canal de Youtube
  </button>
</motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
