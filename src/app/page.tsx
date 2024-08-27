"use client"
import Image from "next/image"
import styles from "./page.module.css"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState } from "react"
import { useEffect } from "react"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  const calculateScrollProgress = () => {
    const scrollPosition = window.scrollY
    const maxScroll = 500 // how fast the height decreases (higher is slower)
    return Math.min(100, (scrollPosition / maxScroll) * 100)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollProgress(calculateScrollProgress())
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.setProperty("--scroll-progress", scrollProgress.toString())
  }, [scrollProgress])

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
        <div className={styles.roundedDivWrapper} data-scroll-progress={scrollProgress}>
          <div className={`${styles.roundedDiv} ${styles.topDiv}`}></div>
        </div>
      </section>
      <motion.section
        className={styles.about}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
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
            <h3>Hi, I'm Maja</h3>
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
