"use client"
import React from "react"
import styles from "./ScrollToTopButton.module.css"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"

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
      opacity: 1,
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
            <svg
              fill="#000000"
              height="24px"
              width="24px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 330 330"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  id="XMLID_224_"
                  d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
                ></path>{" "}
              </g>
            </svg>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  )
}
