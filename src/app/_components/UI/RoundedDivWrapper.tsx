"use client"
import React, { useRef } from "react"
import styles from "./RoundedDivWrapper.module.css"
import { motion, useScroll, useTransform } from "framer-motion"

interface RoundedDivWrapperProps {
  upwards: boolean
}

function RoundedDivWrapper({ upwards }: RoundedDivWrapperProps) {
  const wrapperDiv = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: wrapperDiv,
    offset: ["start end", "end start"],
  })

  const fastAnimation = upwards ? 0.6 : 0.4
  const maxHeight = upwards ? 100 : 50
  const height = useTransform(scrollYProgress, [fastAnimation, 0], [0, maxHeight])

  return (
    <>
      {upwards ? (
        <motion.div className={styles.roundedDivWrapper} ref={wrapperDiv} style={{ height }}>
          <div className={styles.roundedDiv}></div>
        </motion.div>
      ) : (
        <motion.div
          className={styles.reversedRoundedDivWrapper}
          ref={wrapperDiv}
          style={{ height }}
        >
          <div className={styles.reversedRoundedDiv}></div>
        </motion.div>
      )}
    </>
  )
}

export default RoundedDivWrapper
