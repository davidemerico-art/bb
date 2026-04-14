'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white transition-all">
      <div className="backdrop-blur-xl bg-white/10 p-10 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition">
        <h1 className="text-4xl font-bold mb-6">Benvenuto nel B&B 🌿</h1>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.push('/login')}
            className="px-6 py-3 bg-blue-500 rounded-xl hover:scale-110 transition transform"
          >
            Login
          </button>

          <button
            onClick={() => router.push('/register')}
            className="px-6 py-3 bg-green-500 rounded-xl hover:scale-110 transition transform"
          >
            Registrati
          </button>
        </div>
      </div>
    </div>
  )
}