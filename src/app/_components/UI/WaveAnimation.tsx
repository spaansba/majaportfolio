import React from "react"
import Image from "next/image"
import styles from "./WaveAnimation.module.css"

const images = [
  "https://res.cloudinary.com/dyvotpxft/image/upload/v1723483677/6_cyknpp.png",
  "https://res.cloudinary.com/dyvotpxft/image/upload/v1723483676/3_mxnxwe.png",
  "https://res.cloudinary.com/dyvotpxft/image/upload/v1723483677/7_pse522.png",
  "https://res.cloudinary.com/dyvotpxft/image/upload/v1723484005/21_wbsty7.png",
  "https://res.cloudinary.com/dyvotpxft/image/upload/v1723483677/5_tyr6bh.png",
  "https://res.cloudinary.com/dyvotpxft/image/upload/v1723483676/2_zja2bq.png",
  "https://res.cloudinary.com/dyvotpxft/image/upload/v1723484005/21_wbsty7.png",
  "https://res.cloudinary.com/dyvotpxft/image/upload/v1723483677/5_tyr6bh.png",
  "https://res.cloudinary.com/dyvotpxft/image/upload/v1723483676/2_zja2bq.png",
]

export default function WaveAnimation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {images.map((src, index) => (
          <div key={index} className={styles.item} tabIndex={0}>
            <Image
              quality={100}
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "0%" }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
