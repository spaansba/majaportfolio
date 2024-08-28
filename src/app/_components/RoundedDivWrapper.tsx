"use client"
import React, { useEffect, useState } from "react"
import styles from "./LandingPage.module.css"

function RoundedDivWrapper() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const calculateScrollProgress = () => {
    const scrollPosition = window.scrollY
    const maxScroll = 500 // how fast the height decreases (higher is slower)
    return Math.min(100, (scrollPosition / maxScroll) * 100)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollProgress(calculateScrollProgress())
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty("--scroll-progress", scrollProgress.toString())
  }, [scrollProgress])

  return (
    <div className={styles.roundedDivWrapper} data-scroll-progress={scrollProgress}>
      <div className={`${styles.roundedDiv} ${styles.topDiv}`}></div>
    </div>
  )
}

export default RoundedDivWrapper
