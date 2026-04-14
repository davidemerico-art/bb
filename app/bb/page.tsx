'use client';

import { useRouter } from 'next/navigation';
import Button from '../components/Button';
import Carousel from '../components/Carousel';

const images = ['/gallery-1.svg', '/gallery-2.svg', '/gallery-3.svg'];

export default function BB() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <section>
        <h1 className="text-3xl font-semibold mb-4">Dashboard B&B</h1>
        <Carousel images={images} />
      </section>

      <section className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-green-500/20 rounded-xl">Camera 1: Libera</div>
        <div className="p-4 bg-red-500/20 rounded-xl">Camera 2: Occupata</div>
        <div className="p-4 bg-green-500/20 rounded-xl">Camera 3: Libera</div>
      </section>

      <section className="flex gap-4 mt-6">
        <Button
          onClick={() => router.push('/servizi')}
          className="bg-blue-500"
        >
          Servizi
        </Button>

        <Button className="bg-purple-500">Chat Admin</Button>
      </section>
    </div>
  );
}