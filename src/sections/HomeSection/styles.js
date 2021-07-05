import styled from "@emotion/styled"
import { css } from "@emotion/react"
import theme from "@utils/theme"
import { ArticleHeading } from "@components/Text"

const baseHeadingStyles = () => css`
  text-align: justify;
  @media (min-width: ${theme.breakpoints.md}px) {
    text-align: initial;
    font-size: 68px;
    line-height: 98px;
  }
`

export const Container = styled.section`
  background-color: #ffffff;
  position: relative;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const StyledHeading = styled(ArticleHeading)`
  ${baseHeadingStyles}
`
