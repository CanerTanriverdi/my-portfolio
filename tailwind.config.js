/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C2A2F", // Ana vurgu rengi (Öne çıkan butonlar, linkler vb.)
        secondary: "#FFFFFF", // İkincil renk (Yan bileşenler, koyu alanlar)
        accent: "#E6AD6A", // Vurgu rengi (Arka plan detayları)
        background: "#D7D7D7", // Genel arka plan rengi
        text: "#2C2A2F", // Genel metin rengi
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Montserrat fontunu ekledik
      },
    },
  },
  plugins: [],
};
