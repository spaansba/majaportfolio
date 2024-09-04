"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import styles from "./LandingPage.module.css"
import pstyles from "./PortfolioSection.module.css"
import { TransitionLink } from "./utils/TransitionLink"
import ImageCarousel from "./UI/ImageCarousel"

function PortfolioSection() {
  const portfolioItems = [
    {
      href: "/portfolio/portraits",
      src: "https://utfs.io/f/0899b333-0472-4712-b15f-65548be78b8f-1ta6os.jpg",
      alt: "Portraits",
      title: "Portraits",
      underTitle: "",
    },
    {
      href: "/portfolio/events",
      src: "https://utfs.io/f/07d3c5dd-9c3a-4ca9-9e91-7c53327fc0ed-etcaly.jpg",
      alt: "Events",
      title: "Events",
      underTitle: "",
    },
    {
      href: "/portfolio/events",
      src: "https://utfs.io/f/9324dc45-5cc8-41b0-8d33-39902b1a5a1d-fm57f4.jpg",
      alt: "Travel",
      title: "Travel",
      underTitle: "",
    },
  ]

  return (
    <>
      <section id="portfolio" className={styles.portfolio}>
        <h2>PORTFOLIO</h2>
        <div className={pstyles.galleryGrid}>
          {portfolioItems.map((item) => (
            <TransitionLink href={item.href} key={item.title}>
              <motion.div
                className={pstyles.galleryItem}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div style={{ position: "relative", width: "100%", height: "270px" }}>
                  <Image
                    draggable={false}
                    quality={100}
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
            </TransitionLink>
          ))}
        </div>
      </section>

      <ImageCarousel />
    </>
  )
}

export default PortfolioSection
