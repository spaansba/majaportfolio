"use client"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import React, { useRef, useEffect } from "react"
import Image from "next/image"
import styles from "./LandingPage.module.css"
import RoundedDivWrapper from "./UI/RoundedDivWrapper"

function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [-30, 70])

  return (
    <motion.section
      ref={sectionRef}
      className={styles.contact}
      initial={{ opacity: 0.7 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
    >
      <RoundedDivWrapper upwards={false} />
      <Image
        draggable={false}
        src="https://utfs.io/f/99142ca6-146c-403d-97e9-48c6f098279a-thqkur.jpg"
        alt="Contact background"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.contactOverlay}></div>
      <motion.div className={styles.contactContent} style={{ y }}>
        <h2>GET IN TOUCH</h2>
        <p>
          Let&apos;s work together to capture your special moments. Fill out the form below, and
          I&apos;ll get back to you as soon as possible.
        </p>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={4} required></textarea>
          <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  )
}

export default ContactSection
