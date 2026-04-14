'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { login } from '../../lib/auth'

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    const user = login(email, password)

    if (user?.role === 'admin') router.push('/bb')
    else if (user) router.push('/bb')
    else alert('Credenziali errate')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-lg w-96">
        <h2 className="text-2xl mb-4">Login</h2>

        <input className="w-full p-2 mb-3 text-black" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="w-full p-2 mb-3 text-black" placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />

        <button onClick={handleLogin} className="w-full bg-blue-500 p-2 rounded-xl hover:scale-105 transition">
          Entra
        </button>
      </div>
    </div>
  )
}