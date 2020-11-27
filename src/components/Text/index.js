import React from "react"

import { H1 } from "./styles"

const Text = props => {
  switch (props.type) {
    case "h1":
      return <H1 {...props} />
    default:
      return <p {...props} />
  }
}

export default Text
