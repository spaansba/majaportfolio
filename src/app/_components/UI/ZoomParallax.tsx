"use client"
import styles from "./ZoomParallax.module.css"
import Image from "next/image"
import { useScroll, useTransform, motion, useSpring, useMotionValue, stagger } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { openAsBlob } from "fs"

export default function Index() {
  const smoothnessOptions = { damping: 20, stiffness: 300, mass: 0.7 }
  const mouse = {
    x: useSpring(useMotionValue(0), smoothnessOptions),
    y: useSpring(useMotionValue(0), smoothnessOptions),
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const offset = 8
      mouse.x.set(clientX + offset)
      mouse.y.set(clientY + offset)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })
  const mainPicScale = useTransform(scrollYProgress, [0, 1], [1, 4])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1])
  const mouseOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const buttonOpacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1 / 3]) // Inverse of mainPicScale
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 7])

  const pictures = [
    {
      id: 2,
      src: "/portraits/072224_15_bw.jpg",
      scale: scale6,
      startupScale: 6,
    },
    {
      id: 3,
      src: "/portraits/457A0100_SEB_color.jpg",
      scale: scale5,
      startupScale: 5,
    },
    {
      id: 4,
      src: "/061624_77.jpg",
      scale: scale5,
      startupScale: 3,
    },
    {
      id: 5,
      src: "/080424_99.jpg",
      scale: scale6,
      startupScale: 4,
    },
    {
      id: 6,
      src: "https://utfs.io/f/07d3c5dd-9c3a-4ca9-9e91-7c53327fc0ed-etcaly.jpg",
      scale: scale8,
      startupScale: 3,
    },
    {
      id: 7,
      src: "/portraits/062624_32.jpg",
      scale: scale8,
      startupScale: 5,
    },
  ]

  const enterTransition = {
    scale: {
      type: "spring",
      damping: 17,
      stiffness: 100,
      mass: 1,
      restDelta: 0.001,
    },
    opacity: {
      ease: "easeOut",
      duration: 1,
    },
  }

  return (
    <div id="hero" ref={container} className={styles.container}>
      <motion.div
        style={{
          left: mouse.x,
          top: mouse.y,
          opacity: mouseOpacity,
        }}
        className={styles.mouseContainer}
      >
        <span>Scroll</span>
      </motion.div>
      <div className={styles.sticky}>
        <motion.div
          style={{ scale: mainPicScale }}
          initial={{ scale: `scale(${4})`, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={enterTransition}
          className={styles.el}
        >
          <div className={`${styles.imageContainer} ${styles.imageContainerMain}`}>
            <motion.div
              className={styles.heroContent}
              style={{
                opacity: heroOpacity,
                scale: heroScale,
              }}
            >
              <motion.h1>MAJA LINDQVIST</motion.h1>
              <motion.h2>PHOTOGRAPHY</motion.h2>
              {/* <motion.a
                href="#portfolio"
                className={styles.button}
                style={{ opacity: buttonOpacity }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                VIEW PORTFOLIO
              </motion.a> */}
            </motion.div>
            <Image
              src={"https://utfs.io/f/2ae7657d-6ba6-4f10-8d13-023d209ad084-thqkup.jpg"}
              fill
              alt="image"
            />
          </div>
        </motion.div>
        {pictures.map(({ src, scale, id, startupScale }) => (
          <motion.div
            key={id}
            style={{ scale }}
            initial={{ scale: `scale(${startupScale})`, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={enterTransition}
            className={styles.el}
          >
            <motion.div className={styles.imageContainer}>
              <Image src={src} fill alt="image" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
