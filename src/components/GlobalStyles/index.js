import React from "react"
import { Global, css } from "@emotion/react"
import theme from "@utils/theme"
function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          -ms-overflow-style: none;
          color: #fff;
        }
        html {
          font-size: 16px;
          background-color: #000;
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
