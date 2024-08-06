/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/composant/Navbar.js",
    "./src/composant/Accueil.js",
     "./src/composant/Service.js",
     "./src/composant/Quisuisje.js",
     "./src/composant/Competence.js",
     "./src/composant/ContactForm.js",
     "./src/composant/Footer.js",
    "./src/app/page.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'custom': '1.2rem',
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
      
    },
  },
  plugins: [],
};
