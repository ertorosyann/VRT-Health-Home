export default function Map({ height = '150px' }: { height?: string }) {
  // Using Google Maps embed with the address
  const address = encodeURIComponent(
    '600 W Broadway suite 240B, Glendale, CA 91204'
  )

  return (
    <div style={{ width: '100%', height: height }}>
      <iframe
        src={`https://maps.google.com/maps?q=${address}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg"
      ></iframe>
    </div>
  )
}
