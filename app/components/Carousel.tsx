'use client'
import { useState } from 'react'

export default function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((index + 1) % images.length)
  const prev = () => setIndex((index - 1 + images.length) % images.length)

  return (
    <div className="relative w-full h-96 perspective overflow-hidden rounded-2xl">

      <img
        src={images[index]}
        className="w-full h-96 object-cover transition duration-700 rotate-3d"
      />

      <button onClick={prev} className="absolute left-4 top-1/2 text-white">
            ⬅
      </button>

      <button onClick={next} className="absolute right-4 top-1/2 text-white">
        ➡
      </button>
    </div>
  )
}