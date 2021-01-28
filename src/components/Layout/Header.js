import React from "react"
import styled from "styled-components"

import Navigation from "./Navigation"
import Grid from "../Grid"
import DefaultLink from "../DefaultLink"

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.colors.themePrimary};
  color: ${props => props.theme.colors.white};
`
const Brand = styled.h3`
  margin: 0;
`

const Header = () => (
  <StyledHeader>
    <Grid style={{ height: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Brand>
          <DefaultLink to="/">Faiz Maricar</DefaultLink>
        </Brand>
        <Navigation />
      </div>
    </Grid>
  </StyledHeader>
)

export default Header
