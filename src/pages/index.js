import React from "react"
import { Navigation } from "@components"
import { HomeSection, AboutSection, ProjectsSection } from "@sections"
import { SectionProvider } from "@providers"

function index() {
  const aboutRef = React.useRef()
  const projectsRef = React.useRef()

  const sections = [aboutRef, projectsRef]

  return (
    <SectionProvider sections={sections}>
      <HomeSection />
      <AboutSection ref={aboutRef} />
      <ProjectsSection ref={projectsRef} />
      <Navigation />
    </SectionProvider>
  )
}

export default index
