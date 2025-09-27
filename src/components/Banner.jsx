import { useEffect, useMemo, useState } from 'react'

// Glob-import all GIFs under Images/SteamLike (relative to project root)
// Using eager so we get URLs at build time and can immediately use them
const imageModules = import.meta.glob('/Images/SteamLike/*.{gif,GIF}', { eager: true })

export default function Banner({
  height = 320,
  intervalMs = 3500,
  transitionMs = 600,
}) {
  // Convert modules map to a sorted array of URLs for stable rotation order
  const images = useMemo(() => {
    return Object.keys(imageModules)
      .sort((a, b) => a.localeCompare(b))
      .map((k) => {
        const mod = imageModules[k]
        return typeof mod === 'string' ? mod : mod?.default
      })
      .filter(Boolean)
  }, [])

  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [images.length, intervalMs])

  if (images.length === 0) {
    return null
  }

  return (
    <div
      style={{
        width: '100%',
        height,
        position: 'relative',
        overflow: 'hidden',
        background: '#000',
      }}
      aria-label="Featured GIF banner"
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Featured GIF"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: i === index ? 1 : 0,
            transition: `opacity ${transitionMs}ms ease-in-out`,
          }}
          loading={i === index ? 'eager' : 'lazy'}
        />
      ))}

      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 8,
          }}
        >
          {images.map((_, i) => (
            <span
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: i === index ? 'white' : 'rgba(255,255,255,0.4)',
              }}
              aria-hidden
            />
          ))}
        </div>
      )}
    </div>
  )
}
