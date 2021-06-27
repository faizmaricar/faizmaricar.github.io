import React from "react"
import { GlobalStyles } from "@components"

export const wrapPageElement = ({ element, props }) => {
  return (
    <React.Fragment {...props}>
      <GlobalStyles />
      {element}
    </React.Fragment>
  )
}
