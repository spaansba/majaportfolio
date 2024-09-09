import React, { useCallback, useRef, useState } from "react"
import styles from "./PortfolioAlbum.module.css"
import type { ImageProps } from "./UI/ImageModal"
import { motion, useScroll, useTransform } from "framer-motion"
import ImageModal from "./UI/ImageModal"
import Image from "next/image"
import ScrollToAfterHero from "./UI/ScrollToAfterHero"

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

  return (
    <>
      <ImageModal image={image} onClose={closeModal} />
      <div className={styles.contentHolder}>
        <div id="hero" ref={heroRef} className={styles.hero}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ y }}
          >
            <h1>{title}</h1>
            <ScrollToAfterHero heroRef={heroRef} />
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
              <Image
                src={img.src}
                alt={img.alt}
                layout="fill"
                objectFit="cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
