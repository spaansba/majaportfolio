"use client"
import Image from "next/image"
import styles from "./page.module.css"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import { useEffect } from "react"
export default function Home() {
  const [isProfileFixed, setIsProfileFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about")
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect()
        setIsProfileFixed(rect.top <= 20)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
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

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Image
          src="https://utfs.io/f/a25e85e9-92b9-42fc-a7c2-c9dbd865284a-p1zbl.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          priority
        />

        <div className={styles.heroArch}></div>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y }}
        >
          <motion.h1>Majas Photography</motion.h1>
          <motion.p>Capturing moments, creating memories</motion.p>
          <motion.a
            href="#portfolio"
            className={styles.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </motion.a>
        </motion.div>
      </section>

      <motion.section
        className={styles.about}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <div className={styles.aboutContent}>
          <motion.div
            className={styles.aboutText}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate veritatis
              provident aut dolorum dolore officiis architecto, ad molestiae vitae, temporibus
              placeat nostrum? Consequatur debitis harum corrupti temporibus commodi tempore quos.
            </p>
          </motion.div>
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
              layout="fill"
              objectFit="cover"
              className={styles.profilePicture}
            />
          </motion.div>
        </div>
      </motion.section>

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

      <motion.section
        className={styles.contact}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
            Let's work together to capture your special moments. Fill out the form below, and I'll
            get back to you as soon as possible.
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
    </main>
  )
}
