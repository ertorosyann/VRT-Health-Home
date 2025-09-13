'use client'

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dgsWUxOykUxSyg&q=600+W+Broadway,+Glendale,+CA+91204"
      width="100%"
      height="200"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      className="w-full h-32 sm:h-40 md:h-44 lg:h-48"
    />
  )
}

export default Map