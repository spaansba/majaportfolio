"use client"
import React, { useEffect, useRef } from "react"
import styles from "./ImageCarousel.module.css"
import { gsap } from "gsap"

const ImageCarousel: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    let xPos = 0

    const timeline = gsap
      .timeline()
      .set(ringRef.current, { rotationY: 180, cursor: "grab" })
      .set(imagesRef.current, {
        rotateY: (i: number) => i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backgroundImage: (i: number) => `url(https://picsum.photos/id/${i + 32}/600/400/)`,
        backgroundPosition: (i: number) => getBgPos(i),
        backfaceVisibility: "hidden",
      })
      .from(imagesRef.current, {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: "expo",
      })

    imagesRef.current.forEach((img) => {
      img.addEventListener("mouseenter", (e: MouseEvent) => {
        const current = e.currentTarget as HTMLDivElement
        gsap.to(imagesRef.current, {
          opacity: (_, t) => (t === current ? 1 : 0.5),
          ease: "power3",
        })
      })
      img.addEventListener("mouseleave", () => {
        gsap.to(imagesRef.current, { opacity: 1, ease: "power2.inOut" })
      })
    })

    const dragStart = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
      xPos = Math.round(clientX)
      gsap.set(ringRef.current, { cursor: "grabbing" })
      window.addEventListener("mousemove", drag)
      window.addEventListener("touchmove", drag)
    }

    const drag = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX

      gsap.to(ringRef.current, {
        rotationY: `-=${(Math.round(clientX) - xPos) % 360}`,
        onUpdate: () => {
          gsap.set(imagesRef.current, { backgroundPosition: (i: number) => getBgPos(i) })
        },
      })

      xPos = Math.round(clientX)
    }

    const dragEnd = () => {
      window.removeEventListener("mousemove", drag)
      window.removeEventListener("touchmove", drag)
      gsap.set(ringRef.current, { cursor: "grab" })
    }

    window.addEventListener("mousedown", dragStart)
    window.addEventListener("touchstart", dragStart)
    window.addEventListener("mouseup", dragEnd)
    window.addEventListener("touchend", dragEnd)

    return () => {
      window.removeEventListener("mousedown", dragStart)
      window.removeEventListener("touchstart", dragStart)
      window.removeEventListener("mouseup", dragEnd)
      window.removeEventListener("touchend", dragEnd)
    }
  }, [])

  const getBgPos = (i: number): string => {
    if (!ringRef.current) return "0px 0px"
    const rotation = gsap.getProperty(ringRef.current, "rotationY") as number
    return `${100 - (gsap.utils.wrap(0, 360, rotation - 180 - i * 36) / 360) * 500}px 0px`
  }

  return (
    <div className={styles.stage}>
      <div className={styles.container}>
        <div ref={ringRef} className={`${styles.ring} ${styles.stage__element}`}>
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              ref={(el) => el && (imagesRef.current[i] = el)}
              className={`${styles.img} ${styles.stage__element}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel
