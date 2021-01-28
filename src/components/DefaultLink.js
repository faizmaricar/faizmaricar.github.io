import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  color: inherit;
  &:hover {
    text-decoration: inherit;
  }
`
const DefaultLink = props => <StyledLink {...props} />

export default DefaultLink
