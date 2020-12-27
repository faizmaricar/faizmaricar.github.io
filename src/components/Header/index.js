import React from "react"

import { Menu } from ".."
import "./index.css"

const Header = () => {
  return (
    <header>
      <h3>Faiz Maricar</h3>
      <div style={{ marginRight: "128px" }}>
        <Menu />
      </div>
    </header>
  )
}

export default Header
