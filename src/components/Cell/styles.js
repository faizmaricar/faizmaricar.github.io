import { css } from "@emotion/react"
import styled from "@emotion/styled"
import theme from "@utils/theme"

const baseContainerStyles = ({
  sm = [1, 12],
  md = [1, 12],
  lg = [1, 12],
  smOffset = 0,
}) => css`
  padding: 8px;
  grid-column: ${sm[0]} / ${sm[1] + 1};

  @media (min-width: ${theme.breakpoints.md}px) {
    padding: 0;
    grid-column: ${md[0]} / ${md[1] + 1};
  }

  @media (min-width: ${theme.breakpoints.lg}px) {
    grid-column: ${lg[0]} / ${lg[1] + 1};
  }
`

export const Container = styled.div`
  ${baseContainerStyles}
`
