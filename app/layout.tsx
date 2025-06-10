import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Peraturan Kantor",
  description: "Website resmi peraturan kantor perusahaan",
  icons: {
    icon: "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%2060%2024%22%20fill%3D%22black%22%3E%3Cpath%20d%3D%22M13.507%2019.526c-5.377%200-5.411-5.816-5.411-7.223%200-4.218%201.283-7.766%205.48-7.766%201.976%200%203.746.864%204.057%203.196h7.145c-.034-.862-.069-2.94-2.081-4.922C20.72.895%2017.633%200%2013.576%200%209.934%200%206.639.703%204.073%203.387%201.713%205.847.917%209.013.917%2012.177c0%202.396.485%206.072%203.225%208.756C6.917%2023.617%2011.218%2024%2013.645%2024c3.26%200%2011.237-.607%2011.272-7.83h-7.215c-.138.896-.52%203.356-4.195%203.356M53.027%200v19.052h-.039L48.708%200h-3.219v24h2.145V4.945h.039L51.955%2024h3.217V0zM43.774%2013.715v8.571H42.06V24H26.632V0h13.714v1.714h1.714v8.573h-1.714v1.714h1.714v1.713z%22/%3E%3C/svg%3E",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
