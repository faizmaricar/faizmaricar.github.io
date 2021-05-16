import React from "react"
import { Global, css } from "@emotion/react"

import { Splash } from "../components"

function index() {
  return (
    <>
      <Global
        styles={css`
          * {
            -ms-overflow-style: none;
          }
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      />
      <Splash />
    </>
  )
}

export default index
