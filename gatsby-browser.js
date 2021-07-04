import React from "react"
import { GlobalStyles } from "@components"
import { Helmet } from "react-helmet"

export const wrapPageElement = ({ element }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Faiz Maricar - Full-stack developer</title>
        <link rel="canonical" href="https://faizmaricar.github.io" />
      </Helmet>
      <GlobalStyles />
      {element}
    </React.Fragment>
  )
}
