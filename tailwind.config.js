/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:{
    extend:{
      backgroundImage:{
        'hero':"url('/src/images/weblanding.jpg')",
        'logo':"url('/src/images/logo ha(hasan+ardhian).png')"
      },
    },
  },
  plugins: [],
  
}
