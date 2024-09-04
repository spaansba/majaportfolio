"use client"
import React, { useEffect, useRef } from "react"
import Swiper from "swiper"
import { Navigation, Autoplay, FreeMode, Keyboard, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import Image from "next/image"
export default function ImageCarousel() {
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current) {
      // module info: https://swiperjs.com/types/modules
      const swiper = new Swiper(swiperRef.current, {
        modules: [Navigation, Autoplay, FreeMode, Keyboard, EffectCoverflow],
        direction: "horizontal",
        loop: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        keyboard: {
          enabled: true,
        },

        freeMode: {
          enabled: true,
          momentumRatio: 0.7,
          momentumBounceRatio: 0.7,
          momentumVelocityRatio: 0.7,
          sticky: false,
        },
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
          delay: 2500,
        },

        breakpoints: {
          800: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1600: {
            slidesPerView: 4,
          },
          2000: {
            slidesPerView: 5,
          },
          2400: {
            slidesPerView: 6,
          },
        },
      })
      return () => {
        swiper.destroy()
      }
    }
  }, [])

  const images = [
    { id: "1", src: "/portraits/061624_1.5.jpg", alt: "Portraits" },
    { id: "2", src: "/061624_77.jpg", alt: "Events" },
    { id: "3", src: "/portraits/062624_26.jpg", alt: "Travel" },
    { id: "4", src: "/portraits/072224_31.jpg", alt: "Portraits" },
    { id: "5", src: "/portraits/072324_53.jpg", alt: "Events" },
    { id: "6", src: "/portraits/080124_50.jpg", alt: "Travel" },
    { id: "7", src: "/080424_99.jpg", alt: "Portraits" },
    { id: "8", src: "/081924_169.jpg", alt: "Events" },
    { id: "9", src: "/portraits/081924_172.jpg", alt: "Portraits" },
  ]

  return (
    <div className="swiper" ref={swiperRef}>
      <div className="swiper-wrapper">
        {images.map((image) => (
          <div key={image.id} className="swiper-slide">
            <Image
              draggable={false}
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }
      `}</style>
    </div>
  )
}
