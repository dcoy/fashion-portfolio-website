import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MainNav } from "@/components/main-nav"
import { LanguageSwitcher } from "@/components/language-switcher"

export function SiteHeader({ locale, dictionary }: { locale: string; dictionary?: any }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav locale={locale} dictionary={dictionary} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <LanguageSwitcher locale={locale} />
          <nav className="flex items-center space-x-1">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <MobileNav locale={locale} dictionary={dictionary} />
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}

function MobileNav({ locale, dictionary }: { locale: string; dictionary?: any }) {
  // Default navigation items if dictionary is undefined
  const nav = dictionary?.navigation || {
    home: "Home",
    portfolio: "Portfolio",
    colorPalettes: "Color Palettes",
    blueprints: "Blueprints",
    about: "About",
    contact: "Contact",
  }

  return (
    <div className="grid gap-6 p-6 text-lg font-medium">
      <Link href={`/${locale}`} className="hover:text-foreground/80">
        {nav.home}
      </Link>
      <Link href={`/${locale}/portfolio`} className="hover:text-foreground/80">
        {nav.portfolio}
      </Link>
      <Link href={`/${locale}/color-palettes`} className="hover:text-foreground/80">
        {nav.colorPalettes}
      </Link>
      <Link href={`/${locale}/blueprints`} className="hover:text-foreground/80">
        {nav.blueprints}
      </Link>
      <Link href={`/${locale}/about`} className="hover:text-foreground/80">
        {nav.about}
      </Link>
      <Link href={`/${locale}/contact`} className="hover:text-foreground/80">
        {nav.contact}
      </Link>
    </div>
  )
}

