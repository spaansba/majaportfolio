import styles from "./page.module.css"
import HeroSection from "./_components/HeroSection"
import AboutSection from "./_components/AboutSection"
import PortfolioSection from "./_components/PortfolioSection"
import ContactSection from "./_components/ContactSection"
import Image from "next/image"

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection>
        <Image
          src="https://utfs.io/f/a25e85e9-92b9-42fc-a7c2-c9dbd865284a-p1zbl.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </HeroSection>
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  )
}
