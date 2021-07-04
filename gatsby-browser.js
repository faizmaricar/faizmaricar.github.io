import React from "react"
import { GlobalStyles } from "@components"

export const wrapPageElement = ({ element, props }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      {element}
    </React.Fragment>
  )
}
