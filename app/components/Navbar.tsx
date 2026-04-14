'use client'

import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  return (
    <div className="w-full flex justify-between items-center p-4 bg-white/5 backdrop-blur-md text-white">
      <h1 className="font-bold text-xl">B&B 🌿</h1>

      <div className="flex gap-4">
        <button onClick={() => router.push('/bb')}>Home</button>
        <button onClick={() => router.push('/servizi')}>Servizi</button>
      </div>
    </div>
  )
}