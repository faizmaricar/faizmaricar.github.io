import React from "react"
import { Global, css } from "@emotion/react"

function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          -ms-overflow-style: none;
        }
        html {
          background-color: #000;
          color: #fff;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    />
  )
}

export default GlobalStyles
