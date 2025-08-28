'use client'

import { useRouter } from 'next/navigation'

interface NavigationButtonProps {
  href: string
  children: React.ReactNode
  className?: string
}

const NavigationButton = ({ href, children, className }: NavigationButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(href)
  }

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  )
}

export default NavigationButton 