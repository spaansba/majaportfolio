"use client"
import { type ImageProps } from "@/app/_components/UI/ImageModal"
import PortfolioAlbum from "@/app/_components/PortfolioAlbum"

const images: ImageProps[] = [
  { src: "/portraits/061624_1.5.jpg", alt: "Image 1", size: "medium" },
  { src: "/portraits/062624_26.jpg", alt: "Image 2", size: "small" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "medium" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "large" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "extraLarge" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "extraLong" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "large" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "extraWide" },
  { src: "/portraits/061624_1.5.jpg", alt: "Image 1", size: "medium" },
  { src: "/portraits/062624_26.jpg", alt: "Image 2", size: "small" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "medium" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "wide" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "medium" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "medium" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "large" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "medium" },
  { src: "/portraits/061624_1.5.jpg", alt: "Image 1", size: "medium" },
  { src: "/portraits/062624_26.jpg", alt: "Image 2", size: "small" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "medium" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "large" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "medium" },
  { src: "/portraits/072224_31.jpg", alt: "Image 3", size: "medium" },
  { src: "/portraits/072324_53.jpg", alt: "Image 4", size: "large" },
  { src: "/portraits/080124_50.jpg", alt: "Image 5", size: "small" },
  { src: "/portraits/081924_172.jpg", alt: "Image 6", size: "medium" },
]

export default function Home() {
  return (
    <PortfolioAlbum
      hero={{
        scr: "https://utfs.io/f/0899b333-0472-4712-b15f-65548be78b8f-1ta6os.jpg",
        alt: "Events Hero Image",
      }}
      title="Events"
      images={images}
    />
  )
}
