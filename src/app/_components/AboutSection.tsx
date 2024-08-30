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
      <h2>About Me</h2>
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
        </motion.div>
        <div className={astyles.background}></div>

        <motion.div
          className={astyles.aboutText}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Hi, I’m Maja</h3>
          <p>
            I’m the one who always has a camera in hand at events, on travels, or even just popping
            out my phone to capture those unique, everyday moments. For me, photography is all about
            telling stories, collecting memories, and capturing the spontaneous feelings that make
            life so special. Whether it’s documenting someone’s big day at an event or creating
            powerful portraits with an aesthetic edge, I’m passionate about every shot I take. My
            style mixes creativity with a dash of spontaneity, ensuring each image feels as unique
            as the people in it.
          </p>
          <p>
            When I’m not behind the lens, you’ll find me doing sports or exploring new
            countries—though let’s be real, my camera’s never far away! I also love trying new foods
            and then attempting to recreate them myself at home.
          </p>
          <p>
            Right now, you can mostly find me in The Netherlands, Finland (Åland Islands), and
            Sweden. Let’s capture some amazing photos and memories together!
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default AboutSection
