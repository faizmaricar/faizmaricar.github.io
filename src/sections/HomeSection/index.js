import React from "react"
import { Grid, Cell, Title, ActionButton } from "@components"

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
        <Cell lg={4} md={6} sm={6} smOffset={3}>
          <ActionButton />
        </Cell>
      </Grid>
    </Container>
  )
}

export default HomeSection
