import type React from "react";
import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ThemeProvider } from "../components/theme-provider";
import { AuthProvider } from "@/lib/authProvider";

export const metadata: Metadata = {
  title: "Kenya National Association of Probation Officers (KNAPO)",
  description:
    "Established in 1976, KNAPO enhances professionalism in crime prevention and non-custodial rehabilitation of offenders through community corrections and ethical standards.",
  generator: "Maxyneer",
  keywords: [
    "KNAPO",
    "Kenya National Association of Probation Officers",
    "probation officers",
    "community corrections",
    "crime prevention",
    "offender rehabilitation",
    "non-custodial rehabilitation",
    "Kenya probation",
    "professional standards",
    "welfare association",
  ],
  authors: [{ name: "Kenya National Association of Probation Officers" }],
  creator: "Kenya National Association of Probation Officers",
  publisher: "Kenya National Association of Probation Officers",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: "Kenya National Association of Probation Officers (KNAPO)",
    description:
      "Established in 1976, KNAPO enhances professionalism in crime prevention and non-custodial rehabilitation of offenders.",
    url: "https://knapo.org",
    siteName: "Kenya National Association of Probation Officers",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya National Association of Probation Officers (KNAPO)",
    description:
      "Enhancing professionalism in crime prevention and non-custodial rehabilitation of offenders since 1976.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  category: "Non-profit organization",
  icons: {
    icon: [
      { url: "/assets/favicons/favicon.ico" },
      {
        url: "/assets/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/assets/favicons/site.webmanifest",
  applicationName: "Kenya National Association of Probation Officers",
  themeColor: "#008F39", // KNAPO green
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "KNAPO",
  },
  other: {
    "msapplication-TileColor": "#008F39",
    organization: "Kenya National Association of Probation Officers",
    founded: "1976",
    "contact:email": "knapo.org@gmail.com",
    "contact:phone": "+254 770 626 33",
    "contact:address": "P.O. Box 6104-00100 GPO, Nairobi, Kenya",
    "geo.region": "KE",
    "geo.placename": "Nairobi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
