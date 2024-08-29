/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        pulseCustom: 'pulseCustom 2s infinite',
        colorCycle: 'colorCycle 4s ease-in-out infinite', // Añadido
      },
      keyframes: {
        pulseCustom: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.05)' },
        },
        colorCycle: { // Añadido
          '0%, 100%': { color: '#FF0000' },  // Rojo
          '25%': { color: '#00FF00' },       // Verde
          '50%': { color: '#0000FF' },       // Azul
          '75%': { color: '#FFFF00' },       // Amarillo
        },
      },
    },
  },
  darkMode: "class", // Modo oscuro activado por clase
  plugins: [
    nextui(),  // Plugin para NextUI
    require('daisyui'),  // Plugin para daisyUI
  ],
  daisyui: {
    themes: ['dark'], // Configuración para aplicar el tema oscuro de daisyUI
  },
}
