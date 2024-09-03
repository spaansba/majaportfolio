import type { Metadata } from "next"
import { Inter, Raleway } from "next/font/google"
import "../../globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body> {children}</body>
    </html>
  )
}
