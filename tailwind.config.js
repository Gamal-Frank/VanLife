/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'HomeBg': "url('/image53.png')",
        'AboutBg': "url('/public/image54.png')",
      }
    },
  },
  plugins: [],
}

