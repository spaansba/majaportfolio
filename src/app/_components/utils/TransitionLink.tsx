"use client"
import Link, { type LinkProps } from "next/link"
import React from "react"
import { usePathname, useRouter } from "next/navigation"

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode
  href: string
  extraOnClick?: (e: React.MouseEvent) => void
}

export const TransitionLink = ({ children, href, extraOnClick, ...props }: TransitionLinkProps) => {
  const router = useRouter()
  const pathname = usePathname()

  function parseUrl(url: string) {
    const parsedUrl = new URL(url, window.location.origin)
    return {
      pathname: parsedUrl.pathname,
      hash: parsedUrl.hash,
    }
  }

  async function handleTransition(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault()

    const currentUrl = parseUrl(pathname)
    const targetUrl = parseUrl(href)

    // Same page, scroll to top or element
    if (currentUrl.pathname === targetUrl.pathname) {
      if (targetUrl.hash) {
        const element = document.querySelector(targetUrl.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      return
    }

    // Different page, perform transition
    const body = document.querySelector("body")
    body?.classList.add("page-transition")
    await sleep(400)
    router.push(href)
    await sleep(400)
    body?.classList.remove("page-transition")
  }

  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  return (
    <Link onClick={(e) => [handleTransition(e), extraOnClick?.(e)]} href={href} {...props}>
      {children}
    </Link>
  )
}
