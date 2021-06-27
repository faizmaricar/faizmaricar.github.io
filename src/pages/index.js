import React from "react"
import { HomeSection } from "@sections"
import { Grid, Cell, Title } from "@components"

function index() {
  return (
    <HomeSection>
      <Grid>
        <Cell lg={12} md={12} sm={12}>
          <Title>
            Hi, my name is Faiz Maricar. I am a full-stack developer.
          </Title>
        </Cell>
      </Grid>
    </HomeSection>
  )
}

export default index
