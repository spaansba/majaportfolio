"use client"
import styles from "./ZoomParallax.module.css"
import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function Index() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  const mainPicScale = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 7])

  const pictures = [
    {
      id: 1,
      src: "https://utfs.io/f/2ae7657d-6ba6-4f10-8d13-023d209ad084-thqkup.jpg",
      scale: mainPicScale,
    },
    {
      id: 2,
      src: "/portraits/072224_15_bw.jpg",
      scale: scale6,
    },
    {
      id: 3,
      src: "/portraits/457A0100_SEB_color.jpg",
      scale: scale5,
    },
    {
      id: 4,
      src: "/061624_77.jpg",
      scale: scale5,
    },
    {
      id: 5,
      src: "/080424_99.jpg",
      scale: scale6,
    },
    {
      id: 6,
      src: "https://utfs.io/f/07d3c5dd-9c3a-4ca9-9e91-7c53327fc0ed-etcaly.jpg",
      scale: scale8,
    },
    {
      id: 7,
      src: "/portraits/062624_32.jpg",
      scale: scale8,
    },
  ]

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale, id }) => {
          return (
            <motion.div key={id} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="image" />
                {/* <p className={styles.imageNumber}>{id}</p> */}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
