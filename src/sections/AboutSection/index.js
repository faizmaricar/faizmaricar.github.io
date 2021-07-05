import React from "react"
import { Grid, Cell } from "@components"
import { Body } from "@components/Text"
import { StaticImage } from "gatsby-plugin-image"

import { Container, StyledHeading, StyledBody } from "./styles"

export default React.forwardRef(function AboutSection(props, ref) {
  return (
    <Container ref={ref} {...props} id="about">
      <Grid>
        <Cell lg={[1, 5]} md={[5, 8]} sm={[3, 10]}>
          <StaticImage
            imgStyle={{ borderRadius: "50%" }}
            src="../../images/profile.jpg"
            alt="Profile "
          />
        </Cell>
        <Cell lg={[7, 12]} md={[3, 10]} sm={[1, 12]}>
          <StyledHeading>About Me</StyledHeading>
          <StyledBody>
            Hi, as you know, my name is Faiz Maricar. I am a full-stack
            developer and I have been in software development for the past 4
            years. I aim to have a holistic approach to my work and have a keen
            interest in both design and engineering.
          </StyledBody>
        </Cell>
      </Grid>
    </Container>
  )
})
