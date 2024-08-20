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
      },
      keyframes: {
        pulseCustom: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.05)' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require('daisyui'),
  ],
}
