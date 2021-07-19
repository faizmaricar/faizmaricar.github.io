import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import { Grid } from "@components"

import { ArticleHeading, Body } from "@components/Text"
import theme from "@utils/theme"

export const Container = styled.section`
  padding: 40px 16px;
  height: 100vh;
`

export const Content = styled(Grid)`
  position: relative;
  z-index: 11;
  background-color: #ffffff;
`

export const StyledHeading = styled(ArticleHeading)`
  text-align: center;
  margin-bottom: 16px;

  @media (min-width: ${theme.breakpoints.lg}px) {
    text-align: initial;
  }
`

export const StyledImage = styled(StaticImage)`
  border-radius: 50%;
`
export const StyledBody = styled(Body)`
  text-align: justify;
`
