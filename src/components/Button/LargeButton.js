import React, { Children } from "react"
import { LargeButtonText } from "@components/Text"

import { LargeContainer } from "./styles"

function LargeButton(props) {
  const { children, ...rest } = props
  return (
    <LargeContainer {...rest}>
      <LargeButtonText>{children}</LargeButtonText>
    </LargeContainer>
  )
}

export default LargeButton
