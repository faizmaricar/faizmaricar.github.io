import { css } from "@emotion/react"
import styled from "@emotion/styled"
import theme from "@utils/theme"

const baseTextStyles = css`
  font-family: Jost;
  font-weight: 600;
  font-size: 36px;
  text-align: center;
  line-height: 1.44em;

  @media (min-width: ${theme.breakpoints.md}px) {
    font-size: 64px;
    text-align: left;
  }
`

export const Text = styled.h1`
  ${baseTextStyles}
`
