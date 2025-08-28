'use client'

const DirectionsButton = () => {
  const handleClick = () => {
    window.open('https://www.google.com/maps?q=123+Healthcare+Ave+Suite+100+City+State+12345', '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="btn-primary w-full sm:w-auto"
    >
      Get Directions
    </button>
  )
}

export default DirectionsButton 