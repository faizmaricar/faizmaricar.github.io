import React from "react"
import { Global, css } from "@emotion/react"

function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          -ms-overflow-style: none;
          color: #fff;
        }
        html {
          background-color: #000;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    />
  )
}

export default GlobalStyles
