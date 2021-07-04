import React from "react"
import { SectionProvider } from "@providers"
import { Navigation } from "@components"
import {
  HomeSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
} from "@sections"

function index() {
  const aboutRef = React.useRef()
  const projectsRef = React.useRef()
  const contactRef = React.useRef()

  const sections = [aboutRef, projectsRef, contactRef]

  return (
    <SectionProvider sections={sections}>
      <HomeSection />
      <AboutSection ref={aboutRef} />
      <ProjectsSection ref={projectsRef} />
      <ContactSection ref={contactRef} />
      <Navigation />
    </SectionProvider>
  )
}

export default index
