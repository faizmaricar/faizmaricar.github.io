import React from "react"
import { useSection } from "@hooks"
import { scrollToSection } from "@utils/helper"
import { StyledNav, Menu, MenuItem, StyledButtonText } from "./styles"

function Navigation() {
  const section = useSection()
  return (
    <StyledNav>
      <Menu>
        <MenuItem>
          <StyledButtonText
            active={section === "about"}
            onClick={() => scrollToSection("about")}
          >
            About
          </StyledButtonText>
        </MenuItem>
        <MenuItem>
          <StyledButtonText
            active={section === "projects"}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </StyledButtonText>
        </MenuItem>
        <MenuItem>
          <StyledButtonText
            active={section === "contact"}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </StyledButtonText>
        </MenuItem>
      </Menu>
    </StyledNav>
  )
}

export default Navigation
