"use client"
import { type ImageProps } from "@/app/_components/UI/ImageModal"
import PortfolioAlbum from "@/app/_components/PortfolioAlbum"

const images: ImageProps[] = [
  { src: "/portraits/061624_1.5.jpg", alt: "Image 1", size: "medium" },
  { src: "/portraits/062624_26.jpg", alt: "Image 2", size: "large" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "wide" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "large" },
  { src: "/portraits/072224_31_bw.jpg", alt: "Image 13", size: "extraWide" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "large" },
  { src: "/portraits/457A0100_SEB_color.jpg", alt: "Image 7", size: "extraLong" },
  { src: "/portraits/457A0307-2.jpg", alt: "Image 10", size: "extraLong" },
  { src: "/portraits/457A0177.jpg", alt: "Image 8", size: "large" },
  { src: "/portraits/457A0209.jpg", alt: "Image 9", size: "small" },
  { src: "/portraits/062624_32.jpg", alt: "Image 11", size: "small" },
  { src: "/portraits/072224_15_bw.jpg", alt: "Image 12", size: "large" },

  { src: "/portraits/072324_47.jpg", alt: "Image 14", size: "medium" },
]

export default function Home() {
  return (
    <PortfolioAlbum
      hero={{
        scr: "https://utfs.io/f/0899b333-0472-4712-b15f-65548be78b8f-1ta6os.jpg",
        alt: "Portraits Hero Image",
      }}
      title="Portraits"
      images={images}
    />
  )
}
