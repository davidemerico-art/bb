'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login } from '../../lib/auth';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = login(email, password);

    if (!user) {
      setError('Credenziali errate');
      return;
    }

    setError('');
    router.push('/bb');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-lg w-96">
        <h2 className="text-2xl mb-4">Login</h2>

        <input
          className="w-full p-2 mb-3 text-black rounded-md"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="w-full p-2 mb-3 text-black rounded-md"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {error ? <p className="text-red-300 text-sm mb-3">{error}</p> : null}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 p-2 rounded-xl hover:scale-105 transition"
        >
          Entra
        </button>
      </div>
    </div>
  );
}