import React, { useCallback, useRef, useState } from "react"
import styles from "./PortfolioAlbum.module.css"
import type { ImageProps } from "./UI/ImageModal"
import { motion, useScroll, useTransform } from "framer-motion"
import ImageModal from "./UI/ImageModal"
import Image from "next/image"

interface PortfolioAlbumProps {
  hero: { scr: string; alt: string }
  images: ImageProps[]
  title: string
}

export default function PortfolioAlbum({ hero, images, title }: PortfolioAlbumProps) {
  const [image, setImage] = useState<ImageProps | undefined>(undefined)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const heroRef = useRef<HTMLDivElement>(null)
  // On close reset the image, so we can select the same image again
  const closeModal = useCallback(() => {
    setImage(undefined)
  }, [])

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
    <div className={styles.contentHolder}>
      <ImageModal image={image} onClose={closeModal} />

      <div id="hero" ref={heroRef} className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y }}
        >
          <h1>{title}</h1>
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
                height="45px"
                width="45px"
                version="1.1"
                id="Layer_1"
                viewBox="0 0 330 330"
                transform="rotate(180)"
              >
                <path
                  id="XMLID_224_"
                  d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
    l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
    C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
        <Image
          src={hero.scr}
          alt={hero.alt}
          layout="fill"
          objectFit="cover"
          priority
          draggable={false}
        />
      </div>
      <div className={styles.photoGrid}>
        {images.map((img, index) => (
          <div
            onClick={() => setImage(img)}
            key={index}
            className={`${styles.imageWrapper} ${styles[img.size]}`}
          >
            <Image src={img.src} alt={img.alt} layout="fill" objectFit="cover" draggable={false} />
          </div>
        ))}
      </div>
    </div>
  )
}
