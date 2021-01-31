import React from "react"

const useWindowSize = () => {
  const [size, setSize] = React.useState([false, false])
  const updateSize = React.useCallback(
    () => setSize([window.innerWidth, window.innerHeight]),
    []
  )
  React.useLayoutEffect(() => {
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return size
}

export default useWindowSize
