import React from "react"
import { Grid, Cell } from "@components"
import { LargeButton } from "@components/Button"
import { scrollToSection } from "@utils/helper"

import { Container, StyledHeading } from "./styles"

function HomeSection() {
  const handleClick = () => scrollToSection("about")
  return (
    <Container>
      <Grid>
        <Cell lg={[1, 12]} md={[1, 12]} sm={[2, 11]}>
          <StyledHeading>
            Hi, my name is Faiz Maricar. I am a full-stack developer.
          </StyledHeading>
        </Cell>
        <Cell lg={[1, 4]} md={[1, 6]} sm={[2, 11]}>
          <LargeButton onClick={handleClick}>
            Find out more about me
          </LargeButton>
        </Cell>
      </Grid>
    </Container>
  )
}

export default HomeSection
