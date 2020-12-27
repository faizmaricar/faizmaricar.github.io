export const scrollToSection = ({ currentTarget: { textContent } }) => {
  document
    .getElementById(textContent.toLowerCase())
    .scrollIntoView({ behavior: "smooth" })
}
