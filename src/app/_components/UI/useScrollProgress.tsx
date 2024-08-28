import { useState, useEffect, useRef } from "react"

const useScrollProgress = (upwards: boolean, startElementId: string) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const startRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element: HTMLElement | null = document.getElementById(startElementId)
    if (!element) return
    console.log(element)
    startRef.current = element
    // Perform initial calculation after setting the ref
    setScrollProgress(calculateScrollProgress())
  }, [startElementId])

  const calculateScrollProgress = () => {
    if (!startRef.current) return 0

    // When reversed, the start element is the bottom of the element
    const startElementLocation = upwards
      ? startRef.current.getBoundingClientRect().top
      : startRef.current.getBoundingClientRect().bottom

    const scrollPosition = window.scrollY - startElementLocation
    const maxScroll = 500 // how fast the height decreases (higher is slower)
    console.log("window.scrollY ", window.scrollY)
    console.log("topOfStartElement ", startElementLocation)
    console.log("scrollPosition ", scrollPosition)
    console.log(Math.min(120, Math.max(0, (scrollPosition / maxScroll) * 100)))

    return Math.min(120, Math.max(0, (scrollPosition / maxScroll) * 100))
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollProgress(calculateScrollProgress())
    }

    window.addEventListener("scroll", handleScroll)

    // Perform initial calculation when setting up the scroll listener
    // This means that when we refresh the page halway through it will still have the correct scroll progress
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [upwards, startElementId]) // Added dependencies

  useEffect(() => {
    document.documentElement.style.setProperty(
      `--scroll-progress-${startElementId}`,
      scrollProgress.toString()
    )
  }, [scrollProgress, startElementId])

  return scrollProgress
}

export default useScrollProgress
