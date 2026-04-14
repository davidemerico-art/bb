  'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { register } from '../../lib/auth'

export default function Register() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleRegister = () => {
    register(email, password, 'user')
    router.push('/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="p-8 bg-white/10 rounded-2xl w-96">
        <h2 className="text-2xl mb-4">Registrazione</h2>

        <input className="w-full p-2 mb-3 text-black" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="w-full p-2 mb-3 text-black" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />

        <button onClick={handleRegister} className="w-full bg-green-500 p-2 rounded-xl hover:scale-105 transition">
          Registrati
        </button>
      </div>
    </div>
  )
}