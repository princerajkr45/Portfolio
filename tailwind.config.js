/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-content': '#f3f4f6', 
        'dark-content': '#1f2937',  
         heading: '#cccccc',
        content: '#979fa8',
      },
    },
  },
  plugins: [],
}

