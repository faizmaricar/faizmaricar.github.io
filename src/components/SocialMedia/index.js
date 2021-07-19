import React from "react"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import { Container, ItemContainer, Icon, Link } from "./styles"

export default function SocialMedia() {
  return (
    <Container>
      <ItemContainer>
        <Link href="https://www.linkedin.com/in/faiz-maricar-522a14105/">
          <Icon icon={faLinkedin} size="2x" />
        </Link>
      </ItemContainer>
      <ItemContainer>
        <Link href="https://github.com/faizmaricar">
          <Icon icon={faGithub} size="2x" />
        </Link>
      </ItemContainer>
      <ItemContainer>
        <Link href="https://twitter.com/FaizMaricar">
          <Icon icon={faTwitter} size="2x" />
        </Link>
      </ItemContainer>
    </Container>
  )
}
