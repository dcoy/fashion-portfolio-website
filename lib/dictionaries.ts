import "server-only"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  try {
    // Default to 'en' if the locale is not supported
    const validLocale = locale in dictionaries ? locale : "en"
    return await dictionaries[validLocale as keyof typeof dictionaries]()
  } catch (error) {
    console.error(`Failed to load dictionary for locale ${locale}:`, error)
    // Return a minimal dictionary to prevent errors
    return {
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
}

