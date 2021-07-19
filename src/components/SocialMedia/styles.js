import styled from "@emotion/styled"
import theme from "@utils/theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Container = styled.ul`
  margin: 0;
  text-align: center;
  @media (min-width: ${theme.breakpoints.lg}px) {
    text-align: initial;
  }
`
export const ItemContainer = styled.li`
  padding: 8px;
  list-style: none;
  display: inline-block;
  @media (min-width: ${theme.breakpoints.lg}px) {
    padding: 0 16px 0 0;
  }
`
export const Icon = styled(FontAwesomeIcon)`
  &:hover {
    cursor: pointer;
    color: #12ae5a;
  }
`
export const Link = styled.a`
  color: inherit;
`
