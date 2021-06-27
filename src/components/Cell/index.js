import React from "react"

import { Container } from "./styles"

function Cell(props) {
  const { lg, md, sm, smOffset, ...rest } = props
  return <Container {...rest} lg={lg} md={md} sm={sm} smOffset={smOffset} />
}

export default Cell
