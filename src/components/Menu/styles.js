import styled, { keyframes } from "styled-components"
import colors from "../../utils/colors"

const { primary, secondary, accent } = colors

const ItemUnderline = keyframes`
    0% { border-bottom: 3px solid ${accent}00 }
    33% { border-bottom: 3px solid ${accent}55 }
    66% { border-bottom: 3px solid ${accent}AA }
    100% { border-bottom: 3px solid ${accent} }
`
export const Nav = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
`

export const Item = styled.li`
    font-family: "Asap", sans-serif;
    font-weight: 500;
    color: ${secondary};
    list-style: none;
    display: inline;
    padding: 8px;
    transition: color 500ms ease-in 200ms;
    border-bottom: 3px solid ${primary};
    
    &:hover {
        color: white;
        animation: ${ItemUnderline} 1s ease-in 200ms forwards;
      }
  }`
