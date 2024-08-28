"use client"
import { motion } from "framer-motion"
import React from "react"
import styles from "./LandingPage.module.css"
import pstyles from "./Portfolio.module.css"
import Image from "next/image"
import WaveAnimation from "./UI/WaveAnimation"

function PortfolioSection() {
  const portfolioItems = [
    {
      src: "https://utfs.io/f/0899b333-0472-4712-b15f-65548be78b8f-1ta6os.jpg",
      alt: "Portraits",
      title: "Portraits",
      underTitle: "<subtext>",
    },
    {
      src: "https://utfs.io/f/07d3c5dd-9c3a-4ca9-9e91-7c53327fc0ed-etcaly.jpg",
      alt: "Events",
      title: "Events",
      underTitle: "<subtext>",
    },
    {
      src: "https://utfs.io/f/9324dc45-5cc8-41b0-8d33-39902b1a5a1d-fm57f4.jpg",
      alt: "Travel",
      title: "Travel",
      underTitle: "<subtext>",
    },
  ]
  return (
    <>
      <section id="portfolio" className={styles.portfolio}>
        <h2>PORTFOLIO</h2>
        <div className={pstyles.galleryGrid}>
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className={pstyles.galleryItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <div style={{ position: "relative", width: "100%", height: "270px" }}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div className={pstyles.galleryInfo}>
                <h1 className={pstyles.title}>{item.title}</h1>
                <p className={pstyles.UnderTitle}>{item.underTitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <WaveAnimation />
      </motion.div>
    </>
  )
}

export default PortfolioSection
