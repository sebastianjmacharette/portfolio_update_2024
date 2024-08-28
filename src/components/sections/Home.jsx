import React from 'react';
import Hero from '../../assets/img/hero.webp';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sobre-mi');
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Capa de opacidad */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="hero-content flex flex-col lg:flex-row p-10 rounded-lg shadow-lg">
        <div className="relative w-full max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[35%] pb-[112.5%] sm:pb-[44.45%] rounded-lg shadow-2xl mx-auto">
  <iframe
    className="absolute top-0 left-0 w-full h-full rounded-lg"
    src="https://www.youtube.com/embed/bL58jnbN7yE"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


          <div className="lg:ml-10 mt-6 lg:mt-0 flex   flex-col lg:items-end w-full">
            <h1 className="text-5xl font-bold sm:text-center text-white lg:text-end">Portfolio Digital</h1>
            <h2 className="text-2xl font-bold   text-white ">Programador Full Stack</h2>
            <h2 className="text-2xl font-bold   text-white ">Especializado en Frontend</h2>
            <h2 className="text-2xl font-bold   text-white ">Diseñador UX/UI</h2>

            <p className="p-10 font-semibold text-xl hidden lg:block text-white text-end">
              "Portfolio Digital de <span className='bg-secondary'>Sebastián Macharette</span> . Gracias por conocer más
               sobre mí, mis <span className='bg-secondary'>estudios y proyectos</span>."
            </p>
            <div className="mt-4 flex w-full justify-end sm:mb-40">
              <button onClick={handleClick} className="btn btn-outline text-white">Conóceme!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
