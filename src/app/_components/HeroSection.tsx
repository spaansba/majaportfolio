"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import React from "react"
import styles from "./LandingPage.module.css"
import RoundedDivWrapper from "./UI/RoundedDivWrapper"

interface HeroSectionProps {
  children: React.ReactNode // Server side image so it instantly loads
}

function HeroSection({ children }: HeroSectionProps) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  return (
    <section id="hero" className={styles.hero}>
      {children}
      <motion.div
        className={styles.heroContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ y }}
      >
        <motion.h1>MAJA LINDQVIST</motion.h1>
        <motion.h2>PHOTOGRAPHY</motion.h2>
        <motion.a
          href="#portfolio"
          className={styles.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          VIEW PORTFOLIO
        </motion.a>
      </motion.div>
      <RoundedDivWrapper upwards={true} />
    </section>
  )
}

export default HeroSection
