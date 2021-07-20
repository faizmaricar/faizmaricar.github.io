import React from "react"
import Section from "@sections/Section"
import { Cell, SocialMedia } from "@components"
import { StaticImage } from "gatsby-plugin-image"

import { StyledHeading, StyledBody } from "./styles"

export default React.forwardRef(function AboutSection(props, ref) {
  return (
    <Section ref={ref} id="about">
      <Cell lg={[1, 5]} md={[5, 8]} sm={[3, 10]}>
        <StaticImage
          imgStyle={{ borderRadius: "50%" }}
          src="../../images/profile.jpg"
          alt="Profile "
        />
      </Cell>
      <Cell lg={[6, 12]} md={[3, 10]} sm={[1, 12]}>
        <StyledHeading>About Me</StyledHeading>
        <StyledBody>
          I am a full-stack developer and I have been in software development
          for the past 4 years. I aim to have a holistic approach to my work and
          have a keen interest in both design and engineering.
        </StyledBody>
        <SocialMedia />
      </Cell>
    </Section>
  )
})
