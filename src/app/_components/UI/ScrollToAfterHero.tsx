import React from "react"
import styles from "./ScrollToAfterHero.module.css"
import { motion } from "framer-motion"
import { DownArrowSVG } from "./svg"

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
        top: heroHeight + 1, // +1 to make the hero completely invisible making the navbar background color visible
        behavior: "smooth",
      })
    }
  }
  return (
    <div className={styles.container}>
      <motion.button
        className={styles.button}
        onClick={scrollToEndOfHero}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
        whileHover="whileHover"
      >
        <DownArrowSVG className={styles.svg} fill="#fff" width="24px" height="24px"></DownArrowSVG>
      </motion.button>
    </div>
  )
}

export default ScrollToAfterHero
