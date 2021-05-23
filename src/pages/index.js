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
          html {
            background-color: #000;
            color: #fff;
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
