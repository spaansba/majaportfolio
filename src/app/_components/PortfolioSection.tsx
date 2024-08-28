"use client"
import { motion } from "framer-motion"
import React from "react"
import styles from "./LandingPage.module.css"
import Image from "next/image"

function PortfolioSection() {
  const portfolioItems = [
    {
      src: "https://utfs.io/f/a25e85e9-92b9-42fc-a7c2-c9dbd865284a-p1zbl.jpg",
      alt: "Nature Photography",
    },
    {
      src: "https://utfs.io/f/a25e85e9-92b9-42fc-a7c2-c9dbd865284a-p1zbl.jpg",
      alt: "Portrait Photography",
    },
    {
      src: "https://utfs.io/f/a25e85e9-92b9-42fc-a7c2-c9dbd865284a-p1zbl.jpg",
      alt: "Architecture Photography",
    },
    {
      src: "https://utfs.io/f/a25e85e9-92b9-42fc-a7c2-c9dbd865284a-p1zbl.jpg",
      alt: "Event Photography",
    },
    {
      src: "https://utfs.io/f/a25e85e9-92b9-42fc-a7c2-c9dbd865284a-p1zbl.jpg",
      alt: "Wedding Photography",
    },
    {
      src: "https://utfs.io/f/a25e85e9-92b9-42fc-a7c2-c9dbd865284a-p1zbl.jpg",
      alt: "Travel Photography",
    },
  ]
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>Portfolio</h2>
      <div className={styles.galleryGrid}>
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            className={styles.galleryItem}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ width: "100%", height: "auto" }}
              width={400}
              height={300}
            />
            <p>{item.alt}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default PortfolioSection
