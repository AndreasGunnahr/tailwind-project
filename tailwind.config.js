module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-black": "#040406",
        "custom-gray": "#37354D",
      },
      height: {
        navbar: "calc(100vh - 5rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
