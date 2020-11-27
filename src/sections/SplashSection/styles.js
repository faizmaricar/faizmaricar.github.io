import styled from "styled-components"

import { Section, Text } from "../../components"
import colors from "../../utils/colors"

export const Container = styled(Section)`
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  text-align: center;
  padding: 8px;
`
export const Heading = styled(Text)`
  color: white;
  font-weight: 500;
  font-style: italic;
`

export const Brand = styled.span`
  color: ${colors.accent};
  font-weight: 600;
`
