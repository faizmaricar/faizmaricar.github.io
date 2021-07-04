import React from "react"
import { Grid, Cell } from "@components"
import { ArticleHeading, Body } from "@components/Text"

import { Container } from "./styles"

export default React.forwardRef(function ContactSection(props, ref) {
  return (
    <Container {...props} ref={ref} id="contact">
      <Grid>
        <Cell>
          <ArticleHeading>Contact</ArticleHeading>
          <Body>Coming soon</Body>
        </Cell>
      </Grid>
    </Container>
  )
})
