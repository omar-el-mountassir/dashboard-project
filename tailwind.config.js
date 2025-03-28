/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette de couleurs basée sur l'analyse de l'image
        'bg-primary': '#1F2228', // Fond principal gris très foncé
        'bg-sidebar': '#1A1D24', // Fond de la sidebar noir bleuté
        'text-primary': '#FFFFFF', // Texte principal blanc
        'text-secondary': '#A0A0A0', // Texte secondaire gris clair
        'accent-primary': '#3498DB', // Accent primaire bleu
        'accent-secondary': '#9B59B6', // Accent secondaire violet
        'accent-tertiary': '#2ECC71', // Accent tertiaire vert-bleu
        'negative': '#E74C3C', // Valeurs négatives rouge
        'positive': '#2ECC71', // Valeurs positives vert
      },
      fontFamily: {
        'sans': ['Inter', 'SF Pro Display', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        'sidebar': '250px', // Largeur de la sidebar
      },
      borderRadius: {
        'card': '8px', // Rayon des coins des cartes
      },
    },
  },
  plugins: [],
}
