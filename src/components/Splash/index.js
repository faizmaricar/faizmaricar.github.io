import React from "react"

import { MessageContainer, MessageText } from "./styled"
import { Section, Button } from "../"

function Splash() {
  return (
    <Section>
      <MessageContainer>
        <MessageText>
          Hi, my name is Faiz Maricar. I am a full-stack developer.
        </MessageText>
        <Button>View my Projects</Button>
      </MessageContainer>
    </Section>
  )
}

export default Splash
