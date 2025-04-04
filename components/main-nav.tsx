import Link from "next/link"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold">ELENA MODA</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <Link
          href="/portfolio"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Portfolio
        </Link>
        <Link
          href="/color-palettes"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Color Palettes
        </Link>
        <Link
          href="/blueprints"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Blueprints
        </Link>
        <Link
          href="/about"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}

