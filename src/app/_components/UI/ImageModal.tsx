"use client"
import { useState } from "react"
import styles from "./ImageModal.module.css"
import Image from "next/image"
import React from "react"
import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
interface ImageModalProps {
  image: ImageProps | undefined
  onClose: () => void
}

export type ImageProps = {
  src: string
  alt: string
  size: "small" | "medium" | "large" | "long" | "extraLong" | "extraLarge" | "wide" | "extraWide"
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (image) {
      setIsVisible(true)
    }
  }, [image])

  const closeModal = () => {
    setIsVisible(false)
    onClose()
  }

  const handleAnimationComplete = () => {
    if (!isVisible) {
      onClose()
    }
  }
  const variants = {
    hidden: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  return (
    <AnimatePresence>
      {isVisible && image && (
        <motion.div
          className={styles.modalOverlay}
          onClick={closeModal}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className={styles.modalContent}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onAnimationComplete={handleAnimationComplete}
          >
            <Image src={image.src} alt={image.alt} layout="fill" objectFit="contain" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
