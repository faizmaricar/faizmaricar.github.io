import React from "react"
import { Grid, Cell } from "@components"
import { PageHeading, ArticleHeading } from "@components/Text"
import { Button, LargeButton } from "@components/Button"
import { useWindowDimensions } from "@hooks"
import { scrollToSection } from "@utils/helper"
import theme from "@utils/theme"

import { Container } from "./styles"

function HomeSection() {
  const {
    breakpoints: { md },
  } = theme
  const { width } = useWindowDimensions()

  const text = "Hi, my name is Faiz Maricar. I am a full-stack developer."
  const buttonText = "Find out more about me"

  const Title = () =>
    width > md ? (
      <PageHeading>{text}</PageHeading>
    ) : (
      <ArticleHeading style={{ textAlign: "justify" }}>{text}</ArticleHeading>
    )

  const handleClick = () => scrollToSection("about")

  const ActionButton = () =>
    width > md ? (
      <LargeButton onClick={handleClick}>{buttonText}</LargeButton>
    ) : (
      <Button onClick={handleClick}>{buttonText}</Button>
    )

  return (
    <Container>
      <Grid>
        <Cell lg={[1, 12]} md={[1, 12]} sm={[2, 11]}>
          <Title />
        </Cell>
        <Cell lg={[1, 4]} md={[1, 6]} sm={[2, 11]}>
          <ActionButton />
        </Cell>
      </Grid>
    </Container>
  )
}

export default HomeSection
