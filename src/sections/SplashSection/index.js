import React from "react"

import { Container, Content, Heading, Brand } from "./styles"
import { Menu } from "../../components"

const SplashSection = () => (
  <Container>
    <Content>
      <Heading type="h1">
        Hi, I'm <Brand>Faiz Maricar</Brand>
      </Heading>
      <Heading type="h1">I'm a front-end developer</Heading>
      <Menu />
    </Content>
  </Container>
)

export default SplashSection
