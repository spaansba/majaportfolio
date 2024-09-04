"use client"
import React from "react"
import styles from "./ScrollToTopButton.module.css"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { UpArrowSVG } from "./svg"
export default function ScrollToTopButton() {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > window.innerHeight * 0.4)
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

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

  return (
    <AnimatePresence>
      {isVisible && (
        <div className={styles.container}>
          <motion.button
            className={styles.button}
            onClick={scrollToTop}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="whileHover"
          >
            <UpArrowSVG width="24px" height="24px"></UpArrowSVG>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
