import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        <li className='text-lg font-bold'>
          <Link href={"/modular-monoliths"}>
            Modular Monoliths
          </Link></li>
      </ul>
    </main>
  );
}
