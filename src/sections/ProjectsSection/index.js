import React from "react"
import { Grid, Cell } from "@components"
import { ArticleHeading, Body } from "@components/Text"

import { Container } from "./styles"

export default React.forwardRef(function ProjectsSection(props, ref) {
  return (
    <Container {...props} ref={ref} id="projects">
      <Grid>
        <Cell>
          <ArticleHeading>Projects</ArticleHeading>
          <Body>Coming soon</Body>
        </Cell>
      </Grid>
    </Container>
  )
})
