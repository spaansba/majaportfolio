"use client"
import { motion } from "framer-motion"
import React from "react"
import Image from "next/image"
import styles from "./LandingPage.module.css"
function ContactSection() {
  return (
    <motion.section
      className={styles.contact}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* <div className={styles.reversedRoundedDivWrapper} data-scroll-progress={scrollProgress}>
          <div className={styles.reversedRoundedDiv}></div>
        </div> */}
      <Image
        src="https://utfs.io/f/a25e85e9-92b9-42fc-a7c2-c9dbd865284a-p1zbl.jpg"
        alt="Contact background"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.contactOverlay}></div>
      <div className={styles.contactContent}>
        <h2>Get in Touch</h2>
        <p>
          Lets work together to capture your special moments. Fill out the form below, and Ill get
          back to you as soon as possible.
        </p>
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={4} required></textarea>
          <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  )
}

export default ContactSection
