import React from "react"

import { Nav, Item } from "./styles"
import { scrollToSection } from "../../utils/scroll"

const Menu = () => (
  <nav>
    <Nav>
      <Item onClick={scrollToSection}>About</Item>
      <Item onClick={scrollToSection}>Portfolio</Item>
      <Item onClick={scrollToSection}>Contact</Item>
    </Nav>
  </nav>
)

export default Menu
