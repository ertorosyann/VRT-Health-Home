export const locales = ['en', 'zh', 'es', 'fr'] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  es: 'Español',
  fr: 'Français',
}

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  zh: '🇨🇳',
  es: '🇪🇸',
  fr: '🇫🇷',
}

// Navigation translations
export const navigation = {
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    getStarted: 'Get Started',
  },
  zh: {
    home: '首页',
    about: '关于我们',
    services: '服务项目',
    contact: '联系我们',
    getStarted: '立即开始',
  },
  es: {
    home: 'Inicio',
    about: 'Acerca de',
    services: 'Servicios',
    contact: 'Contacto',
    getStarted: 'Comenzar',
  },
  fr: {
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    contact: 'Contact',
    getStarted: 'Commencer',
  },
}

// Common UI translations
export const common = {
  en: {
    learnMore: 'Learn More',
    viewServices: 'View Services',
    contactUs: 'Contact Us',
    callNow: 'Call Now',
    readyToStart: 'Ready to Get Started?',
    getStartedToday: 'Get Started Today',
  },
  zh: {
    learnMore: '了解更多',
    viewServices: '查看服务',
    contactUs: '联系我们',
    callNow: '立即致电',
    readyToStart: '准备开始了吗？',
    getStartedToday: '今天就开始',
  },
  es: {
    learnMore: 'Saber Más',
    viewServices: 'Ver Servicios',
    contactUs: 'Contáctenos',
    callNow: 'Llamar Ahora',
    readyToStart: '¿Listo para Comenzar?',
    getStartedToday: 'Comenzar Hoy',
  },
  fr: {
    learnMore: 'En Savoir Plus',
    viewServices: 'Voir les Services',
    contactUs: 'Nous Contacter',
    callNow: 'Appeler Maintenant',
    readyToStart: 'Prêt à Commencer ?',
    getStartedToday: 'Commencer Aujourd\'hui',
  },
}

// Company info translations
export const company = {
  en: {
    name: 'VRT Health Home',
    tagline: 'Professional Care at Home',
    description: 'Providing professional, compassionate home healthcare services. Our experienced team delivers personalized care in the comfort of your home.',
  },
  zh: {
    name: 'VRT健康之家',
    tagline: '专业的居家护理',
    description: '提供专业、贴心的居家医疗服务。我们经验丰富的团队在您舒适的家中提供个性化护理。',
  },
  es: {
    name: 'VRT Hogar Salud',
    tagline: 'Cuidado Profesional en Casa',
    description: 'Proporcionamos servicios de atención médica domiciliaria profesionales y compasivos. Nuestro experimentado equipo brinda atención personalizada en la comodidad de su hogar.',
  },
  fr: {
    name: 'VRT Santé à Domicile',
    tagline: 'Soins Professionnels à Domicile',
    description: 'Nous fournissons des services de soins de santé à domicile professionnels et compatissants. Notre équipe expérimentée dispense des soins personnalisés dans le confort de votre maison.',
  },
}

 