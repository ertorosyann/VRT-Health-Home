'use client'

const DirectionsButton = () => {
  const handleClick = () => {
    window.open('https://www.google.com/maps?q=600+W+Broadway+suite+240B,+Glendale,+CA+91204', '_blank')
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
