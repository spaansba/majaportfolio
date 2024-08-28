"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import React from "react"
import styles from "./LandingPage.module.css"
import RoundedDivWrapper from "./RoundedDivWrapper"

interface HeroSectionProps {
  children: React.ReactNode // Server side image so it instantly loads
}

function HeroSection({ children }: HeroSectionProps) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  return (
    <section className={styles.hero}>
      {children}
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ y }}
      >
        <motion.h1>Majas Photography</motion.h1>
        <motion.p>Capturing moments, creating memories</motion.p>
        <motion.a
          href="#portfolio"
          className={styles.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Portfolio
        </motion.a>
      </motion.div>
      <RoundedDivWrapper />
    </section>
  )
}

export default HeroSection
