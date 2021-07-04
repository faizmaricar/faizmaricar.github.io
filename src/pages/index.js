import React from "react"
import { Navigation } from "@components"
import { HomeSection, AboutSection } from "@sections"

function index() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <Navigation />
    </>
  )
}

export default index
