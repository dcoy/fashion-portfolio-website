"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Check, ChevronsUpDown, Globe } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
]

export function LanguageSwitcher({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) return

    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), "")

    // Navigate to the same page but with the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[120px] justify-between">
          <Globe className="mr-2 h-4 w-4" />
          {languages.find((language) => language.value === locale)?.label || "Language"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[120px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {languages.map((language) => (
                <CommandItem key={language.value} value={language.value} onSelect={() => switchLocale(language.value)}>
                  <Check className={cn("mr-2 h-4 w-4", locale === language.value ? "opacity-100" : "opacity-0")} />
                  {language.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

