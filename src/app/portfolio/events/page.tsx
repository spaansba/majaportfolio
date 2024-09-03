"use client"
import styles from "../portfolioAlbums.module.css"
import Image from "next/image"
import ImageModal, { type ImageProps } from "@/app/_components/UI/ImageModal"
import { useState } from "react"
import { useCallback } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const images: ImageProps[] = [
  { src: "/portraits/061624_1.5.jpg", alt: "Image 1", size: "medium" },
  { src: "/portraits/062624_26.jpg", alt: "Image 2", size: "small" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "medium" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "large" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "extraLarge" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "extraLong" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "large" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "extraWide" },
  { src: "/portraits/061624_1.5.jpg", alt: "Image 1", size: "medium" },
  { src: "/portraits/062624_26.jpg", alt: "Image 2", size: "small" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "medium" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "wide" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "medium" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "medium" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "large" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "medium" },
  { src: "/portraits/061624_1.5.jpg", alt: "Image 1", size: "medium" },
  { src: "/portraits/062624_26.jpg", alt: "Image 2", size: "small" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "medium" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "large" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "medium" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "medium" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "large" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "medium" },
]

export default function Home() {
  const [image, setImage] = useState<ImageProps | undefined>(undefined)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  // On close reset the image, so we can select the same image again
  const closeModal = useCallback(() => {
    setImage(undefined)
  }, [])

  return (
    <div className={styles.contentHolder}>
      <ImageModal image={image} onClose={closeModal} />

      <div id="hero" className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y }}
        >
          <h1>Events</h1>
        </motion.div>
        <Image
          src="https://utfs.io/f/0899b333-0472-4712-b15f-65548be78b8f-1ta6os.jpg"
          alt="Hero image"
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
