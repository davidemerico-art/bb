'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="relative w-full h-96 perspective overflow-hidden rounded-2xl bg-white/5 flex items-center justify-center">
        <p className="text-slate-300">Nessuna immagine disponibile.</p>
      </div>
    );
  }

  const next = () => setIndex((currentIndex) => (currentIndex + 1) % images.length);
  const prev = () =>
    setIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-96 perspective overflow-hidden rounded-2xl">
      <Image
        src={images[index]}
        alt={`Foto struttura ${index + 1}`}
        fill
        className="object-cover transition duration-700 rotate-3d"
        sizes="(max-width: 768px) 100vw, 1200px"
        priority={index === 0}
      />

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 text-white bg-black/30 rounded-full px-3 py-2"
        aria-label="Foto precedente"
      >
        ⬅
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 text-white bg-black/30 rounded-full px-3 py-2"
        aria-label="Foto successiva"
      >
        ➡
      </button>
    </div>
  );
}