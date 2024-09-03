import type { Metadata } from "next"
import { Inter, Raleway } from "next/font/google"
import "./globals.css"
import NavBar from "./_components/NavBar"
import ScrollToTopButton from "./_components/UI/ScrollToTopButton"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "Maja Lindqvist Photography Portfolio",
  description: "Portfolio of Maja Lindqvist Photography",
  icons: [
    {
      rel: "icon",
      url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📸</text></svg>",
    },
  ],
  themeColor: "#f8f8f8",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body>
        <header>
          <NavBar />
        </header>
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  )
}
