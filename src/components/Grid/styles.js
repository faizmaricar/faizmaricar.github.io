import { css } from "@emotion/react"
import styled from "@emotion/styled"
import theme from "@utils/theme"

const baseContainerStyles = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 10px 5%;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.md}px) {
    max-width: 80vw;
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    max-width: 60vw;
  }
`

export const Container = styled.div`
  ${baseContainerStyles}
`
