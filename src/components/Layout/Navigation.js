import React from "react"
import styled from "styled-components"

import DefaultLink from "../DefaultLink"
import { useSiteMetadata } from "../../hooks"

const Nav = styled.nav`
  height: 100%;
  background-color: ${props => props.theme.colors.themePrimary};
  float: right;
  @media (max-width: 768px) {
    position: absolute;
    top: ${props => (props.open ? 40 : 0)}px;
    left: 0;
    width: 100%;
    z-index: -1;
    color: ${props =>
      props.open ? props.theme.colors.white : props.theme.colors.themePrimary};
    transition: top 500ms;
  }
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
  margin: 0;
  padding: 0 16px;
  height: 100%;
  @media (max-width: 768px) {
    padding: 16px;
  }
`

const Navigation = ({ open }) => {
  const { navigation } = useSiteMetadata()
  return (
    <Nav open={open}>
      <MenuContainer>
        {navigation.map(n => (
          <DefaultLink key={n} to={`/${n}`}>
            <MenuItem>
              {n.replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()))}
            </MenuItem>
          </DefaultLink>
        ))}
      </MenuContainer>
    </Nav>
  )
}

export default Navigation
