import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kenya National Association of Probation Officers",
  description: "Enhancing professionalism in crime prevention and non-custodial rehabilitation of offenders",
  generator: 'Maxyneer',
  icons: {
    icon: [
      { url: '/assets/favicons/favicon.ico' },
      { url: '/assets/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/assets/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  manifest: '/assets/favicons/site.webmanifest',
  applicationName: 'Kenya National Association of Probation Officers',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'KNAPO'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </head>
        <body className={inter.className} suppressHydrationWarning>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}