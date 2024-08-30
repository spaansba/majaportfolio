import styles from "./page.module.css"
import HeroSection from "./_components/HeroSection"
import AboutSection from "./_components/AboutSection"
import PortfolioSection from "./_components/PortfolioSection"
import ContactSection from "./_components/ContactSection"
import Image from "next/image"
import ImageCarousel from "./_components/UI/ImageCarousel"

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection>
        <Image
          src="https://utfs.io/f/2ae7657d-6ba6-4f10-8d13-023d209ad084-thqkup.jpg"
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
