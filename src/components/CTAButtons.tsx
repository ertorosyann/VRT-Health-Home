'use client'

import { useRouter } from 'next/navigation'

interface CTAButtonsProps {
  primaryText: string
  primaryHref: string
  secondaryText?: string
  secondaryHref?: string
  className?: string
}

const CTAButtons = ({ 
  primaryText, 
  primaryHref, 
  secondaryText, 
  secondaryHref, 
  className = "flex flex-col sm:flex-row gap-4 justify-center" 
}: CTAButtonsProps) => {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    router.push(href)
  }

  return (
    <div className={className}>
      <button
        onClick={() => handleNavigation(primaryHref)}
        className="btn-primary cursor-pointer"
      >
        {primaryText}
      </button>
      {secondaryText && secondaryHref && (
        <button
          onClick={() => handleNavigation(secondaryHref)}
          className="btn-secondary cursor-pointer"
        >
          {secondaryText}
        </button>
      )}
    </div>
  )
}

export default CTAButtons 