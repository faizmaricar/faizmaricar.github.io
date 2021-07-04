import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { ButtonText } from "../Text"

const baseMenuItemButtonStyles = ({ active }) => css`
  color: ${active ? "#12964f" : "initial"};
  &:hover {
    color: #12ae5a;
    cursor: pointer;
  }
`

export const StyledNav = styled.nav`
  position: fixed;
  bottom: 40px;
  width: 100%;
  z-index: 10;
`

export const Menu = styled.ul`
  margin: 0 16px;
  text-align: center;
`

export const MenuItem = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0 8px;
`

export const StyledButtonText = styled(ButtonText)`
  ${baseMenuItemButtonStyles}
`
