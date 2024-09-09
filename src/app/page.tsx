import styles from "./page.module.css"

import AboutSection from "./_components/AboutSection"
import PortfolioSection from "./_components/PortfolioSection"

import ZoomParallax from "./_components/UI/ZoomParallax"
import ScrollMouseOverlay from "./_components/utils/ScrollMouseOverlay"

export default function Home() {
  return (
    <main className={styles.main}>
      <ZoomParallax />
      {/* <HeroSection>
        <Image
          draggable={false}
          src="https://utfs.io/f/2ae7657d-6ba6-4f10-8d13-023d209ad084-thqkup.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </HeroSection> */}
      <AboutSection />
      <PortfolioSection />

      {/* <ContactSection /> */}
    </main>
  )
}
