import React from "react"
import { Grid, Cell, ActionButton } from "@components"
import { PageHeading, ArticleHeading } from "@components/Text"
import { useWindowDimensions } from "@hooks"
import theme from "@utils/theme"

import { Container } from "./styles"

function HomeSection() {
  const {
    breakpoints: { md },
  } = theme
  const { width } = useWindowDimensions()

  const text = "Hi, my name is Faiz Maricar. I am a full-stack developer."

  const Title = () =>
    width > md ? (
      <PageHeading>{text}</PageHeading>
    ) : (
      <ArticleHeading>{text}</ArticleHeading>
    )

  return (
    <Container>
      <Grid>
        <Cell lg={12} md={12} sm={10} smOffset={1}>
          <Title />
        </Cell>
        <Cell lg={4} md={6} sm={6} smOffset={1}>
          <ActionButton />
        </Cell>
      </Grid>
    </Container>
  )
}

export default HomeSection
