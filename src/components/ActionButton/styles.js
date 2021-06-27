import { css } from "@emotion/react"
import styled from "@emotion/styled"
import theme from "@utils/theme"

const baseContainerStyles = () => css`
  font-family: Jost;
  font-weight: 700;
  font-size: 16px;
  padding: 18px 0;
  text-align: center;
  text-transform: uppercase;
  background-color: #12964f;
  color: #ffffff;
  border-radius: 20px;
  height: 58px;
  @media (min-width: ${theme.breakpoints.md}px) {
    border-radius: 20px;
    height: 82px;
    font-size: 24px;
    padding: 24px 0;
  }
  &:hover {
    cursor: pointer;
    background-color: #12ae5a;
  }
`

export const Container = styled.div`
  ${baseContainerStyles}
`
