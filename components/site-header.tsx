import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <MobileNav />
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  return (
    <div className="grid gap-6 p-6 text-lg font-medium">
      <Link href="/" className="hover:text-foreground/80">
        Home
      </Link>
      <Link href="/portfolio" className="hover:text-foreground/80">
        Portfolio
      </Link>
      <Link href="/color-palettes" className="hover:text-foreground/80">
        Color Palettes
      </Link>
      <Link href="/blueprints" className="hover:text-foreground/80">
        Blueprints
      </Link>
      <Link href="/about" className="hover:text-foreground/80">
        About
      </Link>
      <Link href="/contact" className="hover:text-foreground/80">
        Contact
      </Link>
    </div>
  )
}

