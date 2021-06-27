import React from "react"
import { Grid, Cell, Title } from "@components"

import { Container } from "./styles"

function HomeSection() {
  return (
    <Container>
      <Grid>
        <Cell lg={12} md={12} sm={12}>
          <Title>
            Hi, my name is Faiz Maricar. I am a full-stack developer.
          </Title>
        </Cell>
      </Grid>
    </Container>
  )
}

export default HomeSection
