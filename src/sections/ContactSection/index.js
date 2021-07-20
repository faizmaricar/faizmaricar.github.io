import React from "react"
import axios from "axios"
import Section from "@sections/Section"
import { Cell } from "@components"
import { Button } from "@components/Button"
import { ArticleHeading } from "@components/Text"
import { Input, TextArea } from "@components/Form"

export default React.forwardRef(function ContactSection(props, ref) {
  const [serverState, setServerState] = React.useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/4e7969ee-499a-46c5-8f27-cf833720c3b2",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form)
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Section ref={ref} id="contact">
        <Cell>
          <ArticleHeading>Contact</ArticleHeading>
          <Input type="email" name="email" placeholder="Email" />
          <Input type="text" name="name" placeholder="Name" />
          <TextArea name="message" placeholder="Leave a message..." />
        </Cell>
        <Cell lg={[10, 12]}>
          <Button type="submit" fullWidth>
            Send
          </Button>
        </Cell>
      </Section>
    </form>
  )
})
