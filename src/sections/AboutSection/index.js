import React from "react"
import { Grid, Cell } from "@components"
import { ArticleHeading, Body } from "@components/Text"

import { Container } from "./styles"

export default React.forwardRef(function AboutSection(props, ref) {
  return (
    <Container ref={ref} {...props} id="about">
      <Grid>
        <Cell>
          <ArticleHeading>About Me</ArticleHeading>
          <Body>Lorem ipsum</Body>
        </Cell>
      </Grid>
    </Container>
  )
})
