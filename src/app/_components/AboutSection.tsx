"use client"
import { motion } from "framer-motion"
import React from "react"
import Image from "next/image"
import styles from "./LandingPage.module.css"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
function AboutSection() {
  return (
    <motion.section
      className={styles.about}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2>ABOUT ME</h2>
      <div className={styles.aboutContent}>
        <motion.div
          className={styles.profilePictureContainer}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://utfs.io/f/1ceee928-c6a8-4215-b20a-ee1708f35914-tfatz2.JPG"
            alt="Maja's profile picture"
            width={300}
            height={300}
            className={styles.profilePicture}
          />
        </motion.div>
        <motion.div
          className={styles.aboutText}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Hi, Im Maja</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reprehenderit vero
            aperiam, omnis temporibus ipsum animi assumenda magni, molestiae magnam mollitia vitae
            perspiciatis asperiores modi laudantium deserunt doloribus vel repudiandae nam libero
            nostrum dolor sint odit. Fugiat molestiae numquam beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, veritatis? Fuga dolor
            veritatis architecto asperiores rem, incidunt quibusdam quisquam debitis.
          </p>
          <div className={styles.socialIcons}>
            <motion.a
              href="https://www.instagram.com/your_instagram"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/your_linkedin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutSection
