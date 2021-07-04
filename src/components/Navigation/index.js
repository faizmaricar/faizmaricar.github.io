import React from "react"

import { StyledNav, Menu, MenuItem, StyledButtonText } from "./styles"

function Navigation() {
  return (
    <StyledNav>
      <Menu>
        <MenuItem>
          <StyledButtonText>About</StyledButtonText>
        </MenuItem>
        <MenuItem>
          <StyledButtonText>Projects</StyledButtonText>
        </MenuItem>
        <MenuItem>
          <StyledButtonText>Contact</StyledButtonText>
        </MenuItem>
      </Menu>
    </StyledNav>
  )
}

export default Navigation
