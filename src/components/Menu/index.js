import React from "react"

import { Nav, Item } from "./styles"
// import "./index.css"

const Menu = () => {
  const handleItemClick = id =>
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
  return (
    <nav>
      <Nav>
        <Item onClick={() => handleItemClick("about")}>About</Item>
        <Item onClick={() => handleItemClick("portfolio")}>Portfolio</Item>
        <Item onClick={() => handleItemClick("contacts")}>Contact</Item>
      </Nav>
    </nav>
  )
}

export default Menu
