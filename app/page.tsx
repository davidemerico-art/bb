import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white transition-all p-4">
      <div className="backdrop-blur-xl bg-white/10 p-10 rounded-2xl shadow-2xl text-center">
        <h1 className="text-4xl font-bold mb-2">Benvenuto nel B&B</h1>
        <p className="text-slate-200 mb-6">Accedi o crea un account per continuare.</p>

        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="px-6 py-3 bg-blue-500 rounded-xl hover:scale-105 transition transform"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="px-6 py-3 bg-green-500 rounded-xl hover:scale-105 transition transform"
          >
            Registrati
          </Link>
        </div>
      </div>
    </div>
  );
}