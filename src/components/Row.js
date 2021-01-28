import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Row = props => <Container {...props} />

export default Row
