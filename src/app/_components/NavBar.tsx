"use client"
import { usePathname } from "next/navigation"
import React, { useEffect, useRef, useState } from "react"
import styles from "./NavBar.module.css"
import { TransitionLink } from "./utils/TransitionLink"
import { DownArrowSVG, UpArrowSVG } from "./UI/svg"

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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const submenuRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({})
  const navItemRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({})
  const closingSubmenu = useRef(false) // Track if we're in the process of closing a submenu

  useEffect(() => {
    const setupObserver = () => {
      const target = document.querySelector("#hero")
      if (!target) return

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            navBar.current?.classList.add(styles.glassBackground)
            if (openSubmenu && submenuRefs.current[openSubmenu].current) {
              submenuRefs.current[openSubmenu].current?.classList.add(styles.whiteBackground)
            }
          } else {
            navBar.current?.classList.remove(styles.glassBackground)
            if (openSubmenu && submenuRefs.current[openSubmenu].current) {
              submenuRefs.current[openSubmenu].current?.classList.remove(styles.whiteBackground)
            }
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openSubmenu) {
        const submenuRef = submenuRefs.current[openSubmenu]
        if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
          closingSubmenu.current = true
          setOpenSubmenu(null)
          setTimeout(() => (closingSubmenu.current = false), 200) // Short delay to prevent immediate reopening
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [openSubmenu])

  const NavBarItems: NavItem[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/#about" },
    {
      title: "Portfolio",
      href: "#",
      hasSubmenu: true,
      subMenuItems: [
        { title: "Travel", href: "/portfolio/travel" },
        { title: "Events", href: "/portfolio/events" },
        { title: "Portraits", href: "/portfolio/portraits" },
      ],
    },
    { title: "Contact", href: "/#contact" },
  ]

  function toggleMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  function toggleNavItemSubMenu(title: string, e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    if (closingSubmenu.current) return // Prevent reopening if we're in the process of closing
    setOpenSubmenu((prevOpen) => (prevOpen === title ? null : title))
  }

  function closeNavItemSubMenu(e: React.MouseEvent) {
    setOpenSubmenu(null)
  }

  const navItemRender = (item: NavItem) => {
    if (!submenuRefs.current[item.title]) {
      submenuRefs.current[item.title] = React.createRef()
      navItemRefs.current[item.title] = React.createRef()
    }

    return (
      <div
        key={item.title}
        className={`${styles.navItem} ${openSubmenu === item.title ? styles.open : ""}`}
      >
        {item.hasSubmenu ? (
          <>
            <p className={styles.navItemTitle} onClick={(e) => toggleNavItemSubMenu(item.title, e)}>
              {item.title}
            </p>
            {openSubmenu === item.title ? (
              <DownArrowSVG className={styles.svg} width="12px" height="12px" fill="#000000" />
            ) : (
              <UpArrowSVG className={styles.svg} width="12px" height="12px" fill="#000000" />
            )}
            {openSubmenu === item.title && (
              <div ref={submenuRefs.current[item.title]} className={styles.submenu}>
                {item.subMenuItems?.map((subItem) => (
                  <TransitionLink
                    key={subItem.title}
                    href={subItem.href}
                    extraOnClick={closeNavItemSubMenu}
                  >
                    <p className={styles.submenuItem}>{subItem.title}</p>
                  </TransitionLink>
                ))}
              </div>
            )}
          </>
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
          <div className={styles.fullScreenNavItem}>
            <p
              className={styles.fullScreenTitle}
              onClick={(e) => toggleNavItemSubMenu(item.title, e)}
            >
              {item.title}
            </p>
            {openSubmenu === item.title ? (
              <DownArrowSVG
                className={styles.svgMobile}
                width="18px"
                height="18px"
                fill="#000000"
              />
            ) : (
              <UpArrowSVG className={styles.svgMobile} width="18px" height="18px" fill="#000000" />
            )}
            {openSubmenu === item.title && (
              <div ref={submenuRefs.current[item.title]} className={styles.submenuFullScreen}>
                {item.subMenuItems?.map((subItem) => (
                  <TransitionLink
                    key={subItem.title}
                    href={subItem.href}
                    extraOnClick={closeNavItemSubMenu}
                  >
                    <p className={styles.submenuItem}>{subItem.title}</p>
                  </TransitionLink>
                ))}
              </div>
            )}
          </div>
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
      <nav ref={navBar} className={`${styles.navbar} ${isMobileMenuOpen ? styles.menuOpen : ""}`}>
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
