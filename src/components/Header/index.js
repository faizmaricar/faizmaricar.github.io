import React from "react"

import { scrollToSection } from "../../utils/scroll"

import "./index.css"

const Header = () => {
  return (
    <header>
      <h3>Faiz Maricar</h3>
      <nav>
        <ul>
          <li onClick={scrollToSection}>About</li>
          <li onClick={scrollToSection}>Portfolio</li>
          <li onClick={scrollToSection}>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
