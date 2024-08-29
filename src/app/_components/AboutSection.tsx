"use client"
import { motion } from "framer-motion"
import React from "react"
import Image from "next/image"
import styles from "./LandingPage.module.css"
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"
import astyles from "./AboutSection.module.css"
function AboutSection() {
  const icons = [
    { Icon: FaInstagram, url: "https://www.instagram.com/majas_portfolio/", id: "instagram" },
    {
      Icon: FaLinkedin,
      url: "https://www.linkedin.com/in/maja-lindqvist-b67797199/",
      id: "linkedin",
    },
    { Icon: FaTiktok, url: " https://www.tiktok.com/@majas_portfolio ", id: "tiktok" },
  ]

  return (
    <motion.section
      className={styles.about}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="about"
    >
      <div className={astyles.aboutContent}>
        <motion.div
          className={astyles.profilePictureContainer}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://utfs.io/f/1bd08dfe-c74a-4dd6-9419-5c28dc6773a0-1xbyw8.jpg"
            alt="Maja's profile picture"
            width={250}
            height={250}
            className={astyles.profilePicture}
          />
          <div className={astyles.iconsWrapper}>
            {icons.map(({ Icon, url, id }) => (
              <div key={id} className={astyles.iconDiv}>
                <motion.a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon />
                </motion.a>
              </div>
            ))}
          </div>
          {/* <Image
            src="https://utfs.io/f/1bd08dfe-c74a-4dd6-9419-5c28dc6773a0-1xbyw8.jpg"
            alt="Maja's profile picture"
            width={300}
            height={300}
            className={styles.profilePicture}
          /> */}
        </motion.div>
        <div className={astyles.background}></div>

        <h2 className={astyles.title}>ABOUT ME</h2>
        <motion.div
          className={astyles.aboutText}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Hi, Im ....</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa reprehenderit vero
            aperiam, omnis temporibus ipsum animi assumenda magni, molestiae magnam mollitia vitae
            perspiciatis asperiores modi laudantium deserunt doloribus vel repudiandae nam libero
            nostrum dolor sint odit. Fugiat molestiae numquam beatae.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt similique modi illo?
            Accusantium eum tempore itaque harum vel asperiores consequatur dolor sit illo error.
            Cum voluptates beatae qui quibusdam ab natus culpa corporis, unde quae ratione suscipit
            consequatur at eos!
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutSection
