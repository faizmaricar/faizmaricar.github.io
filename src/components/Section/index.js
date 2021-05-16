import React from "react"

import { Container } from "./styled"

function section(props) {
  const { children, ...rest } = props
  return <Container {...rest}>{children}</Container>
}

export default section
