"use client"
import React from "react"
import styles from "./RoundedDivWrapper.module.css"
import useScrollProgress from "./useScrollProgress"
interface RoundedDivWrapperProps {
  upwards: boolean
  parentId: string
}

function RoundedDivWrapper({ upwards, parentId }: RoundedDivWrapperProps) {
  const scrollProgress = useScrollProgress(upwards, parentId)

  return (
    <>
      {upwards ? (
        <div className={styles.roundedDivWrapper} data-scroll-progress={scrollProgress}>
          <div className={styles.roundedDiv}></div>
        </div>
      ) : (
        <div className={styles.reversedRoundedDivWrapper} data-scroll-progress={scrollProgress}>
          <div className={styles.reversedRoundedDiv}></div>
        </div>
      )}
    </>
  )
}
export default RoundedDivWrapper
