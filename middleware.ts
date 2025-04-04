import { type NextRequest, NextResponse } from "next/server"

// List of supported locales
const locales = ["en", "es"]
const defaultLocale = "en"

// Get the preferred locale from request headers
function getLocale(request: NextRequest) {
  // Check for country-region header from Vercel
  const country = request.headers.get("x-vercel-ip-country")

  // If the country is Mexico, serve Spanish content
  if (country === "MX") {
    return "es"
  }

  // Check for locale in pathname
  const pathname = request.nextUrl.pathname
  const pathnameLocale = locales.find((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameLocale) return pathnameLocale

  // Check for locale in accept-language header
  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage) {
    const acceptedLocales = acceptLanguage.split(",").map((locale) => locale.split(";")[0].trim())

    const matchedLocale = acceptedLocales.find(
      (locale) => locales.includes(locale) || locales.includes(locale.split("-")[0]),
    )

    if (matchedLocale) {
      return matchedLocale.split("-")[0]
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip for assets, api routes, etc.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/static") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Get locale from request
  const locale = getLocale(request)
  const pathnameHasLocale = locales.some((loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`)

  // If pathname doesn't have locale, redirect to locale path
  if (!pathnameHasLocale) {
    // Handle root path
    const newPathname = pathname === "/" ? "" : pathname
    const url = new URL(`/${locale}${newPathname}`, request.url)
    url.search = request.nextUrl.search
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}

