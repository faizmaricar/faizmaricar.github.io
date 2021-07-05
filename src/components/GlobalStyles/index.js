import React from "react"
import { Global, css } from "@emotion/react"
import theme from "@utils/theme"
function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          -ms-overflow-style: none;
          margin: 0;
        }
        h1 {
          margin: 0;
        }
        html {
          font-size: 16px;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        @media (min-width: ${theme.breakpoints.md}px) {
          html {
            font-size: 18px;
          }
        }
      `}
    />
  )
}

export default GlobalStyles
