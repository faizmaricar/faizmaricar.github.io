import React from "react"
import theme from "@utils/theme"

const isBrowser = typeof window !== "undefined"

function getWindowDimensions() {
  const {
    breakpoints: { md },
  } = theme

  if (!isBrowser) {
    return { width: md + 1 }
  }

  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  )

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    if (isBrowser) {
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowDimensions
}
