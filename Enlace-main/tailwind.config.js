module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-nav": "#3c3c3c",
        "border-nav": "#712734",
        "gradient-start": "#ffd4ac",
        "gradient-stop": "#f0616d",
        "box-fill": "#0d0d0d",
      },
      fontFamily: {
        reemkufi: ["Reem Kufi", "ui-sans-serif"],
        poppins: ["Poppins", "ui-sans-serif"],
        montserrat: ["Montserrat", "ui-sans-serif"],
      },
      backgroundImage: {
        "competitions-bg": 'url("/src/assets/competitions-background.png")',
      },
    },
  },
  plugins: [],
};
