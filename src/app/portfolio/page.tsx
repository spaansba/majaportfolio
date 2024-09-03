import styles from "./portfolio.module.css"
import Image from "next/image"

export default function Home() {
  const portfolioItems = [
    {
      src: "https://utfs.io/f/0899b333-0472-4712-b15f-65548be78b8f-1ta6os.jpg",
      alt: "Portraits",
      title: "Portraits",
      underTitle: "",
    },
    {
      src: "https://utfs.io/f/07d3c5dd-9c3a-4ca9-9e91-7c53327fc0ed-etcaly.jpg",
      alt: "Events",
      title: "Events",
      underTitle: "",
    },
    {
      src: "https://utfs.io/f/9324dc45-5cc8-41b0-8d33-39902b1a5a1d-fm57f4.jpg",
      alt: "Travel",
      title: "Travel",
      underTitle: "",
    },
  ]

  return (
    <div className={styles.contentHolder}>
      <div id="hero" className={styles.hero}>
        <Image
          draggable={false}
          src="https://utfs.io/f/2ae7657d-6ba6-4f10-8d13-023d209ad084-thqkup.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      {portfolioItems.map((item) => (
        <div key={item.title} className={`${styles.portfolioItem} `}>
          <Image
            draggable={false}
            src={item.src}
            alt={item.alt}
            layout="fill"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <p className={`${styles.visible} ${styles.title}`}>{item.title}</p>
        </div>
      ))}
    </div>
  )
}
