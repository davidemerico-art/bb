  'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Carousel from '../components/Carousel'
const images = ['/1.jpg', '/2.jpg', '/3.jpg']

export default function BB() {
  const router = useRouter()
  const [index, setIndex] = useState(0)

  const next = () => setIndex((index + 1) % images.length)
  const prev = () => setIndex((index - 1 + images.length) % images.length)

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* CAROSELLO 3D */}
      <div className="relative w-full h-96 perspective">
        <img
          src={images[index]}
          className="w-full h-96 object-cover rounded-2xl transform transition duration-700 hover:rotate-y-12"
        />

        <button onClick={prev} className="absolute left-4 top-1/2">⬅</button>
        <button onClick={next} className="absolute right-4 top-1/2">➡</button>
  </div>

      {/* STATUS CAMERE */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="p-4 bg-green-500/20 rounded-xl">Camera 1: Libera</div>
        <div className="p-4 bg-red-500/20 rounded-xl">Camera 2: Occupata</div>
        <div className="p-4 bg-green-500/20 rounded-xl">Camera 3: Libera</div>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => router.push('/servizi')}
          className="bg-blue-500 px-4 py-2 rounded-xl hover:scale-105 transition"
        >
          Servizi
        </button>

        <button className="bg-purple-500 px-4 py-2 rounded-xl hover:scale-105 transition">
          Chat Admin
        </button>
      </div>
    </div>
  )
}