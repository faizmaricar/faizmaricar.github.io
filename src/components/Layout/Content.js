import React from "react"
import styled from "styled-components"

import Grid from "../Grid"

const Container = styled.main`
  padding: 80px 0;
`
const Content = ({ children }) => (
  <Container>
    <Grid>{children}</Grid>
  </Container>
)

export default Content
