import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import Navigation from "./Navigation"
import Grid from "../Grid"
import DefaultLink from "../DefaultLink"

const StyledHeader = styled.header`
  padding: 16px 0;
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.colors.themePrimary};
  color: ${props => props.theme.colors.white};
`
const MenuIcon = styled(FontAwesomeIcon)`
  margin-right: 16px;
  font-size: 18px;
  @media (min-width: 769px) {
    display: none;
  }
`
const Brand = styled.h3`
  display: inline-block;
  margin: 0;
`

const Header = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <StyledHeader>
      <Grid style={{ height: "100%" }}>
        <MenuIcon
          icon={faBars}
          onClick={() => setOpen(prevState => !prevState)}
        />
        <Brand>
          <DefaultLink to="/">Faiz Maricar</DefaultLink>
        </Brand>
        <Navigation open={open} />
      </Grid>
    </StyledHeader>
  )
}

export default Header
