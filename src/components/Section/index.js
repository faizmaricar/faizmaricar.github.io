import React from "react"

import { Container } from "./styled"

function Section(props) {
  const { children, ...rest } = props
  return <Container {...rest}>{children}</Container>
}

export default Section
