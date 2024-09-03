"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useRef, useState } from "react"
import styles from "./NavBar.module.css"
import { TransitionLink } from "./utils/TransitionLink"

function NavBar() {
  const pathname = usePathname()
  const navBar = useRef<HTMLDivElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const setupObserver = () => {
      const target = document.querySelector("#hero")
      if (!target) return

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            navBar.current?.classList.add(styles.whiteBg)
          }
          if (entry.isIntersecting) {
            navBar.current?.classList.remove(styles.whiteBg)
          }
        })
      })

      observer.observe(target)

      return () => {
        observer.disconnect()
      }
    }

    const cleanup = setupObserver()

    return () => {
      if (cleanup) cleanup()
    }
  }, [pathname]) // everytime we navigate to a new page, we need to setup the observer again

  const NavBarItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/#about" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact", href: "/#contact" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav ref={navBar} className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ""}`}>
        <div className={styles.leftNav}>
          <div className={styles.logoContainer}>
            <input
              type="checkbox"
              role="button"
              aria-label="Display the menu"
              className={styles.menu}
              checked={isMenuOpen}
              onChange={toggleMenu}
            />
            <TransitionLink href="/">
              <p className={styles.name}>MAJA LINDQVIST</p>
            </TransitionLink>
          </div>
          {NavBarItems.map((item) => (
            <div key={item.title} className={styles.navItem}>
              <TransitionLink href={item.href}>
                <p className={styles.navItemTitle}>{item.title}</p>
              </TransitionLink>
            </div>
          ))}
        </div>
        <div className={styles.margin}></div>
      </nav>
      {isMenuOpen && (
        <div className={styles.fullScreenMenu}>
          {NavBarItems.map((item) => (
            <Link key={item.title} href={item.href} onClick={toggleMenu}>
              <p className={styles.fullScreenMenuItem}>{item.title}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default NavBar
