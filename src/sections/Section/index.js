import React from "react"

import { Container, Content } from "./styles"

export default React.forwardRef(function Section(props, ref) {
  const { children, ...rest } = props
  return (
    <Container {...rest} ref={ref}>
      <Content>{children}</Content>
    </Container>
  )
})
