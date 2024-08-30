"use client"
import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import styles from "./Carousel.module.css"
import { motion } from "framer-motion"

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const imageWidth = 400
  const images = [
    { id: "1", src: "/061624_1.5.jpg", alt: "Portraits" },
    { id: "2", src: "/061624_77.jpg", alt: "Events" },
    { id: "3", src: "/062624_26.jpg", alt: "Travel" },
    { id: "4", src: "/072224_31.jpg", alt: "Portraits" },
    { id: "5", src: "/072324_53.jpg", alt: "Events" },
    { id: "6", src: "/080124_50.jpg", alt: "Travel" },
    { id: "7", src: "/080424_99.jpg", alt: "Portraits" },
    { id: "8", src: "/081924_169.jpg", alt: "Events" },
    { id: "9", src: "/081924_172.jpg", alt: "Portraits" },
  ]

  const handleMouseDown = (e: MouseEvent) => {
    const container = containerRef.current
    if (!container) return
    setIsDragging(true)
    setStartX(e.pageX - container.offsetLeft)
    setScrollLeft(container.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const container = containerRef.current
    if (!container) return
    const x = e.pageX - container.offsetLeft
    const walk = (x - startX) * 2
    container.scrollLeft = scrollLeft - walk
  }

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current
    if (!container) return
    container.scrollBy({
      left: direction === "left" ? -imageWidth : imageWidth,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      setScrollLeft(container.scrollLeft)
    }

    container.addEventListener("scroll", handleScroll)
    container.addEventListener("mousedown", handleMouseDown)
    container.addEventListener("mouseleave", handleMouseUp)
    container.addEventListener("mouseup", handleMouseUp)
    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("scroll", handleScroll)
      container.removeEventListener("mousedown", handleMouseDown)
      container.removeEventListener("mouseleave", handleMouseUp)
      container.removeEventListener("mouseup", handleMouseUp)
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isDragging, startX])

  const isAtStart = scrollLeft === 0
  const isAtEnd = containerRef.current
    ? containerRef.current.scrollWidth - containerRef.current.clientWidth <= scrollLeft + 1
    : false

  return (
    <motion.div
      className={styles.carouselWrapper}
      initial={{ opacity: 0, translateX: 80 }}
      whileInView={{ opacity: 0.8, translateX: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <button
        className={`${styles.arrow} ${styles.leftArrow} ${isAtStart ? styles.hidden : ""}`}
        onClick={() => scroll("left")}
        disabled={isAtStart}
      >
        &#8249;
      </button>
      <div className={styles.carouselContainer} ref={containerRef}>
        <div className={styles.carousel}>
          {images.map((image) => (
            <div key={image.id} className={styles.carouselItem}>
              <Image
                draggable={false}
                src={image.src}
                alt={image.alt}
                width={imageWidth}
                height={600}
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles.arrow} ${styles.rightArrow} ${isAtEnd ? styles.hidden : ""}`}
        onClick={() => scroll("right")}
        disabled={isAtEnd}
      >
        &#8250;
      </button>
    </motion.div>
  )
}

export default Carousel
