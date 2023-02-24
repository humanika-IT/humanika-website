const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#023C58",
        secondaryPink: "#ED008C",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        montserrat: "var(--font-montserrat)",
        inter: "var(--font-inter)",
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
