import React from "react"

function useOnScreen(ref, rootMargin = "-50%") {
  const [isIntersecting, setIntersecting] = React.useState(false)
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting
}

export default useOnScreen
