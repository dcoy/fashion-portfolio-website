import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { getDictionary } from "@/lib/dictionaries"

import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params
  const dictionary = await getDictionary(locale)

  return {
    title: dictionary?.metadata?.title || "Elena Moda - Fashion Designer Portfolio",
    description: dictionary?.metadata?.description || "Portfolio website showcasing the fashion designs of Elena Moda",
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const { locale } = params

  // Add error handling for dictionary loading
  let dictionary
  try {
    dictionary = await getDictionary(locale)
  } catch (error) {
    console.error(`Failed to load dictionary for locale ${locale}:`, error)
    // Use a default dictionary if loading fails
    dictionary = {
      metadata: {
        title: "Elena Moda - Fashion Designer Portfolio",
        description: "Portfolio website showcasing the fashion designs of Elena Moda",
      },
      navigation: {
        home: "Home",
        portfolio: "Portfolio",
        colorPalettes: "Color Palettes",
        blueprints: "Blueprints",
        about: "About",
        contact: "Contact",
      },
      footer: {
        copyright: "© 2025 Elena Moda. All rights reserved.",
      },
    }
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader locale={locale} dictionary={dictionary} />
            <div className="flex-1">{children}</div>
            <SiteFooter locale={locale} dictionary={dictionary} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

