import React from "react"
import Section from "@sections/Section"
import { Cell } from "@components"
import { Button } from "@components/Button"
import { ArticleHeading } from "@components/Text"
import { Label, Input, TextArea } from "@components/Form"

export default React.forwardRef(function ContactSection(props, ref) {
  return (
    <form>
      <Section ref={ref} id="contact">
        <Cell>
          <ArticleHeading>Contact</ArticleHeading>
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Name" />
          <TextArea placeholder="Leave a message..." />
        </Cell>
        <Cell lg={[1, 4]}>
          <Button>Send</Button>
        </Cell>
      </Section>
    </form>
  )
})
