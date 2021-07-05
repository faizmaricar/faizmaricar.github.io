import React from "react"
import theme from "@utils/theme"

const isBrowser = typeof window !== "undefined"

function getWindowDimensions() {
  if (isBrowser) {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  return { width: 0, height: 0 }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  )

  React.useEffect(() => {
    if (!isBrowser) return false
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}
