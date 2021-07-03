import React, { Children } from "react"
import { ButtonText } from "@components/Text"

import { Container } from "./styles"

function Button(props) {
  const { children, ...rest } = props
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}

export default Button
