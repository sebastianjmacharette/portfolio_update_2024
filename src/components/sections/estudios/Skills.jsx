import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Skills() {
  const frontendSkills = [
    'HTML',
    'CSS',
    'Bootstrap (B)',
    'Tailwind CSS (T)',
    'JavaScript (JS)',
    'React',
    'Redux',
    'Next.js (N)',
    'Vite',
    'Motion (antes Frame Motion)',
    'Chakra UI',
    'Mantine',
    'PrimeReact',
    'Daisy UI',
    'Material UI (MUI)',
    'WordPress',
    'Elementor (E)',
    'WooCommerce',
    'Figma',
    'Photoshop (Ps)',
    'UI Design',
    'Trello',
    'Whimsical'
  ];
  
  const backendSkills = [
    'Spring Boot',
    'MySql',
    'Node.js',
    'Manejo de Hosting, Cloud',
    'Cpanel, Cyberpanel',
    'Java',
    'JavaFX',
    'Java Web Tokens (JWT)',
    'GitHub',
    'Docker'
  ];

  const softSkills = [
    'Comunicación efectiva',
    'Pensamiento crítico',
    'Creatividad',
    'Empatía',
    'Pensamiento analítico',
    'Trabajo en equipo',
    'Resolución de problemas',
    'Gestión del tiempo',
    'Paciencia',
    'Gestión del estrés',
    'Capacidad de aprendizaje',
    'Adaptabilidad',
    'Atención al detalle',
    'Negociación'
  ];

  const favoriteQuotes = [
    {
      quote: "Para saber mandar bien, es preciso saber obedecer.",
      author: "Aristóteles"
    },
    {
      quote: "Los analfabetos del siglo XXI no serán aquellos que no saben leer y escribir, sino aquellos que no puedan aprender, desaprender y reaprender.",
      author: "Alvin Toffler (escritor de La tercera ola, ícono de la revolución digital)"
    }
  ];

  return (
    <div className="container mx-auto p-4 text-white text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4">
          <h2 className="text-2xl underline font-bold">Frontend</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                >
                  <FaCheckCircle className="mr-2 text-green-500" />
                </motion.div>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-2xl underline  font-bold">Backend</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                >
                  <FaCheckCircle className="mr-2 text-green-500" />
                </motion.div>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
          <div className="p-4 mt-4">
        <h2 className="text-xl font-bold">Habilidades blandas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
              >
                <FaCheckCircle className="mr-2 text-green-500" />
              </motion.div>
              <span>{skill}</span>
            </motion.div>
          ))}
        </div>
       
      </div>
        </div>
        
      </div>
      <h2 className="text-4xl font-bold mt-4">Refranes Favoritos:</h2>
       
       
      {favoriteQuotes.map((quote, index) => (
          <div key={index} className="p-4 mt-2 ">
            <p className='font-serif text-2xl'>"{quote.quote}"</p>
            <p className="text-center italic">- {quote.author}</p>
          </div>
        ))}
    </div>
  );
}

export default Skills;
