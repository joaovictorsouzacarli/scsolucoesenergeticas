import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SC Soluções Energéticas - Projetos de Energia Solar Profissionais",
  description:
    "Especialistas em projetos de energia solar com mais de 3500 projetos executados. Microgeração, minigeração, consultorias técnicas e projetos com foco em segurança.",
  keywords: "energia solar, projetos fotovoltaicos, microgeração, minigeração, UNESP, segurança, consultorias técnicas",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
