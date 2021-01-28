import React from "react"
import { ThemeProvider } from "styled-components"

import theme from "./src/utils/theme"
import { Layout } from "./src/components"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
