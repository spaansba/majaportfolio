"use client"
import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import styles from "./Carousel.module.css"
import { m, motion } from "framer-motion"

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const imageWidth = 400
  const images = [
    { id: "1", src: "/portraits/061624_1.5.jpg", alt: "Portraits" },
    { id: "2", src: "/061624_77.jpg", alt: "Events" },
    { id: "3", src: "/portraits/062624_26.jpg", alt: "Travel" },
    { id: "4", src: "/portraits/072224_31.jpg", alt: "Portraits" },
    { id: "5", src: "/portraits/072324_53.jpg", alt: "Events" },
    { id: "6", src: "/portraits/080124_50.jpg", alt: "Travel" },
    { id: "7", src: "/080424_99.jpg", alt: "Portraits" },
    { id: "8", src: "/081924_169.jpg", alt: "Events" },
    { id: "9", src: "/081924_172.jpg", alt: "Portraits" },
  ]

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    const container = containerRef.current
    if (!container) return
    setIsDragging(true)
    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX
    setStartX(pageX - container.offsetLeft)
    setScrollLeft(container.scrollLeft)
  }

  const handleEnd = () => {
    setIsDragging(false)
  }

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    const container = containerRef.current
    if (!container) return

    let clientX: number
    let walk = 0
    let x = 0
    if (e.type === "mousemove") {
      clientX = (e as React.MouseEvent).clientX
      x = clientX - container.offsetLeft
      walk = (x - startX) / 15 // Adjust to control swipe speed
    } else if (e.type === "touchmove") {
      clientX = (e as React.TouchEvent).touches[0].clientX
      x = clientX - container.offsetLeft
      walk = x - startX // Adjust to control swipe speed
    } else {
      return
    }

    container.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      setScrollLeft(container.scrollLeft)
    }

    container.addEventListener("scroll", handleScroll)

    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current
    const marginRightSize = 10
    if (!container) return
    container.scrollBy({
      left: direction === "left" ? -imageWidth - marginRightSize : imageWidth + marginRightSize,
      behavior: "smooth",
    })
  }

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
      <div
        className={styles.carouselContainer}
        ref={containerRef}
        onMouseDown={handleStart}
        onMouseLeave={handleEnd}
        onMouseUp={handleEnd}
        onMouseMove={handleMove}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
        onTouchMove={handleMove}
      >
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
