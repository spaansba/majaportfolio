import React from "react"

interface SVGProps {
  children?: React.ReactNode
  width?: string
  height?: string
  fill?: string
  className?: string
}

export function DownArrowSVG({
  children,
  width = "24px",
  height = "24px",
  fill = "#000000",
  className = "",
  ...props
}: SVGProps) {
  return (
    <svg
      className={className}
      {...props}
      fill={fill}
      height={height}
      width={width}
      version="1.1"
      id="Layer_1"
      viewBox="0 0 330 330"
    >
      <path
        id="XMLID_224_"
        d="M4.394,100.607l150.004,150C157.21,253.42,161.026,255,165.004,255c3.979,0,7.794-1.581,10.607-4.394
l149.996-150c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.857-15.355-5.858-21.213,0l-139.39,139.393L25.607,79.393
C22.678,76.464,18.839,75,15,75c-3.839,0-7.678,1.464-10.607,4.394C-1.464,85.252-1.464,94.749,4.394,100.607z"
      />
      {children}
    </svg>
  )
}

export function UpArrowSVG({
  children,
  width = "24px",
  height = "24px",
  fill = "#000000",
  className = "",
  ...props
}: SVGProps) {
  return (
    <svg
      fill={fill}
      className={className}
      {...props}
      height={height}
      width={width}
      version="1.1"
      id="Layer_1"
      viewBox="0 0 330 330"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          id="XMLID224"
          d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
        ></path>
      </g>
      {children}
    </svg>
  )
}
