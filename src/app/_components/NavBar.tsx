"use client"
import { usePathname } from "next/navigation"
import React, { use, useEffect, useRef, useState } from "react"
import styles from "./NavBar.module.css"
import { TransitionLink } from "./utils/TransitionLink"

interface NavItem {
  title: string
  href: string
  hasSubmenu?: boolean
  subMenuItems?: NavItem[]
}

function NavBar() {
  const pathname = usePathname()
  const navBar = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [heroIntersecting, setHeroIntersecting] = useState(true)

  // Observe the hero element to determine if it's visible (we determine the navbar background on this)
  useEffect(() => {
    const setupObserver = () => {
      const target = document.querySelector("#hero")
      if (!target) return

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setHeroIntersecting(false)
          } else {
            setHeroIntersecting(true)
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
  }, [pathname])

  const NavBarItems: NavItem[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/#about" },
    {
      title: "Portfolio",
      href: "/portfolio",
      hasSubmenu: true,
      subMenuItems: [
        { title: "Travel", href: "/portfolio/travel" },
        { title: "Events", href: "/portfolio/events" },
        { title: "Portraits", href: "/portfolio/portraits" },
      ],
    },
    { title: "Contact", href: "/#contact" },
  ]

  useEffect(() => {
    window.addEventListener("click", closeNavItemSubMenu)
    return () => {
      window.removeEventListener("click", closeNavItemSubMenu)
    }
  }, [])

  function toggleMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close the submenu when clicking outside of it
  function closeNavItemSubMenu() {
    console.log("closeNavItemSubMenu")
    const details = document.querySelectorAll("details")
    if (details) {
      details.forEach((f) => f.removeAttribute("open"))
    }
  }

  function openNavSubItemMenu() {
    if (navBar.current) {
      navBar.current.dataset.hasOpenSubMenu = "true"
    }
  }

  const navItemRender = (item: NavItem) => {
    return (
      <div key={item.title} className={`${styles.navItem}`}>
        {item.hasSubmenu ? (
          <details className={styles.detailsWrapper}>
            <summary>{item.title}</summary>
            <ul className={heroIntersecting ? "" : styles.glassBackground}>
              {item.subMenuItems?.map((subItem) => (
                <TransitionLink
                  key={subItem.title}
                  href={subItem.href}
                  extraOnClick={closeNavItemSubMenu}
                >
                  <li>{subItem.title}</li>
                </TransitionLink>
              ))}
            </ul>
          </details>
        ) : (
          <TransitionLink href={item.href}>
            <p className={styles.navItemTitle}>{item.title}</p>
          </TransitionLink>
        )}
      </div>
    )
  }

  const mobileMenuRender = (item: NavItem) => {
    return (
      <>
        {item.hasSubmenu ? (
          <>
            <TransitionLink key={item.title} href={item.href} extraOnClick={toggleMenu}>
              <p className={styles.fullScreenTitle}>{item.title}</p>
            </TransitionLink>
            {item.subMenuItems?.map((subItem) => (
              <TransitionLink key={subItem.title} href={subItem.href} extraOnClick={toggleMenu}>
                <p className={styles.fullScreenSubTitle}>{subItem.title}</p>
              </TransitionLink>
            ))}
          </>
        ) : (
          <TransitionLink key={item.title} href={item.href} extraOnClick={toggleMenu}>
            <p className={styles.fullScreenTitle}>{item.title}</p>
          </TransitionLink>
        )}
      </>
    )
  }
  return (
    <>
      <nav
        ref={navBar}
        className={`${styles.navbar} ${isMobileMenuOpen ? styles.menuOpen : ""} ${
          !heroIntersecting ? styles.glassBackground : ""
        }`}
      >
        <div className={styles.leftNav}>
          <div className={styles.logoContainer}>
            <input
              type="checkbox"
              role="button"
              aria-label="Display the menu"
              className={styles.burgerMenu}
              checked={isMobileMenuOpen}
              onChange={toggleMenu}
            />
            <TransitionLink href="/">
              <p className={styles.name}>MAJA LINDQVIST</p>
            </TransitionLink>
          </div>
          {NavBarItems.map(navItemRender)}
        </div>
        <div className={styles.margin}></div>
      </nav>
      {isMobileMenuOpen && (
        <div className={styles.fullScreenMenu}>{NavBarItems.map(mobileMenuRender)}</div>
      )}
    </>
  )
}

export default NavBar
