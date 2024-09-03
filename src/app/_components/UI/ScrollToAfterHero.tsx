import React from "react"
import styles from "./ScrollToAfterHero.module.css"
import { motion } from "framer-motion"

interface ScrollToAfterHeroProps {
  heroRef: React.RefObject<HTMLDivElement>
}

function ScrollToAfterHero({ heroRef }: ScrollToAfterHeroProps) {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.5,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    whileTap: {
      scale: 0.9,
      transition: { duration: 0.2 },
    },
    whileHover: {
      scale: 1.2,
      opacity: 1,
      transition: { duration: 0.2 },
    },
  }

  const scrollToEndOfHero = () => {
    if (heroRef.current) {
      const heroHeight = heroRef.current.offsetHeight
      window.scrollTo({
        top: heroHeight,
        behavior: "smooth",
      })
    }
  }
  return (
    <div className={styles.container} title="Scroll down">
      <motion.button
        className={styles.button}
        onClick={scrollToEndOfHero}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        whileHover="whileHover"
      >
        <svg
          fill="#fff"
          height="48px" // Change left: calc(50% - 24px); on container if changing this
          width="48px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 330 330"
        >
          <path
            id="XMLID_224_"
            d="M4.394,100.607l150.004,150C157.21,253.42,161.026,255,165.004,255c3.979,0,7.794-1.581,10.607-4.394
l149.996-150c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.857-15.355-5.858-21.213,0l-139.39,139.393L25.607,79.393
C22.678,76.464,18.839,75,15,75c-3.839,0-7.678,1.464-10.607,4.394C-1.464,85.252-1.464,94.749,4.394,100.607z"
          />
        </svg>
      </motion.button>
    </div>
  )
}

export default ScrollToAfterHero
