import React from "react"
import styled from "styled-components"

import DefaultLink from "../DefaultLink"
import { useSiteMetadata } from "../../hooks"

const Nav = styled.nav`
  height: 100%;
`
const MenuContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
`
const MenuItem = styled.li`
  display: inline-block;
  padding: 16px;
  margin: 0;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.themeDark};
  }
`

const Navigation = () => {
  const { navigation } = useSiteMetadata()
  return (
    <Nav>
      <MenuContainer>
        {navigation.map(n => (
          <MenuItem key={n}>
            <DefaultLink to={`/${n}`}>
              {n.replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()))}
            </DefaultLink>
          </MenuItem>
        ))}
      </MenuContainer>
    </Nav>
  )
}

export default Navigation
