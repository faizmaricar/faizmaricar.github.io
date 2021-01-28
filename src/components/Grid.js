import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 100%;
  }
  @media (min-width: 992px) {
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 70%;
  }
`

const Grid = props => <Container {...props} />

export default Grid
