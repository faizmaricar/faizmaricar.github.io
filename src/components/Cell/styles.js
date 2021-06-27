import { css } from "@emotion/react"
import styled from "@emotion/styled"
import theme from "@utils/theme"

const baseContainerStyles = ({ sm = 12, md = 12, lg = 12 }) => css`
  padding: 8px;
  grid-column: 1 / ${sm + 1};

  @media (min-width: ${theme.breakpoints.md}px) {
    padding: 0;
    grid-column: 1 / ${md + 1};
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    grid-column: 1 / ${lg + 1};
  }
`

export const Container = styled.div`
  ${baseContainerStyles}
`
