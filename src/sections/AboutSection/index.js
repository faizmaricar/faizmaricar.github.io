import React from "react"
import { Grid, Cell, Navigation } from "@components"
import { ArticleHeading, Body } from "@components/Text"

import { Container } from "./styles"

function AboutSection(props) {
  return (
    <Container {...props} id="about">
      <Grid>
        <Cell>
          <ArticleHeading>About Me</ArticleHeading>
          <Body>Lorem ipsum</Body>
        </Cell>
      </Grid>
    </Container>
  )
}

export default AboutSection
