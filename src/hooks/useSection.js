import React from "react"
import { SectionContext } from "@providers/SectionProvider"

function useSection() {
  const section = React.useContext(SectionContext)
  return section
}

export default useSection
