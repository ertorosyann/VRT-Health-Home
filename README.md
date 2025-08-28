# VRT Health Home - Next.js Multi-Language Website

A modern, responsive, multi-language website for VRT Health Home, a professional home healthcare services provider. Built with Next.js 14, TypeScript, and Tailwind CSS with full internationalization support.

## 🌍 Multi-Language Support

The website supports **4 languages**:
- 🇺🇸 **English** (Default)
- 🇨🇳 **Chinese** (中文)
- 🇪🇸 **Spanish** (Español)
- 🇫🇷 **French** (Français)

### Language Features
- **Automatic Language Detection**: Detects user's preferred language
- **Language Switcher**: Easy language switching in the header
- **Localized URLs**: Each language has its own URL structure (e.g., `/en/`, `/zh/`, `/es/`, `/fr/`)
- **Localized Content**: All text, navigation, and metadata are translated
- **SEO Optimized**: Each language has proper meta tags and structured data

## 🏥 About

VRT Health Home provides professional, compassionate home healthcare services including:
- Skilled Nursing Care
- Physical Therapy
- Personal Care Assistance
- Medical Equipment & Supplies
- Occupational Therapy
- Speech Therapy

## ✨ Features

- **Multi-Language**: Full support for 4 languages with localized content
- **Modern Design**: Clean, professional healthcare-focused design
- **Fully Responsive**: Optimized for all devices and screen sizes
- **SEO Optimized**: Built-in SEO metadata and structured content for each language
- **Fast Performance**: Next.js 14 with App Router for optimal performance
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Contact Form**: Interactive contact form with validation
- **Mobile Navigation**: Responsive navigation with mobile menu
- **Language Switcher**: Easy language switching with flag icons

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: Next.js i18n with custom middleware
- **Fonts**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── [locale]/          # Localized routes
│   │   ├── page.tsx       # Localized home page
│   │   ├── about/         # About page
│   │   ├── services/      # Services page
│   │   ├── contact/       # Contact page
│   │   └── demo/          # Multi-language demo page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Root redirect
├── components/             # Reusable components
│   ├── Header.tsx         # Navigation header with language switcher
│   ├── Footer.tsx         # Site footer
│   └── LanguageSwitcher.tsx # Language selection component
├── lib/                    # Utility libraries
│   ├── i18n.ts            # Internationalization configuration
│   └── translations/      # Translation files
│       └── home.ts        # Home page translations
└── types/                  # TypeScript type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vrt-health-home
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Language URLs

The website automatically redirects to localized URLs:
- **English**: `/en/` (default)
- **Chinese**: `/zh/`
- **Spanish**: `/es/`
- **French**: `/fr/`

## 📱 Pages

### Home (`/[locale]/`)
- Hero section with call-to-action
- Service features overview
- Client testimonials
- Company highlights
- **Available in all 4 languages**

### About (`/[locale]/about`)
- Company mission and vision
- Core values
- Leadership team
- Company statistics
- **Available in all 4 languages**

### Services (`/[locale]/services`)
- Detailed service descriptions
- Service process explanation
- Coverage areas
- Service features
- **Available in all 4 languages**

### Contact (`/[locale]/contact`)
- Contact form
- Company contact information
- FAQ section
- Emergency contact details
- **Available in all 4 languages**

### Demo (`/[locale]/demo`)
- Multi-language functionality showcase
- Language switching demonstration
- **Available in all 4 languages**

## 🎨 Customization

### Languages
To add or modify languages:
1. Update `src/lib/i18n.ts` with new locale
2. Add translations in `src/lib/translations/`
3. Update middleware configuration

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- **Primary**: Blue tones for general UI elements
- **Health**: Green tones for healthcare-specific elements
- **Gray**: Neutral tones for text and backgrounds

### Styling
- Custom CSS classes in `globals.css`
- Responsive design utilities
- Hover effects and transitions
- Component-specific styling

## 📊 SEO Features

- Meta tags for all pages in all languages
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML structure
- Optimized content for search engines
- Language-specific keywords and descriptions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with language support

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📝 Content Management

To update content:
1. Edit the respective page files in `src/app/[locale]/`
2. Update component data in component files
3. Modify metadata in page files
4. Update translations in `src/lib/translations/`
5. Update contact information in `Header.tsx` and `Footer.tsx`

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript strict mode enabled
- ESLint configuration included
- Consistent component structure
- Semantic naming conventions
- Internationalization best practices

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- Next.js Image optimization
- CSS purging with Tailwind
- Lazy loading for components
- Optimized bundle size
- Language-specific code splitting

## 🔒 Security

- Form validation
- XSS protection
- Secure headers
- Input sanitization
- Language parameter validation

## 🌍 Internationalization

### Features
- **Automatic Language Detection**: Detects user's browser language
- **Language Persistence**: Remembers user's language preference
- **Localized Navigation**: All navigation items are translated
- **Localized Metadata**: SEO tags in appropriate language
- **RTL Support Ready**: Framework ready for right-to-left languages

### Adding New Languages
1. Add locale to `locales` array in `src/lib/i18n.ts`
2. Add language name and flag
3. Create translation files
4. Update navigation and common translations
5. Test all pages in new language

## 📞 Support

For questions or support:
- Email: info@vrthealthhome.com
- Phone: (555) 123-4567

## 📄 License

This project is proprietary software for VRT Health Home.

## 🤝 Contributing

This is a private project for VRT Health Home. For internal development:
1. Create a feature branch
2. Make your changes
3. Submit a pull request
4. Code review and approval required

---

Built with ❤️ for VRT Health Home - Supporting Healthcare in Multiple Languages
