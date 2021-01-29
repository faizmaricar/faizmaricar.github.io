import React from "react"

import SEO from "./SEO"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <SEO />
    <Header />
    <Content>{children}</Content>
    <Footer>footer</Footer>
  </>
)

export default Layout
