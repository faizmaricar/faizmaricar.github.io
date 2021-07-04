import React from "react"
import { useOnScreen } from "@hooks"

export const SectionContext = React.createContext()

function sectionReducer(state, action) {
  if (action.type === "set_section_on_screen") {
    return action.onScreen
  }
  return state
}

function SectionProvider(props) {
  const { sections, ...rest } = props

  const [state, dispatch] = React.useReducer(sectionReducer, null)
  const [about, projects] = sections

  const aboutOnScreen = useOnScreen(about)
  const projectsOnScreen = useOnScreen(projects)

  const setSectionOnScreen = onScreen =>
    dispatch({ type: "set_section_on_screen", onScreen })

  React.useEffect(() => {
    aboutOnScreen && setSectionOnScreen("about")
    projectsOnScreen && setSectionOnScreen("projects")
  }, [aboutOnScreen, projectsOnScreen])

  return <SectionContext.Provider {...rest} value={state} />
}

export default SectionProvider
