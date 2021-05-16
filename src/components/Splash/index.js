import React from "react"

import { Message } from "./styled"
import { Section } from "../"

function Splash() {
  return (
    <Section>
      <div
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <Message>
          Hi, my name is Faiz Maricar. I am a full-stack developer.
        </Message>
      </div>
    </Section>
  )
}

export default Splash
