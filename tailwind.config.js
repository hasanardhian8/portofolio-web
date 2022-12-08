/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:{
    extend:{
      backgroundImage:{
        'hero':"url('/src/images/weblanding.jpg')",
        'logo':"url('/src/images/logo ha(hasan+ardhian).png')",
        'revamp':"url('/src/images/dasboard.jpg')",
        'library':"url('/src/images/progress.jpg')"
      },
    },
  },
  plugins: [],
  
}
