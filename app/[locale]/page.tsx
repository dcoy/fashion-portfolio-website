import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeaturedDesignSlider from "@/components/featured-design-slider"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { getDictionary } from "@/lib/dictionaries"

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params
  const dictionary = await getDictionary(locale)

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">ELENA MODA</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">{dictionary.home.hero.description}</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href={`/${locale}/portfolio`}>
                    <Button className="px-8">
                      {dictionary.home.hero.viewCollection}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={`/${locale}/about`}>
                    <Button variant="outline" className="px-8">
                      {dictionary.home.hero.aboutDesigner}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl lg:aspect-[4/3]">
                <Image
                  src="/elena-moda-hero.png"
                  alt={dictionary.home.hero.featuredAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {dictionary.home.featured.title}
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {dictionary.home.featured.description}
                </p>
              </div>
            </div>

            <FeaturedDesignSlider locale={locale} dictionary={dictionary} />

            <div className="flex justify-center mt-12">
              <Link href={`/${locale}/portfolio`}>
                <Button variant="outline">
                  {dictionary.home.featured.viewAll}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  {dictionary.home.philosophy.title}
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">{dictionary.home.philosophy.description}</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href={`/${locale}/about`}>
                    <Button variant="outline">{dictionary.home.philosophy.learnMore}</Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src="/elena-moda-hero.png"
                      alt={dictionary.home.philosophy.detailAlt1}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    <Image
                      src="/elena-moda-hero.png"
                      alt={dictionary.home.philosophy.detailAlt2}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="relative aspect-[9/16] overflow-hidden rounded-xl">
                  <Image
                    src="/elena-moda-hero.png"
                    alt={dictionary.home.philosophy.processAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  {dictionary.home.testimonials.title}
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  {dictionary.home.testimonials.description}
                </p>
              </div>
            </div>

            <TestimonialCarousel locale={locale} dictionary={dictionary} />
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  {dictionary.home.latest.title}
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">{dictionary.home.latest.description}</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href={`/${locale}/portfolio`}>
                    <Button>
                      {dictionary.home.latest.exploreCollection}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="/elena-moda-hero.png"
                  alt={dictionary.home.latest.videoAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-full bg-white/90 p-4 shadow-lg">
                    <svg
                      className="h-6 w-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

