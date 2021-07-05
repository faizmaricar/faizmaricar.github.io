import { css } from "@emotion/react"
import styled from "@emotion/styled"
import theme from "@utils/theme"

const baseContainerStyles = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(), auto);
  grid-gap: 5px;
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints.md}px) {
    grid-gap: 10px;
    max-width: 80vw;
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    max-width: 60vw;
  }
`

export const Container = styled.div`
  ${baseContainerStyles}
`
