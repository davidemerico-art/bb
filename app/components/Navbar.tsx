import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full flex justify-between items-center p-4 bg-white/5 backdrop-blur-md text-white border-b border-white/10">
      <Link href="/" className="font-bold text-xl">
        B&B
      </Link>

      <nav className="flex gap-4 text-sm md:text-base">
        <Link className="hover:text-sky-300 transition-colors" href="/bb">
          Home
        </Link>
        <Link className="hover:text-sky-300 transition-colors" href="/servizi">
          Servizi
        </Link>
      </nav>
    </header>
  );
}