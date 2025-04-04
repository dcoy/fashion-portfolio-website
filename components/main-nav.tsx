import Link from "next/link"

export function MainNav({ locale, dictionary }: { locale: string; dictionary?: any }) {
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
    <div className="flex gap-6 md:gap-10">
      <Link href={`/${locale}`} className="flex items-center space-x-2">
        <span className="inline-block font-bold">ELENA MODA</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          href={`/${locale}`}
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          {nav.home}
        </Link>
        <Link
          href={`/${locale}/portfolio`}
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          {nav.portfolio}
        </Link>
        <Link
          href={`/${locale}/color-palettes`}
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          {nav.colorPalettes}
        </Link>
        <Link
          href={`/${locale}/blueprints`}
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          {nav.blueprints}
        </Link>
        <Link
          href={`/${locale}/about`}
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          {nav.about}
        </Link>
        <Link
          href={`/${locale}/contact`}
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          {nav.contact}
        </Link>
      </nav>
    </div>
  )
}

