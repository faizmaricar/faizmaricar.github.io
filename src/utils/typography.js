import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  headerFontFamily: ["Jost"],
  bodyFontFamily: ["Poppins"],
  googleFonts: [
    {
      name: "Jost",
      styles: ["500"],
    },
    {
      name: "Poppins",
      styles: [],
    },
  ],
})

export default typography
