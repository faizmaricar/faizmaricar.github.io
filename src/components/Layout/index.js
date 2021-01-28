import React from "react"

import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer>footer</Footer>
  </>
)

export default Layout
